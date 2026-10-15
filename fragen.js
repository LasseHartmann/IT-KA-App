const allQuestions = [
    
    /* ==========================================
       KATEGORIE: LEICHT (25 Fragen)
       ========================================== */
    {
        question: "Welches Werkzeug nutzt man in Filius, um Rechner und Kabel auf der Arbeitsfläche zu platzieren?",
        options: ["Das grüne Play-Symbol (Aktionsmodus)", "Den Hammer/Schraubenzieher (Entwurfsmodus)", "Den Stift (Dokumentationsmodus)", "Das Zahnrad (Einstellungen)"],
        correct: 1,
        explanation: "Im Entwurfsmodus (Hammer & Schraubenzieher) wird das Netzwerk physisch aufgebaut. Der Aktionsmodus ist für Software und Tests.",
        difficulty: "leicht"
    },
    {
        question: "Mit welchem Symbol wechselt man in Filius vom Entwurfs- in den Aktionsmodus?",
        options: ["Roter Stopp-Button", "Blauer Pfeil", "Grünes Play-Symbol", "Gelbes Warndreieck"],
        correct: 2,
        explanation: "Das grüne Play-Symbol startet die Simulation, sodass man Software installieren und das Netzwerk testen kann.",
        difficulty: "leicht"
    },
    {
        question: "Welches Netzwerkgerät leitet Daten in einem lokalen, verkabelten Netzwerk an das richtige Endgerät weiter?",
        options: ["Router", "Access Point", "Switch", "Modem"],
        correct: 2,
        explanation: "Ein Switch verbindet Geräte im LAN und leitet Daten gezielt an den richtigen Port (wie ein intelligenter Mehrfachstecker) weiter.",
        difficulty: "leicht"
    },
    {
        question: "Wie nennt man das Gerät, das Endgeräte drahtlos (per WLAN) mit einem Netzwerk verbindet?",
        options: ["Switch", "Access Point", "Hub", "Glasfaser-Modem"],
        correct: 1,
        explanation: "Ein Access Point (Zugangspunkt) fungiert als Brücke zwischen dem kabellosen WLAN und dem kabelgebundenen Netzwerk.",
        difficulty: "leicht"
    },
    {
        question: "Mit welchem Befehl in der Befehlszeile testet man, ob ein anderer Rechner im Netzwerk erreichbar ist?",
        options: ["connect [IP]", "ping [IP]", "test [IP]", "ipconfig"],
        correct: 1,
        explanation: "Der 'ping'-Befehl sendet kleine Datenpakete, um die Erreichbarkeit eines Ziels zu prüfen.",
        difficulty: "leicht"
    },
    {
        question: "Wofür steht die Abkürzung 'IP' (im Kontext von IP-Adresse)?",
        options: ["Internet Provider", "Internal Process", "Internet Protocol", "Information Path"],
        correct: 2,
        explanation: "IP steht für Internet Protocol. Es ist die Standard-Netzwerkadresse im Internet und lokalen Netzen.",
        difficulty: "leicht"
    },
    {
        question: "Welche Adresse ist in der Regel weltweit einzigartig und fest in die Netzwerkschnittstelle (Netzwerkkarte) eines Geräts eingebaut?",
        options: ["IP-Adresse", "DNS-Adresse", "MAC-Adresse", "HTTP-Adresse"],
        correct: 2,
        explanation: "Die MAC-Adresse (Media Access Control) ist die feste Hardware-Adresse eines Netzwerkgeräts.",
        difficulty: "leicht"
    },
    {
        question: "Wie nennt man den Rechner (oder das Programm), der eine Anfrage an einen anderen Rechner stellt?",
        options: ["Server", "Host", "Client", "Router"],
        correct: 2,
        explanation: "Der Client (Kunde) stellt die Anfrage, z.B. dein Webbrowser, der eine Webseite sehen möchte.",
        difficulty: "leicht"
    },
    {
        question: "Wie nennt man den Rechner, der Dienste, Daten oder Webseiten bereitstellt und auf Anfragen antwortet?",
        options: ["Server", "Client", "Switch", "Access Point"],
        correct: 0,
        explanation: "Der Server (Diener/Bereitsteller) wartet auf Anfragen von Clients und liefert die gewünschten Daten zurück.",
        difficulty: "leicht"
    },
    {
        question: "Wofür steht das Protokoll HTTP?",
        options: ["HyperText Transfer Protocol", "Hyperlink Text Transmission", "Home Tool Transfer Process", "Host To Terminal Protocol"],
        correct: 0,
        explanation: "HTTP ist das Standardprotokoll zur Übertragung von Webseiten (HyperText) im Internet.",
        difficulty: "leicht"
    },
    {
        question: "Was ist der Hauptunterschied zwischen HTTP und HTTPS?",
        options: ["HTTPS ist nur für Smartphones", "HTTPS verschlüsselt die Datenübertragung", "HTTP ist schneller, weil es aktueller ist", "HTTPS lädt nur Bilder herunter"],
        correct: 1,
        explanation: "Das 'S' steht für Secure. HTTPS verschlüsselt die Verbindung, sodass Daten (wie Passwörter) nicht von Dritten mitgelesen werden können.",
        difficulty: "leicht"
    },
    {
        question: "Welches Protokoll wird verwendet, um die Uhrzeit zwischen Rechnern zu synchronisieren?",
        options: ["HTTP", "POP", "NTP", "IPP"],
        correct: 2,
        explanation: "NTP steht für Network Time Protocol und sorgt dafür, dass Uhren in Computernetzwerken synchron laufen.",
        difficulty: "leicht"
    },
    {
        question: "Welches Protokoll ist laut Benedikts Referat für die Übertragung von Druckaufträgen zuständig?",
        options: ["NTP", "POP", "HTTP", "IPP"],
        correct: 3,
        explanation: "IPP (Internet Printing Protocol) ist ein Standard für das Drucken über Netzwerke.",
        difficulty: "leicht"
    },
    {
        question: "Mit welchem Tag beginnt ausnahmslos jede HTML-Webseite?",
        options: ["<start>", "<body>", "<head>", "<html>"],
        correct: 3,
        explanation: "Das <html>-Tag umschließt das gesamte Dokument und signalisiert dem Browser, dass es sich um HTML-Code handelt.",
        difficulty: "leicht"
    },
    {
        question: "Mit welchem Tag wird eine HTML-Seite zwingend beendet?",
        options: ["</end>", "</body>", "</html>", "</head>"],
        correct: 2,
        explanation: "Jedes geöffnete HTML-Tag muss auch wieder geschlossen werden. Das gesamte Dokument endet mit </html>.",
        difficulty: "leicht"
    },
    {
        question: "In welchem HTML-Tag steht der Titel der Webseite, der z.B. oben im Browser-Tab angezeigt wird?",
        options: ["<title>", "<header>", "<h1>", "<name>"],
        correct: 0,
        explanation: "Das <title>-Tag befindet sich im <head>-Bereich und bestimmt den Namen im Browser-Tab.",
        difficulty: "leicht"
    },
    {
        question: "Welcher HTML-Bereich enthält den eigentlichen, für den Nutzer sichtbaren Inhalt der Webseite?",
        options: ["<head>", "<body>", "<content>", "<main>"],
        correct: 1,
        explanation: "Alles, was der Nutzer auf der Webseite sehen soll (Texte, Bilder, Links), muss innerhalb des <body>-Tags stehen.",
        difficulty: "leicht"
    },
    {
        question: "Wofür steht die Abkürzung DNS und was ist seine Hauptaufgabe?",
        options: ["Domain Name System - Verknüpft Web-Namen mit IP-Adressen", "Dynamic Network Server - Verteilt IPs", "Data Node Server - Speichert Bilder", "Direct Name System - Findet MAC-Adressen"],
        correct: 0,
        explanation: "DNS ist wie das Telefonbuch des Internets. Es übersetzt z.B. 'www.google.de' in die IP-Adresse '8.8.8.8'.",
        difficulty: "leicht"
    },
    {
        question: "Wofür steht die Abkürzung DHCP?",
        options: ["Domain Host Control Protocol", "Dynamic Host Configuration Protocol", "Data Handling Center Process", "Digital HTTP Connection Protocol"],
        correct: 1,
        explanation: "DHCP weist Geräten in einem Netzwerk automatisch IP-Adressen zu, sodass man sie nicht manuell abtippen muss.",
        difficulty: "leicht"
    },
    {
        question: "Welches Protokoll wird standardmäßig genutzt, um E-Mails von einem Mailserver abzurufen?",
        options: ["HTTP", "POP3", "SMTP", "FTP"],
        correct: 1,
        explanation: "POP3 (Post Office Protocol) wird verwendet, um E-Mails von einem Server herunterzuladen (abzurufen).",
        difficulty: "leicht"
    },
    {
        question: "Welche der folgenden Kombinationen enthält typische Endgeräte in einem Heimnetzwerk?",
        options: ["Router, Switch, Gateway", "Smartphone, Laptop, Tablet", "DNS-Server, Webserver, Mailserver", "Glasfaserkabel, WLAN-Antenne, Modem"],
        correct: 1,
        explanation: "Endgeräte (Clients) sind die Geräte, die von Nutzern bedient werden, z.B. Smartphones oder Laptops.",
        difficulty: "leicht"
    },
    {
        question: "Verbindet das Internet direkte einzelne Computer miteinander oder eher ganze Netzwerke?",
        options: ["Es verbindet nur direkte Computer miteinander.", "Es verbindet viele Netzwerke miteinander (Netz der Netze).", "Es verbindet nur Webserver miteinander.", "Es ist ein einziges, riesiges LAN."],
        correct: 1,
        explanation: "Das Internet (Interconnected Networks) ist ein globaler Zusammenschluss vieler einzelner Netzwerke.",
        difficulty: "leicht"
    },
    {
        question: "Welches Programm muss in Filius auf einem Client-Rechner installiert werden, um eine 'index.html' betrachten zu können?",
        options: ["Text-Editor", "Befehlszeile", "Webbrowser", "Webserver"],
        correct: 2,
        explanation: "Ein Webbrowser (wie Chrome oder Firefox) wird benötigt, um HTML-Code zu interpretieren und grafisch darzustellen.",
        difficulty: "leicht"
    },
    {
        question: "Woran erkennt man im Aktionsmodus in Filius sofort, dass Daten über ein Kabel übertragen werden?",
        options: ["Das Kabel wird rot", "Es ertönt ein Piepton", "Das Kabel leuchtet/blinkt grün", "Die IP-Adresse verschwindet kurz"],
        correct: 2,
        explanation: "Filius visualisiert den aktiven Datenfluss durch grün aufleuchtende Kabelverbindungen.",
        difficulty: "leicht"
    },
    {
        question: "Was passiert in Filius, wenn man auf eine Komponente einen Doppelklick macht (im Entwurfsmodus)?",
        options: ["Sie wird gelöscht", "Sie wird kopiert", "Das Konfigurationsfenster (z.B. für IP-Adressen) öffnet sich", "Das Programm stürzt ab"],
        correct: 2,
        explanation: "Ein Doppelklick öffnet die Eigenschaften, wo man Namen, IP-Adressen und Funktionen (wie DHCP) einstellen kann.",
        difficulty: "leicht"
    },


    /* ==========================================
       KATEGORIE: MITTEL (25 Fragen)
       ========================================== */
    {
        question: "Du führst einen Ping aus. Was bedeutet der Ausgabewert 'icmp_seq=1'?",
        options: ["Das ist die Fehlernummer.", "Es ist die Sequenznummer (Reihenfolge) des gesendeten Datenpakets.", "Das bedeutet, dass 1 Paket verloren ging.", "Es gibt die Dauer in Millisekunden an."],
        correct: 1,
        explanation: "icmp_seq nummeriert die Ping-Pakete fortlaufend durch (1, 2, 3, 4...), um die Reihenfolge zu tracken.",
        difficulty: "mittel"
    },
    {
        question: "Was verbirgt sich hinter der Abkürzung 'ttl' bei der Ausgabe eines Ping-Befehls?",
        options: ["Time To Live (Lebenszeit des Pakets)", "Total Time Left (Verbleibende Gesamtzeit)", "Transfer To Location", "Time To Load"],
        correct: 0,
        explanation: "Time To Live. Es gibt an, über wie viele Router (Hops) das Paket maximal wandern darf, bevor es gelöscht wird, um Endlosschleifen zu verhindern.",
        difficulty: "mittel"
    },
    {
        question: "Wofür steht die Abkürzung 'ARP', die im Datenaustausch-Fenster auftaucht, bevor der erste Ping erfolgreich ist?",
        options: ["Advanced Routing Protocol", "Address Resolution Protocol (IP zu MAC auflösen)", "Auto Reply Process", "Active Request Ping"],
        correct: 1,
        explanation: "ARP findet zur IP-Adresse die passende Hardware-Adresse (MAC-Adresse) im lokalen Netzwerk heraus, damit der Switch weiß, wohin das Paket muss.",
        difficulty: "mittel"
    },
    {
        question: "Welches Protokoll steckt technisch hinter einem normalen 'ping'-Befehl?",
        options: ["TCP", "HTTP", "ICMP", "UDP"],
        correct: 2,
        explanation: "Ping nutzt das ICMP (Internet Control Message Protocol) mit 'Echo Request' (Anfrage) und 'Echo Reply' (Antwort).",
        difficulty: "mittel"
    },
    {
        question: "Ein DHCP-Server hat die Untergrenze 192.168.0.100 und die Obergrenze 192.168.0.105. Wie viele Clients können maximal gleichzeitig eine IP bekommen?",
        options: ["5", "6", "100", "Unendlich"],
        correct: 1,
        explanation: "Die Adressen .100, .101, .102, .103, .104 und .105 können vergeben werden. Das sind genau 6 Stück.",
        difficulty: "mittel"
    },
    {
        question: "Vergleiche die Funktion eines DNS-Servers mit einem Gegenstand aus dem echten Leben. Welcher Vergleich passt am besten?",
        options: ["Eine Kaffeemaschine", "Ein Tresor", "Ein Telefonbuch", "Eine Straßenkarte"],
        correct: 2,
        explanation: "Ein Telefonbuch verknüpft Namen (Max Mustermann / google.de) mit Nummern (089-1234 / 8.8.8.8). Genau das macht DNS.",
        difficulty: "mittel"
    },
    {
        question: "Wie lautet der exakte HTML-Code, um den Text 'Meine Seite' als Überschrift der Ebene 2 darzustellen?",
        options: ["<title>Meine Seite</title>", "<h2>Meine Seite</h2>", "<b>Meine Seite</b>", "<header2>Meine Seite</header2>"],
        correct: 1,
        explanation: "Das Tag <h2> steht für 'Heading 2' und erzeugt eine Unterüberschrift.",
        difficulty: "mittel"
    },
    {
        question: "Was bewirkt das Attribut bgcolor=\"yellow\" und wo muss es stehen?",
        options: ["Es macht Überschriften gelb und steht im <title>", "Es macht den Text gelb und steht im <head>", "Es macht den Hintergrund gelb und steht im <body>", "Es markiert Links gelb und steht im <p>"],
        correct: 2,
        explanation: "bgcolor (Background Color) im <body>-Tag ändert die Hintergrundfarbe der gesamten sichtbaren Seite.",
        difficulty: "mittel"
    },
    {
        question: "Wie fügt man ein Bild namens 'logo.png' in HTML ein?",
        options: ["<img src=\"logo.png\">", "<image>logo.png</image>", "<pic src=\"logo.png\">", "<img href=\"logo.png\">"],
        correct: 0,
        explanation: "Bilder werden mit dem <img> Tag eingebunden. Das Attribut 'src' (Source/Quelle) gibt den Dateinamen an.",
        difficulty: "mittel"
    },
    {
        question: "Wie erstellt man einen funktionierenden Link zur Seite 'kontakt.html' mit dem Klick-Text 'Zum Kontakt'?",
        options: ["<link src=\"kontakt.html\">Zum Kontakt</link>", "<a href=\"kontakt.html\">Zum Kontakt</a>", "<a src=\"kontakt.html\">Zum Kontakt</a>", "<url=\"kontakt.html\">Zum Kontakt</url>"],
        correct: 1,
        explanation: "Links werden mit dem 'Anchor'-Tag <a> erstellt. Das Ziel wird im Attribut 'href' angegeben.",
        difficulty: "mittel"
    },
    {
        question: "Beim Einrichten eines E-Mail-Kontos brauchst du POP3 und SMTP. Wofür ist SMTP zuständig?",
        options: ["Zum Empfangen der Mails", "Zum Verschlüsseln der Mails", "Zum Versenden der Mails", "Zum Löschen der Mails"],
        correct: 2,
        explanation: "SMTP (Simple Mail Transfer Protocol) ist ausschließlich für das Versenden von E-Mails an den Server zuständig.",
        difficulty: "mittel"
    },
    {
        question: "Auf welchem Port arbeitet der POP3-Server standardmäßig beim Abrufen von Mails (laut Filius-Skript)?",
        options: ["Port 25", "Port 80", "Port 110", "Port 443"],
        correct: 2,
        explanation: "POP3 lauscht standardmäßig auf Port 110, während SMTP meistens Port 25 nutzt.",
        difficulty: "mittel"
    },
    {
        question: "Benedikt erklärte den Heimrouter. Warum braucht man zu Hause meistens keinen separaten Switch mehr?",
        options: ["Weil WLAN keine Switches braucht.", "Weil der Heimrouter Switch, WLAN-Access-Point und Router in einem Gerät kombiniert.", "Weil das Internet heutzutage so schnell ist.", "Weil man zuhause immer nur ein Gerät nutzt."],
        correct: 1,
        explanation: "Moderne Heimrouter (wie eine FritzBox) sind Multifunktionsgeräte und haben den Switch für die LAN-Kabel bereits eingebaut.",
        difficulty: "mittel"
    },
    {
        question: "Worin besteht der Hauptunterschied zwischen einem LAN und einem WLAN?",
        options: ["WLAN ist immer schneller als LAN.", "LAN nutzt Funkwellen, WLAN nutzt Kabel.", "LAN ist kabelgebunden, WLAN ist drahtlos (Funk).", "LAN funktioniert nur im Internet, WLAN nur lokal."],
        correct: 2,
        explanation: "LAN (Local Area Network) nutzt Kupfer- oder Glasfaserkabel. Das 'W' in WLAN steht für 'Wireless' (kabellos).",
        difficulty: "mittel"
    },
    {
        question: "Welches Protokoll (TCP oder UDP) gilt als 'verbindungsorientiert' und 'zuverlässig'?",
        options: ["UDP", "ICMP", "TCP", "IP"],
        correct: 2,
        explanation: "TCP (Transmission Control Protocol) prüft, ob Pakete angekommen sind und fordert sie bei Verlust neu an. Es ist daher sehr zuverlässig.",
        difficulty: "mittel"
    },
    {
        question: "Welches Protokoll eignet sich laut Skript besser für Videostreaming, weil es schneller (aber unzuverlässiger) ist?",
        options: ["TCP", "UDP", "HTTP", "POP3"],
        correct: 1,
        explanation: "UDP (User Datagram Protocol) sendet Daten einfach los. Ein paar verlorene Pixel stören beim Video weniger als ständiges Buffern.",
        difficulty: "mittel"
    },
    {
        question: "Warum werden Daten im Internet nicht als riesiger Block am Stück, sondern in kleinen 'Datenpaketen' verschickt?",
        options: ["Damit der Router nicht überhitzt.", "Damit Hacker sie nicht finden.", "Damit bei einem Fehler nur ein kleines Paket neu gesendet werden muss und das Netz fair geteilt wird.", "Weil IP-Adressen sonst zu lang wären."],
        correct: 2,
        explanation: "Paketvermittlung ist effizienter. Wenn ein Fehler passiert, muss nur ein kleines Paket neu gesendet werden, nicht die ganze Datei.",
        difficulty: "mittel"
    },
    {
        question: "Was versteht man unter 'Routing' im Internet?",
        options: ["Das Erstellen von Webseiten.", "Die Wegewahl, bei der Router das Datenpaket von Zwischenstation zu Zwischenstation ans Ziel leiten.", "Das Übersetzen von Namen in IPs.", "Das Verschlüsseln von E-Mails."],
        correct: 1,
        explanation: "Router suchen anhand der Ziel-IP den besten Weg zum nächsten Knotenpunkt. Das nennt man Routing.",
        difficulty: "mittel"
    },
    {
        question: "Welche Rolle spielt das 'Gateway' (oft der Heimrouter) für dein Smartphone?",
        options: ["Es ist das 'Tor' nach draußen: Pakete, die nicht ins Heimnetz gehören, werden an das Gateway (den Router) geschickt.", "Es lädt den Akku des Smartphones.", "Es speichert alle empfangenen Mails.", "Es blockiert den Internetzugang komplett."],
        correct: 0,
        explanation: "Das Gateway ist der Ausgang aus dem lokalen Netz. Der Router nimmt die Pakete an und leitet sie ins Internet (zum Provider) weiter.",
        difficulty: "mittel"
    },
    {
        question: "Erkläre das Client-Server-Prinzip anhand eines Webseitenaufrufs.",
        options: ["Der Client (Browser) liefert die Daten, der Server zeigt sie an.", "Beide tauschen sich völlig gleichberechtigt aus.", "Der Server stellt eine Anfrage, der Client antwortet.", "Der Client (Browser) stellt eine Anfrage (Request), der Webserver liefert die Seite als Antwort."],
        correct: 3,
        explanation: "Das Netz basiert auf Arbeitsteilung. Der Client (z.B. dein Handy) 'fragt' nach der Seite, der Server 'antwortet' mit dem HTML-Code.",
        difficulty: "mittel"
    },
    {
        question: "Du willst in Filius eine eigene Webseite hosten. Welche zwei Software-Programme solltest du auf dem Server-PC installieren?",
        options: ["Befehlszeile & Ping", "Webserver & Text-Editor", "E-Mail-Server & Webbrowser", "DNS-Server & DHCP-Server"],
        correct: 1,
        explanation: "Den Webserver, um die Seite bereitzustellen, und den Text-Editor, um die HTML-Dateien (z.B. index.html) zu schreiben oder anzupassen.",
        difficulty: "mittel"
    },
    {
        question: "Wofür sorgt das CSS-Attribut 'text-align:center' in einem Absatz-Tag (<p>)?",
        options: ["Es zentriert den Text in der Mitte der Seite.", "Es macht den Text fett.", "Es ändert die Schriftfarbe zu rot.", "Es setzt den Text an den rechten Rand."],
        correct: 0,
        explanation: "Das englische 'center' bedeutet Mitte. Das Attribut richtet den Text zentriert aus.",
        difficulty: "mittel"
    },
    {
        question: "Welche Informationen siehst du im Filius 'Datenaustausch'-Fenster NICHT?",
        options: ["Quelle (Absender-IP)", "Ziel (Empfänger-IP)", "Protokoll (z.B. ICMP)", "Die genauen GPS-Koordinaten des Rechners"],
        correct: 3,
        explanation: "Im Netzwerkverkehr gibt es Quell-IP, Ziel-IP, Zeitstempel und Protokolle, aber keine physischen GPS-Standorte.",
        difficulty: "mittel"
    },
    {
        question: "Was passiert, wenn du in der Filius-Befehlszeile 'ping Hallo' statt einer IP-Adresse eingibst (und kein DNS eingerichtet ist)?",
        options: ["Der PC explodiert.", "Es erscheint 'Zieladresse nicht erreichbar' oder ein Fehler, da 'Hallo' keine gültige IP ist.", "Er pingt automatisch den Router an.", "Er wandelt 'Hallo' in 1.2.3.4 um."],
        correct: 1,
        explanation: "Ohne DNS kann der PC einen Textnamen nicht in eine IP-Adresse übersetzen. Der Befehl schlägt fehl.",
        difficulty: "mittel"
    },
    {
        question: "Warum kann es in einem Netzwerk nicht zwei Rechner mit der exakt selben IP-Adresse geben?",
        options: ["Weil das rechtlich verboten ist.", "Weil der Switch und Router dann nicht wissen, an welches der beiden Geräte das Datenpaket geliefert werden soll (Adresskonflikt).", "Weil IP-Adressen Geld kosten.", "Das ist möglich und passiert ständig."],
        correct: 1,
        explanation: "Genau wie zwei Häuser nicht die exakt gleiche Postanschrift in derselben Stadt haben dürfen, muss eine IP-Adresse im Netz eindeutig sein.",
        difficulty: "mittel"
    },


    /* ==========================================
       KATEGORIE: SCHWER (25 Fragen)
       ========================================== */
    {
        question: "Rechner A (192.168.0.10) und Rechner B (192.168.1.10) hängen am selben Switch. Ein Ping schlägt fehl. Warum?",
        options: ["Das Kabel ist kaputt.", "Sie befinden sich in unterschiedlichen Subnetzen. Ein Switch allein reicht hier nicht, man bräuchte einen Router.", "MAC-Adressen dürfen nicht auf .10 enden.", "Der Switch ist ausgeschaltet."],
        correct: 1,
        explanation: "Aufgrund der '1' in der dritten Stelle (bei einer Standard-Netzmaske) sind sie in verschiedenen Netzen (0er Netz vs. 1er Netz). Ein Router muss vermitteln.",
        difficulty: "schwer"
    },
    {
        question: "Du gibst im iPad 'www.beispiel.de' ein (Server in NY). Welcher Server muss als ALLERERSTES kontaktiert werden?",
        options: ["Der Webserver in New York", "Der DHCP-Server", "Der DNS-Server", "Der E-Mail-Server"],
        correct: 2,
        explanation: "Bevor die eigentliche Reise beginnen kann, muss das iPad erst die IP-Adresse von 'www.beispiel.de' herausfinden. Das macht der DNS-Server.",
        difficulty: "schwer"
    },
    {
        question: "Das Datenpaket hat dein iPad verlassen und das WLAN überquert. An welchem Gerät deines Heimnetzes kommt es nun an?",
        options: ["Beim Provider (Telekom/Vodafone)", "Beim Switch", "Beim Heimrouter (Gateway)", "Beim New Yorker Server"],
        correct: 2,
        explanation: "Der erste Stopp nach dem WLAN ist der Heimrouter (die FritzBox). Er ist das 'Gateway' zum Internet.",
        difficulty: "schwer"
    },
    {
        question: "Das Paket erreicht den Internetanbieter (Provider). Was tun die vielen Router auf dem restlichen Weg über den Atlantik?",
        options: ["Sie lesen alle Mails mit.", "Sie betreiben das Routing, also werten die Ziel-IP aus und leiten die Pakete Schritt für Schritt weiter ans Ziel.", "Sie wandeln WLAN in Glasfaser um.", "Sie verschlüsseln die Datenpakete neu."],
        correct: 1,
        explanation: "Das Internet ist ein riesiges Netz von Routern, die Pakete wie Postsortierzentren immer eine Station näher ans Ziel leiten.",
        difficulty: "schwer"
    },
    {
        question: "Die vielen Antwort-Pakete aus New York kommen an deinem iPad an. Was muss das iPad nun mit diesen Paketen machen?",
        options: ["Sie wieder zurückschicken.", "Sie ausdrucken.", "Sie in der richtigen Reihenfolge zusammensetzen und die Webseite im Browser grafisch aufbauen.", "Sie an den DNS-Server senden."],
        correct: 2,
        explanation: "Da die Webseite in viele kleine Pakete zerlegt wurde, muss der Client sie anhand ihrer Sequenznummern (TCP) zusammensetzen.",
        difficulty: "schwer"
    },
    {
        question: "Wenn du einen DNS-Server in Filius einrichtest, musst du einen 'A-Record' anlegen. Welche Informationen verknüpfst du dort?",
        options: ["MAC-Adresse und IP-Adresse", "Domainname (URL) und IP-Adresse", "Benutzername und Passwort", "HTML und CSS"],
        correct: 1,
        explanation: "Ein A-Record (Address Record) verknüpft einen Namen (z.B. www.filius.de) zwingend mit der IP-Adresse des Webservers (z.B. 192.168.0.11).",
        difficulty: "schwer"
    },
    {
        question: "Warum ist es eine schlechte Idee, einem Webserver in einem Firmennetzwerk seine IP-Adresse über DHCP zuzuweisen?",
        options: ["DHCP funktioniert nicht bei Servern.", "DHCP blockiert Port 80, der für Webseiten nötig ist.", "Die IP-Adresse des Servers könnte sich ändern, wodurch der DNS-Eintrag falsch wird und Clients ihn nicht mehr finden.", "DHCP löscht die Server-Festplatte."],
        correct: 2,
        explanation: "DHCP vergibt dynamische (wechselnde) IPs. Ein Server muss aber unter einer festen (statischen) IP erreichbar bleiben.",
        difficulty: "schwer"
    },
    {
        question: "Benedikt vergleicht HTTP mit einer 'offenen Postkarte'. Warum ist HTTPS wie ein 'verschlossener Brief'?",
        options: ["Weil HTTPS schneller versendet wird.", "Weil HTTPS den gesamten Inhalt (Passwörter, Texte) verschlüsselt. Router auf dem Weg können nur Ziel und Absender sehen, nicht den Inhalt.", "Weil HTTPS nur für Brief-E-Mails genutzt wird.", "Weil HTTPS kein Internet braucht."],
        correct: 1,
        explanation: "Die Verschlüsselung schützt die Nutzdaten (Nutzlast). Die Header-Daten (IPs) bleiben lesbar, damit das Paket geroutet werden kann.",
        difficulty: "schwer"
    },
    {
        question: "Im Datenaustausch-Fenster siehst du beim Aufruf einer Webseite erst DNS, dann TCP, dann HTTP. Warum diese Reihenfolge?",
        options: ["Das ist reiner Zufall.", "Zuerst wird die IP ermittelt (DNS), dann die sichere Verbindung aufgebaut (TCP Handshake), erst dann die Webseite angefordert (HTTP).", "HTTP ist das langsamste Protokoll und kommt deshalb am Schluss.", "TCP muss erst prüfen, ob der Bildschirm an ist."],
        correct: 1,
        explanation: "Ohne IP kein Ziel. Ohne etablierte TCP-Verbindung keine verlässliche HTTP-Übertragung. Die Reihenfolge ist zwingend.",
        difficulty: "schwer"
    },
    {
        question: "Bei einem Ping erhältst du die Meldung: '4 Pakete gesendet, 0 empfangen, 100% Paketverlust'. Was ist eine wahrscheinliche Ursache?",
        options: ["Die Uhrzeit stimmt nicht.", "Die IP-Adresse des Ziels existiert nicht, das Kabel fehlt oder die Firewall des Ziels blockiert Ping-Anfragen.", "Der Browser ist veraltet.", "Der DNS-Server ist abgestürzt."],
        correct: 1,
        explanation: "Paketverlust bedeutet, dass die ICMP-Anfragen ihr Ziel nicht erreicht haben oder das Ziel nicht antworten durfte (Firewall).",
        difficulty: "schwer"
    },
    {
        question: "Finde den Fehler im HTML: <p> Hier ist ein Link: <a src=\"kontakt.html\">Kontakt</a> </p>",
        options: ["Das <p> Tag fehlt am Ende.", "Das Attribut 'src' ist falsch. Bei Links muss es 'href' heißen.", "Man darf Links nicht in <p> Tags setzen.", "Das Wort 'Kontakt' muss großgeschrieben werden."],
        correct: 1,
        explanation: "Das <a> (Anchor) Tag nutzt immer 'href' (Hypertext Reference). 'src' (Source) wird bei Bildern (<img>) verwendet.",
        difficulty: "schwer"
    },
    {
        question: "Warum wird die Hintergrundfarbe bei diesem Code nicht grün? <body bg=\"green\">",
        options: ["Grün ist keine HTML-Farbe.", "Das Attribut heißt korrekt 'bgcolor', nicht 'bg'.", "Man muss 'Green' großschreiben.", "Der Body hat keinen Hintergrund."],
        correct: 1,
        explanation: "Der Browser erkennt 'bg' nicht. Der korrekte, alte HTML-Standard verlangt das Attribut 'bgcolor'.",
        difficulty: "schwer"
    },
    {
        question: "Was passiert in einem klassischen Client-Server-System, wenn der Webserver abstürzt, während 100 Clients zugreifen wollen?",
        options: ["Die Clients übernehmen die Rolle des Servers.", "Die Anfragen laufen ins Leere (Time-Out). Die Webseite ist für niemanden mehr erreichbar (Single Point of Failure).", "Das Internet stürzt komplett ab.", "Der Router generiert eine Ersatz-Webseite."],
        correct: 1,
        explanation: "Der größte Nachteil des Client-Server-Modells: Fällt der zentrale Server aus, gibt es keinen Dienst mehr.",
        difficulty: "schwer"
    },
    {
        question: "Du schreibst in Filius eine E-Mail von Alice an Bob. An welchen PC wird die E-Mail als erstes über SMTP geschickt?",
        options: ["Direkt an den PC von Bob.", "An den DNS-Server.", "An den zentralen Mailserver, wo sie im Postfach von Bob zwischengespeichert wird.", "An den Heimrouter von Alice."],
        correct: 2,
        explanation: "E-Mails gehen nie direkt an den Empfänger-PC, da dieser offline sein könnte. Sie gehen an den Mailserver, der sie speichert, bis Bob sie mit POP3 abruft.",
        difficulty: "schwer"
    },
    {
        question: "Du siehst die IP 192.168.1.23 bei einer Subnetzmaske von 255.255.255.0. Welcher Teil identifiziert das Netzwerk?",
        options: ["23", "1", "192.168.1", "192"],
        correct: 2,
        explanation: "Die Subnetzmaske (dreimal 255) gibt an, dass die ersten drei Zahlen (192.168.1) das Netz definieren. Die 23 ist die spezifische Geräte-Nummer (Host-ID).",
        difficulty: "schwer"
    },
    {
        question: "Ein Client im Filius-Netzwerk hat 'DHCP zur Konfiguration verwenden' aktiviert, bekommt aber die IP '0.0.0.0'. Woran liegt das?",
        options: ["0.0.0.0 ist eine gültige, perfekte IP.", "Es wurde vergessen, den DHCP-Server einzurichten oder ihn im Aktionsmodus zu starten.", "Die Firewall blockiert ping.", "Das Kabel ist falsch herum eingesteckt."],
        correct: 1,
        explanation: "0.0.0.0 bedeutet 'keine gültige IP gefunden'. Der Client sucht per 'DHCP Discover' nach einem Server, bekommt aber keine Antwort.",
        difficulty: "schwer"
    },
    {
        question: "Drei Notebooks am Switch: 192.168.0.1, 192.168.0.2, 192.168.0.3. Welche IP darfst du einem vierten Notebook NICHT geben?",
        options: ["192.168.0.4", "192.168.0.2", "192.168.0.100", "192.168.0.254"],
        correct: 1,
        explanation: "Die 192.168.0.2 ist bereits an Notebook 2 vergeben. Eine doppelte Vergabe führt zu einem IP-Konflikt.",
        difficulty: "schwer"
    },
    {
        question: "Beim Ping siehst du die Meldung 'Echo Request'. Was bedeutet die darauffolgende Meldung 'Echo Reply'?",
        options: ["Fehler beim Senden", "Der Ziel-Rechner bestätigt den Empfang und antwortet dem Absender.", "Die Zeit ist abgelaufen.", "Der Switch leitet das Paket um."],
        correct: 1,
        explanation: "'Request' ist die Anfrage, 'Reply' ist die erfolgreiche Antwort des Ziels.",
        difficulty: "schwer"
    },
    {
        question: "Könnte man ein Rechnernetz in Filius komplett ohne Switch aufbauen, wenn man nur genau ZWEI Rechner hat?",
        options: ["Nein, ein Switch ist immer Pflicht.", "Ja, indem man ein Kabel direkt von Rechner 1 zu Rechner 2 zieht (Peer-to-Peer).", "Ja, aber nur mit WLAN.", "Nein, man braucht dann einen Router."],
        correct: 1,
        explanation: "Zwei Rechner können direkt mit einem Kabel verbunden werden. Erst ab drei Rechnern braucht man zwingend einen Switch als Verteiler.",
        difficulty: "schwer"
    },
    {
        question: "Du hast einen funktionierenden DNS-Server, aber bei Client-PC 1 ist das Feld 'Domain Name Server' leer gelassen. Was passiert?",
        options: ["Nichts, er findet ihn automatisch.", "Er kann www.filius.de nicht aufrufen, da er nicht weiß, wen er nach der Übersetzung der Adresse fragen soll.", "Er ruft beim Provider an.", "Der Ping-Befehl geht kaputt."],
        correct: 1,
        explanation: "Der Client muss die IP-Adresse des DNS-Servers kennen, um seine DNS-Anfragen dorthin schicken zu können.",
        difficulty: "schwer"
    },
    {
        question: "Ein Webserver schickt als Antwort reinen HTML-Code (Text) zurück. Welche Software sorgt dafür, dass dieser Text als bunte Seite angezeigt wird?",
        options: ["Das Betriebssystem", "Der Text-Editor", "Der Webbrowser (Client)", "Die Grafikkarte"],
        correct: 2,
        explanation: "Der Webbrowser (wie Safari, Chrome) ist der Interpreter, der den HTML-Code (die 'Bauanleitung') liest und visuell rendert.",
        difficulty: "schwer"
    },
    {
        question: "Vergleiche das Routing von Datenpaketen im Internet mit dem postalischen Versenden eines 20-bändigen Lexikons (das nicht in ein Paket passt).",
        options: ["Man schickt das Lexikon als PDF.", "Man zerreißt die Bücher.", "Man packt jeden Band in ein eigenes Paket, nummeriert sie, schickt sie los (auch über verschiedene Wege) und der Empfänger sortiert sie am Ende.", "Man wartet auf einen größeren LKW."],
        correct: 2,
        explanation: "Genau so funktioniert Paketvermittlung (TCP/IP). Große Dateien werden zerteilt, einzeln geroutet und am Ziel zusammengesetzt.",
        difficulty: "schwer"
    },
    {
        question: "Du hast den Code <body style=\"font-family:Verdana\">. Was bewirkt der Teil 'font-family:Verdana'?",
        options: ["Er ändert die Textfarbe.", "Er legt die Schriftgröße fest.", "Er setzt die verwendete Schriftart der gesamten Seite auf 'Verdana'.", "Er übersetzt den Text ins Spanische."],
        correct: 2,
        explanation: "Das CSS-Attribut 'font-family' definiert die Schriftartfamilie, die der Browser zur Darstellung des Textes nutzen soll.",
        difficulty: "schwer"
    },
    {
        question: "Du sitzt an einem echten Windows-PC. Mit welchem Programm kannst du (ähnlich wie in Filius) deine IP-Adresse mit 'ipconfig' herausfinden?",
        options: ["Im Task-Manager", "In der Windows-Eingabeaufforderung (cmd / Terminal)", "Im Internet Explorer", "In den Datenschutzeinstellungen"],
        correct: 1,
        explanation: "Das schwarze Fenster nennt sich Eingabeaufforderung (Command Prompt / cmd). Es ist das reale Pendant zur Filius-Befehlszeile.",
        difficulty: "schwer"
    },
    {
        question: "Fasse Benedikts Präsentation zusammen: Welche Komponenten sind technisch nötig, um eine Webseite aufzurufen?",
        options: ["Nur ein Handy und WLAN.", "Nur ein Browser und HTML.", "Ein lokales Netz (Clients, Router), das Internet (Routing), Protokolle (HTTP/DNS) und ein Webserver.", "Nur ein DNS-Server und ein Switch."],
        correct: 2,
        explanation: "Dies fasst die komplette Kette zusammen: Start im LAN, Weg durch das WAN per Routing, Regelwerk durch Protokolle, Ziel am Server.",
        difficulty: "schwer"
    }
];
