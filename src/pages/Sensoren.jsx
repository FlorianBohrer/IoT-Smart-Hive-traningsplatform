import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SensorOverview from '../components/SensorOverview';
import { BrainIcon } from '../components/SensorIcons';
import '../styles/lernen.css';
import '../styles/button.css';
import '../styles/sensor-overview.css';

export default function Sensoren() {
  const startARView = () => {
    window.open('/aframe.html', '_blank', 'noopener');
  };

  return (
    <PageTransition>
      <div className="info-section">
        <main>
          <PageHero
            title={<>Willkommen auf der AR-Hive <br /> Weiterbildungsplattform</>}
            description="Erkunden Sie hier eine AR-Darstellung unseres IoT-gesteuerten Bienenstocks. Tauchen Sie tief in die Details ein, von der Gesamtstruktur bis hin zu den einzelnen Sensoren, und entdecken Sie die Technologien, die die Bienenhaltung neu definieren."
            anchors={[{ href: '#section1', label: 'Sensorübersicht' }]}
          >
            <div className="flex-grid-center">
              <button type="button" className="fuller-button yellow" onClick={startARView}>
                Starte AR-Modus
              </button>
            </div>
          </PageHero>

          <section id="section1">
            <h1 className="main-title">Sensorübersicht</h1>
            <SensorOverview />
          </section>

          {/* CTA zur Lernplattform */}
          <section className="ar-cta" aria-label="Weiter zur Lernplattform">
            <span className="ar-cta-glow" aria-hidden="true" />
            <span className="ar-cta-icon" aria-hidden="true"><BrainIcon /></span>
            <span className="ar-cta-kicker">Weiter geht&apos;s</span>
            <h2 className="ar-cta-title">
              Du kennst jetzt die Hardware. <br />
              Zeit zu verstehen, was sie dir sagt.
            </h2>
            <p className="ar-cta-text">
              Auf der Lernseite erfährst du Schritt für Schritt, wie aus diesen Messwerten
              Warnungen werden — von MQTT bis zur KI.
            </p>
            <div className="ar-cta-actions">
              <Link to="/lernen" className="fuller-button yellow">Jetzt lernen</Link>
              <Link to="/kurse" className="fuller-button quiet">Zu den Kursen</Link>
            </div>
          </section>
        </main>
      </div>
    </PageTransition>
  );
}
