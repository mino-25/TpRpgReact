export type Hero = {
  id:      number;
  name:    string;
  classe:  string;
  level:   number;
  hp:      number;
  isAlive: boolean;
};
 
export type Quest = {
  id:      number;
  title:   string;
  rarity:  string;
  reward:  string;
  content: string;
  diff: '⭐️' |'⭐️⭐️'|'⭐️⭐️⭐️' |'⭐️⭐️⭐️⭐️';
  xp:number;
};
export type ActiveQuest = Quest & {
heroId: number;
heroName: string;
heroEmoji: string;
} 
 