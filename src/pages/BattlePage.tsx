import { Navigate } from "react-router";
import { useGuild } from "../context/GuildContext";
import BattleSimulator from "../components/BattleSimulator";

function BattlePage(){
    const { activeQuest} = useGuild();
    if(!activeQuest) {
    return <Navigate to="/quests" replace />;
  }
 
  return (
    <div className="page battle-page">
      <h2 className="page-title">⚔️ {activeQuest.title}</h2>
      <p className="page-subtitle">
        {activeQuest.heroEmoji} {activeQuest.heroName} affronte {activeQuest.diff}
      </p>
      <BattleSimulator />
    </div>
  );
}
export default BattlePage;