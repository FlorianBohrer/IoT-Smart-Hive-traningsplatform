import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import '../styles/lernen.css';
import '../styles/button.css';
import '../styles/catalog.css';

const CATALOG = [
  {
    id: 'iot',
    type: 'Kurs',
    title: 'IoT-Grundlagen',
    description:
      'Sensorik, Mikrocontroller und Datenübertragung im smarten Bienenstock — der Einstieg in die vernetzte Imkerei.',
    level: 'Einsteiger',
    duration: '20 Min.',
    to: '/iot',
    certificate: false,
  },
  {
    id: 'anomaly',
    type: 'Kurs',
    title: 'Anomalieerkennung und Frühwarnsysteme',
    description:
      'Wie das System Schwärmen, Vandalismus und Brutgefahren erkennt und Imker rechtzeitig warnt.',
    level: 'Fortgeschritten',
    duration: '25 Min.',
    to: '/anomaly',
    certificate: false,
  },
  {
    id: 'ai',
    type: 'Kurs',
    title: 'KI und maschinelles Lernen in der Imkerei',
    description:
      'DBSCAN, K-NN und die Auswertung von Zeitreihendaten — das Kernstück des smarten Bienenstocks.',
    level: 'Fortgeschritten',
    duration: '25 Min.',
    to: '/ai',
    certificate: false,
  },
  {
    id: 'quiz-iot',
    type: 'Quiz',
    title: 'IoT-Quiz',
    description:
      'Teste dein Wissen über Sensoren, Echtzeitüberwachung und Datenerfassung im IoT-Bienenstock.',
    level: 'Einsteiger',
    duration: '10 Fragen',
    to: '/quiz1',
    certificate: false,
  },
  {
    id: 'quiz-ki',
    type: 'Quiz',
    title: 'KI-Quiz',
    description:
      'Teste dein Wissen über die Algorithmen DBSCAN und K-NN und ihre Rolle bei der Anomalieerkennung.',
    level: 'Fortgeschritten',
    duration: '10 Fragen',
    to: '/quiz2',
    certificate: false,
  },
  {
    id: 'quiz-anomaly',
    type: 'Quiz',
    title: 'Anomalie-Quiz',
    description:
      'Teste dein Wissen über Anomaliedetektion, Frühwarnsysteme und die wichtigsten Sensorwerte.',
    level: 'Fortgeschritten',
    duration: '10 Fragen',
    to: '/quiz3',
    certificate: false,
  },
];

const LEVELS = ['Einsteiger', 'Fortgeschritten'];
const TYPES = ['Kurs', 'Quiz'];

function FilterGroup({ label, options, selected, onToggle }) {
  return (
    <fieldset className="filter-group">
      <legend className="filter-label">{label}</legend>
      {options.map((option) => (
        <label key={option} className="filter-option">
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => onToggle(option)}
          />
          <span className="filter-checkbox" aria-hidden="true" />
          {option}
        </label>
      ))}
    </fieldset>
  );
}

export default function Kurse() {
  const [levelFilter, setLevelFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);

  const toggle = (setter) => (value) =>
    setter((current) =>
      current.includes(value) ? current.filter((entry) => entry !== value) : [...current, value]
    );

  const results = useMemo(
    () =>
      CATALOG.filter(
        (item) =>
          (levelFilter.length === 0 || levelFilter.includes(item.level)) &&
          (typeFilter.length === 0 || typeFilter.includes(item.type))
      ),
    [levelFilter, typeFilter]
  );

  const hasFilters = levelFilter.length > 0 || typeFilter.length > 0;

  const clearFilters = () => {
    setLevelFilter([]);
    setTypeFilter([]);
  };

  return (
    <PageTransition>
      <div className="info-section">
        <PageHero
          title="Kursübersicht"
          description="Willkommen zu unseren spezialisierten Kursen für Imker! 
          Von den Grundlagen der IoT-Technologie bis zu fortschrittlichen Techniken 
          in Anomalieerkennung und KI."
          anchors={[{ href: '#katalog', label: 'Zum Katalog' }]}
        />
      </div>

      <div className="catalog" id="katalog">
        <aside className="catalog-sidebar">
          <div className="catalog-filters-head">
            <h2 className="catalog-filters-title">Filter</h2>
            {hasFilters && (
              <button type="button" className="catalog-clear" onClick={clearFilters}>
                Filter zurücksetzen
              </button>
            )}
          </div>

          <FilterGroup
            label="Level"
            options={LEVELS}
            selected={levelFilter}
            onToggle={toggle(setLevelFilter)}
          />
          <FilterGroup
            label="Typ"
            options={TYPES}
            selected={typeFilter}
            onToggle={toggle(setTypeFilter)}
          />
        </aside>

        <main className="catalog-main">
          <header className="catalog-head">
            <h2 className="catalog-title">
              Alle Kurse &amp; Quizze <span className="catalog-count">{results.length} Ergebnisse</span>
            </h2>
          </header>

          <div className="catalog-grid">
            {results.map((item) => (
              <Link key={item.id} to={item.to} className="course-card">
                <span className={`course-card-band${item.type === 'Quiz' ? ' quiz' : ''}`}>
                  {item.type === 'Quiz' ? 'Quiz' : 'Kostenloser Kurs'}
                </span>
                <span className="course-card-body">
                  <span className="course-card-title">{item.title}</span>
                  <span className="course-card-desc">{item.description}</span>
                </span>
                <span className="course-card-meta">
                  <span className="course-card-level">
                    <strong>{item.level}</strong>
                  </span>
                  <span className="course-card-duration">{item.duration}</span>
                </span>
              </Link>
            ))}
          </div>

          {results.length === 0 && (
            <p className="catalog-empty">
              Keine Ergebnisse für diese Filter.{' '}
              <button type="button" className="catalog-clear" onClick={clearFilters}>
                Filter zurücksetzen
              </button>
            </p>
          )}
        </main>
      </div>
    </PageTransition>
  );
}
