console.log("Übungen zu Klasse und Objekt")
console.log("==================")

// Übung 1
// In einem Fußballverein sollen Spieler verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten

// Zu a) Das Objekt der realen Welt ist der Spieler.

// Zu b) 

class Spieler{
    constructor(){
        this.Name
        this.Position
        this.Verein
        this.Nummer
    }
}

// Zu c)
// Es wird nun ein konkreter Spieler mit konkreten Eigenschaftswerten erzeugt.
// Dazu wird der konkrete Spieler deklariert (=bekanntgemacht): letspielerMueller.
// In einem zweiten Schritt wird der konkrete Spieler instaniziert = new Spieler().
let spielerMueller = new Spieler()

// Zu d)
// Es werden konkrete Eigenschaftswerte in den Arbeitsspeicher geschrieben. 
spielerMueller.Name = "Thomas Müller"
spielerMueller.Nummer = 25
spielerMueller.Position = "Stürmer"
spielerMueller.Verein = "FCB"
spielerMueller.Alter = 18

if(spielerMueller.Alter >= 18){
    spielerMueller.Volljaehrig = true
    console.log("Der Spieler " + spielerMueller.Name + " ist volljährig.")
}


console.log(spielerMueller.Name)
console.log(spielerMueller.Position)
console.log("Der Spieler " + spielerMueller.Name + " hat die Nummer " + spielerMueller.Nummer + ".") 


// Übung 2
// In einem Schulprogramm sollen Zeugnisse verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten

// Zu a) Das Zeugnis ist das Objekt der realen Welt.

// zu b) 

class Zeugnis{
    constructor(){
        this.SchuelerName
        this.Klasse
        this.Geburtsdatum
        this.Gesamtnote
        this.Fehlstunden
        this.Faecher
    }
}

// Zu c)
let zeugnisPit = new Zeugnis()
let zeugnisMax = new Zeugnis()

// Zu d)
zeugnisPit.SchuelerName = "Pit Kiff"
zeugnisPit.Fehlstunden = 100
zeugnisPit.Gesamtnote = 1

zeugnisMax.SchuelerName = "Max Muster"
zeugnisMax.Fehlstunden = 10
zeugnisMax.Gesamtnote = 2

if(zeugnisMax.Fehlstunden > zeugnisPit.Fehlstunden){
    console.log("Max Muster hat mehr Fehlstunden")
}else{
    console.log("Pit Kiff hat mehr Fehlstunden")
}

// Übung 3
// In einem Kiosk soll das Sortiment mit verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten

// Zu a) Die Objekte der realen Welt sind die Produkte.

// zu b) 

class Produkt{
    constructor(){
        this.BruttoPreis
        this.Bezeichnung
        this.MwStSatz
        this.Barcode 
        this.Angebote
        this.Sorten
    }
}

// Zu c)
let produkt1 = new Produkt()

// Zu d)
produkt1.Bezeichnung = "Kaugummi"
produkt1.Barcode = 5903294053952
produkt1.BruttoPreis = 1.19 // Im Quellcode steht anstelle des Kommas ein Punkt
produkt1.MwStSatz = 19 // Prozent 

console.log("Das Produkt " + produkt1.Bezeichnung + " hat den Bruttopreis " + produkt1.BruttoPreis + " €.")

produkt1.Nettopreis = produkt1.BruttoPreis / (100 + produkt1.MwStSatz) * 100

console.log("Nettopreis: " + produkt1.Nettopreis + " €.")

if(produkt1.BruttoPreis > 1){
    console.log("Achtung! Preis von " + produkt1.Bezeichnung + " muss gesenkt werden!")
}else{
    console.log("Preis von " + produkt1.Bezeichnung + " ist o.k.")
}

// Übung 4
// Für ein Schulfest sollen alle Stände verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten
// e) Geben sie ausgewählte Eigenschaften auf der console aus.

// Zu a) Das Objekt der realen Welt sind die Stände

// zu b) 

class Stand{
    constructor(){
        this.Name
        this.Lage 
        this.Angebote
        this.Ausgaben
        this.Einnahmen
        this.Personalanzahl
    }
}

// Zu c)
let standcafeteria = new Stand()

// Zu d)
standcafeteria.Name = "Cafeteria"
standcafeteria.Lage = "Turnhalle"
standcafeteria.Angebote = "Kaffe und Kuchen"
standcafeteria.Ausgaben = 500
standcafeteria.Einnahmen = 1000

if(standcafeteria.Einnahmen > standcafeteria.Ausgaben){
    console.log("Der Stand " + standcafeteria.Name + " macht Gewinn. ")
}else{
    console.log("Der Stand " + standcafeteria.Name + " macht keinen Gewinn")
}

    










