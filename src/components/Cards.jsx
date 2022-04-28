import React from "react";
import "./cards.css";

const Cards = ({ monster, index }) => {
  return (
    <li className="cards">
      <div className="infos">
        <h3>{monster.name}</h3>
        <p>{monster.description}</p>
      </div>
      <img src={monster.image} alt={index} width="100px" />
    </li>
  );
};

export default Cards;
