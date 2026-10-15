const questions = [
    // ==========================================
    // SCHWIERIGKEITSGRAD: LEICHT
    // ==========================================
    {
        question: "In welchem Filius-Modus kann man neue Rechner platzieren und mit Kabeln verbinden?",
        options: [
            "Aktionsmodus",
            "Entwurfsmodus",
            "Testmodus",
            "Dokumentationsmodus"
        ],
        correctAnswer: "Entwurfsmodus",
        difficulty: "Leicht"
    },
    {
        question: "Wo muss man in Filius klicken, um Software (z. B. einen Webbrowser) zu installieren?",
        options: [
            "Auf das Kabel",
            "Auf \"Software-Installation\" auf dem jeweiligen Rechner",
            "Auf den Datenaustausch",
            "Auf den Schieberegler"
        ],
        correctAnswer: "Auf \"Software-Installation\" auf dem jeweiligen Rechner",
        difficulty: "Leicht"
    },
    {
        question: "In der Realität zeigen blinkende LEDs an, dass Netzwerkkarten arbeiten. Wie wird im Aktionsmodus von Filius dargestellt, dass ein Kabel erfolgreich Daten überträgt?",
        options: [
            "Sie werden rot",
            "Sie werden unsichtbar",
            "Sie blinken blau",
            "Der Datenfluss wird durch ein grünes Aufleuchten dargestellt"
        ],
        correctAnswer: "Der Datenfluss wird durch ein grünes Aufleuchten dargestellt",
        difficulty: "Leicht"
    },
    {
        question: "Was benötigt jeder Rechner zwingend, um direkt in einem Netzwerk angesprochen werden zu können?",
        options: [
            "Eine eigene Webseite",
            "Ein E-Mail-Programm",
            "Eine eindeutige IP-Adresse",
            "Einen Accesspoint"
        ],
        correctAnswer: "Eine eindeutige IP-Adresse",
        difficulty: "Leicht"
    },
    {
        question: "Welches Gerät verbindet mehrere PCs in einem kabelgebundenen lokalen Netzwerk?",
        options: [
            "Switch",
            "DNS-Server",
            "Modem",
            "Text-Editor"
        ],
        correctAnswer: "Switch",
        difficulty: "Leicht"
    },
    {
        question: "Welches Gerät ermöglicht es Endgeräten, sich drahtlos (WLAN) mit dem Netzwerk zu verbinden?",
        options: [
            "Kabel",
            "Switch",
            "Accesspoint",
            "Befehlszeile"
        ],
        correctAnswer: "Accesspoint",
        difficulty: "Leicht"
    },
    {
        question: "Was ist der grundlegende Unterschied zwischen WLAN und LAN?",
        options: [
            "WLAN ist immer schneller als LAN.",
            "LAN verbindet Geräte über physische Kabel, während WLAN eine kabellose (drahtlose) Verbindung über Funkwellen herstellt.",
            "WLAN wird nur für Handys genutzt, LAN nur für Drucker.",
            "LAN benötigt keine IP-Adressen, WLAN schon."
        ],
        correctAnswer: "LAN verbindet Geräte über physische Kabel, während WLAN eine kabellose (drahtlose) Verbindung über Funkwellen herstellt.",
        difficulty: "Leicht"
    },
    {
        question: "Wer oder was stellt in einem Netzwerk angeforderte Inhalte bereit (z. B. eine Webseite)?",
        options: [
            "Der Router",
            "Der Server",
            "Der Client",
            "Der Provider"
        ],
        correctAnswer: "Der Server",
        difficulty: "Leicht"
    },
    {
        question: "Wie nennt man das Programm auf dem Client, mit dem man Webseiten aufruft?",
        options: [
            "Switch",
            "Befehlszeile",
            "Webbrowser",
            "Ping"
        ],
        correctAnswer: "Webbrowser",
        difficulty: "Leicht"
    },
    {
        question: "Aus welchen Geräten besteht typischerweise ein Heimnetz?",
        options: [
            "Webserver und Großrechner",
            "Endgeräte (Smartphone, Laptop) und Heimrouter",
            "Provider und DNS-Server",
            "Nur aus Switches"
        ],
        correctAnswer: "Endgeräte (Smartphone, Laptop) und Heimrouter",
        difficulty: "Leicht"
    },

    // ==========================================
    // SCHWIERIGKEITSGRAD: MITTEL
    // ==========================================
    {
        question: "Welcher Befehl wird in der Befehlszeile genutzt, um die Erreichbarkeit eines anderen Rechners zu testen?",
        options: [
            "connect",
            "test",
            "ping",
            "send"
        ],
        correctAnswer: "ping",
        difficulty: "Mittel"
    },
    {
        question: "Welches Gerät leitet Daten von einem Netzwerk in ein anderes (z. B. vom Heimnetz ins Internet)?",
        options: [
            "Client",
            "Router",
            "Switch",
            "Accesspoint"
        ],
        correctAnswer: "Router",
        difficulty: "Mittel"
    },
    {
        question: "Wie sieht in Filius typischerweise eine lokale IP-Adresse für einen Client aus?",
        options: [
            "www.filius.de",
            "192.168.0.10",
            "MAC:AB:CD",
            "8.8.8.8"
        ],
        correctAnswer: "192.168.0.10",
        difficulty: "Mittel"
    },
    {
        question: "Was ist die Hauptaufgabe eines DNS-Servers (Domain Name Server)?",
        options: [
            "E-Mails speichern",
            "Uhrzeiten synchronisieren",
            "URLs (Namen) mit IP-Adressen verknüpfen",
            "Webseiten farbig machen"
        ],
        correctAnswer: "URLs (Namen) mit IP-Adressen verknüpfen",
        difficulty: "Mittel"
    },
    {
        question: "Was ist der Vorteil eines DHCP-Servers im Netzwerk?",
        options: [
            "Er druckt Dokumente aus",
            "Er übernimmt automatisch die Vergabe von IP-Adressen an Clients",
            "Er blockiert Viren",
            "Er macht Kabel überflüssig"
        ],
        correctAnswer: "Er übernimmt automatisch die Vergabe von IP-Adressen an Clients",
        difficulty: "Mittel"
    },
    {
        question: "Welches Protokoll wird für den sicheren, verschlüsselten Aufruf von Webseiten verwendet?",
        options: [
            "HTTP",
            "NTP",
            "IPP",
            "HTTPS"
        ],
        correctAnswer: "HTTPS",
        difficulty: "Mittel"
    },
    {
        question: "Welches Protokoll wird standardmäßig zum Abrufen von E-Mails von einem Server verwendet?",
        options: [
            "POP (POP3)",
            "HTTP",
            "NTP",
            "IPP"
        ],
        correctAnswer: "POP (POP3)",
        difficulty: "Mittel"
    },
    {
        question: "Welches Protokoll ist für die Synchronisation der Uhrzeit zuständig?",
        options: [
            "HTTP",
            "POP",
            "NTP",
            "IPP"
        ],
        correctAnswer: "NTP",
        difficulty: "Mittel"
    },
    {
        question: "Welches Protokoll überträgt Druckaufträge im Netzwerk?",
        options: [
            "IPP",
            "NTP",
            "HTTP",
            "DNS"
        ],
        correctAnswer: "IPP",
        difficulty: "Mittel"
    },
    {
        question: "Was sendet der Webserver als Antwort an den Client zurück, damit dieser die Seite anzeigen kann?",
        options: [
            "Einen Ping-Befehl",
            "Den Namen des Routers",
            "Die MAC-Adresse des Switches",
            "Datenpakete, die der Browser zur Webseite zusammensetzt (HTML, Bilder)"
        ],
        correctAnswer: "Datenpakete, die der Browser zur Webseite zusammensetzt (HTML, Bilder)",
        difficulty: "Mittel"
    },

    // ==========================================
    // SCHWIERIGKEITSGRAD: SCHWER
    // ==========================================
    {
        question: "Wie genau werden große Informationen (z. B. eine Webseite) über das Internet geschickt?",
        options: [
            "Als ein einziger, riesiger Block",
            "Zerlegt in viele einzelne Datenpakete, die am Ziel wieder zusammengesetzt werden",
            "Nur über direkte, ununterbrochene Glasfaserkabel ohne Router dazwischen",
            "Ausschließlich über das POP-Protokoll"
        ],
        correctAnswer: "Zerlegt in viele einzelne Datenpakete, die am Ziel wieder zusammengesetzt werden",
        difficulty: "Schwer"
    },
    {
        question: "Was beschreibt das \"Routing\" beim Senden von Datenpaketen?",
        options: [
            "Die Umwandlung von Text in Bilder",
            "Das automatische Installieren von Software",
            "Das Finden des nächsten Wegabschnitts für das Paket",
            "Das Vergeben von IP-Adressen"
        ],
        correctAnswer: "Das Finden des nächsten Wegabschnitts für das Paket",
        difficulty: "Schwer"
    },
    {
        question: "Wofür steht die Abkürzung \"ttl\", die bei einem erfolgreichen Ping-Test auftaucht?",
        options: [
            "Time to Load",
            "Time to Live",
            "Total Transfer Limit",
            "Text to Link"
        ],
        correctAnswer: "Time to Live",
        difficulty: "Schwer"
    },
    {
        question: "Wenn du zu Hause über dein Smartphone eine Webseite aufrufst: Welches Netzwerkgerät nimmt die Anfrage in der Regel als allererstes entgegen?",
        options: [
            "Der Heimrouter",
            "Der DNS-Server im Internet",
            "Der Switch des Internetanbieters",
            "Ein Vermittlungsrechner in den USA"
        ],
        correctAnswer: "Der Heimrouter",
        difficulty: "Schwer"
    },
    {
        question: "Welche Funktion übernimmt der \"Internetanbieter\" (Provider) beim Senden von Daten aus dem Heimnetzwerk in das Internet?",
        options: [
            "Er übersetzt die Webadresse in eine IP-Adresse.",
            "Er verbindet das Heimnetzwerk (Haushalte, Schulen) mit weiteren, übergeordneten Netzen.",
            "Er liefert die HTML-Dateien für den Webbrowser.",
            "Er verschlüsselt die Datenpakete mit HTTPS."
        ],
        correctAnswer: "Er verbindet das Heimnetzwerk (Haushalte, Schulen) mit weiteren, übergeordneten Netzen.",
        difficulty: "Schwer"
    },
    {
        question: "Wer ist beim Aufrufen einer Webseite dafür zuständig, die einzelnen erhaltenen Daten (wie Texte, Bilder, Farben) zur endgültigen Ansicht zusammenzubauen?",
        options: [
            "Der Switch",
            "Der Heimrouter",
            "Der DNS-Server",
            "Der Webbrowser auf dem Client"
        ],
        correctAnswer: "Der Webbrowser auf dem Client",
        difficulty: "Schwer"
    },
    {
        question: "Welcher bildliche Vergleich beschreibt den Unterschied zwischen einer unverschlüsselten Verbindung (HTTP) und einer verschlüsselten Verbindung (HTTPS) am besten?",
        options: [
            "HTTP ist wie eine offene Postkarte (für jeden lesbar), HTTPS wie ein verschlossener Brief.",
            "HTTP ist wie ein verschlossener Tresor, HTTPS wie ein Tresor ohne Schlüssel.",
            "HTTP ist ein Telefongespräch, HTTPS ein Briefwechsel.",
            "HTTP ist ein Briefumschlag mit falscher Adresse."
        ],
        correctAnswer: "HTTP ist wie eine offene Postkarte (für jeden lesbar), HTTPS wie ein verschlossener Brief.",
        difficulty: "Schwer"
    },
    {
        question: "Was bedeutet es typischerweise, wenn ein Gerät eine IP-Adresse hat, die mit \"192.168...\" beginnt?",
        options: [
            "Das Gerät ist ein DNS-Server.",
            "Die Adresse kennzeichnet das Gerät in einem lokalen Netzwerk (privater IP-Bereich).",
            "Das Gerät steht physisch in New York.",
            "Die Internetverbindung ist verschlüsselt."
        ],
        correctAnswer: "Die Adresse kennzeichnet das Gerät in einem lokalen Netzwerk (privater IP-Bereich).",
        difficulty: "Schwer"
    },
    {
        question: "Um einzelne Rechner in einem Rechnernetz eindeutig ansprechen zu können, gibt es neben der IP-Adresse noch eine zweite fest etablierte Art der Adressierung. Wie lautet diese?",
        options: [
            "HTTP-Adresse",
            "MAC-Adresse",
            "DNS-Adresse",
            "Ping-Adresse"
        ],
        correctAnswer: "MAC-Adresse",
        difficulty: "Schwer"
    },
    {
        question: "Warum gibt es in Rechnernetzen sowohl MAC- als auch IP-Adressen?",
        options: [
            "MAC-Adressen werden nur für WLAN benötigt, IP-Adressen für Kabel.",
            "Die MAC-Adresse identifiziert das Gerät (Hardware) weltweit eindeutig, die IP-Adresse kennzeichnet den aktuellen Standort des Geräts im Netzwerk (Routing).",
            "Die MAC-Adresse wird für Webseiten genutzt, die IP-Adresse für E-Mails.",
            "Es gibt keinen Unterschied, es sind nur zwei Begriffe für dasselbe."
        ],
        correctAnswer: "Die MAC-Adresse identifiziert das Gerät (Hardware) weltweit eindeutig, die IP-Adresse kennzeichnet den aktuellen Standort des Geräts im Netzwerk (Routing).",
        difficulty: "Schwer"
    }
];
