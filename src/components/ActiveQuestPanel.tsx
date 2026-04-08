import { Link } from "react-router";
import { useGuild } from "../context/GuildContext";

function ActiveQuestPanel() {
    const { activeQuest, abandonQuest } = useGuild();

    if (!activeQuest) {
        return (
            <>
                <p>Aucune mission en cours.Sélectionne un héros et une quête</p>
            </>
        )
    }
    return (
        <>
            <div>
                <p>
                    {activeQuest.heroEmoji} {activeQuest.heroName} — {activeQuest.title}
                </p>
                <div className="aq-meta">
                    <span className="tag">{activeQuest.rarity}</span>
                    <span className="diff">{activeQuest.diff}</span>
                    <span className="reward">💰 {activeQuest.reward}</span>
                </div>
                <div className="aq-actions">
                    <Link to="/battle" className="btn-primary btn-sm">
                        ⚔️ Partir au combat
                    </Link>
                    <button className="btn-danger btn-sm" onClick={abandonQuest}>
                        Abandonner
                    </button>
                </div>
            </div>
        </>
    )
}

export default ActiveQuestPanel;