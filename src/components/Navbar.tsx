

import { NavLink } from 'react-router';
import { useGuild } from '../context/GuildContext';

function Navbar() {
  const { activeQuest } = useGuild();

  return (
    <nav className="navbar">
      <span className="navbar-brand">⚔️ RPG Quest</span>

      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            🏠 Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/heroes" className={({ isActive }) => isActive ? 'active' : ''}>
            ⚔️ Héros
          </NavLink>
        </li>
        <li>
          <NavLink to="/quests" className={({ isActive }) => isActive ? 'active' : ''}>
            📜 Quêtes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/battle"
            className={({ isActive }) =>
              `${isActive ? 'active' : ''} ${!activeQuest ? 'disabled' : ''}`
            }
            onClick={e => { if (!activeQuest) e.preventDefault(); }}
            title={!activeQuest ? 'Prends une quête pour combattre' : 'Aller au combat'}
          >
            ⚔️ Combat {activeQuest && <span className="nav-badge">!</span>}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;