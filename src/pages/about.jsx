import React from 'react';

import { Link } from 'react-router-dom';
import '../styles/home.css';
import '../styles/button.css';

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <h1>Über diese Plattform</h1>
        
        <section className="about-section">
          <h2>Willkommen</h2>
          <p>
            Diese Weiterbildungsplattform wurde entwickelt, um Imker bei der modernen 
            Bewirtschaftung ihrer Bienenstöcke mittels IoT-Technologie zu unterstützen.
          </p>
        </section>

        <section className="about-section">
          <h2>Zielgruppe</h2>
          <p>
            Die Plattform richtet sich an Imker, die Interesse haben, ihre Bienenstöcke 
            mit intelligenten IoT-Sensoren auszustatten und datengestützte Entscheidungen 
            in der Imkerei zu treffen.
          </p>
        </section>

        <section className="about-section">
          <h2>Features</h2>
          <ul>
            <li>Umgang mit IoT-Bienenstöcken erlernen</li>
            <li>Echtzeitdaten von deinen Völkern überwachen</li>
            <li>Datengestützte Imkereiverwaltung</li>
            <li>Praktische Kurse und Anleitungen</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Über das Projekt</h2>
          <p>
            Dieses Projekt wird von der <strong>Forschungsgruppe KI Pilot</strong> am 
            <strong> Umwelt-Campus Birkenfeld</strong> entwickelt und betreut. Wir verbinden 
            moderne Technologie mit nachhaltiger Imkerei, um Imker dabei zu helfen, 
            ihre Bienenvölker effektiver und wissenschaftlicher zu verwalten.
          </p>
        </section>

        <section className="about-section">
          <h2>Kontakt & Support</h2>
          <p>
            Hast du Fragen oder benötigst Unterstützung? Kontaktiere uns über die 
            Support-Seite oder schreibe uns direkt an.
          </p>
        </section>
      </div>

      
    </div>
  );
}
