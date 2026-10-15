// --- APP STATE ---
let currentMode = ''; // 'lern' oder 'sim'
let currentDifficulty = 'all';
let activeQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 300; // 5 Minuten in Sekunden
let answeredCurrent = false;

// --- UI ELEMENTS ---
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');

// --- FUNCTIONS ---
function selectMode(mode) {
    currentMode = mode;
    
    // UI Update: Rahmen und Hintergrundfarben zurücksetzen
    document.getElementById('card-lern').classList.remove('border-indigo-500', 'bg-indigo-50');
    document.getElementById('card-sim').classList.remove('border-blue-500', 'bg-blue-50');
    
    // UI Update: Ausgewählten Modus hervorheben
    if (mode === 'lern') {
        document.getElementById('card-lern').classList.add('border-indigo-500', 'bg-indigo-50');
    } else {
        document.getElementById('card-sim').classList.add('border-blue-500', 'bg-blue-50');
    }
    
    // Start-Button aktivieren
    startBtn.disabled = false;
}

function shuffleArray(array) {
    let curId = array.length;
    // Solange noch Elemente zum Mischen übrig sind...
    while (0 !== curId) {
        // Ein zufälliges verbleibendes Element auswählen
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        // Mit dem aktuellen Element tauschen
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
    }
    return array;
}

function startApp() {
    currentDifficulty = document.getElementById('difficulty-select').value;
    
    // Fragen nach Schwierigkeit filtern (allQuestions kommt aus fragen.js)
    if (currentDifficulty === 'all') {
        activeQuestions = [...allQuestions];
    } else {
        activeQuestions = allQuestions.filter(q => q.difficulty === currentDifficulty);
    }

    // Fragen zufällig mischen
    activeQuestions = shuffleArray(activeQuestions);

    // Limit für den Simulations-Modus (maximal 10 Fragen)
    if (currentMode === 'sim' && activeQuestions.length > 10) {
        activeQuestions = activeQuestions.slice(0, 10);
    }

    // Sicherheitscheck
    if(activeQuestions.length === 0) {
        alert("Keine Fragen für diese Kategorie gefunden.");
        return;
    }

    // Spielstatus zurücksetzen
    currentQuestionIndex = 0;
    score = 0;
    answeredCurrent = false;
    
    // UI Setup je nach Modus
    if (currentMode === 'sim') {
        document.getElementById('timer-display').classList.remove('hide');
        document.getElementById('score-display').classList.add('hide');
        timeLeft = 300;
        startTimer();
    } else {
        document.getElementById('timer-display').classList.add('hide');
        document.getElementById('score-display').classList.remove('hide');
        updateScoreDisplay();
    }

    // Bildschirme wechseln
    startScreen.classList.add('hide');
    quizScreen.classList.remove('hide');
    
    loadQuestion();
}

function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            finishQuiz(true); // true = Zeit abgelaufen
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timer-display').innerHTML = `<i class="fa-solid fa-clock mr-1"></i> ${display}`;
    
    // Pulsierender Effekt in der letzten Minute
    if(timeLeft < 60) {
        document.getElementById('timer-display').classList.add('animate-pulse', 'text-red-600');
    }
}

function updateScoreDisplay() {
    document.getElementById('score-display').innerText = `Punkte: ${score}`;
}

