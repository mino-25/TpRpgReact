import { Link }       from 'react-router';
import GuildHeader    from '../components/GuildHeader';
import { useGuild }   from '../context/GuildContext';
import { useHeroes }  from '../hooks/useHeroes';
import { useQuests }  from '../hooks/useQuests';
 
function HomePage() {
  const { gold, xp }                        = useGuild();
  const { heroes, loading: hLoading }       = useHeroes();
  const { quests, loading: qLoading }       = useQuests();
 
  const aliveCount = heroes.filter(h => h.isAlive).length;
 
  return (
    <div className="page home-page">
      <GuildHeader guildName="Les Dragons d'Argent" memberCount={heroes.length} />
 
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-value">{hLoading ? '...' : heroes.length}</span>
          <span className="stat-label">Héros enregistrés</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{hLoading ? '...' : aliveCount}</span>
          <span className="stat-label">Héros en vie</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{qLoading ? '...' : quests.length}</span>
          <span className="stat-label">Quêtes disponibles</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{gold} 💰</span>
          <span className="stat-label">Or de la guilde</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{xp} XP</span>
          <span className="stat-label">Expérience totale</span>
        </div>
      </div>
 
      <div className="home-actions">
        <Link to="/heroes" className="btn-primary">⚔️ Voir les héros</Link>
        <Link to="/quests" className="btn-secondary">📜 Prendre une quête</Link>
      </div>
    </div>
  );
}
 
export default HomePage;
 