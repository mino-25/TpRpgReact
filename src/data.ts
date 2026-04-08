import type { Hero, Quest } from './types';
 
export const heroes: Hero[] = [
  { id: 1, name: 'Lyria',  classe: 'Archère',        level: 28, hp: 80,  isAlive: true  },
  { id: 2, name: 'Theron', classe: 'Paladin',         level: 45, hp: 100, isAlive: true  },
  { id: 3, name: 'Zara',   classe: 'Nécromancienne',  level: 33, hp: 60,  isAlive: false },
  { id: 4, name: 'Brom',   classe: 'Guerrier',        level: 20, hp: 120, isAlive: true  },
  { id: 5, name: 'Sylven', classe: 'Druide',          level: 38, hp: 90,  isAlive: true  },
];
 
export const quests: Quest[] = [
  { id: 1, title: 'Quête Principale',  rarity: 'Épique',     reward: '1 000 XP', content: 'Détruire l\'Anneau Unique dans les feux du Mont Doom.', diff: '⭐⭐⭐',   xp: 80  },
  { id: 2, title: 'Quête Secondaire',  rarity: 'Normal',     reward: '200 XP',   content: 'Escorter le marchand jusqu\'à Bree.',                  diff: '⭐',       xp: 20  },
  { id: 3, title: 'Contrat de Guilde', rarity: 'Légendaire', reward: '9 999 XP', content: 'Tuer le dragon Smaug et récupérer le trésor d\'Erebor.', diff: '⭐⭐⭐⭐', xp: 150 },
];
 