import { Link } from 'react-router-dom';

/**
 * Inhaltskarte mit optionalem Icon, Überschrift, Inhalt und Button-Link.
 */
export default function InfoCard({ title, icon, link, children }) {
  return (
    <div className="classic-container">
      {icon && <span className="card-icon">{icon}</span>}
      <h3 className="subheader">{title}</h3>
      <div className="info-text">{children}</div>
      {link && (
        <div className="flex-grid-center">
          <Link to={link.to} className="fuller-button yellow">{link.label}</Link>
        </div>
      )}
    </div>
  );
}
