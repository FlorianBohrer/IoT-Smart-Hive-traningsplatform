import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiveIcon,
  ServerIcon,
  ChipIcon,
  ThermometerIcon,
  GasIcon,
  MotionIcon,
  HubIcon,
  ScaleIcon,
} from './SensorIcons';
import HiveDiagram from './HiveDiagram';
import '../styles/sensor-overview.css';

const SENSORS = [
  {
    id: 'hive',
    Icon: HiveIcon,
    title: 'Bienenstock',
    role: 'Systemübersicht',
    tags: ['Gesamtaufbau', 'IoT-System'],
    location: 'Alle Komponenten im Überblick',
    description:
      'Der smarte Bienenstock kombiniert mehrere Sensoren, einen Mikrocontroller und eine Basisstation zu einem vollständigen IoT-System. Die Sensoren erfassen kontinuierlich Gewicht, Temperatur, Luftfeuchtigkeit, Luftqualität und das Ausflugverhalten der Bienen. Das Schema zeigt, wo die einzelnen Komponenten am Stock verbaut sind.',
  },
  {
    id: 'raspberry',
    Icon: ServerIcon,
    title: 'Raspberry Pi',
    role: 'Basisstation',
    tags: ['MQTT-Broker', 'MySQL-Datenbank', 'Webserver'],
    location: 'In der Nähe des Bienenstocks, wettergeschützt',
    description:
      'Der Raspberry Pi ist die Schaltzentrale des Systems. Er empfängt die Messwerte des Octopus per MQTT, speichert sie in einer MySQL-Datenbank und stellt sie der IoT-Pilot-Webseite zur Verfügung. Auf Basis dieser Daten laufen auch die Auswertungen zur Anomalieerkennung.',
  },
  {
    id: 'octopus',
    Icon: ChipIcon,
    title: 'IoT-Octopus',
    role: 'Mikrocontroller (ESP8266)',
    tags: ['WLAN', 'MQTT', 'I2C-Schnittstelle'],
    location: 'Am Bienenstock, mit allen Sensoren verbunden',
    description:
      'Der IoT-Octopus ist ein für Lehrzwecke entwickeltes Mikrocontroller-Board der IoT²-Werkstatt. Er liest alle angeschlossenen Sensoren über die I2C-Schnittstelle aus, bereitet die Messwerte auf und überträgt sie im Minutentakt per WLAN und MQTT an die Basisstation.',
  },
  {
    id: 'bme280',
    Icon: ThermometerIcon,
    title: 'BME280',
    role: 'Umweltsensor (2× verbaut)',
    tags: ['Temperatur', 'Luftfeuchtigkeit', 'Luftdruck'],
    location: 'Innen an einer Brutwabe + außen im Octopus',
    description:
      'Zwei Bosch-Umweltsensoren messen Temperatur, relative Luftfeuchtigkeit und Luftdruck. Der innere Sensor sitzt direkt an einer Wabe und überwacht das Brutnest — dort müssen konstant rund 35 °C herrschen, sonst droht die Brut auszukühlen. Der äußere Sensor liefert die Vergleichswerte der Umgebung.',
  },
  {
    id: 'bme680',
    Icon: GasIcon,
    title: 'BME680',
    role: 'Gas- & Umweltsensor',
    tags: ['VOC / Luftqualität', 'Feuchtigkeit', 'Temperatur', 'Luftdruck'],
    location: 'Im Deckel des Bienenstocks',
    description:
      'Der BME680 misst zusätzlich zu Temperatur, Feuchte und Druck auch flüchtige organische Verbindungen (VOCs) in der Stockluft. Steigt die Luftfeuchtigkeit ungewöhnlich an und verändern sich gleichzeitig die Gaswerte, deutet das auf Gärungsgefahr hin: Der eingelagerte Honig zieht zu viel Wasser.',
  },
  {
    id: 'apds9960',
    Icon: MotionIcon,
    title: 'APDS9960',
    role: 'Licht- & Gestensensor (SparkFun)',
    tags: ['Helligkeit', 'Farbe', 'Annäherung', 'Gesten'],
    location: 'Am Einflugloch',
    description:
      'Der SparkFun-Sensor APDS9960 erkennt Umgebungslicht, Farben, Annäherung und Bewegungsrichtungen. Am Einflugloch montiert registriert er die ein- und ausfliegenden Bienen und liefert so ein Maß für das Ausflugverhalten des Volkes — eine wichtige Größe, um etwa Schwärmen zu erkennen.',
  },
  {
    id: 'i2c',
    Icon: HubIcon,
    title: 'I2C-Multiplexer',
    role: 'Bus-Verteiler',
    tags: ['I2C', 'Adress-Management'],
    location: 'Zwischen Octopus und Sensoren',
    description:
      'Die beiden BME280-Sensoren besitzen werkseitig dieselbe I2C-Adresse und würden sich auf dem Bus gegenseitig stören. Der Multiplexer schaltet zwischen den Sensoren um, sodass der Octopus alle Sensoren über eine einzige Schnittstelle ansprechen kann.',
  },
  {
    id: 'hx711',
    Icon: ScaleIcon,
    title: 'HX711 Wägezelle',
    role: 'Gewichtssensor',
    tags: ['Gewicht', 'Pin A0'],
    location: 'Unter der Bienenbeute',
    description:
      'Wägezellen unter des Brutkastens messen kontinuierlich das Gesamtgewicht des Bienenstocks. Das Gewicht ist einer der aussagekräftigsten Werte: Ein plötzlicher, starker Abfall innerhalb weniger Minuten deutet auf Schwärmen oder Diebstahl hin, langsame Veränderungen zeigen Trachteintrag oder Futterverbrauch.',
  },
];

export default function SensorOverview() {
  const [selectedId, setSelectedId] = useState(SENSORS[0].id);
  const selected = SENSORS.find((sensor) => sensor.id === selectedId);

  return (
    <div className="sensor-overview">
      <div className="sensor-grid" role="tablist" aria-label="Sensoren">
        {SENSORS.map(({ id, Icon, title, role }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={selectedId === id}
            className={`sensor-card${selectedId === id ? ' selected' : ''}`}
            onClick={() => setSelectedId(id)}
          >
            <span className="sensor-card-icon">
              <Icon />
            </span>
            <span className="sensor-card-title">{title}</span>
            <span className="sensor-card-role">{role}</span>
          </button>
        ))}
      </div>

      {/* Split: Bienenstock-Schema links, Sensor-Details rechts */}
      <div className="sensor-split">
        <div className="sensor-split-diagram">
          <HiveDiagram onSelectSensor={setSelectedId} selectedId={selectedId} />
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={selected.id}
            className="sensor-detail"
            role="tabpanel"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
          >
            <header className="sensor-detail-header">
              <span className="sensor-detail-icon">
                <selected.Icon />
              </span>
              <div>
                <h2 className="sensor-detail-title">{selected.title}</h2>
                <p className="sensor-detail-role">{selected.role}</p>
              </div>
            </header>

            <ul className="sensor-tags">
              {selected.tags.map((tag) => (
                <li key={tag} className="sensor-tag">{tag}</li>
              ))}
            </ul>

            <p className="sensor-detail-text">{selected.description}</p>

            <p className="sensor-detail-location">
              <strong>Einbauort:</strong> {selected.location}
            </p>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}
