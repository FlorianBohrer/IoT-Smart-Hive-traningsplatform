import '../styles/zigzag.css';

/**
 * Bausteine für das Zick-Zack-Seitenlayout:
 * volle Breite, abwechselnd Inhalt links / Visual rechts.
 */

export function ZzSection({ id, index, title, band = false, reverse = false, visual, children }) {
  return (
    <section id={id} className={`zz-section${band ? ' band' : ''}${reverse ? ' reverse' : ''}`}>
      <div className="zz-inner">
        <div className="zz-content">
          {index && <span className="zz-index">{index}</span>}
          <h2 className="zz-title">{title}</h2>
          {children}
        </div>
        <div className="zz-visual">{visual}</div>
      </div>
    </section>
  );
}

export function ZzTile({ icon, caption }) {
  return (
    <div className="zz-tile">
      <span className="zz-tile-icon">{icon}</span>
      {caption && <span className="zz-tile-caption">{caption}</span>}
    </div>
  );
}

export function ZzTileGrid({ items }) {
  return (
    <div className="zz-tile-grid">
      {items.map(({ icon, value, label }) => (
        <div key={label} className="zz-mini">
          {icon && <span className="zz-mini-icon">{icon}</span>}
          {value && <span className="zz-mini-value">{value}</span>}
          <span className="zz-mini-label">{label}</span>
        </div>
      ))}
    </div>
  );
}

export function ZzPipeline({ steps }) {
  return (
    <ol className="zz-pipeline">
      {steps.map(({ icon, label }, i) => (
        <li key={label} style={{ display: 'contents' }}>
          <span className="zz-pipe-step">
            <span className="zz-mini-icon">{icon}</span>
            <span className="zz-pipe-label">{label}</span>
          </span>
          {i < steps.length - 1 && <span className="zz-pipe-connector" aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}
