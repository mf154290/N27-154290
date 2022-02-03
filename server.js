// Programme verarbeiten oft Objekte der realen Welt. 
// Objekte haben Eigenschaften.
// In unserem Bankinprogramm interesieren uns Objekte,
// wie z.B. Kunde, Konto, Filiale, Bankautomat, ... 
// Alle Kunden unserer Bank haben dieselben Eigenschaften, aber
// unterschiedliche Eigenschaftswerte 

class Kunde{
    constructor(){
        this.IdKunde
        this.Nachname
        this.Vorname
        this.Kennwort
        this.Kontostand 
        this.Geburtsdatum
        this.Mail 
    }
}

// Von der Kunden-Klasse wird eine konkrete Instanz gebildet.

let kunde = new Kunde()

// Die konkrete Instanz bekommt Eigenschaftswerte zugewiesen.

kunde.IdKunde = 154290 
kunde.Nachname = "Tyler"
kunde.Vorname = "Sand"
kunde.Geburtsdatum = "21.5.2000"
kunde.Mail = "Tyler@web.de"
kunde.Kennwort = "123"



const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))

const server = meineApp.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

meineApp.get('/',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('index.ejs', {})          
})

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {  
    
    const idKunde = browserAnfrage.body.IdKunde 
    const kennwort = browserAnfrage.body.Kennwort 
    
    console.log("ID des Kunden:" +idKunde)
    console.log("Kennwort des Kunden:" +kennwort)

    serverAntwort.render('index.ejs', {})          
})

// Wenn die Login-Seite im Browser aufgerufen wird,...

meineApp.get('/login',(browserAnfrage, serverAntwort, next) => {     
    
    //... dann wird die login.ejs vom Server gerendert an den
    // Browser zurückgegeben:
    
    serverAntwort.render('login.ejs', {})          
})

// Die meineApp.post ('login') wird ausgeführt, sobald der Button
// auf dem Login-Formular gedrückt wird.

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {    
    serverAntwort.render('index.ejs', {})          
})