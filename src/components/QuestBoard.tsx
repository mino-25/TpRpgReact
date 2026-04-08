
import { useState }  from 'react';
import QuestBox      from './QuestBox';
import { useGuild }  from '../context/GuildContext';
import type { Quest} from '../types';

function QuestBoard() {
  const { quests, currentHeroId, activeQuest, takeQuest } = useGuild();
  const [error, setError] = useState<string | null>(null);

  const handleTake = (quest: Quest) => {
    if (!currentHeroId) {
      setError('Sélectionne un héros avant de prendre une quête.');
      setTimeout(() => setError(null), 3000);
      return;
    }
    if (activeQuest) {
      setError('Une mission est déjà en cours.');
      setTimeout(() => setError(null), 3000);
      return;
    }
    takeQuest(quest);
    setError(null);
  };

  if (quests.length === 0) {
    return <p className="empty-message">Toutes les quêtes ont été complétées. 🏆</p>;
  }

  return (
    <div className="quest-board">
      {error && <div className="error-msg">⚠️ {error}</div>}

      {quests.map((quest) => (
        <QuestBox key={quest.id} title={quest.title} rarity={quest.rarity}>
          <p>{quest.content}</p>
          <div className="quest-footer">
            <div className="quest-rewards">
              <span className="reward">💰 {quest.reward}</span>
              <span className="diff">{quest.diff}</span>
            </div>
            <button
              className="btn-take"
              onClick={() => handleTake(quest)}
              disabled={!!activeQuest}
            >
              ⚔️ Prendre la quête
            </button>
          </div>
        </QuestBox>
      ))}
    </div>
  );
}

export default QuestBoard;