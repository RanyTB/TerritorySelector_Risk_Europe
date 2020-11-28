import React from "react";
import "./styles.css";
import { territories } from "./territories";
import * as _ from "lodash";

const players = ["Rany", "Elliot", "Alberto", "Jøran"];

export default function App() {
  const shuffledTerritories = _.shuffle(territories);
  const chunkedTerritories = _.chunk(
    shuffledTerritories,
    shuffledTerritories.length / players.length
  );

  return (
    <div className="container">
      {players.map((player, index) => (
        <div className="list" key={player}>
          <h1>{player}</h1>
          {chunkedTerritories[index].map((territory) => (
            <div key={territory}>{territory}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
