*Abfrage in SQL
==============


** Abfrage 1

suche alle Kunden aus der Tabelle

select * from kunde;

Das Sternchen steht für alle Eigenschaften (Spalten) aller Kundendatensätze (Zeilen)

** Abfrage 2
Suche alle Vornamen und Nachnamen aller Kunden: 

select vorname, nachname From Kunde;

** Abfrage 3

Suche alle Vorname und nachnamen aller Kunden, die in Borken wohnen:

select vorname, nachname From kunde Where ort = "Borken";

