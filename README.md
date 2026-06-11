# AR Hive – Interaktive Lernplattform für smarte Imkerei

Eine React-Webanwendung, die Imkern die Technologien des smarten IoT-Bienenstocks vermittelt: Sensorik, KI-gestützte Anomalieerkennung und Augmented Reality.

## Features

- **Home** – Einstiegsseite mit animiertem Hero
- **AR** – AR-Darstellung des IoT-Bienenstocks (A-Frame + AR.js, Hiro-Marker) und Sensor-Akkordeon (Raspberry Pi, Octopus, BME280/680, APDS9960, HX711 u. a.)
- **Lernen** – Einführung in IoT, Machine Learning (DBSCAN/K-NN) und das Echtzeit-Anomalieerkennungssystem (EAES)
- **Kurse** – drei Themenkurse: IoT-Grundlagen, Anomalieerkennung, KI/ML
- **Quizze** – interaktive Wissensquizze mit Fortschrittsanzeige und Auswertung

## Tech-Stack

- React 18, React Router 6, Framer Motion
- Vite 5 (Build-Tool)
- A-Frame / AR.js für den AR-Modus (`public/aframe.html`)

## Entwicklung

```bash
npm install        # Abhängigkeiten installieren
npm run dev        # Dev-Server (http://localhost:5173)
npm run build      # Produktions-Build nach dist/
npm run preview    # Build lokal testen
npm run lint       # ESLint
```

## Projektstruktur

```
public/             statische Dateien (aframe.html, 3D-Modell)
src/
  components/       Navbar, Router, PageHero, InfoCard, PageTransition
  pages/            Home, AR, Lernen, Kurse, NoPage
    subpages/       AI, Anomaly, IOT (Kursinhalte)
    quiz/           QuizPage (gemeinsame Quiz-Logik) + quizData.js
  styles/           CSS mit zentralen Design-Tokens (styles.css)
  assets/           Bilder & 3D-Modelle
```

## Farbpalette

Gelb `#fad145`, Grün `#3d6a52` / `#337954`, Dunkel `#040404` / `#333`, Hell `#f9f9f9` – definiert als CSS-Variablen in `src/styles/styles.css`.
# IoT-Smart-Hive-traningsplatform
# IoT-Smart-Hive-traningsplatform
# IoT-Smart-Hive-traningsplatform
