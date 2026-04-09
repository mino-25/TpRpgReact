
import { useReducer }    from 'react';
import { useNavigate }   from 'react-router';
import { useGuild }      from '../context/GuildContext';
import { ENEMY_BY_DIFF } from '../data';
import type { Fighter }  from '../types';
import FighterCard       from './FighterCard';

const rollDice = (faces: number) => Math.floor(Math.random() * faces) + 1;

type BattleState = {
  hero:    Fighter;
  enemy:   Fighter;
  log:     string;
  over:    boolean;
  victory: boolean;
};

type BattleAction =
  | { type: 'ATTACK' }
  | { type: 'DEFEND' }
  | { type: 'RESET'; payload: BattleState };

function battleReducer(state: BattleState, action: BattleAction): BattleState {
  if (state.over) return state;
  switch (action.type) {
    case 'ATTACK': {
      const dmg     = rollDice(10);
      const newHp   = Math.max(0, state.enemy.hp - dmg);
      const victory = newHp <= 0;
      return { ...state, enemy: { ...state.enemy, hp: newHp }, log: `⚔️ Tu infliges ${dmg} dégâts !`, over: victory, victory };
    }
    case 'DEFEND': {
      const heal      = 5;
      const counter   = rollDice(6);
      const newHeroHp = Math.min(state.hero.maxHp, Math.max(0, state.hero.hp + heal - counter));
      return { ...state, hero: { ...state.hero, hp: newHeroHp }, log: `🛡️ Défense (+${heal} PV) — riposte (−${counter})`, over: newHeroHp <= 0, victory: false };
    }
    case 'RESET': return action.payload;
    default: return state;
  }
}

type Props = { onVictory?: () => Promise<void> };

function BattleSimulator({ onVictory }: Props) {
  const navigate                               = useNavigate();
  const { activeQuest, completeQuest, abandonQuest } = useGuild();

  const heroFighter: Fighter  = { name: activeQuest!.heroName, emoji: activeQuest!.heroEmoji, hp: 100, maxHp: 100 };
  const enemyData             = ENEMY_BY_DIFF[activeQuest!.diff] ?? ENEMY_BY_DIFF['⭐'];
  const initialBattleState: BattleState = {
    hero: heroFighter, enemy: { ...enemyData },
    log: 'Le combat commence. À toi de jouer !', over: false, victory: false,
  };

  const [battle, dispatch] = useReducer(battleReducer, initialBattleState);

  const handleVictory = async () => {
    if (onVictory) await onVictory();
    completeQuest(activeQuest!.xp, 50);
    navigate('/quests');
  };

  const handleDefeat = () => { abandonQuest(); navigate('/quests'); };
  const resetBattle  = () => dispatch({ type: 'RESET', payload: initialBattleState });

  return (
    <div className="battle-simulator">
      <div className="fighters-row">
        <FighterCard fighter={battle.hero}  label="Ton héros" />
        <div className="vs-badge">VS</div>
        <FighterCard fighter={battle.enemy} label="Ennemi" />
      </div>

      <div className="battle-log">{battle.log}</div>

      {battle.over ? (
        <div className={`battle-result ${battle.victory ? 'win' : 'lose'}`}>
          <p className="result-title">{battle.victory ? '🏆 Victoire !' : '💀 Défaite...'}</p>
          {battle.victory ? (
            <>
              <p>+{activeQuest!.xp} XP · +50 💰</p>
              <button className="btn-primary" onClick={handleVictory}>Récupérer la récompense</button>
            </>
          ) : (
            <>
              <p>La quête est abandonnée.</p>
              <button className="btn-secondary" onClick={handleDefeat}>Retour aux quêtes</button>
            </>
          )}
          <button className="btn-outline" onClick={resetBattle}>🔄 Rejouer</button>
        </div>
      ) : (
        <div className="battle-actions">
          <button className="btn-primary"   onClick={() => dispatch({ type: 'ATTACK' })}>⚔️ Attaquer</button>
          <button className="btn-secondary" onClick={() => dispatch({ type: 'DEFEND' })}>🛡️ Se défendre</button>
        </div>
      )}
    </div>
  );
}

export default BattleSimulator;