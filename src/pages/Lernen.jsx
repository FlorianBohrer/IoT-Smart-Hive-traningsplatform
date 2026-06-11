import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { ZzSection, ZzTile, ZzTileGrid, ZzPipeline } from '../components/Zigzag';
import {
  ThermometerIcon,
  CloudIcon,
  BrainIcon,
  BellIcon,
  ChipIcon,
  ScaleIcon,
  SwarmIcon,
} from '../components/SensorIcons';
import '../styles/button.css';
import '../styles/lernen.css';
import '../styles/zigzag.css';

export default function Lernen() {
  return (
    <PageTransition>
      <div className="zz-page">
        {/* Hero */}
        <header className="zz-hero">
          <div>
            <span className="zz-kicker">Lernplattform</span>
            <h1 className="zz-hero-title">
              Dein Bienenstock <br /> kann mehr.
            </h1>
            <p className="zz-hero-text">
              Sensoren messen, eine KI denkt mit — und du wirst gewarnt, bevor etwas
              schiefgeht. Verständlich erklärt, ganz ohne Vorwissen.
            </p>
            <div className="zz-hero-actions">
              <Link to="/kurse" className="fuller-button yellow">Zu den Kursen</Link>
              <Link to="/ar" className="fuller-button quiet">AR-Ansicht</Link>
            </div>
          </div>
          <div className="zz-visual">
            <ZzTileGrid
              items={[
                { icon: <ThermometerIcon />, value: '24/7', label: 'Echtzeit-Überwachung' },
                { icon: <ChipIcon />, value: '7', label: 'Sensoren & Komponenten' },
                { icon: <BellIcon />, value: '5', label: 'Anomalieklassen' },
                { icon: <ScaleIcon />, value: '1 Min.', label: 'Messintervall' },
              ]}
            />
          </div>
        </header>

        {/* 1: Funktionsweise */}
        <ZzSection
          band
          index="So funktioniert es"
          title="Vom Summen zur Warnung"
          visual={
            <ZzPipeline
              steps={[
                { icon: <ThermometerIcon />, label: 'Sensoren messen im Stock' },
                { icon: <CloudIcon />, label: 'Octopus funkt per MQTT' },
                { icon: <BrainIcon />, label: 'KI prüft auf Anomalien' },
                { icon: <BellIcon />, label: 'Du wirst gewarnt' },
              ]}
            />
          }
        >
          <p className="zz-text">
            Sensoren erfassen rund um die Uhr <strong>Gewicht, Klima, Luftqualität und
            Ausflugverhalten</strong> — im Minutentakt.
          </p>
          <p className="zz-text">
            Eine KI vergleicht jeden Messwert mit dem Normalverhalten deines Volkes.
            Weicht etwas ab, wirst du sofort benachrichtigt.
          </p>
        </ZzSection>

        {/* 2: Kurs IoT */}
        <ZzSection
          reverse
          index="Kurs 1 · Einsteiger"
          title="IoT-Grundlagen"
          visual={<ZzTile icon={<ChipIcon />} caption="Sensoren, Octopus, MQTT" />}
        >
          <p className="zz-text">
            Lerne die Hardware kennen — vom BME280 an der Brutwabe bis zur Waage unter
            der Beute.
          </p>
          <ul className="feature-list">
            <li>Alle 7 Komponenten und ihre Aufgabe</li>
            <li>Der Weg der Daten in die Cloud</li>
            <li>Abschluss-Quiz mit 10 Fragen</li>
          </ul>
          <Link to="/iot" className="fuller-button yellow">Kurs starten</Link>
        </ZzSection>

        {/* 3: Kurs Anomalie */}
        <ZzSection
          band
          index="Kurs 2 · Fortgeschritten"
          title="Anomalieerkennung"
          visual={<ZzTile icon={<SwarmIcon />} caption="Schwärmen, Vandalismus, Brutgefahr" />}
        >
          <p className="zz-text">
            Jede Gefahr hinterlässt ein typisches Datenmuster: Ein Schwarm lässt das
            Gewicht binnen Minuten fallen. Lerne die Anomalieklassen und ihre Signale
            kennen.
          </p>
          <ul className="feature-list">
            <li>Die Gefahrenklassen im Detail</li>
            <li>Welcher Sensor welches Signal liefert</li>
            <li>Abschluss-Quiz mit 10 Fragen</li>
          </ul>
          <Link to="/anomaly" className="fuller-button yellow">Kurs starten</Link>
        </ZzSection>

        {/* 4: Kurs KI */}
        <ZzSection
          reverse
          index="Kurs 3 · Fortgeschritten"
          title="KI & Machine Learning"
          visual={<ZzTile icon={<BrainIcon />} caption="DBSCAN lernt das Normale, K-NN erkennt das Abnormale" />}
        >
          <p className="zz-text">
            Das Herzstück des Systems: <strong>DBSCAN</strong> lernt, wie sich dein Volk
            normalerweise verhält. <strong>K-NN</strong> prüft jeden neuen Messwert in
            Echtzeit dagegen.
          </p>
          <ul className="feature-list">
            <li>Beide Algorithmen verständlich erklärt</li>
            <li>Training mit simulierten Daten</li>
            <li>Abschluss-Quiz mit 10 Fragen</li>
          </ul>
          <Link to="/ai" className="fuller-button yellow">Kurs starten</Link>
        </ZzSection>

        {/* 5: Warum */}
        <ZzSection
          band
          index="Warum das zählt"
          title="Technik, die Völker rettet"
          visual={
            <ZzTileGrid
              items={[
                { value: '1,6 Mrd. €', label: 'Bestäubungsleistung pro Jahr' },
                { value: '35 °C', label: 'konstante Bruttemperatur' },
                { icon: <BellIcon />, label: 'Warnung statt Überraschung' },
                { icon: <ScaleIcon />, label: 'Kontrolle ohne Öffnen' },
              ]}
            />
          }
        >
          <p className="zz-text">
            Jede klassische Stockkontrolle ist nur eine Momentaufnahme — und stresst das
            Volk. Kontinuierliche Überwachung dreht das um: Du öffnest den Stock nur,
            wenn es nötig ist, und verpasst trotzdem nichts.
          </p>
        </ZzSection>

        {/* CTA */}
        <div className="zz-cta">
          <h2 className="zz-cta-title">Bereit loszulegen?</h2>
          <p className="zz-cta-text">
            Drei kurze Kurse, drei Quizze — und du verstehst dein smartes Volk.
          </p>
          <div className="zz-cta-actions">
            <Link to="/kurse" className="fuller-button yellow">Zur Kursübersicht</Link>
            <Link to="/ar" className="fuller-button quiet">AR-Ansicht öffnen</Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
