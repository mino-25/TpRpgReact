import { heroes as initialHeroes, quests as initialQuests } from '../data';
import type { ActiveQuest, Quest } from '../types';

type GuildState = {
  gold:          number;
  xp:            number;
  currentHeroId: number | null;
  activeQuest:   ActiveQuest | null;
  quests:        Quest[];
};
 
const initialState: GuildState = {
  gold:          0,
  xp:            0,
  currentHeroId: null,
  activeQuest:   null,
  quests:        initialQuests,
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
    case 'TAKE_QUEST':{
        const hero = initialHeroes.find(h => h.id === state.currentHeroId);
        if(!hero ||state.activeQuest) return state;

        return {
            ...state,
            activeQuest: {
                ...action.payload,
                heroId:hero.id,
                heroName: hero.name,
                heroEmoji: ({'Archère':'🏹','Paladin':'🛡️','Nécromancienne': '💀','Guerrier':'⚔️','Druide':'🌿',} as Record<string,string>)[hero.classe] ?? '🧙'   
            },
            quests:state.quests.map(q=>
                    q.id === action.payload.id ? {...q} :q
                )
        }
    }
    
        default:
            break;
    }
}

type GuildContextValue = GuildState & {
  selectHero:    (id: number)  => void;
  takeQuest:     (quest: Quest) => void;
  
};