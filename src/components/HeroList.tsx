import HeroCard from "./HeroCard";

function HeroList({ heroes }) {
    if (heroes.length === 0) {
      return <p className="empty-message">Aucun héros dans la guilde pour l'instant.</p>;
    }
   
    return (
      <section className="hero-list">
        {heroes.map((hero) => (
          <HeroCard
            key={hero.id}
            name={hero.name}
            classe={hero.classe}
            level={hero.level}
            hp={hero.hp}
            isAlive={hero.isAlive}
          />
        ))}
      </section>
    );
  }

  export default HeroList;