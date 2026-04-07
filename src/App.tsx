import GuildHeader from "./components/GuildHeader";
import HeroList from "./components/HeroList";
import QuestBoard from "./components/QuestBoard";


const heroes = [
  { id: 1, name: "Lyria",  classe: "Archère",        level: 28, hp: 80,  isAlive: true  },
  { id: 2, name: "Theron", classe: "Paladin",         level: 45, hp: 100, isAlive: true  },
  { id: 3, name: "Zara",   classe: "Nécromancienne",  level: 33, hp: 60,  isAlive: false },
  { id: 4, name: "Brom",   classe: "Guerrier",        level: 20, hp: 120, isAlive: true  },
  { id: 5, name: "Sylven", classe: "Druide",          level: 38, hp: 90,  isAlive: true  },
];
 

function App() {

  return (
    <div className="app">
      <GuildHeader
        guildName="Les Dragons d'Argent"
        memberCount={heroes.length}
      />
      <HeroList heroes={heroes} />

      <QuestBoard />
    </div>
  );
}

export default App
