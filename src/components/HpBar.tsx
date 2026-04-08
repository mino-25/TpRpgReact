function HpBar({ hp, maxHp }: { hp: number; maxHp: number }) {
  const pct   = Math.max(0, (hp / maxHp) * 100);
  const color = pct > 50 ? '#1D9E75' : pct > 25 ? '#BA7517' : '#E24B4A';
  return (
    <div className="hp-track">
      <div
        className="hp-fill"
        style={{ width: `${pct}%`, background: color }}
      />
    </div>
  );
}

export default HpBar;