import type { Fighter } from "../types";
import HpBar from "./HpBar";

function FighterCard({ fighter, label }: { fighter: Fighter; label: string }) {
    return (
        <>
            <div className={`fighter-card ${fighter.hp <= 0 ? 'dead' : ''}`}>
                <p className="fighter-label">{label}</p>
                <div className="fighter-avatar">{fighter.emoji}</div>
                <p className="fighter-name">{fighter.name}</p>
                <HpBar hp={fighter.hp} maxHp={fighter.maxHp} />
                <p className="fighter-hp">{fighter.hp} / {fighter.maxHp} PV</p>
            </div>
        </>
    );
}
export default FighterCard;