// App.tsx — corrigé
import { Routes, Route }  from 'react-router';
import { GuildProvider }  from './context/GuildContext';  
import Navbar             from './components/Navbar';
import HomePage           from './pages/HomePage';
import HeroesPage         from './pages/HeroesPage';
import HeroDetailPage     from './pages/HeroDetailPage';
import QuestsPage         from './pages/QuestPage';
import Leaderboard        from './pages/LeaderBoard';
import BattlePage         from './pages/BattlePage';      
import NotFoundPage       from './pages/NotFoundPage';

function App() {
  return (
    <GuildProvider>          
      <div className="app">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/"           element={<HomePage />}       />
            <Route path="/heroes"     element={<HeroesPage />}     />
            <Route path="/heroes/:id" element={<HeroDetailPage />} />
            <Route path="/quests"     element={<QuestsPage />}     />
            <Route path="/battle"     element={<BattlePage />}     /> 
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="*"           element={<NotFoundPage />}   />
          </Routes>
        </main>
      </div>
    </GuildProvider>
  );
}

export default App;