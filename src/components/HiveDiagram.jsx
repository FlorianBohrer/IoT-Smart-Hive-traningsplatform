/**
 * - schematischer aufbau des IoT-Bienenstocks als interaktives SVG-Datei.
 * - ersetzt die alte PNG-Abbildung und nutzt die Farbpalette der Plattform.
 */

const WIRE = 'var(--green-light)';

function Node({ id, x, y, width, height, label, sublabel, marker, onSelect, selected = false, clickable = true }) {
  const handle = clickable && onSelect ? () => onSelect(id) : undefined;
  return (
    <g
      className={clickable ? `hd-node${selected ? ' selected' : ''}` : 'hd-static'}
      onClick={handle}
      onKeyDown={handle ? (e) => (e.key === 'Enter' || e.key === ' ') && handle() : undefined}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      aria-label={clickable ? `${label} auswählen` : undefined}
    >
      <rect className="hd-box" x={x} y={y} width={width} height={height} rx="8" />
      <text
        className="hd-box-label"
        x={x + width / 2}
        y={sublabel ? y + height / 2 - 7 : y + height / 2 + 1}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {label}
      </text>
      {sublabel && (
        <text
          className="hd-box-sublabel"
          x={x + width / 2}
          y={y + height / 2 + 12}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {sublabel}
        </text>
      )}
      {marker && (
        <g>
          <circle className="hd-marker" cx={x} cy={y} r="13" />
          <text className="hd-marker-text" x={x} y={y + 1} textAnchor="middle" dominantBaseline="middle">
            {marker}
          </text>
        </g>
      )}
    </g>
  );
}

export default function HiveDiagram({ onSelectSensor, selectedId }) {
  return (
    <figure className="hive-diagram">
      <svg viewBox="0 0 780 660" role="img" aria-label="Schematischer Aufbau des IoT-Bienenstocks">
        <defs>
          <marker id="hd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill={WIRE} />
          </marker>
        </defs>

        {/* ===== Bienenstock-Gehäuse ===== */}
        
        {/* dach */}
        <rect className="hd-roof" x="240" y="28" width="510" height="34" rx="6" />
        <text className="hd-zone-label" x="495" y="46" textAnchor="middle" dominantBaseline="middle">Dach</text>

        {/* Korpus */}
        <rect className="hd-body" x="268" y="62" width="454" height="496" rx="4" />

        {/* stockwerk-trennlinien */}
        <line className="hd-floor-line" x1="268" y1="232" x2="722" y2="232" />
        <line className="hd-floor-line" x1="268" y1="340" x2="722" y2="340" />
        <line className="hd-floor-line" x1="268" y1="448" x2="722" y2="448" />

        {/* zonen-beschriftung */}
        <text className="hd-zone-label" x="300" y="212" dominantBaseline="middle">Dachgeschoss</text>
        <text className="hd-zone-label" x="300" y="290" dominantBaseline="middle">2. Stockwerk</text>
        <text className="hd-zone-label" x="300" y="370" dominantBaseline="middle">1. Stockwerk</text>

        {/* wabe */}
        <rect className="hd-comb" x="618" y="352" width="14" height="150" rx="3" />
        <text className="hd-zone-label hd-small" x="640" y="366">Wabe</text>

        {/* einflugschneise */}
        <rect className="hd-slot" x="300" y="492" width="300" height="22" rx="6" />
        <text className="hd-zone-label hd-small" x="450" y="504" textAnchor="middle" dominantBaseline="middle">
          Einflugschneise
        </text>

        {/* ===== verbindungen (I2C, grün) ===== */}
        {/* I2C-Multiplexer -> Octopus */}
        <line className="hd-wire" x1="488" y1="122" x2="452" y2="122" markerEnd="url(#hd-arrow)" />
        {/* VGA -> Multiplexer */}
        <line className="hd-wire" x1="640" y1="122" x2="622" y2="122" markerEnd="url(#hd-arrow)" />
        {/* BME680 -> Multiplexer */}
        <polyline className="hd-wire" points="500,246 500,196 540,196 540,150" markerEnd="url(#hd-arrow)" />
        {/* BME280 (Wabe) -> VGA */}
        <polyline className="hd-wire" points="588,408 680,408 680,156" markerEnd="url(#hd-arrow)" />
        {/* APDS9960 -> VGA */}
        <polyline className="hd-wire" points="362,476 362,530 700,530 700,156" markerEnd="url(#hd-arrow)" />

        {/* WLAN: Raspberry Pi <-> Octopus  */}
        <line className="hd-wifi" x1="180" y1="122" x2="330" y2="122" />
        <path className="hd-wifi-arc" d="M196 108 a 18 18 0 0 1 0 28" />
        <path className="hd-wifi-arc" d="M191 100 a 28 28 0 0 1 0 44" />
        <path className="hd-wifi-arc" d="M316 108 a 18 18 0 0 0 0 28" />
        <path className="hd-wifi-arc" d="M321 100 a 28 28 0 0 0 0 44" />

        {/* ===== alle komponenten ===== */}
        <Node id="raspberry" x={30} y={92} width={150} height={60} label="Raspberry Pi" sublabel="Basisstation" marker="1" onSelect={onSelectSensor} selected={selectedId === 'raspberry'} />
        <Node id="octopus" x={330} y={94} width={122} height={56} label="Octopus" sublabel="+ BME280 außen" marker="2" onSelect={onSelectSensor} selected={selectedId === 'octopus'} />
        <Node id="i2c" x={488} y={100} width={134} height={44} label="I2C-Multiplexer" marker="6" onSelect={onSelectSensor} selected={selectedId === 'i2c'} />
        <Node id="vga" x={640} y={100} width={66} height={56} label="VGA-" sublabel="Stecker" clickable={false} />
        <Node id="bme680" x={448} y={246} width={104} height={34} label="BME680" marker="4" onSelect={onSelectSensor} selected={selectedId === 'bme680'} />
        <Node id="bme280" x={500} y={392} width={88} height={32} label="BME280" marker="3" onSelect={onSelectSensor} selected={selectedId === 'bme280'} />
        <Node id="apds9960" x={318} y={444} width={88} height={32} label="APDS9960" marker="5" onSelect={onSelectSensor} selected={selectedId === 'apds9960'} />

        {/* waage */}
        <g
          className={`hd-node${selectedId === 'hx711' ? ' selected' : ''}`}
          onClick={onSelectSensor ? () => onSelectSensor('hx711') : undefined}
          onKeyDown={onSelectSensor ? (e) => (e.key === 'Enter' || e.key === ' ') && onSelectSensor('hx711') : undefined}
          role="button"
          tabIndex={0}
          aria-label="Waage HX711 auswählen"
        >
          <rect className="hd-box" x="240" y="572" width="510" height="38" rx="8" />
          <text className="hd-box-label" x="495" y="592" textAnchor="middle" dominantBaseline="middle">
            Waage (HX711)
          </text>
          <circle className="hd-marker" cx="240" cy="572" r="13" />
          <text className="hd-marker-text" x="240" y="573" textAnchor="middle" dominantBaseline="middle">7</text>
        </g>
      </svg>
      <figcaption className="hive-diagram-caption">
        Schematischer Aufbau — klicke auf eine nummerierte Komponente, um Details anzuzeigen.
      </figcaption>
    </figure>
  );
}