function loadQuestion() {
    answeredCurrent = false;
    document.getElementById('next-btn').classList.add('hide');
    document.getElementById('feedback-box').classList.add('hide');
    
    const q = activeQuestions[currentQuestionIndex];
    
    // Fortschrittsbalken und Zähler aktualisieren
    document.getElementById('question-counter').innerText = `Frage ${currentQuestionIndex + 1} / ${activeQuestions.length}`;
    const progressPct = ((currentQuestionIndex) / activeQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPct}%`;
    
    // Schwierigkeits-Badge erstellen und Frage setzen
    const difficultyBadge = q.difficulty === 'leicht' ? '<span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded ml-2 align-middle">Leicht</span>' : 
                           (q.difficulty === 'mittel' ? '<span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded ml-2 align-middle">Mittel</span>' : 
                           '<span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded ml-2 align-middle">Schwer</span>');
                           
    document.getElementById('question-text').innerHTML = q.question + difficultyBadge;

    // Antwortmöglichkeiten rendern
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // Antworten mischen, aber merken, welche richtig war
    let optionsObj = q.options.map((opt, index) => ({ text: opt, isCorrect: index === q.correct }));
    optionsObj = shuffleArray(optionsObj);

    optionsObj.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-indigo-400 bg-white text-gray-700 font-medium text-lg';
        btn.innerHTML = `<span class="inline-block w-8 h-8 rounded-full bg-gray-100 text-center leading-8 mr-3 text-sm">${String.fromCharCode(65 + index)}</span> ${opt.text}`;
        btn.onclick = () => selectOption(btn, opt.isCorrect, q);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(selectedBtn, isCorrect, questionData) {
    if (answeredCurrent) return; // Verhindert Mehrfachklicks
    answeredCurrent = true;

    const allBtns = document.querySelectorAll('.option-btn');
    
    // Alle Buttons deaktivieren
    allBtns.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('cursor-not-allowed', 'opacity-80');
    });

    if (isCorrect) {
        score++;
        updateScoreDisplay();
    }

    if (currentMode === 'lern') {
        // Direktes Feedback im Lernmodus
        if (isCorrect) {
            selectedBtn.classList.add('correct-ans');
            document.getElementById('feedback-box').className = 'bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg mb-8 fade-in';
            document.getElementById('feedback-title').innerHTML = '<i class="fa-solid fa-check-circle text-emerald-600 mr-2"></i> Richtig!';
            document.getElementById('feedback-title').className = 'font-bold mb-1 text-emerald-800';
        } else {
            selectedBtn.classList.add('wrong-ans');
            // Richtige Antwort heraussuchen und markieren
            allBtns.forEach(btn => {
                if (questionData.options[questionData.correct] === btn.innerText.substring(3).trim()) {
                     btn.classList.add('border-emerald-500', 'bg-emerald-50');
                }
            });
            
            document.getElementById('feedback-box').className = 'bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-8 fade-in';
            document.getElementById('feedback-title').innerHTML = '<i class="fa-solid fa-circle-xmark text-red-600 mr-2"></i> Leider falsch!';
            document.getElementById('feedback-title').className = 'font-bold mb-1 text-red-800';
        }
        
        document.getElementById('feedback-text').innerText = questionData.explanation;
        document.getElementById('feedback-box').classList.remove('hide');
        document.getElementById('next-btn').classList.remove('hide');

    } else {
        // Simulations-Modus: Kein ausführliches Feedback, nur kurze farbliche Rückmeldung
        if (isCorrect) {
            selectedBtn.classList.add('correct-ans');
        } else {
            selectedBtn.classList.add('wrong-ans');
        }
        
        // Kurze Verzögerung, dann automatisch nächste Frage
        setTimeout(() => {
            handleNext();
        }, 1000);
    }
}

function handleNext() {
    currentQuestionIndex++;
    if (currentQuestionIndex < activeQuestions.length) {
        loadQuestion();
    } else {
        finishQuiz(false);
    }
}

function finishQuiz(timeUp) {
    if(timerInterval) clearInterval(timerInterval);
    
    quizScreen.classList.add('hide');
    resultScreen.classList.remove('hide');
    
    const total = activeQuestions.length;
    const percentage = Math.round((score / total) * 100);
    
    document.getElementById('final-score').innerText = `${score} / ${total}`;
    
    // Animation für den finalen Fortschrittsbalken
    setTimeout(() => {
        document.getElementById('final-progress').style.width = `${percentage}%`;
    }, 300);
    
    document.getElementById('final-percentage').innerText = `${percentage}%`;
    
    const msgEl = document.getElementById('result-message');
    const iconEl = document.getElementById('result-icon');
    
    // Feedback-Nachricht basierend auf dem Ergebnis
    if (timeUp) {
        msgEl.innerText = "Die Zeit ist abgelaufen! Hier ist dein bisheriges Ergebnis:";
        iconEl.innerText = "⏱️";
    } else if (percentage >= 80) {
        msgEl.innerText = "Hervorragend! Du bist bestens auf die Kurzarbeit vorbereitet.";
        iconEl.innerText = "🏆";
    } else if (percentage >= 50) {
        msgEl.innerText = "Gut gemacht, aber ein bisschen Übung schadet nicht.";
        iconEl.innerText = "👍";
    } else {
        msgEl.innerText = "Da gibt es noch Lücken. Schau dir Benedikts Referat und das Filius-Skript nochmal an.";
        iconEl.innerText = "📚";
    }
}

function resetApp() {
    resultScreen.classList.add('hide');
    startScreen.classList.remove('hide');
    
    // Balken und Timer-Design zurücksetzen
    document.getElementById('final-progress').style.width = `0%`;
    document.getElementById('progress-bar').style.width = `0%`;
    document.getElementById('timer-display').classList.remove('animate-pulse', 'text-red-600');
}