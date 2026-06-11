

/**
 * Kopfbereich einer Inhaltsseite: Titel, Beschreibung und
 * optionale Sprungmarken-Navigation zu den Abschnitten.
 */
export default function PageHero({ title, description, anchors = [], children }) {
  return (
    <div className="hero-wrapper2">
      <h1 className="headline">{title}</h1>
      {description && <p className="hero-desc2">{description}</p>}
      {children}
      {anchors.length > 0 && (
        <nav className="section-nav" aria-label="Seitennavigation">
          <ul id="navigation">
            {anchors.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
