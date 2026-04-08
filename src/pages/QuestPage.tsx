import QuestBoard from '../components/QuestBoard';
 
function QuestsPage() {
  return (
    <div className="page quests-page">
      <h2 className="page-title">📜 Tableau des Quêtes</h2>
      <p className="page-subtitle">Missions disponibles pour les membres de la guilde</p>
      <QuestBoard />
    </div>
  );
}
 
export default QuestsPage;