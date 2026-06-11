import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';
import { ZzSection, ZzTile, ZzTileGrid, ZzPipeline } from '../../components/Zigzag';
import {
  ThermometerIcon,
  GasIcon,
  MotionIcon,
  ScaleIcon,
  ChipIcon,
  ServerIcon,
  CloudIcon,
  BellIcon,
} from '../../components/SensorIcons';
import '../../styles/button.css';
import '../../styles/lernen.css';
import '../../styles/zigzag.css';

// Hilfs-Komponenten für fehlende Icons (verhindert Import-Fehler)
const ArrowDownIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </svg>
);

const SmartphoneIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

export default function IOT() {
  return (
    <PageTransition>
      <div className="zz-page">
        {/* Hero */}
        <header className="zz-hero">
          <div>
            <span className="zz-kicker">Kurs 1 · Einsteiger</span>
            <h1 className="zz-hero-title">IoT-Grundlagen im Bienenstock</h1>
            <p className="zz-hero-text">
              Vernetzte Sensoren machen aus der Beute einen Stock, der dir jederzeit
              sagt, wie es seinem Volk geht.
            </p>
            <ul className="zz-hero-meta">
              <li>ca. 20 Minuten</li>
              <li>Mit Abschluss-Quiz</li>
              <li>Kein Vorwissen nötig</li>
            </ul>
          </div>
          <div className="zz-visual">
            <ZzTile
              icon={<ChipIcon />}
              caption="Messen. Senden. Verstehen."
            />
          </div>
        </header>

        {/* 1: Was ist IoT */}
        <ZzSection
          band
          index="Kapitel 1"
          title="Was ist das Internet der Dinge?"
          visual={
            <ZzPipeline
              steps={[
                { icon: <ThermometerIcon />, label: 'Sensor misst' },
                { icon: <ChipIcon />, label: 'Octopus liest per I2C aus' },
                { icon: <CloudIcon />, label: 'MQTT an die Basisstation' },
                { icon: <ServerIcon />, label: 'Raspberry Pi speichert' },
              ]}
            />
          }
        >
          <p className="zz-text">
            Geräte messen ihre Umgebung und teilen die Werte selbstständig — kein
            überflüssiges Öffnen, kein Abschätzen mehr.
          </p>
          <p className="zz-text">
            Die Kette ist immer dieselbe: Sensor misst, Mikrocontroller sammelt,{' '}
            <strong>MQTT</strong> überträgt, Basisstation speichert. Im Minutentakt,
            vollautomatisch.
          </p>
        </ZzSection>

        
       {/* 2: Was ist MQTT */}
<ZzSection
  band
  index="Kapitel 2"
  title="Was ist MQTT?"
  visual={
    <div className="flex flex-col items-center gap-2 w-full max-w-sm mx-auto">
      
      {/* Publisher Pill */}
      <div className="w-full bg-black/30 border border-white/10 rounded-xl p-3 flex items-center gap-4">
        <div className="text-yellow-500 flex-shrink-0">
          <ThermometerIcon />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-yellow-500 font-mono uppercase tracking-widest">Publish</span>
          <span className="text-white text-sm">Sensor sendet "22°C"</span>
        </div>
      </div>

      {/* Connection Line & Topic */}
      <div className="h-6 w-px bg-gradient-to-b from-yellow-500/50 to-transparent"></div>
      <div className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
        Topic: biene/nest/temp
      </div>
      <div className="h-6 w-px bg-gradient-to-t from-yellow-500/50 to-transparent"></div>

      {/* Central Broker Pill */}
      <div className="w-full bg-zinc-900 border-2 border-yellow-500/30 rounded-2xl p-4 shadow-xl shadow-yellow-500/5 flex flex-col items-center gap-2">
        <div className="text-yellow-500 scale-125">
          <CloudIcon />
        </div>
        <div className="text-center">
          <span className="block text-white font-bold tracking-tight">MQTT Broker</span>
          <span className="text-[10px] text-zinc-400 uppercase tracking-tighter">Die Schaltzentrale</span>
        </div>
      </div>

      {/* Split Lines */}
      <div className="flex justify-around w-full px-12">
        <div className="h-8 w-px bg-zinc-800"></div>
        <div className="h-8 w-px bg-zinc-800"></div>
      </div>

      {/* Subscriber Pills */}
      <div className="grid grid-cols-2 gap-3 w-full">
        <div className="bg-black/30 border border-white/5 rounded-xl p-3 flex flex-col items-center text-center gap-2">
          <div className="text-yellow-500/80 scale-90">
            <ServerIcon />
          </div>
          <span className="text-[10px] text-white/70">Raspberry Pi (Speichert)</span>
        </div>
        
        <div className="bg-black/30 border border-white/5 rounded-xl p-3 flex flex-col items-center text-center gap-2">
          <div className="text-yellow-500/80 scale-90">
            <BellIcon />
          </div>
          <span className="text-[10px] text-white/70">Handy (Alarmiert)</span>
        </div>
      </div>

      <div className="mt-2">
        <span className="text-[9px] text-zinc-600 font-mono uppercase italic tracking-widest">
          Subscribed to Topic
        </span>
      </div>
    </div>
  }
>
  <p className="zz-text">
    MQTT ist ein leichtgewichtiges Nachrichtenprotokoll für IoT-Geräte.
    Es sorgt dafür, dass Messwerte zuverlässig und effizient zwischen
    Sensoren, Controllern und Servern ausgetauscht werden.
  </p>
  <p className="zz-text">
    Das Prinzip ist einfach: Ein Gerät veröffentlicht Daten an einen
    <strong> Broker</strong>, andere Geräte abonnieren die gewünschten Themen
    („Topics“) und erhalten neue Werte automatisch — in Echtzeit, ohne ständiges Nachfragen.
  </p>
</ZzSection>


        {/* 3: Die Sensoren */}
        <ZzSection
          reverse
          index="Kapitel 3"
          title="Vier Sinne für den Stock"
          visual={
            <ZzTileGrid
              items={[
                { icon: <ThermometerIcon />, label: 'BME280 — Klima im Brutnest' },
                { icon: <GasIcon />, label: 'BME680 — Luftqualität' },
                { icon: <MotionIcon />, label: 'APDS9960 — Ausflugverhalten' },
                { icon: <ScaleIcon />, label: 'HX711 — Gewicht' },
              ]}
            />
          }
        >
          <p className="zz-text">
            Die <strong>BME-Sensoren</strong> fühlen Klima und Luft, der{' '}
            <strong>APDS9960</strong> sieht die Flugaktivität, die{' '}
            <strong>Wägezelle</strong> spürt jede Gewichtsveränderung.
          </p>
          <p className="zz-text">
            Zusammen ergibt das ein vollständiges Bild — von der Bruttemperatur bis zum
            Trachteintrag.
          </p>
          <Link to="/ar" className="fuller-button ">Zur Sensorübersicht</Link>
        </ZzSection>

        {/* 4: Octopus & Basisstation */}
        <ZzSection
          band
          index="Kapitel 4"
          title="Octopus & Raspberry Pi"
          visual={<ZzTile icon={<ServerIcon />} caption="Einer sammelt, einer speichert und analysiert" />}
        >
          <p className="zz-text">
            Der <strong>IoT-Octopus</strong> liest alle Sensoren über I2C aus und funkt
            die Werte per WLAN. Weil beide BME280 dieselbe Adresse haben, vermittelt ein{' '}
            <strong>Multiplexer</strong> dazwischen.
          </p>
          <p className="zz-text">
            Der <strong>Raspberry Pi</strong> speichert die Daten in einer
            MySQL-Datenbank, zeigt sie im Dashboard und versorgt die KI — ganz ohne
            ständige Internetverbindung.
          </p>
        </ZzSection>

        {/* 5: Nutzen */}
        <ZzSection
          reverse
          index="Kapitel 5"
          title="Was bringt mir das?"
          visual={
            <ZzTileGrid
              items={[
                { icon: <BellIcon />, label: 'Warnung bei Gefahr' },
                { icon: <ScaleIcon />, label: 'Trachtverlauf live' },
                { icon: <ThermometerIcon />, label: 'Brutklima im Blick' },
                { icon: <CloudIcon />, label: 'Alles im Dashboard' },
              ]}
            />
          }
        >
          <p className="zz-text">
            Weniger Kontrollfahrten, weniger Stress fürs Volk und trotzdem mehr
            Wissen. Kritische Veränderungen werden sofort gemeldet, alles andere liest
            du bequem von der Gewichtskurve ab.
          </p>
        </ZzSection>

        {/* CTA */}
        <div className="zz-cta">
          <h2 className="zz-cta-title">Bereit fürs Quiz?</h2>
          <p className="zz-cta-text">
            10 Fragen zu Sensoren, MQTT und Echtzeitüberwachung.
          </p>
          <div className="zz-cta-actions">
            <Link to="/quiz1" className="fuller-button yellow">IoT-Quiz starten</Link>
            <Link to="/anomaly" className="fuller-button quiet">Nächster Kurs: Anomalien</Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}