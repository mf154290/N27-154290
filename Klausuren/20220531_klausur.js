// Klausur 
// Wenn eine Aufgabe nicht funktioniert, dann bitte auskommentieren: /*  */
console.log("Aufgabe 1")
// Bei der Landtagswahl ergeben sich vereinfacht folgende Prozentpunkte für die Parteien:
let prozentpunkteSPD = 47
let prozentpunkteCDU = 53
// Vergleichen Sie die Ergebnisse mit if/else.
// Geben Sie im Terminal in einem Antwortsatz an, welche Partei die Wahl gewonnen hat.
// Wenn die Werte sich ändern, muss ihr Antwortsatz sich automatisch anpassen.
// Hier Ihre Lösung:

if(prozentpunkteSPD > prozentpunkteCDU){
    console.log("Die SPD hat die Wahl gewonnen")
}else{
    console.log("Die CDU hat die Wahl gewonnen")
}


console.log("Aufgabe 2")
// Bei einem großen Unternehmen stehen 900.000 € Ausgaben Einnahmen von 1.000.000 € gegenüber.
// Prüfen Sie mit if/else, ob das Unternehmen Gewinn oder Verlust gemacht hat.
// Arbeiten Sie mit Variablen, die mit den genannten Werten initialisiert werden.
// Geben Sie Ihre Lösung im Terminal aus: 

let UnternehmenAusgaben = 900000
let UnternehmenEinnahmen = 1000000

if(UnternehmenAusgaben == UnternehmenEinnahmen){
    console.log("Ausgaben sind größer das Unternehmen hat Verlust gemacht") 
}else{
    console.log("Einnahmen sind größer das Unternehmen hat Gewinn gemacht")
}

console.log("Aufgabe 3")
// In einem Handytest sollen Handys miteinander verglichen werden.
// a) Erstellen Sie die Klassendefinition mit mindestens 4 relevanten Eigenschaften:

class Handys{
    constructor(){
        this.Herstellung
        this.Qualität
        this.Marke
        this.Preis

    
    }
}

class Samsung{
    constructor(){
        this.Herstellung
        this.Qualität
        this.Marke
        this.Preis

    
    }
}

class Apple{
    constructor(){
        this.Herstellung
        this.Qualität
        this.Marke
        this.Preis

    
    }
}

// b) Instanzieren Sie zwei Objekte ("Samsung" und "Apple") der von Ihnen erstellten Klasse:

let samsung  = new Samsung ()
let apple = new Apple ()

// c) Initialisieren Sie beide Objekte mit geeigneten Eigenschaftswerten:

samsung.Herstellung = "Deutschland"
samsung.Qualität = "Gut"
samsung.Marke = "Samsung"
samsung.Preis = 450

apple.Herstellung = "Deutschland"
apple.Qualität = "Sehr gut"
apple.Marke = "Apple" 
apple.Preis = 750


// d) Vergleichen Sie mit if/else eine der relevanten Eigenschaften und geben Sie
//    im Terminal aus, ob Samsung oder Apple besser ist im Hinblick auf diese Eigenschaft:


if(samsung > apple ){
    console.log("Samsung" + samsung.Qualität  + " hatt die Bessere Qualität. ")
}else{
    console.log("Apple " + apple.Qualität  + " hatt die Bessere Qualität")
}


console.log("Aufgabe 4")
// Änderung Sie für Ihre ganze Banking-App das Farbschema, indem Sie 
// den grünen Bereich oben und den grünen Bereich unten 
// in eine andere, ansprechende Farbe ändern, 
// so dass die weiße Schrift weiterhin gut lesbar bleibt.


console.log("Aufgabe 5")
// In Ihrer Banking-App Banking-App soll der Kunde die Kosten für einen Kredit berechnen können.
// Die Formel für die monatliche Zinsbelastung lautet: 
// Zinsen pro Monat = (Kreditbetrag x Zinssatz) ÷ (100 x 12)
// Formulieren Sie auf Papier den "Issue" und dazu 10 sinnvolle Tasks