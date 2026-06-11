import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';
import { ZzSection, ZzTile, ZzTileGrid, ZzPipeline } from '../../components/Zigzag';
import {
  ThermometerIcon,
  CloudIcon,
  BrainIcon,
  BellIcon,
  MotionIcon,
  ScaleIcon,
} from '../../components/SensorIcons';
import '../../styles/button.css';
import '../../styles/lernen.css';
import '../../styles/zigzag.css';

export default function AI() {
  return (
    <PageTransition>
      <div className="zz-page">
        {/* Hero */}
        <header className="zz-hero">
          <div>
            <span className="zz-kicker">Kurs 3 · Fortgeschritten</span>
            <h1 className="zz-hero-title">Die KI hinter dem Bienenstock</h1>
            <p className="zz-hero-text">
              Sensoren liefern Zahlen — die KI macht daraus Bedeutung. Zwei Algorithmen
              lernen, was für dein Volk normal ist.
            </p>
            <ul className="zz-hero-meta">
              <li>ca. 25 Minuten</li>
              <li>Mit Abschluss-Quiz</li>
              <li>DBSCAN & K-NN</li>
            </ul>
          </div>
          <div className="zz-visual">
            <ZzPipeline
              steps={[
                { icon: <ThermometerIcon />, label: 'Sensordaten' },
                { icon: <CloudIcon />, label: 'MQTT-Übertragung' },
                { icon: <BrainIcon />, label: 'ML-Modell' },
                { icon: <MotionIcon />, label: 'Klassifikation' },
                { icon: <BellIcon />, label: 'Alarm an den Imker' },
              ]}
            />
          </div>
        </header>

   {/* 2: MQTT */}
       

        {/* 2: Normalverhalten */}
        <ZzSection
          band
          index="Kapitel 2"
          title="Erst das Normale lernen"
          visual={
            <ZzTileGrid
              items={[
                { value: '~35 °C', label: 'Bruttemperatur' },
                { icon: <ScaleIcon />, label: 'natürlicher Gewichtsverlauf' },
                { icon: <MotionIcon />, label: 'übliches Flugverhalten' },
                { icon: <ThermometerIcon />, label: 'saisonale Klimakurven' },
              ]}
            />
          }
        >
          <p className="zz-text">
            Eine Anomalie erkennt nur, wer das Normale kennt. Das Modell lernt deshalb
            zuerst die typischen Muster deines Volkes — sein individuelles{' '}
            <strong>Normalprofil</strong>.
          </p>
        </ZzSection>

        {/* 3: DBSCAN */}
        <ZzSection
          reverse
          index="Kapitel 3"
          title="DBSCAN kartiert die Daten"
          visual={<ZzTile icon={<BrainIcon />} caption="Dichte Punktwolken = normal. Ausreißer = verdächtig." />}
        >
          <p className="zz-text">
            <strong>DBSCAN</strong> gruppiert historische Messwerte nach ihrer Dichte zu
            Clustern — der Landkarte des Normalverhaltens.
          </p>
          <ul className="feature-list">
            <li>Keine vorab definierten Schwellwerte nötig</li>
            <li>Findet Ausreißer automatisch als Rauschen</li>
            <li>Läuft auf der Basisstation</li>
          </ul>
        </ZzSection>

        {/* 3: K-NN */}
        <ZzSection
          band
          index="Kapitel 4"
          title="K-NN prüft in Echtzeit"
          visual={<ZzTile icon={<MotionIcon />} caption="Jeder Messwert wird mit seinen Nachbarn verglichen" />}
        >
          <p className="zz-text">
            <strong>K-NN</strong> fragt bei jedem neuen Messwert: Wem ähnelst du? Nah an
            den Normal-Clustern heißt alles gut — im Niemandsland heißt{' '}
            <strong>Anomalie</strong>.
          </p>
          <ul className="feature-list">
            <li>Nutzt die DBSCAN-Cluster als Referenz</li>
            <li>Entscheidet mit jeder neuen Messung</li>
            <li>Löst die Warnung an den Imker aus</li>
          </ul>
        </ZzSection>

        {/* 4: Training */}
        <ZzSection
          reverse
          index="Kapitel 4"
          title="Trainiert mit simulierten Daten"
          visual={<ZzTile icon={<CloudIcon />} caption="Seltene Schadensfälle werden simuliert" />}
        >
          <p className="zz-text">
            Echte Schadensfälle sind zum Glück selten — zu selten für gute
            Trainingsdaten. Die Sensordaten solcher Ereignisse wurden deshalb
            mathematisch simuliert.
          </p>
          <p className="zz-text">
            So kennt die KI per <strong>Supervised Learning</strong> auch Gefahren, die
            dein Volk hoffentlich nie erlebt.
          </p>
        </ZzSection>

        {/* CTA */}
        <div className="zz-cta">
          <h2 className="zz-cta-title">Verstanden? Beweis es.</h2>
          <p className="zz-cta-text">
            10 Fragen zu DBSCAN, K-NN und maschinellem Lernen.
          </p>
          <div className="zz-cta-actions">
            <Link to="/quiz2" className="fuller-button yellow">KI-Quiz starten</Link>
            <Link to="/anomaly" className="fuller-button quiet">Zu den Anomalieklassen</Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
