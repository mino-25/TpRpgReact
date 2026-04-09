import { useState } from "react";
import { heroes } from "../data";

export default function Leaderboard() {
  const [sortBy, setSortBy] = useState("level");
  const [filterClass, setFilterClass] = useState("all");
  const [search, setSearch] = useState("");

  const classes = ["all", ...new Set(heroes.map(h => h.classe))];

  const filteredHeroes = [...heroes]
    .filter(hero =>
      filterClass === "all" ? true : hero.classe === filterClass
    )
    .filter(hero =>
      hero.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "level") {
        if (b.level !== a.level) return b.level - a.level;
        return b.hp - a.hp;
      }
      if (sortBy === "hp") return b.hp - a.hp;
      if (sortBy === "class") return a.classe.localeCompare(b.classe);
      return 0;
    });

  return (
    <div>
      <h1>Leaderboard</h1>

      <input
        type="text"
        placeholder="Rechercher un héros..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setFilterClass(e.target.value)}>
        {classes.map(c => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <div>
        <button onClick={() => setSortBy("level")}>Niveau ↓</button>
        <button onClick={() => setSortBy("hp")}>HP ↓</button>
        <button onClick={() => setSortBy("class")}>Classe A-Z</button>
      </div>

      <button
        onClick={() => {
          setSortBy("level");
          setFilterClass("all");
          setSearch("");
        }}
      >
        Reset
      </button>

      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Classe</th>
            <th>Niveau</th>
            <th>PV</th>
            <th>Statut</th>
          </tr>
        </thead>

        <tbody>
          {filteredHeroes.map((hero, index) => (
            <tr
              key={hero.id}
              className={index === 0 ? "first-place" : ""}
            >
              <td>{index + 1}</td>
              <td>{hero.name}</td>
              <td>{hero.classe}</td>
              <td>{hero.level}</td>
              <td>{hero.hp}</td>
              <td>{hero.hp > 0 ? "Vivant" : "Mort"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}