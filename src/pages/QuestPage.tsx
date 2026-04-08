

import HeroSelector      from '../components/HeroSelector';
import ActiveQuestPanel  from '../components/ActiveQuestPanel';
import QuestBoard        from '../components/QuestBoard';

function QuestsPage() {
  return (
    <div className="page quests-page">
      <h2 className="page-title">📜 Tableau des Quêtes</h2>

      <HeroSelector />
      <ActiveQuestPanel />

      <h3 className="section-title">Quêtes disponibles</h3>
      <QuestBoard />
    </div>
  );
}

export default QuestsPage;