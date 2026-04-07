
function GuildHeader({ guildName, memberCount }) {
    return (
      <header className="guild-header">
        <h1>⚔️ {guildName}</h1>
        <p className="member-count">{memberCount} membres enregistrés</p>
      </header>
    );
  }
export default GuildHeader