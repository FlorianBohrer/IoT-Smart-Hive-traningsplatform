/**
 * Zentrale Quiz-Daten für alle drei Kurse.
 * Fachliche Grundlage: Ueding, K. (2020): „Machine Learning basierte
 * Echtzeit Anomalieerkennung in IoT-Systemen", Bachelorthesis,
 * Hochschule Trier / Umwelt-Campus Birkenfeld.
 */
export const quizzes = {
  iot: {
    id: 'iot',
    title: 'IoT-Quiz',
    questions: [
      {
        questionText: 'Wie oft und über welches Protokoll sendet der IoT-Bienenstock seine Messdaten an die Basisstation?',
        options: [
          'Im Einminutentakt über MQTT.',
          'Einmal pro Stunde über HTTP.',
          'Nur bei Alarm über SMS.',
          'Kontinuierlich über Bluetooth.',
        ],
        correctAnswer: 'Im Einminutentakt über MQTT.',
      },
      {
        questionText: 'Welche Aufgabe übernimmt der Raspberry Pi im IoT-Bienenstock?',
        options: [
          'Er misst die Temperatur direkt im Brutraum.',
          'Er ist die Basisstation: Er verarbeitet die empfangenen Daten, speichert sie in einer MySQL-Datenbank und stellt sie für die Webseite bereit.',
          'Er steuert die Klimaanlage des Bienenstocks.',
          'Er dient nur als WLAN-Repeater für den Octopus.',
        ],
        correctAnswer:
          'Er ist die Basisstation: Er verarbeitet die empfangenen Daten, speichert sie in einer MySQL-Datenbank und stellt sie für die Webseite bereit.',
      },
      {
        questionText: 'Welche Rolle spielt der Octopus im System?',
        options: [
          'Er speichert alle Messdaten dauerhaft in einer Datenbank.',
          'Er klassifiziert die erkannten Anomalien.',
          'Er liest die angeschlossenen Sensoren aus, verarbeitet die Daten und sendet sie über MQTT an die Basisstation.',
          'Er versendet die Warn-E-Mails an den Imker.',
        ],
        correctAnswer:
          'Er liest die angeschlossenen Sensoren aus, verarbeitet die Daten und sendet sie über MQTT an die Basisstation.',
      },
      {
        questionText: 'Warum wird im IoT-Bienenstock ein I2C-Multiplexer benötigt?',
        options: [
          'Um die Funkreichweite des WLAN zu erhöhen.',
          'Weil die zwei BME280-Sensoren dieselbe I2C-Adresse besitzen und sonst nicht gemeinsam angeschlossen werden könnten.',
          'Um die Stromversorgung der Sensoren zu regeln.',
          'Damit der Raspberry Pi mehrere Bienenstöcke gleichzeitig verwalten kann.',
        ],
        correctAnswer:
          'Weil die zwei BME280-Sensoren dieselbe I2C-Adresse besitzen und sonst nicht gemeinsam angeschlossen werden könnten.',
      },
      {
        questionText: 'Was misst der BME680 und wo ist er angebracht?',
        options: [
          'Er misst nur das Gewicht und sitzt unter der Beute.',
          'Er misst relative Feuchtigkeit, barometrischen Druck, Temperatur und Gase — angebracht im Deckel des Bienenstocks.',
          'Er misst das Ausflugverhalten und sitzt am Einflugloch.',
          'Er misst die Helligkeit und sitzt auf dem Dach.',
        ],
        correctAnswer:
          'Er misst relative Feuchtigkeit, barometrischen Druck, Temperatur und Gase — angebracht im Deckel des Bienenstocks.',
      },
      {
        questionText: 'Wofür wird der SparkFun RGB and Gesture Sensor (APDS9960) verwendet?',
        options: [
          'Zur Messung der Honigqualität.',
          'Zur Gewichtsermittlung des Bienenstocks.',
          'Um näherungsweise das Ausflugverhalten der Bienen zu ermitteln.',
          'Zur Messung des CO₂-Gehalts im Brutraum.',
        ],
        correctAnswer: 'Um näherungsweise das Ausflugverhalten der Bienen zu ermitteln.',
      },
      {
        questionText: 'Mit welcher Komponente wird das Gewicht des Bienenstocks ermittelt?',
        options: [
          'Mit dem BME280-Umweltsensor.',
          'Mit einer Waage auf Basis des HX711-Wägezellen-Gewichtssensors.',
          'Mit dem APDS9960-Sensor.',
          'Mit dem I2C-Multiplexer.',
        ],
        correctAnswer: 'Mit einer Waage auf Basis des HX711-Wägezellen-Gewichtssensors.',
      },
      {
        questionText: 'Welches Werkzeug verarbeitet die eingehenden Daten auf der Basisstation und schreibt sie in die MySQL-Datenbank?',
        options: ['Node-RED', 'Excel', 'Arduino IDE', 'TensorFlow'],
        correctAnswer: 'Node-RED',
      },
      {
        questionText: 'Welche Messdaten erfasst der IoT-Bienenstock?',
        options: [
          'Nur das Gewicht und die Außentemperatur.',
          'Innere/äußere Temperatur und Luftfeuchtigkeit, Gaszusammensetzung, Gewicht, Anzahl der Ein- und Ausflüge sowie die Brutraumtemperatur.',
          'Nur die Anzahl der Bienen im Stock.',
          'Ausschließlich Videoaufnahmen vom Einflugloch.',
        ],
        correctAnswer:
          'Innere/äußere Temperatur und Luftfeuchtigkeit, Gaszusammensetzung, Gewicht, Anzahl der Ein- und Ausflüge sowie die Brutraumtemperatur.',
      },
      {
        questionText: 'Welchen Vorteil bietet es, dass die Anomalie-Berechnung direkt auf dem Raspberry Pi 4 stattfindet?',
        options: [
          'Der Bienenstock kann ohne ständige Internetverbindung betrieben werden.',
          'Die Berechnung ist dadurch hundertmal schneller als in der Cloud.',
          'Es werden keine Sensoren mehr benötigt.',
          'Die Daten müssen nicht mehr gespeichert werden.',
        ],
        correctAnswer: 'Der Bienenstock kann ohne ständige Internetverbindung betrieben werden.',
      },
    ],
  },

  ki: {
    id: 'ki',
    title: 'KI-Quiz',
    questions: [
      {
        questionText: 'Zu welcher Machine-Learning-Kategorie gehört der KNN-Algorithmus (k-Nearest-Neighbor)?',
        options: [
          'Supervised Learning (überwachtes Lernen)',
          'Unsupervised Learning (unüberwachtes Lernen)',
          'Reinforcement Learning',
          'Deep Learning',
        ],
        correctAnswer: 'Supervised Learning (überwachtes Lernen)',
      },
      {
        questionText: 'Zu welcher Machine-Learning-Kategorie gehört DBSCAN?',
        options: [
          'Supervised Learning, Teilgebiet Regression',
          'Unsupervised Learning — als dichtebasiertes Clustering-Verfahren',
          'Reinforcement Learning',
          'Supervised Learning, Teilgebiet Klassifikation',
        ],
        correctAnswer: 'Unsupervised Learning — als dichtebasiertes Clustering-Verfahren',
      },
      {
        questionText: 'Was gibt der Wert k beim KNN-Algorithmus an?',
        options: [
          'Die Anzahl der Cluster, die gebildet werden sollen.',
          'Die Anzahl der nächsten Nachbarn, die zur Überprüfung eines Datenpunkts herangezogen werden.',
          'Den Radius, in dem nach Nachbarn gesucht wird.',
          'Die Anzahl der Trainingsdurchläufe.',
        ],
        correctAnswer:
          'Die Anzahl der nächsten Nachbarn, die zur Überprüfung eines Datenpunkts herangezogen werden.',
      },
      {
        questionText: 'Welches Distanzmaß wird in der Thesis für den KNN-Algorithmus verwendet?',
        options: ['Die euklidische Distanz', 'Die Manhattan-Distanz', 'Die Hamming-Distanz', 'Die Cosinus-Ähnlichkeit'],
        correctAnswer: 'Die euklidische Distanz',
      },
      {
        questionText: 'Warum wird KNN als „Lazy Learning"-Algorithmus bezeichnet?',
        options: [
          'Weil er nur sehr langsam rechnet.',
          'Weil die eigentliche Rechenarbeit nicht beim Training, sondern erst bei der Abfrage der zu überprüfenden Daten anfällt.',
          'Weil er nur einen Teil der Trainingsdaten verwendet.',
          'Weil er keine Labels benötigt.',
        ],
        correctAnswer:
          'Weil die eigentliche Rechenarbeit nicht beim Training, sondern erst bei der Abfrage der zu überprüfenden Daten anfällt.',
      },
      {
        questionText: 'Welche zwei Parameter benötigt der DBSCAN-Algorithmus?',
        options: [
          'eps (Radius um den Punkt) und min_samples (Mindestanzahl Punkte im Radius)',
          'k (Nachbarn) und die Lernrate',
          'Anzahl der Cluster und Anzahl der Iterationen',
          'Schwellwert und Batch-Größe',
        ],
        correctAnswer: 'eps (Radius um den Punkt) und min_samples (Mindestanzahl Punkte im Radius)',
      },
      {
        questionText: 'In welche drei Punktarten unterteilt DBSCAN eine Punktwolke?',
        options: [
          'Kernpunkte, Randpunkte und Rauschpunkte',
          'Startpunkte, Endpunkte und Mittelpunkte',
          'Normalpunkte, Extrempunkte und Fehlerpunkte',
          'Trainingspunkte, Testpunkte und Validierungspunkte',
        ],
        correctAnswer: 'Kernpunkte, Randpunkte und Rauschpunkte',
      },
      {
        questionText: 'Was sagt der Silhouetten-Koeffizient aus?',
        options: [
          'Die Geschwindigkeit des Clustering-Verfahrens.',
          'Die Qualität eines Clustering-Verfahrens — das Ergebnis liegt zwischen −1 (schlechtester Wert) und 1 (bester Wert).',
          'Die Anzahl der gefundenen Anomalien.',
          'Den Energieverbrauch des Algorithmus.',
        ],
        correctAnswer:
          'Die Qualität eines Clustering-Verfahrens — das Ergebnis liegt zwischen −1 (schlechtester Wert) und 1 (bester Wert).',
      },
      {
        questionText: 'Was versteht man unter Overfitting beim Supervised Learning?',
        options: [
          'Das Modell wurde zu kurz trainiert und liefert deshalb ungenaue Vorhersagen.',
          'Das Modell orientiert sich zu stark an den Trainingsdaten („lernt sie auswendig") und sagt neue Daten dadurch schlecht vorher.',
          'Das Modell verwendet zu wenige Trainingsdaten.',
          'Das Modell hat zu viele Eingabewerte.',
        ],
        correctAnswer:
          'Das Modell orientiert sich zu stark an den Trainingsdaten („lernt sie auswendig") und sagt neue Daten dadurch schlecht vorher.',
      },
      {
        questionText: 'In welche zwei Teilgebiete ist das Supervised Learning untergliedert?',
        options: [
          'Klassifikation (diskrete Zielmenge) und Regression (kontinuierliche Zielmenge)',
          'Clustering und Dimensionsreduktion',
          'Training und Testen',
          'Encoding und Decoding',
        ],
        correctAnswer: 'Klassifikation (diskrete Zielmenge) und Regression (kontinuierliche Zielmenge)',
      },
    ],
  },

  anomaly: {
    id: 'anomaly',
    title: 'Anomalie-Quiz',
    questions: [
      {
        questionText: 'Was ist eine Anomalie im Sinne der Echtzeit-Anomalieerkennung?',
        options: [
          'Jeder Messwert, der nachts erfasst wird.',
          'Ein Datenpunkt, der so von der Norm abweicht, dass er von einem Algorithmus als Unregelmäßigkeit erkannt werden kann.',
          'Ein Sensor, der keine Daten mehr sendet.',
          'Ein besonders hoher Honigertrag.',
        ],
        correctAnswer:
          'Ein Datenpunkt, der so von der Norm abweicht, dass er von einem Algorithmus als Unregelmäßigkeit erkannt werden kann.',
      },
      {
        questionText: 'Welche drei Arten von Anomalien werden unterschieden?',
        options: [
          'Punktuelle, kontextuelle und kollektive Anomalien',
          'Kleine, mittlere und große Anomalien',
          'Mechanische, elektrische und biologische Anomalien',
          'Interne, externe und gemischte Anomalien',
        ],
        correctAnswer: 'Punktuelle, kontextuelle und kollektive Anomalien',
      },
      {
        questionText: 'Welche Anomalieart ist am schwierigsten zu erkennen?',
        options: [
          'Die univariate punktuelle Anomalie.',
          'Die kollektive Anomalie — die Datensätze sind einzeln betrachtet normal, erst als Gruppe zeigt sich die Unregelmäßigkeit (z. B. im EKG).',
          'Die kontextuelle Anomalie, weil sie nur nachts auftritt.',
          'Es gibt keinen Unterschied im Schwierigkeitsgrad.',
        ],
        correctAnswer:
          'Die kollektive Anomalie — die Datensätze sind einzeln betrachtet normal, erst als Gruppe zeigt sich die Unregelmäßigkeit (z. B. im EKG).',
      },
      {
        questionText: 'Welche drei Anomalieklassen soll das System des IoT-Bienenstocks vorhersagen?',
        options: [
          'Schwärmen, Vandalismus und Gefahr für den Nachwuchs',
          'Regen, Sturm und Hitze',
          'Honigdiebstahl, Wespenangriff und Stromausfall',
          'Königinnenverlust, Futtermangel und Krankheit',
        ],
        correctAnswer: 'Schwärmen, Vandalismus und Gefahr für den Nachwuchs',
      },
      {
        questionText: 'Wofür werden die DBSCAN-Cluster im Livesystem der Thesis gebildet?',
        options: [
          'Für die Anomalien, um sie direkt zu klassifizieren.',
          'Für den „Normalzustand" des Bienenstocks — neue Datenpunkte werden dagegen verglichen, um Anomalien zu erkennen.',
          'Für die Wettervorhersage am Standort.',
          'Für die Sortierung der E-Mails an den Imker.',
        ],
        correctAnswer:
          'Für den „Normalzustand" des Bienenstocks — neue Datenpunkte werden dagegen verglichen, um Anomalien zu erkennen.',
      },
      {
        questionText: 'Warum wurden für die Anomalievorhersage künstliche Anomalien generiert?',
        options: [
          'Weil künstliche Daten genauer sind als echte.',
          'Weil für den IoT-Bienenstock noch keine echten Anomaliedaten existieren, die Klassifizierung aber Vergleichsdaten benötigt.',
          'Um den Speicherplatz der Datenbank zu füllen.',
          'Weil der Imker dies vorgeschrieben hat.',
        ],
        correctAnswer:
          'Weil für den IoT-Bienenstock noch keine echten Anomaliedaten existieren, die Klassifizierung aber Vergleichsdaten benötigt.',
      },
      {
        questionText: 'Wann stuft das System einen Live-Datenpunkt als Anomalie ein?',
        options: [
          'Sobald ein einziger Nachbar außerhalb des eps-Radius liegt.',
          'Wenn mehr als die Hälfte der nächsten Nachbarn außerhalb des eps-Radius liegen oder nicht zu den „normalen" Clustern gehören.',
          'Wenn der Messwert exakt null beträgt.',
          'Wenn zwei Messungen hintereinander identisch sind.',
        ],
        correctAnswer:
          'Wenn mehr als die Hälfte der nächsten Nachbarn außerhalb des eps-Radius liegen oder nicht zu den „normalen" Clustern gehören.',
      },
      {
        questionText: 'Wie wird der Imker über eine erkannte und klassifizierte Anomalie informiert?',
        options: [
          'Per E-Mail über einen Node-RED-Knoten.',
          'Über eine Sirene am Bienenstock.',
          'Per Brief.',
          'Gar nicht — das System behebt Probleme selbstständig.',
        ],
        correctAnswer: 'Per E-Mail über einen Node-RED-Knoten.',
      },
      {
        questionText: 'Was passiert beim Onlinelearning des Systems?',
        options: [
          'Das System lädt regelmäßig Updates aus dem Internet herunter.',
          'Der Imker bestätigt oder korrigiert die Anomalievorhersage per E-Mail — mit diesem Expertenwissen wird das KNN-Modell zur Laufzeit weiterentwickelt.',
          'Die Bienen lernen, den Sensoren auszuweichen.',
          'Die Sensoren kalibrieren sich täglich neu.',
        ],
        correctAnswer:
          'Der Imker bestätigt oder korrigiert die Anomalievorhersage per E-Mail — mit diesem Expertenwissen wird das KNN-Modell zur Laufzeit weiterentwickelt.',
      },
      {
        questionText: 'Worin unterscheiden sich univariate und multivariate punktuelle Anomalien?',
        options: [
          'Univariate betreffen eine Dimension (z. B. ein einzelner Temperaturwert von 60 °C) und sind leicht erkennbar; multivariate bestehen aus mehreren Dimensionen und sind schwerer zu erkennen.',
          'Univariate treten nur im Sommer auf, multivariate nur im Winter.',
          'Univariate betreffen Sensoren, multivariate die Datenbank.',
          'Es gibt keinen Unterschied — die Begriffe sind Synonyme.',
        ],
        correctAnswer:
          'Univariate betreffen eine Dimension (z. B. ein einzelner Temperaturwert von 60 °C) und sind leicht erkennbar; multivariate bestehen aus mehreren Dimensionen und sind schwerer zu erkennen.',
      },
    ],
  },
};
