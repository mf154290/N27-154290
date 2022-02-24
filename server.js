// Programme verarbeiten oft Objekte der realen Welt.
// Objekte haben Eigenschaften.
// In unserem Bankingprogramm interessieren uns Objekte,
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

// Von der Kunden-Klasse wird eine konkrte Instanz gebildet. 

let kunde = new Kunde()

// Die konkrete Instanz bekommt Eigenschaftswerte zugewiesen.

kunde.IdKunde = 154290
kunde.Nachname = "Tyler"
kunde.Vorname = "Sand"
kunde.Geburtsdatum = "21.6.2000"
kunde.Mail = "Tyler@web.de"
kunde.Kennwort = "123"


const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
const cookieParser = require('cookie-parser')
const { cookie } = require('express/lib/response')
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))
meineApp.use(cookieParser('geheim'))

const server = meineApp.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// Die Methode meinerApp.get('/' ...) wird abgearbeitet, wenn 
// der Kunde die Indexseite (localhost:3000 bzw. n27.herokuapp.com) ansurft. 

meineApp.get('/',(browserAnfrage, serverAntwort, next) => {  

// Wenn der Kunde bereits angemeldet ist, soll die
// index-Seite an den Browser gegeben werden. 
    
// Wenn ein signierter Cookie mit Namen 'istAngemeldetAls' im Browser vorhanden ist,
// dann ist die Prüfung wahr und es wird die gerenderte Index-Seite an den Browser
// zurückgegeben. Anderenfalls wird die Login-Seite an den Browser gegeben.

    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        serverAntwort.render('index.ejs',{})
    }else{

// Wenn der Kunde noch nicht eigelogt ist, soll
// die Loginseite an den Browser zurückgegeben werden.

        serverAntwort.render('login.ejs', {
        meldung :  ""
        })   
    }       
})

// Die Methode meineApp.post('/login' ...) wird abgearbeitet, sobald
// der Anwender im Login-Formular auf "Einloggen" klickt.

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => { 
    
// Die im Browser eingegebene IdKunde und Kennwort werden zugewiesen
// an die Konstanten namens idKunde und Kennwort.
    
    const idKunde = browserAnfrage.body.IdKunde
    const kennwort = browserAnfrage.body.Kennwort
    
    console.log("ID des Kunden: " + idKunde)
    console.log("Kennwort des Kunden: " + kennwort)

// Die Identität des Kunden wird überprüft: 

    if(idKunde == kunde.IdKunde && kennwort == kunde.Kennwort){

// Ein Cookie namens 'istAngemeldetAls' wird beim Browser gesetzt.
// Der Wert des Cookies ist das in eine Zeichenkette umgewandelte Kunden-Objekt.
// Der Cookie wird signiert, also gegen Manipulationen geschützt. 

        serverAntwort.cookie('istAngemeldetAls',JSON.stringify(kunde),{signed:true})
        console.log("Der Cookie wurde erfolgreich gesetzt.")

// Wenn die Id des Kunden mit der Eingabe im Browser übereinstimmt
// UND ("&&") das Kennwort ebenfalls übereinstimmt,
// dann gibt der Server die gerenderte Index-Seite zurück.


        serverAntwort.render('index.ejs', {})
    }else{

// Wenn entweder die eingegebene Id oder das Kennwort oder beides
// nicht übereinstimmt, wird der Login verweigert. Es wird dann die
// gerenderte Login-Seite an den Browser zurückgegeben.

        serverAntwort.render('login.ejs', {
            meldung : "Ihre Zugangsdaten scheinen nicht zu stimmen."
        })
    }
})


// Wenn die login-Seite im Browser aufgerufen wird, ...

meineApp.get('/login',(browserAnfrage, serverAntwort, next) => {              

// ... dann wird die login.ejs vom Server gerendert an den
// Browser zurückgegeben:

// Der Cookie wird gelöscht

serverAntwort.clearCookie('istAngemeldetAls')

    serverAntwort.render('login.ejs', {
        meldung : "Bitte geben sie die Zugangsdaten ein"
    })          
})

// Die meineApp.post('login') wird ausgeführt, sobald der Button
// auf dem Login-Formular gedrückt wird.

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('index.ejs', {})          
})


require('./Uebungen/ifUndElse.js')
require('./Uebungen/klasseUndObjekt.js')