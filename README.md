# DataTransformationAndConsumption

## Allgemeine Informationen

Unsere Anwendung ist aus einem Projekt entstanden, wo es darum ging zwei verschiedene REST_APIs miteinander zu verschmelzen. Unsere erste API ist die [Digimon API](https://digimon-api.vercel.app/) und unsere zweite ist die [Digimon TCG API](https://documenter.getpostman.com/view/14059948/TzecB4fH).

Es soll dem Anwender ermöglichen mithilfe einer einzigen Abfrage Daten aus beiden Schnittstellen zu ziehen. 
Beide APIs liefern uns unterschiedliche Informationen. Die Digimon API gibt uns das Level, den Namen und ein Bild zurück. Bei der Digimon TCG API erhalten wir Daten zu den jeweiligen Karten, die es zu einem Digimon gibt. (Wie z.Bsp. Name des Digimons, Name der Karte, Stand des Digimons, ein Bild der Karte sowie noch weitere.) Über das Attribut Name verschmelzen wir die Schnittstellen miteinander. So können wir Namen, Level, Bild und alle Karten, die es zum Digimon gibt, ausgeben lassen.

Aufgebaut ist die Benutzeroberfläche mit einer Startseite, auf der man eine Suchanfrage durchführen kann, einer Tabellenseite auf der alle gewünschten Digimons aufgelistet sind.

![image](https://user-images.githubusercontent.com/82514219/217797024-ea71a286-cd28-461e-afc7-451c9778b7df.png)

Auf der Tabellenseite Suchanfrage, ist es dem Nutzer/in ermöglichst, die vorherige Suchanfrage zu verfeinern, in dem er/Sie die Filterfunktion nutzt oder die Ergebnisse sortiert. 

![image](https://user-images.githubusercontent.com/82514219/217797148-8842197e-4870-430e-917c-2f7b3207df7c.png)

Möchte man zurück auf die Startseite, ist dies möglich, in dem man die orange Schaltfläche (siehe Abb.: unten rechts ‚zurück‘) betätigt.

Auf der Kartenseite Seite, wird, nach dem man einer der Schaltflächen mit den Digimons anklickt, ausführlich die Informationen des jeweiligen Digimons aufgelistet. 
[Bild von den Karten einfügen]


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
Aufgebaut ist die Benutzeroberfläche mit einer Startseite, auf der man eine Suchanfrage durchführen kann, einer Tabellenseite auf der alle gewünschten Digimons aufgelistet sind. Möchte man zurück auf die Startseite, ist dies möglich, in dem man die orange Schaltfläche betätigt.

Diese Funktionen stehen dem Anwender zur Verfügung zum jetzigen Zeitpunkt (09.09.2023). Weitere Funktionen mit denen man die Anwendung erweitern kann, wären, dass der Anwender auf der Tabellenseite due Suchanfragen zu verfeinern, in dem man eine Filterfunktion nutzt oder die Ergebnisse sortiert. Auch steht die Möglichkeit offen ein Login hinzuzufügen, damit man sich mit einem Namen und Passwort anmelden kann und die Digimons Favorisieren kann und eine Kartenseite auf der alle wichtigen Informationen nochmal ausführlich ausgelistet sind.


### Backend

Über Apollo können Sie die Sandbox unter http://localhost:4000/ aufrufen. In dieser können sie Datenbankabfragen stellen und ihrere Favorieten speichern, ausgeben lassen, bearbeiten oder löschen. Des Weitern können Sie Abfragen an unsere REST-Schnittstellen stellen und sich die Daten ausgeben lassen. 

![image](https://user-images.githubusercontent.com/82514219/217786243-36dbda65-d13e-4425-8fd5-0a9ae2bf922e.png)
