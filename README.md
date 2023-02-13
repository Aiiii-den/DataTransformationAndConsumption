# DataTransformationAndConsumption

## Allgemeine Informationen

Unsere Anwendung ist aus einem Hochschul-Projekt entstanden, bei dem es darum ging zwei verschiedene REST-APIs miteinander zu verschmelzen. Unsere erste API ist die [Digimon API](https://digimon-api.vercel.app/) und unsere zweite ist die [Digimon TCG API](https://documenter.getpostman.com/view/14059948/TzecB4fH).

Es soll der Anwenderin ermöglichen mithilfe einer einzigen Abfrage Daten aus beiden Schnittstellen zu ziehen. 
Beide APIs liefern uns unterschiedliche Informationen. Die Digimon API gibt uns das Level, den Namen und ein Bild zurück. Bei der Digimon TCG API erhalten wir Daten zu den jeweiligen Karten, die es zu einem Digimon gibt. (Wie z.B. Name des Digimons, ID der Karte, Stand des Digimons, ein Bild der Karte sowie noch weitere.) Über das Attribut 'Name' verschmelzen wir die Schnittstellen miteinander. So können wir Namen, Level, Bild und alle Karten, die es zum Digimon gibt, ausgeben lassen.
Die Verschmelzung der beiden API-Rückgaben erfolgt, indem zuerst ein Digimon eines bestimmten Namens der Digimon-API geliefert wird. Im zweiten Schritt werden in der selben Methode alle Karten von dem bestimmten Digimon von der Digimon TCG API abgerufen. Das Digimon-Objekt bekommt die zurück gelieferten als weiteres Attribut drangehängt. Das Bedeutet am Ende bekommt man ein Digimon, welches ein Karten-Array als zusätzliches Attribut enthält.

Die Startseite unserer Benutzeroberfäche enthält eine Suchfunktion und einen Button. Über die Suchfunktion kann man nach einzelnen Digimon suchen.

<img width="1440" alt="Startseite" src="https://user-images.githubusercontent.com/82514219/218509641-0f1fb30e-c3ef-40a5-ad99-ddbf41625d23.png">

Durch den Button kann man sich alle vorhandenen Digimons auf unserer Übersichtsseite ansehen. Hier sind alle vorhanden Digimons mit Bild aufgelistet.

<img width="1440" alt="Ueberschichtseite" src="https://user-images.githubusercontent.com/82514219/218509697-3fdbf2ad-2a59-4faa-a8b8-ed2a9aaecad7.png">

Möchte man zurück auf die Startseite, ist dies möglich, in dem man die orangene Schaltfläche (siehe Abb.: unten rechts 'zurück') betätigt.

Durch die Suchfunktion kann die Anwenderin genauere Informationen zu einem Digimon erhalten. Auf der Seite kann man sich den Namen, das Level und das Karten-Array ansehen.

<img width="1440" alt="Digimonausgabeseite" src="https://user-images.githubusercontent.com/82514219/218509446-03b97b71-6219-4080-942f-cb47c0648750.png">


## Download 

Um die Anwendung 'DataTransformationAndConsumption' zu starten, ist es zunächst notwendig den Code über github herunterzuladen.

Um das Paket herunterzuladen, klicken Sie auf die grüne Schaltfläche auf der '<> Code' steht und drücken Sie danach auf das 'Download ZIP' Feld, um die Datei auf ihren Rechner herunterzuladen.
Nach dem Sie den Ordner entpackt haben, durch Rechtsklick 'Ordner entpacken', öffnen Sie das Terminal und navigieren Sie sich zu dem entpackten Ordner.

## Installation

Um unsere Anwendung nutzen zu können, muss folgendes installiert werden. Zum einen ist zwingend notwendig, dass [Node.js](https://nodejs.org/en/) vorhanden ist. Des Weiteren verwenden wir [graphQL](https://graphql.org/) und [Apollo Server](https://www.apollographql.com/docs/apollo-server/) sowie [Angular](https://angular.io/).
Am besten öffnen Sie das Projekt in der Entwicklungsumgebung Ihrer Wahl. Dann gehen Sie in einmal in den Ordner Server und führen im Terminal folgenden Befehl aus

```
npm install
```
Den gleichen Befehl führen Sie auch im Frontend Ordner aus. Dann sind alle benötigenden Module und Abhängigkeiten bei Ihnen installiert.

Falls Sie Favoriten speichern wollen, dann müssen Sie sich eine Datenbank mit [MongoDB](https://www.mongodb.com/) anlegen. Ihre Datenbankanbindung müssen Sie in einer .env Datei konfigurieren.

## Start der Anwendung

Um das Backend zu starten, muss man im Ordner 'server' den folgenden Befehl in einem Terminal ausführen 
```
npm start
```
Das Frontend wird in einem extra Terminal im Ordner 'frontend' mit dem nachfolgenden Befehl gestartet
```
ng serve
```

## Nutzung der Anwendung

### Frontend 

Wenn Sie unsere Anwendung nutzen wollen dann öffnen Sie im Browser http://localhost:4200/. Jetzt können Sie das Frontend mit der Backendanbindung nutzen. 

### Backend

Über Apollo können Sie die Sandbox unter http://localhost:4000/ aufrufen. In dieser können Sie Datenbankabfragen stellen und Ihrer Favoriten speichern, ausgeben lassen, bearbeiten oder löschen. Des Weiteren können Sie Abfragen an unsere REST-Schnittstellen stellen und sich die Daten ausgeben lassen. 
So können alle Digimons mit ihren dazugehörigen Karten ausgegeben werden oder ein Digimon, bei dem man den Namen aus Attribut eingibt. (Siehe Abbildung)

<img width="1440" alt="DigimonByName" src="https://user-images.githubusercontent.com/82514219/218511433-9a7124d8-1148-4242-8a8b-7d2ad99f1812.png">

### Mögliche Weiterentwicklungen

Es können noch Filterfunktionen dazu kommen.
