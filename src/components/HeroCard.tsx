import { Link } from 'react-router';
import type { Hero } from '../types';

const CLASS_EMOJI: Record<string, string> = {
  'Archère':        '🏹',
  'Paladin':        '🛡️',
  'Nécromancienne': '💀',
  'Guerrier':       '⚔️',
  'Druide':         '🌿',
};

const CLASS_COLOR: Record<string, string> = {
  'Archère':        '#2dd4bf',
  'Paladin':        '#f59e0b',
  'Nécromancienne': '#ec4899',
  'Guerrier':       '#ef4444',
  'Druide':         '#10b981',
};

type HeroCardProps = {
  hero: Hero;
};

function HeroCard({ hero }: HeroCardProps) {
  const { id, name, classe, level, hp, isAlive } = hero;
  const emoji = CLASS_EMOJI[classe] ?? '🧙';
  const accentColor = CLASS_COLOR[classe] ?? '#c0922a';

  return (
    <Link
      to={`/heroes/${id}`}
      className={`hero-card ${isAlive ? 'alive' : 'dead'}`}
      style={{ '--accent-color': accentColor } as React.CSSProperties}
    >
      <div className="hero-card-glow"></div>

      <div className="hero-avatar">{emoji}</div>

      <div className="hero-info">
        <h2 className="hero-name">{name}</h2>
        <p className="hero-class">{classe}</p>
        <p className="hero-level">Niveau {level}</p>
        <div className="hp-bar-container">
          <div className="hp-bar-fill" style={{ width: `${(hp / 150) * 100}%` }}></div>
        </div>
        <p className="hero-hp-text">❤️ {hp} PV</p>
      </div>

      <span className={`status-badge ${isAlive ? 'badge-alive' : 'badge-dead'}`}>
        {isAlive ? '✅' : '💀'}
      </span>
    </Link>
  );
}

export default HeroCard;