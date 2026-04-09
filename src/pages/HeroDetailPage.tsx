

import { useParams, useNavigate } from 'react-router';
import { useHero }                from '../hooks/useHero';
import { LoadingState, ErrorState } from '../components/StateComponents';

function HeroDetailPage() {
  const { id }    = useParams<{ id: string }>();
  const navigate  = useNavigate();
  const { hero, loading, error } = useHero(id ? Number(id) : undefined);

  if (loading) return <LoadingState message="Chargement du héros..." />;
  if (error)   return (
    <div className="page">
      <ErrorState message={error} />
      <button className="btn-back" onClick={() => navigate(-1)} style={{ marginTop: 16 }}>← Retour</button>
    </div>
  );
  if (!hero) return null;

  const hpPercent = Math.round((hero.hp / 120) * 100);

  return (
    <div className="page hero-detail-page">
      <button className="btn-back" onClick={() => navigate(-1)}>← Retour</button>

      <div className={`hero-detail-card ${hero.isAlive ? 'alive' : 'dead'}`}>
        <div className="hero-detail-avatar">
          {({'Archère':'🏹','Paladin':'🛡️','Nécromancienne':'💀','Guerrier':'⚔️','Druide':'🌿'} as Record<string,string>)[hero.classe] ?? '🧙'}
        </div>
        <div className="hero-detail-info">
          <h2>{hero.name}</h2>
          <p className="hero-detail-class">{hero.classe}</p>
          <div className="hero-detail-stats">
            <div className="stat-row"><span className="stat-name">Niveau</span><span className="stat-val">{hero.level}</span></div>
            <div className="stat-row"><span className="stat-name">Points de vie</span><span className="stat-val">{hero.hp} PV</span></div>
            <div className="hp-track">
              <div className="hp-fill" style={{
                width: `${hpPercent}%`,
                background: hpPercent > 50 ? '#1D9E75' : hpPercent > 25 ? '#BA7517' : '#E24B4A',
              }} />
            </div>
            <div className="stat-row">
              <span className="stat-name">Statut</span>
              <span className={`status-badge ${hero.isAlive ? 'badge-alive' : 'badge-dead'}`}>
                {hero.isAlive ? '✅ En vie' : '💀 Mort'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroDetailPage;