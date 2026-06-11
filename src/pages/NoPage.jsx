
import { Link } from 'react-router-dom';
import '../styles/lernen.css';
import '../styles/button.css';

export default function NoPage() {
  return (
    <div className="info-section">
      <div className="hero-wrapper2">
        <h1 className="headline">404 – Seite nicht gefunden</h1>
        <p className="hero-desc2">Diese Seite existiert leider nicht.</p>
        <div className="flex-grid-center">
          <Link to="/" className="fuller-button yellow">Zur Startseite</Link>
        </div>
      </div>
    </div>
  );
}
