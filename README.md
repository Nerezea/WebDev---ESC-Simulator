# WebDev---ESC-Simulator

Das Ereignis des Jahres kommt nun direkt zu euch ins Arbeitszimmer. Das beste am ESC ist (wie jeder weiß) die Punktevergabe und diese wird mit diesem ESC Simulator perfekt simuliert. Ich wünsche viel Spaß mit dem heimischen Gefühl eines laufenden ESC's mit Kommentar von Peter Urban aus der Sicht von Deutschland. Vielleicht, nur vielleicht (wenn das RNG gnädig ist) wird es kein letzter Platz werden.

ToDo List:

1. Peter Urban Kommentar hinzufügen samt Liste mit Kommentaren die eine 30% Chance haben nach einem Jury Voting zu triggern
2. Sleep Timer einführen zwischen den einzelnen Votings um eine Spannung aufzubauen
3. UK Bias hinzufügen
4. Punktevergabe Code verbessern => eventuell als Objekt mit 12/10/8/7/6/5/4/3/2/1 aktualisieren
5. Eventuell auch andere Länder forcieren wie Frankreich und Italien
6. Bias Manipulation auch für die nicht teilnehmenden Länder sowie dem Telefonvoting einführen
7. Weitere Bias Manipulationen, wie bspw. Cyprus Punkte an Greece oder San Marino Punkte an Italien

Bug List:

1. ~~ Durch die RNG Manipulation bei der UK und Germany in die Aktive Liste gesetzt werden, werden sie gleichzeitig nicht aus der Liste der Länder die nicht teilnehmen rausgelöscht. Das führt teilweise dazu das United Kingdom oder Germany wenn sie durch die Manipulation in den ESC reingeholt wurden, doppelt voten können, da sie nun in beiden Listen auftauchen.
   -> LÖSUNG: Direkt am Anfang bei der Initialisierung der Liste (bei Musician.randomListOfMusicians) Germany, UK, France einfügen, dann brauch man den Manipulationsquatsch gar nicht ~~
2. Probleme tauchen auf bei der Bias Manipulation für nicht teilnehmende Länder. Da mit der selben Funktion gearbeitet wird wie bei den teilnehmenden Ländern und die Logik darauf basiert das teilnehmende Land als while trigger zu benutzen, dieses aber bei nicht teilnehmenden Ländern nicht funktionieren kann, kracht es. Element ist der Auslöser
   -> LÖSUNG: ...
