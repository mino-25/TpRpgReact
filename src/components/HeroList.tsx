
import HeroCard from './HeroCard';
import type { Hero } from '../types';
 
type HeroListProps = {
  heroes: Hero[];
};
 
function HeroList({ heroes }: HeroListProps) {
  if (heroes.length === 0) {
    return <p className="empty-message">Aucun héros dans la guilde pour l'instant.</p>;
  }
 
  return (
    <section className="hero-list">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </section>
  );
}
 
export default HeroList;