# DataTransformationAndConsumption

## Allgemeine Informationen

Unsere Anwendung ist aus einem Projekt entstanden, wo es darum ging zwei verschiedene REST_APIs miteinander zu verschmelzen. Unsere erst API ist die [Digimon API](https://digimon-api.vercel.app/) und unsere zweite ist die [Digimon TCG API](https://documenter.getpostman.com/view/14059948/TzecB4fH).

Es soll dem Anwender ermöglichen mithilfe einer einzigen Abfrage Daten aus beiden Schnittstellen zu ziehen. 
Beide APIs liefern uns unterschiedliche Informationen. Die Digimon API gibt uns das Level, den Namen und ein Bild zurück. Bei der Digimon TCG API erhalten wir Daten zu den jeweiligen Karten, die es zu einem Digimon gibt. (Wie z.Bsp. Name des Digimons, Name der Karte, Stand des Digimons, ein Bild der Karte sowie noch weitere.) Über das Attribut Name verschmelzen wir die Schnittstellen miteinander. So können wir Namen, Level, Bild und alle Karten, die es zum Digimon gibt, ausgeben lassen.

## Download 

Um die Anwendung ‚DataTransformationAndConsumption ‘ zu starten, ist es zunächst notwendig den Code über github herunterzuladen.

Um das Paket herunterzuladen, klicken Sie auf die grüne Schaltfläche auf der ‚<> Code‘ steht und drücken Sie danach auf das ‚Download ZIP‘ Feld, um die Datei auf ihren Rechner herunterzuladen.
Nach dem Sie den Ordner entpackt haben, durch Rechtsklick ‚Ordner entpacken‘, öffnen Sie das Terminal und navigieren Sie sich zu dem entpackten Ordner.

## Installation

Um unsere Anwendung nutzen zu können, muss folgendes installiert werden. Zum einen ist zwingend notwending, dass [Node.js](https://nodejs.org/en/) vorhanden ist. Des Weiteren verwenden wir [graphQL](https://graphql.org/) und [Apollo Sever](https://www.apollographql.com/docs/apollo-server/) sowie [Angular](https://angular.io/).
Am besten öffen Sie das Projekt in der Entwicklungsumgebung Ihrer Wahl. Dann gehen Sie in einmal in den Ordner Server und führen im Terminal folgenden Befehl aus

```
npm install
```
Den gleichen Befehl führen Sie auch im Frontend Ordner aus. Dann sind alle benötigenten Module und Abhängigkeiten bei Ihnen installiert.

Falls Sie Favorieten speichern wollen, dann mussen Sie sich eine Datenbank mit [MongoDB](https://www.mongodb.com/) anlegen. Ihre Datenbankanbindung mussen Sie in einer .env Datei konfigurieren.

## Start der Anwendung

Um das Backend zu starten, muss man im Ordner 'server' den folgenden Befehl in einem Terminal ausführen 
```
npm start
```
Das Frontend wird in einem extra Terminal im Ordner 'frontend' mit dem nachfolgenden Behfehl gestartet
```
ng serve
```

## Nutzung der Anwendung

### Frontend 

Wenn Sie unsere Anwendung nutzen wollen dann öffen Sie im Browser  http://localhost:4200/. Jetzt können Sie das Frontend mit der Backendanbindung nutzen.

### Backend

Über Apollo können Sie die Sandbox unter http://localhost:4000/ aufrufen. In dieser können sie Datenbankabfragen stellen und ihrere Favorieten speichern, ausgeben lassen, bearbeiten oder löschen. Des Weitern können Sie Abfragen an unsere REST-Schnittstellen stellen und sich die Daten ausgeben lassen. 

![image](https://user-images.githubusercontent.com/82514219/217786243-36dbda65-d13e-4425-8fd5-0a9ae2bf922e.png)
