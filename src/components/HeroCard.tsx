
const CLASS_EMOJI = {
    "Archère":       "🏹",
    "Paladin":       "🛡️",
    "Nécromancienne":"💀",
    "Guerrier":      "⚔️",
    "Druide":        "🌿",
  };

function HeroCard({ name, classe, level, hp, isAlive }) {
    const cardStyle = {
      opacity:  isAlive ? 1 : 0.45,
      filter:   isAlive ? 'none' : 'grayscale(80%)',
    };
   
    const emoji = CLASS_EMOJI[classe] ?? '🧙';
   
    return (
      <article className={`hero-card ${isAlive ? 'alive' : 'dead'}`} style={cardStyle}>
        <div className="hero-avatar">{emoji}</div>
   
        <div className="hero-info">
          <h2 className="hero-name">{name}</h2>
          <p className="hero-class">{classe}</p>
          <p className="hero-level">Niveau {level}</p>
          <p className="hero-hp">❤️ {hp} PV</p>
        </div>
   
        <span className={`status-badge ${isAlive ? 'badge-alive' : 'badge-dead'}`}>
          {isAlive ? '✅ En vie' : '💀 Mort'}
        </span>
      </article>
    );
  }

export default HeroCard