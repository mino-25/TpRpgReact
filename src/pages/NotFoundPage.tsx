import { Link } from 'react-router';
 
function NotFoundPage() {
  return (
    <div className="page not-found-page">
      <div className="not-found-content">
        <p className="not-found-emoji">🗺️</p>
        <h2>404 — Territoire inconnu</h2>
        <p>Cette contrée n'existe pas dans notre royaume.</p>
        <Link to="/" className="btn-primary">🏠 Retour à la taverne</Link>
      </div>
    </div>
  );
}
 
export default NotFoundPage;