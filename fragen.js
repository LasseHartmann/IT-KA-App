const allQuestions = [
    
    /* ==========================================
       KATEGORIE: LEICHT (10 Fragen)
       ========================================== */
    {
        question: "In welchem Filius-Modus kann man neue Rechner platzieren und mit Kabeln verbinden?",
        options: [
            "Aktionsmodus", 
            "Entwurfsmodus", 
            "Testmodus", 
            "Dokumentationsmodus"
        ],
        correct: 1, // B
        explanation: "Der Entwurfsmodus (Hammer/Schraubenzieher-Symbol) ist für den Aufbau des Netzwerks zuständig. Der Aktionsmodus (Play-Symbol) ist für den Software-Test.",
        difficulty: "leicht"
    },
    {
        question: "Welches Gerät verbindet mehrere PCs in einem kabelgebundenen lokalen Netzwerk?",
        options: [
            "Switch", 
            "DNS-Server", 
            "Modem", 
            "Text-Editor"
        ],
        correct: 0, // A
        explanation: "Ein Switch verteilt die Datenpakete innerhalb eines lokalen Netzwerks gezielt an die angeschlossenen Geräte.",
        difficulty: "leicht"
    },
    {
        question: "Welches Gerät ermöglicht es Endgeräten, sich drahtlos (WLAN) mit dem Netzwerk zu verbinden?",
        options: [
            "Kabel", 
            "Switch", 
            "Accesspoint", 
            "Befehlszeile"
        ],
        correct: 2, // C
        explanation: "Ein Accesspoint fungiert als Brücke zwischen dem drahtlosen WLAN und dem kabelgebundenen LAN.",
        difficulty: "leicht"
    },
    {
        question: "Woran erkennt man in der Filius-Simulation, dass die Kabel erfolgreich Daten übertragen?",
        options: [
            "Sie werden rot", 
            "Sie werden unsichtbar", 
            "Sie blinken blau", 
            "Der Datenfluss wird grün dargestellt"
        ],
        correct: 3, // D
        explanation: "Filius visualisiert den aktiven Datenaustausch im Aktionsmodus durch grün aufleuchtende Verbindungen.",
        difficulty: "leicht"
    },
    {
        question: "Wer oder was stellt in einem Netzwerk angeforderte Inhalte bereit (z. B. eine Webseite)?",
        options: [
            "Der Router", 
            "Der Server", 
            "Der Client", 
            "Der Provider"
        ],
        correct: 1, // B
        explanation: "Im Client-Server-Modell antwortet der Server auf die Anfragen der Clients und stellt die Daten bereit.",
        difficulty: "leicht"
    },
    {
        question: "Was benötigt jeder Rechner zwingend, um direkt in einem Netzwerk angesprochen werden zu können?",
        options: [
            "Eine eigene Webseite", 
            "Ein E-Mail-Programm", 
            "Eine eindeutige IP-Adresse", 
            "Einen Accesspoint"
        ],
        correct: 2, // C
        explanation: "Die IP-Adresse ist wie eine Hausnummer im Netzwerk zwingend erforderlich, um Pakete zuzustellen.",
        difficulty: "leicht"
    },
    {
        question: "Aus welchen Geräten besteht typischerweise ein Heimnetz (z. B. laut Benedikts Referat)?",
        options: [
            "Webserver und Großrechner", 
            "Endgeräte (Smartphone, Laptop) und Heimrouter", 
            "Provider und DNS-Server", 
            "Nur aus Switches"
        ],
        correct: 1, // B
        explanation: "Ein Heimnetz besteht meist aus den Endgeräten der Nutzer und dem kombinierten Heimrouter als Übergang ins Internet.",
        difficulty: "leicht"
    },
    {
        question: "Wie nennt man das Programm auf dem Client, mit dem man Webseiten aufruft?",
        options: [
            "Switch", 
            "Befehlszeile", 
            "Webbrowser", 
            "Ping"
        ],
        correct: 2, // C
        explanation: "Der Webbrowser (z. B. Chrome, Safari) sendet HTTP-Anfragen und interpretiert die HTML-Antworten des Webservers.",
        difficulty: "leicht"
    },
    {
        question: "Wo muss man in Filius klicken, um Software (z. B. einen Webbrowser) zu installieren?",
        options: [
            "Auf das Kabel", 
            "Auf 'Software-Installation' auf dem jeweiligen Rechner", 
            "Auf den Datenaustausch", 
            "Auf den Schieberegler"
        ],
        correct: 1, // B
        explanation: "Ein Klick auf den Rechner öffnet das Menü, in dem man unter 'Software-Installation' Programme wie die Befehlszeile installieren kann.",
        difficulty: "leicht"
    },
    {
        question: "Welches Gerät leitet Daten von einem Netzwerk in ein anderes (z. B. vom Heimnetz ins Internet)?",
        options: [
            "Client", 
            "Router", 
            "Switch", 
            "Accesspoint"
        ],
        correct: 1, // B
        explanation: "Der Router (Vermittlungsrechner) verbindet unterschiedliche Netzwerke miteinander und sucht den Weg zum Ziel.",
        difficulty: "leicht"
    },

    /* ==========================================
       KATEGORIE: MITTEL (10 Fragen)
       ========================================== */
    {
        question: "Welcher Befehl wird in der Befehlszeile genutzt, um die Erreichbarkeit eines anderen Rechners zu testen?",
        options: [
            "connect", 
            "test", 
            "ping", 
            "send"
        ],
        correct: 2, // C
        explanation: "Der ping-Befehl sendet kleine Testpakete (ICMP), um zu prüfen, ob die Verbindung zu einer IP-Adresse klappt.",
        difficulty: "mittel"
    },
    {
        question: "Was ist die Hauptaufgabe eines DNS-Servers (Domain Name Server)?",
        options: [
            "E-Mails speichern", 
            "Uhrzeiten synchronisieren", 
            "URLs (Namen) mit IP-Adressen verknüpfen", 
            "Webseiten farbig machen"
        ],
        correct: 2, // C
        explanation: "DNS fungiert als das Telefonbuch des Internets und übersetzt Namen wie www.google.de in die IP-Adresse des Servers.",
        difficulty: "mittel"
    },
    {
        question: "Was ist der Vorteil eines DHCP-Servers im Netzwerk?",
        options: [
            "Er druckt Dokumente aus", 
            "Er übernimmt automatisch die Vergabe von IP-Adressen an Clients", 
            "Er blockiert Viren", 
            "Er macht Kabel überflüssig"
        ],
        correct: 1, // B
        explanation: "DHCP (Dynamic Host Configuration Protocol) spart Zeit und Fehler, da man die IP-Adressen nicht mehr manuell eintippen muss.",
        difficulty: "mittel"
    },
    {
        question: "Welches Protokoll wird für den sicheren, verschlüsselten Aufruf von Webseiten verwendet?",
        options: [
            "HTTP", 
            "NTP", 
            "IPP", 
            "HTTPS"
        ],
        correct: 3, // D
        explanation: "Das 'S' in HTTPS steht für 'Secure'. Es verschlüsselt die Verbindung, damit Daten unterwegs nicht mitgelesen werden können.",
        difficulty: "mittel"
    },
    {
        question: "Welches Protokoll wird standardmäßig zum Abrufen von E-Mails von einem Server verwendet?",
        options: [
            "POP (POP3)", 
            "HTTP", 
            "NTP", 
            "IPP"
        ],
        correct: 0, // A
        explanation: "POP3 (Post Office Protocol) wird genutzt, um E-Mails vom Server herunterzuladen (abzuholen).",
        difficulty: "mittel"
    },
    {
        question: "Welches Protokoll ist für die Synchronisation der Uhrzeit zuständig?",
        options: [
            "HTTP", 
            "POP", 
            "NTP", 
            "IPP"
        ],
        correct: 2, // C
        explanation: "NTP (Network Time Protocol) sorgt dafür, dass die Systemuhren von Computern in einem Netzwerk synchron laufen.",
        difficulty: "mittel"
    },
    {
        question: "Welches Protokoll überträgt Druckaufträge im Netzwerk?",
        options: [
            "IPP", 
            "NTP", 
            "HTTP", 
            "DNS"
        ],
        correct: 0, // A
        explanation: "IPP steht für 'Internet Printing Protocol' und steuert den Druckvorgang über das Netzwerk.",
        difficulty: "mittel"
    },
    {
        question: "Wie sieht in Filius typischerweise eine lokale IP-Adresse für einen Client aus?",
        options: [
            "www.filius.de", 
            "192.168.0.10", 
            "MAC:AB:CD", 
            "8.8.8.8"
        ],
        correct: 1, // B
        explanation: "Adressen, die mit 192.168... beginnen, sind typische private (lokale) IP-Adressen für Heim- und Schulnetzwerke.",
        difficulty: "mittel"
    },
    {
        question: "Was beschreibt das 'Routing' beim Senden von Datenpaketen?",
        options: [
            "Die Umwandlung von Text in Bilder", 
            "Das automatische Installieren von Software", 
            "Das Finden des nächsten Wegabschnitts für das Paket", 
            "Das Vergeben von IP-Adressen"
        ],
        correct: 2, // C
        explanation: "Router leiten Pakete Schritt für Schritt (Routing) durch verschiedene Netze ans Ziel, da meist keine direkte Verbindung besteht.",
        difficulty: "mittel"
    },
    {
        question: "Was sendet der Webserver als Antwort an den Client zurück, damit dieser die Seite anzeigen kann?",
        options: [
            "Einen Ping-Befehl", 
            "Den Namen des Routers", 
            "Die MAC-Adresse des Switches", 
            "Datenpakete, die der Browser zur Webseite zusammensetzt (HTML, Bilder)"
        ],
        correct: 3, // D
        explanation: "Der Server schickt die Einzelteile (Code, Bilder) in Paketen, die der Webbrowser dann visuell rendert.",
        difficulty: "mittel"
    },

    /* ==========================================
       KATEGORIE: SCHWER (10 Fragen)
       ========================================== */
    {
        question: "Wofür steht die Abkürzung 'ttl', die bei einem erfolgreichen Ping-Test auftaucht?",
        options: [
            "Time to Load", 
            "Time to Live", 
            "Total Transfer Limit", 
            "Text to Link"
        ],
        correct: 1, // B
        explanation: "Time to Live (Lebenszeit). Es verhindert, dass Pakete bei einem Fehler endlos im Netzwerk im Kreis wandern, indem sie irgendwann gelöscht werden.",
        difficulty: "schwer"
    },
    {
        question: "Wie nennt man das Datenpaket im ICMP-Protokoll, das als Anfrage ('Ping') weggeschickt wird?",
        options: [
            "Echo Request", 
            "Echo Reply", 
            "ARP Request", 
            "HTTP Get"
        ],
        correct: 0, // A
        explanation: "Der ping-Befehl sendet einen 'Echo Request' (Wörtlich: Echo-Anfrage) an das Zielgerät.",
        difficulty: "schwer"
    },
    {
        question: "Was gibt die Angabe 'icmp_seq' im Terminalfenster bei einem Ping an?",
        options: [
            "Die Laufzeit des Pakets", 
            "Die fortlaufende Nummer des Datenpakets", 
            "Die Adresse des Empfängers", 
            "Den Port des Routers"
        ],
        correct: 1, // B
        explanation: "'seq' steht für Sequence (Reihenfolge). Die Pakete werden durchnummeriert, um Verluste oder falsche Reihenfolgen zu erkennen.",
        difficulty: "schwer"
    },
    {
        question: "Wie nennt man das Datenpaket, das als Antwort auf einen Ping ('Pong') zurückkommt?",
        options: [
            "Echo Request", 
            "Echo Reply", 
            "DNS Response", 
            "ARP Reply"
        ],
        correct: 1, // B
        explanation: "Die erfolgreiche Antwort des Zielrechners auf einen 'Echo Request' heißt 'Echo Reply' (Echo-Antwort).",
        difficulty: "schwer"
    },
    {
        question: "Woraus besteht ein E-Mail-Konto, das man in Filius auf dem E-Mail-Server anlegen muss, zwingend?",
        options: [
            "IP-Adresse und MAC-Adresse", 
            "Domainname und Port", 
            "Benutzername und Passwort", 
            "Ping und Pong"
        ],
        correct: 2, // C
        explanation: "Damit der Mailserver weiß, wem das Postfach gehört, muss man sich mit einem Benutzernamen und Passwort authentifizieren.",
        difficulty: "schwer"
    },
    {
        question: "Welchen Port trägt man in Filius standardmäßig für den SMTP-Server ein (zum Senden von Mails)?",
        options: [
            "110", 
            "25", 
            "80", 
            "55555"
        ],
        correct: 1, // B
        explanation: "Port 25 ist in der Regel für das Simple Mail Transfer Protocol (SMTP) reserviert, welches Mails verschickt.",
        difficulty: "schwer"
    },
    {
        question: "Welchen Port trägt man in Filius standardmäßig für den POP3-Server ein (zum Empfangen von Mails)?",
        options: [
            "25", 
            "80", 
            "110", 
            "443"
        ],
        correct: 2, // C
        explanation: "Port 110 wird klassischerweise für das Post Office Protocol (POP3) verwendet, um Mails abzuholen.",
        difficulty: "schwer"
    },
    {
        question: "Was muss bei der Einrichtung eines DHCP-Servers zwingend festgelegt werden, damit er Adressen verteilen kann?",
        options: [
            "Eine Webadresse", 
            "Ein Passwort für das WLAN", 
            "Die MAC-Adresse des Routers", 
            "Ein Adressbereich (Untergrenze und Obergrenze der IP-Adressen)"
        ],
        correct: 3, // D
        explanation: "Der DHCP-Server benötigt einen definierten IP-Pool, aus dem er freie Adressen an die Clients verteilen darf.",
        difficulty: "schwer"
    },
    {
        question: "Wie kann man die Datenflussgeschwindigkeit in Filius verändern, um den Weg der Pakete genau zu beobachten?",
        options: [
            "Über einen Schieberegler im Aktionsmodus", 
            "Durch Eingabe von 'speed' in der Befehlszeile", 
            "Das geht nur im Entwurfsmodus", 
            "Durch Ändern der Kabel"
        ],
        correct: 0, // A
        explanation: "Im Aktionsmodus gibt es oben einen Schieberegler (in %). So kann man die Simulation drosseln und die Datenaustausch-Tabelle in Ruhe lesen.",
        difficulty: "schwer"
    },
    {
        question: "Was passiert (laut Skript/Unterricht), wenn man einen Ping-Befehl mit einer falschen oder unvollständigen IP-Adresse eingibt?",
        options: [
            "Filius stürzt ab", 
            "Die Anfrage geht automatisch an den Router", 
            "Filius korrigiert die Adresse selbst", 
            "Man erhält eine Rückmeldung, dass das Ziel/die Adresse fehlerhaft oder nicht erreichbar ist"
        ],
        correct: 3, // D
        explanation: "Wenn die IP-Adresse ungültig ist oder nicht existiert, schlägt der Ping fehl und meldet z.B. 'Zieladresse nicht erreichbar'.",
        difficulty: "schwer"
    }
];
