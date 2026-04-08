import QuestBox from './QuestBox';
import { quests } from '../data';

function QuestBoard() {
  return (
    <div className="quest-board">
      {quests.map((quest) => (
        <QuestBox
          key={quest.id}
          title={quest.title}
          rarity={quest.rarity}
          reward={quest.reward}
          content={quest.content}
        />
      ))}
    </div>
  );
}

export default QuestBoard;