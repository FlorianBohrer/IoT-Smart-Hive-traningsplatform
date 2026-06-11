import PageTransition from '../../components/PageTransition';
import PageHero from '../../components/PageHero';
import InfoCard from '../../components/InfoCard';
import {
  ThermometerIcon,
  GasIcon,
  ScaleIcon,
  ShieldIcon,
  SwarmIcon,
  BellIcon,
  BrainIcon,
} from '../../components/SensorIcons';
import '../../styles/lernen.css';
import '../../styles/button.css';

const ANOMALY_CLASSES = [
  {
    icon: <SwarmIcon />,
    title: 'Schwärmen',
    signal: 'Plötzlicher Gewichtsverlust + veränderte Geräuschfrequenz',
    text: 'Zieht die Königin mit der Hälfte des Volkes aus, fällt das Stockgewicht innerhalb weniger Minuten drastisch ab — begleitet von charakteristischen akustischen Frequenzänderungen. Die KI erkennt diese Kombination sofort.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Vandalismus & Diebstahl',
    signal: 'Extrem schneller, starker Gewichtsabfall oder Lageänderung',
    text: 'Wird der Stock gestohlen, umgeworfen oder beschädigt, ändert sich das Gewicht abrupt und untypisch. Normale Gewichtsabnahmen — etwa durch die Honigernte — verlaufen anders und lösen keinen Alarm aus.',
  },
  {
    icon: <ThermometerIcon />,
    title: 'Gefahr für die Brut',
    signal: 'Unerwarteter Temperatursturz im Brutnest',
    text: 'Die Brut braucht konstant rund 35 °C. Sinkt die Temperatur im Kernbereich unerwartet ab, droht die Brut auszukühlen — das System schlägt Alarm, bevor es kritisch wird.',
  },
  {
    icon: <GasIcon />,
    title: 'Gärungsgefahr des Honigs',
    signal: 'Feuchtigkeitsanstieg + auffällige VOC-Gaswerte',
    text: 'Ein unnatürlicher Anstieg der Luftfeuchtigkeit in Kombination mit bestimmten Gaswerten (VOC) zeigt: Der eingelagerte Honig zieht zu viel Wasser und beginnt zu gären.',
  },
];

const DETECTION_STEPS = [
  {
    title: 'Normalverhalten lernen',
    text: 'DBSCAN bildet aus den historischen Sensordaten Dichtecluster — die Referenz für ein gesundes Volk.',
  },
  {
    title: 'Live vergleichen',
    text: 'K-NN prüft jeden neuen Messwert in Echtzeit gegen diese Referenz.',
  },
  {
    title: 'Anomalie klassifizieren',
    text: 'Abweichungen werden einer konkreten Gefahrenklasse zugeordnet — vom Schwarm bis zur Gärung.',
  },
  {
    title: 'Sofort warnen',
    text: 'Der Imker bekommt die Warnung aufs Gerät und kann eingreifen, bevor Schaden entsteht.',
  },
];

export default function Anomaly() {
  return (
    <PageTransition>
      <div className="info-section">
        <main>
          <PageHero
            title="Anomalieerkennung im IoT-Bienenstock"
            description="Das Echtzeit-Anomalieerkennungssystem (EAES) überwacht dein Volk rund um die Uhr und erkennt vier konkrete Gefahrenklassen — meist bevor du selbst etwas bemerken könntest."
            anchors={[
              { href: '#klassen', label: 'Die 4 Anomalieklassen' },
              { href: '#ablauf', label: 'So funktioniert die Erkennung' },
              { href: '#quiz', label: 'Quiz' },
            ]}
          />

          <div className="content-wrapper">
            <section id="klassen">
              <h2 className="section-title">Die 7 Anomalieklassen</h2>
              <p className="section-intro">
                Jede Klasse hat ein typisches Sensormuster — daran erkennt die KI, was gerade passiert.
              </p>

              <div className="card-grid">
                {ANOMALY_CLASSES.map(({ icon, title, signal, text }) => (
                  <InfoCard key={title} icon={icon} title={title}>
                    <strong>Signal: {signal}</strong>
                    <br />
                    <br />
                    {text}
                  </InfoCard>
                ))}
              </div>
            </section>

            <section id="ablauf">
              <h2 className="section-title">Vom Messwert zur Warnung</h2>

              <ol className="step-flow">
                {DETECTION_STEPS.map(({ title, text }) => (
                  <li key={title} className="step-card">
                    <h3 className="step-title">{title}</h3>
                    <p className="step-text">{text}</p>
                  </li>
                ))}
              </ol>

              <div className="card-grid">
                <InfoCard icon={<BellIcon />} title="Frühwarnsystem statt Stichprobe">
                  Klassische Stockkontrollen sind Momentaufnahmen — und jedes Öffnen stresst
                  das Volk. Das EAES überwacht kontinuierlich und meldet sich nur, wenn
                  wirklich etwas nicht stimmt. Du sparst Zeit und greifst genau dann ein,
                  wenn es zählt.
                </InfoCard>

                <InfoCard icon={<ScaleIcon />} title="Das Gewicht als Schlüsselsignal">
                  Viele Gefahren zeigen sich zuerst auf der Waage: Schwärmen und Diebstahl
                  durch plötzlichen Abfall, Trachtende oder Futtermangel durch schleichende
                  Abnahme. Deshalb ist die HX711-Wägezelle unter der Beute einer der
                  wichtigsten Sensoren des Systems.
                </InfoCard>
              </div>
            </section>

            <section id="quiz">
              <div className="card-grid">
                <InfoCard
                  icon={<BellIcon />}
                  title="Teste dein Wissen"
                  link={{ to: '/quiz3', label: 'Anomalie-Quiz starten' }}
                >
                  10 Fragen zu Anomalieklassen, Sensorsignalen und dem Frühwarnsystem —
                  mit sofortiger Auswertung.
                </InfoCard>

                <InfoCard
                  icon={<BrainIcon />}
                  title="Weiter lernen"
                  link={{ to: '/ai', label: 'Zum KI-Kurs' }}
                >
                  Du kennst jetzt die Gefahrenklassen. Im KI-Kurs erfährst du, wie DBSCAN
                  und K-NN diese Muster technisch erkennen.
                </InfoCard>
              </div>
            </section>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
