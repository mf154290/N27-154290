console.log("******** K L A U S U R 26.10.2022 ********")

// Aufgabe 1
// Grenzen Sie Datenschutz und Datensicherheit gegeneinader ab!
// 
// Datenschutz ist der Schutz von Personenbezogenen Daten
// Daten sowie, den Schutz des Rechts auf informationelle Selbstbestimmung, zum Beispiel
// Verwendung änderung oder auch verfälschung, bestimmete Daten werden auch wie Bsp. Abschlüsse
// 10 Jahre Archiviert.
//
// Datensicherheit beschäftigt sich mit dem Schutz vor Daten jeglicher art,
// vor Manupulation, diebstahl unberechtigtenzugriff oder anderweitigen Bedrohungen.
//
// Das Ziel ist also darin daten gegen jeglicher bedrohung zu sichern und zu Beschützen
// Maßnahmen sind zum Beispiel ein antivirusprogramm als auch mit seinen Daten sicher um zu gehen
// und niemanden weiter zu geben als auch sein PW öfters zu ändern.
// 
// 
// 
// Aufgabe 2 a)
// Grenzen Sie symmetrische und asymmetrische Verschlüsselung gegeneinander ab! 
// Nennen Sie jeweils Vorteile! 
// Gehen Sie auch auf die Eigenschaften und Unterschiede von public key und private key ein!
// 
// Symmetrische Verschlüsselung benutz nur einen Schlüssel zum absichern, zum Beispiel legt
// man ein bestimmtes Passwort in einer Word-Datei an ist es symmetrisch verschlüsselt und es ist ein Public key
// wenn man ihn eine Person wieter gibt kann sie diese Datei auch öffnen.
//
// Bei der asymmetrischen Verschlüsselung werden zwei schlüssel benutz einen Öffentlichen und einen Privaten, 
// die asymmetrische Verschlüsselung wird bei E-Mail Verkehr benutz (Absender, Empfänger).
// 
// Der Vorteil bei der symmetrischen Verschlüsselung liegt darin das es schneller ist eine Datei zu verschlüsseln
// als auch das PW weiter zu geben.
//
// Der Vorteil bei der asymmetrischen Verschlüsselung liegt darin das die Datei sicherer ist und nur für eine bestimmte 
// Person zugänglich ist und man sie auch keinen anderen weiter geben kann. 
// 
// Aufgabe 2 b)
// Wie könnte eine Verschlüsselung aussehen, die die Vorteile symmetrischer und asymmetrischer
// Verschlüsselung miteinander verbindet?
// 
// Man legt ein bestimmtes Passwort in einer Word-Datei an dann ist es symmetrisch verschlüsselt
// 
// Bei der asymmetrischen Verschlüsselung wird ein Programm 7-Zip benutz wo man bestimmte datein mit einem
// Code verschlüsseln kann und diese nur für einen bestimmte Person zugänglich macht.
//
// Man legt ein bestimmetes Passwort ein und verwendet einen Code. 
//
//
// Aufgabe 3)
// Grenzen Sie Deklaration, Instanziierung und Initialisierung voeinander ab!  
// 
// Die Konkrete Instanz bekommt Eigenschaftwerte zugewiesen es wird Deklariert es wird also eine Instanz gebildet.
// Beispiel bei der-
// Instanzierung eines Objektes namens konto vom Typ Konto
// "let konto" bedeutet, dass ein Objekt namens konto exestieren soll. Man sagt,
// das konto wird deklariert. 

// "= new konto()" nennt man die instanziierung. Bei der Instanziierung wird Festplatten-
// speicher reserviert, um bei der anschließenden Initialisierung konkrete Eigenschafts-
// werte für das Objekt zu speichern.

// Bei der Initialisierung werden konkrete Eigenschaftswerte in die reservierten Speicher-
// zellen geschrieben.
//
// Die Zuweisung von Eigenschaftswerten geschieht immer von rechts nach links.
//
//
//
//
//
// 
// 
// 
//
//
//
//
//
//
// Aufgabe 5a)
// Sie werden beauftragt ein Programm zu entwicklen, dass alle Zeugnisse einer Schule digital verwaltet.  
// Entwerfen Sie eine Klasse mit relevanten Eigenschaften!

class Zeugnis{
   constructor(){
       this.Klasse
       this.Noten
       this.Schuelername
       this.Faecher
       this.Gesamtnote
       this.Fehlstunden
       this.Geburtsdatum
   }
}






// Aufgabe 5b)
// Führen Sie Deklaration, Instanzzierung und Initialisierung für das Halbjahreszeugnis 
// des Schüler Pit Kiff durch. 
// Vergeben Sie realistische Eigenschaftswerte.  
//
//
//
//
//

class Zeugnis{
   constructor(){
       this.Klasse
       this.Schuelername
       this.Faecher
       this.Gesamtnote
       this.Fehlstunden
       this.Geburtsdatum
   }
}

let zeugnisPitkiff = new Zeugnis ()


zeugnisPitkiff.SchuelerName = "Pit Kiff"
zeugnisPitkiff.Fehlstunden = 100
zeugnisPitkiff.Gesamtnote = 1
zeugnisPitkiff.Klasse = "10b"
zeugnisPitkiff.Geburtsdatum = "24.10.2004"





// Aufgabe 5c)
// Geben Sie die Eigenschaftswerte aus 5b auf der Konsole wie folgt aus: Je Eigenschaft soll
// in jeweils einer Zeile die Eigenschaft und der zugehörige Wert angezeigt werden.
// Beispiel für:
// Schuhgröße: 40
// Haarfarbe: braun 

class Zeugnis{
   constructor(){
       this.Klasse
       this.Schuelername
       this.Faecher
       this.Gesamtnote
       this.Fehlstunden
       this.Geburtsdatum
   }
}

let zeugnisPitkiff = new Zeugnis ()


zeugnisPitkiff.SchuelerName = "Pit Kiff"
zeugnisPitkiff.Fehlstunden = 100
zeugnisPitkiff.Gesamtnote = 1
zeugnisPitkiff.Klasse = "10b"
zeugnisPitkiff.Geburtsdatum = "24.10.2004"




// Aufgabe 6)
// Zwei Schüler haben bekommen Zeugnisse: 
// Pit: Punkte (Mathe: 15, Deutsch: 10, Englisch:  5) 
// Git: Punkte (Mathe: 10, Deutsch:  8, Englisch: 15) 
//
// Initialisieren Sie Variablen für alle genannten Eigenschaftswerte. 
// Programmieren Sie folgende Logik:
// * Wenn die Durchschnittspunktzahl von Pit größer ist, soll auf der Konsole stehen: 
//     "Pit hat das bessere Zeugnis" 
// * Wenn die Durchschnittspunktzahl von Git größer ist, soll auf der Konsole stehen: 
//     "Git hat das bessere Zeugnis"
// Wenn die Durchschnittspunktzahl gleich ist, dann soll auf der Konsole stehen: 
//     "Pit gleich Git" 
// Wenn die Durchschnittspunktzahl bei einem doppelt so groß oder größer ist, dann soll auf der Konsole stehen: 
//     "Git hat das viel bessere Zeugnis" bzw.
//     "Pit hat das viel bessere Zeugnis"




let punktzahlPit = 30
let punktzahlGit = 33



if(punktzahlPit < punktzahlGit){
   console.log("Pit hat das bessere Zeugnis")
}else{
   console.log("Git hat das bessere Zeugnis")
}

let Pit1 = 30
let Git2 = 30



if(Pit1 == Git2){
   console.log("Pit1 ist gleich Git2")
}else{
   console.log("Pit1 ist nicht gleich Git2")
}