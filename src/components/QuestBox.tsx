function QuestBox({ title, rarity, reward, content }: { title: string; rarity: string; reward: string; content: string }) {
  return (
    <div className="quest-box">
      <div className="quest-header">
        <h3>{title}</h3>
        {rarity && <span className="tag">{rarity}</span>}
      </div>
      <div className="quest-content">
        <p>{content}</p>
        {reward && <span className="reward">{reward}</span>}
      </div>
    </div>
  );
}

export default QuestBox;