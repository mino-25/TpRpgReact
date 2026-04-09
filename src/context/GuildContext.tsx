
import { createContext, use, useReducer } from 'react';
import type { Quest, ActiveQuest }        from '../types';
import { heroes as initialHeroes }        from '../data';


type GuildState = {
  gold:          number;
  xp:            number;
  currentHeroId: number | null;
  activeQuest:   ActiveQuest | null;
};

const initialState: GuildState = {
  gold:          0,
  xp:            0,
  currentHeroId: null,
  activeQuest:   null,
};

type GuildAction =
  | { type: 'SELECT_HERO';      payload: number  }
  | { type: 'TAKE_QUEST';       payload: Quest   }
  | { type: 'COMPLETE_QUEST';   payload: { xpGained: number; goldGained: number } }
  | { type: 'ABANDON_QUEST'                       };


function guildReducer(state: GuildState, action: GuildAction): GuildState {
  switch (action.type) {

    case 'SELECT_HERO':
      return {
        ...state,
        currentHeroId: state.currentHeroId === action.payload ? null : action.payload,
      };

    case 'TAKE_QUEST': {
      const hero = initialHeroes.find(h => h.id === state.currentHeroId);
      if (!hero || state.activeQuest) return state;

      return {
        ...state,
        activeQuest: {
          ...action.payload,
          heroId:    hero.id,
          heroName:  hero.name,
          heroEmoji: ({'Archère':'🏹','Paladin':'🛡️','Nécromancienne':'💀','Guerrier':'⚔️','Druide':'🌿'} as Record<string,string>)[hero.classe] ?? '🧙',
        },
      };
    }

    case 'COMPLETE_QUEST':
      return {
        ...state,
        gold:        state.gold + action.payload.goldGained,
        xp:          state.xp  + action.payload.xpGained,
        activeQuest: null,
      };

    case 'ABANDON_QUEST':
      return { ...state, activeQuest: null };

    default:
      return state;
  }
}

type GuildContextValue = GuildState & {
  selectHero:    (id: number)  => void;
  takeQuest:     (quest: Quest) => void;
  completeQuest: (xpGained: number, goldGained: number) => void;
  abandonQuest:  () => void;
};

const GuildContext = createContext<GuildContextValue | null>(null);


export function GuildProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(guildReducer, initialState);

  const selectHero = (id: number) =>
    dispatch({ type: 'SELECT_HERO', payload: id });

  const takeQuest = (quest: Quest) =>
    dispatch({ type: 'TAKE_QUEST', payload: quest });

  const completeQuest = (xpGained: number, goldGained: number) =>
    dispatch({ type: 'COMPLETE_QUEST', payload: { xpGained, goldGained } });

  const abandonQuest = () =>
    dispatch({ type: 'ABANDON_QUEST' });

  return (
    <GuildContext value={{ ...state, selectHero, takeQuest, completeQuest, abandonQuest }}>
      {children}
    </GuildContext>
  );
}

export function useGuild(): GuildContextValue {
  const ctx = use(GuildContext);
  if (!ctx) throw new Error('useGuild doit être utilisé dans un GuildProvider');
  return ctx;
}