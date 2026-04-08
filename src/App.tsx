import { Routes, Route } from 'react-router';
import Navbar          from './components/Navbar';
import HomePage from './pages/HomePage';
import HeroesPage from './pages/HeroesPage';
import HeroDetailPage from './pages/HeroDetailPage';
import QuestsPage from './pages/QuestPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="app">
      <Navbar />
 
      <main className="main-content">
        <Routes>
          <Route path="/"            element={<HomePage />}       />
          <Route path="/heroes"      element={<HeroesPage />}     />
          <Route path="/heroes/:id"  element={<HeroDetailPage />} />
          <Route path="/quests"      element={<QuestsPage />}     />
          <Route path="*"            element={<NotFoundPage />}   />
        </Routes>
      </main>
    </div>
  );
}
 
export default App;
