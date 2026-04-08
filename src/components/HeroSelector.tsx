import { heroes } from "../data";
import { useGuild } from "../context/GuildContext";


const CLASS_EMOJI: Record<string, string> = {
  'Archère':        '🏹',
  'Paladin':        '🛡️',
  'Nécromancienne': '💀',
  'Guerrier':       '⚔️',
  'Druide':         '🌿',
};

function HeroSelector(){
const { currentHeroId, selectHero} = useGuild()

return (
    <>
    <div className="hero-selector">
        <p className="selector-label">Choisi ton héro</p>
        <div className="selector-row">
            {heroes.filter(h=> h.isAlive).map(hero=> 
                <button
                key={hero.id}
                onClick={() => selectHero(hero.id)}
                >{CLASS_EMOJI[hero.classe]?? '🧙'} {hero.name}</button>
            )}
        </div>
    </div>
    </>
)
}

export default HeroSelector