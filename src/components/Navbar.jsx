import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const NAV_ITEMS = [
  { label: 'Sensoren', to: '/sensoren' },
  { label: 'Lernen', to: '/lernen' },
  { label: 'Kurse', to: '/kurse' },
  { label: 'Über uns', to: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="main-navigation" aria-label="Hauptnavigation">
        <NavLink to="/" className="brand" onClick={() => setIsOpen(false)}>
          AR&nbsp;Hive
        </NavLink>

        <button
          className="nav-toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Navigation umschalten"
          aria-expanded={isOpen}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <ul className={`nav-menu${isOpen ? ' open' : ''}`}>
          {NAV_ITEMS.map(({ label, to }) => (
            <li key={to} className="nav-item">
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
