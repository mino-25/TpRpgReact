import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { heroes, quests } from '../data';

const CLASS_EMOJI: Record<string, string> = {
  'Archère':        '🏹',
  'Paladin':        '🛡️',
  'Nécromancienne': '💀',
  'Guerrier':       '⚔️',
  'Druide':         '🌿',
};

function HomePage() {
  const aliveCount = heroes.filter(h => h.isAlive).length;
  const [scrollY, setScrollY] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section with Parallax */}
      <section className="hero-section">
        <div className="parallax-bg" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <div className="parallax-layer layer-1">🏰</div>
          <div className="parallax-layer layer-2">⚔️</div>
          <div className="parallax-layer layer-3">👑</div>
          <div className="parallax-layer layer-4">🗡️</div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">Guilde des Légendes</h1>
          <p className="hero-subtitle">Bienvenue dans le sanctuaire des grands guerriers</p>
          <p className="hero-description">Où les braves se rassemblent pour affronter des quêtes épiques et forger leur légende éternelle.</p>
        </div>
      </section>

      {/* Stats Section with Scroll Animation */}
      <section className="stats-section" onMouseEnter={() => setStatsVisible(true)}>
        <div className="stats-container">
          <div className={`stat-item ${statsVisible ? 'visible' : ''}`}>
            <div className="stat-number">{heroes.length}</div>
            <div className="stat-text">Héros enregistrés</div>
          </div>
          <div className={`stat-item ${statsVisible ? 'visible' : ''}`}>
            <div className="stat-number">{aliveCount}</div>
            <div className="stat-text">Héros en vie</div>
          </div>
          <div className={`stat-item ${statsVisible ? 'visible' : ''}`}>
            <div className="stat-number">{quests.length}</div>
            <div className="stat-text">Quêtes disponibles</div>
          </div>
        </div>
      </section>

      {/* Hero Mosaic */}
      <section className="hero-mosaic-section">
        <h2>Les Guerriers de la Guilde</h2>
        <div className="hero-mosaic">
          {heroes.map((hero, index) => {
            const emoji = CLASS_EMOJI[hero.classe] ?? '🧙';
            return (
              <Link
                key={hero.id}
                to={`/heroes/${hero.id}`}
                className={`mosaic-card ${hero.isAlive ? 'alive' : 'dead'}`}
                style={{ '--delay': `${index * 50}ms` } as React.CSSProperties}
              >
                <div className="mosaic-emoji">{emoji}</div>
                <div className="mosaic-info">
                  <h3>{hero.name}</h3>
                  <p>{hero.classe}</p>
                  <span className="mosaic-level">Niv. {hero.level}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Prêt à rejoindre l'aventure?</h2>
        <div className="cta-buttons">
          <Link to="/heroes" className="btn-cta primary">⚔️ Recruter des Héros</Link>
          <Link to="/quests" className="btn-cta secondary">📜 Découvrir les Quêtes</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;