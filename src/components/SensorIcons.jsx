/**
 * Linien-Icons für die Sensorübersicht.
 * Alle Icons nutzen currentColor und passen sich damit der Umgebung an.
 */

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function Svg({ children, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      {children}
    </svg>
  );
}

/** Bienenstock (Übersicht) */
export function HiveIcon(props) {
  return (
    <Svg {...props}>
      <path d="M5 20h14M6 20v-3h12v3M7 17v-3h10v3M8 14v-3h8v3M9 11V8h6v3" />
      <circle cx="12" cy="5" r="1.6" />
    </Svg>
  );
}

/** Raspberry Pi / Basisstation */
export function ServerIcon(props) {
  return (
    <Svg {...props}>
      <rect x="4" y="4" width="16" height="7" rx="1.5" />
      <rect x="4" y="13" width="16" height="7" rx="1.5" />
      <circle cx="8" cy="7.5" r="0.4" fill="currentColor" />
      <circle cx="8" cy="16.5" r="0.4" fill="currentColor" />
      <path d="M12 7.5h5M12 16.5h5" />
    </Svg>
  );
}

/** Octopus / Mikrocontroller */
export function ChipIcon(props) {
  return (
    <Svg {...props}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <rect x="10" y="10" width="4" height="4" rx="0.5" />
      <path d="M9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3" />
    </Svg>
  );
}

/** BME280 – Temperatur & Feuchte */
export function ThermometerIcon(props) {
  return (
    <Svg {...props}>
      <path d="M10 4a2 2 0 0 1 4 0v9.5a4 4 0 1 1-4 0Z" />
      <circle cx="12" cy="17" r="1.4" fill="currentColor" stroke="none" />
      <path d="M12 14v-4" />
      <path d="M17.5 5.5c1 1 1 2.5 0 3.5M19.5 4c1.8 1.8 1.8 4.7 0 6.5" />
    </Svg>
  );
}

/** BME680 – Gas / Luftqualität */
export function GasIcon(props) {
  return (
    <Svg {...props}>
      <path d="M4 9.5c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2" />
      <path d="M4 14c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2" />
      <path d="M4 18.5c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2" />
      <circle cx="17.5" cy="5" r="1.2" />
    </Svg>
  );
}

/** APDS9960 – Licht / Gesten / Annäherung */
export function MotionIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 5V3M12 21v-2M5 12H3M21 12h-2" />
      <path d="M6.5 6.5 5 5M17.5 17.5 19 19M17.5 6.5 19 5M6.5 17.5 5 19" />
    </Svg>
  );
}

/** I2C-Multiplexer – Verteiler */
export function HubIcon(props) {
  return (
    <Svg {...props}>
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M12 9.5V4M12 20v-5.5M9.5 12H4M20 12h-5.5" />
      <circle cx="12" cy="4" r="1.2" />
      <circle cx="12" cy="20" r="1.2" />
      <circle cx="4" cy="12" r="1.2" />
      <circle cx="20" cy="12" r="1.2" />
    </Svg>
  );
}

/** HX711 – Waage / Gewicht */
export function ScaleIcon(props) {
  return (
    <Svg {...props}>
      <path d="M12 4v3M7 7h10l2.5 11a1.5 1.5 0 0 1-1.5 2H6a1.5 1.5 0 0 1-1.5-2Z" />
      <path d="M9.5 12a2.5 2.5 0 0 0 5 0" />
    </Svg>
  );
}

/** Schutz / Vandalismus & Diebstahl */
export function ShieldIcon(props) {
  return (
    <Svg {...props}>
      <path d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6Z" />
      <path d="M9 11.5l2 2 4-4.5" />
    </Svg>
  );
}

/** KI / Machine Learning */
export function BrainIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="7" cy="7" r="2" />
      <circle cx="17" cy="6" r="2" />
      <circle cx="6" cy="15" r="2" />
      <circle cx="16" cy="16" r="2" />
      <circle cx="12" cy="11" r="1.6" />
      <path d="M8.6 8.2 10.8 10M13.4 10l2.2-2.6M7.4 13.4l3.2-1.4M13.5 12l1.4 2.6" />
    </Svg>
  );
}

/** Alarm / Frühwarnsystem */
export function BellIcon(props) {
  return (
    <Svg {...props}>
      <path d="M18 16H6c1.2-1.2 1.5-2.4 1.5-5a4.5 4.5 0 0 1 9 0c0 2.6.3 3.8 1.5 5Z" />
      <path d="M10.3 19a1.8 1.8 0 0 0 3.4 0M12 4.5V3" />
    </Svg>
  );
}

/** Cloud / Datenübertragung */
export function CloudIcon(props) {
  return (
    <Svg {...props}>
      <path d="M7 18a4 4 0 0 1-.6-7.95 5.5 5.5 0 0 1 10.7 1.2A3.5 3.5 0 0 1 16.5 18Z" />
      <path d="M12 14v4M10 16.5 12 18.5l2-2" />
    </Svg>
  );
}

/** Schwarm / Bienen */
export function SwarmIcon(props) {
  return (
    <Svg {...props}>
      <ellipse cx="12" cy="13" rx="3" ry="4" />
      <path d="M10.8 9.5 9 7M13.2 9.5 15 7" />
      <path d="M9 13c-2 .5-3.5-.5-4-2M15 13c2 .5 3.5-.5 4-2" />
      <path d="M12 9.5v7" />
      <circle cx="5" cy="5" r="0.5" fill="currentColor" />
      <circle cx="19" cy="5" r="0.5" fill="currentColor" />
      <circle cx="17" cy="19" r="0.5" fill="currentColor" />
    </Svg>
  );
}
