import { NavLink } from 'react-router';
 
function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-brand">⚔️ RPG</span>
 
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
      </ul>
    </nav>
  );
}
 
export default Navbar;
 