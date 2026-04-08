import HeroList from '../components/HeroList';
import { heroes } from '../data';
 
function HeroesPage() {
  return (
    <div className="page heroes-page">
      <h2 className="page-title">⚔️ Roster de la Guilde</h2>
      <p className="page-subtitle">Clique sur un héros pour voir sa fiche complète</p>
      <HeroList heroes={heroes} />
    </div>
  );
}
 
export default HeroesPage;