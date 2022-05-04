import React from "react";
import "./cards.css";
// import "./Appel.jsx";

const Cards = ({ monster, index }) => {
  return (
    <figure className="cards">
      <img src={monster.image} alt={index} />
      <figcaption className="infos">
        <h3>{monster.name}</h3>
      </figcaption>
      <p>{monster.description}</p>
    </figure>
  );
};

export default Cards;
