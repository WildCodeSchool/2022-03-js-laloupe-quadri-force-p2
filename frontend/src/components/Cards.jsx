import React from "react";
import "./cards.css";
// import "./Appel.jsx";

const Cards = ({ monster, index }) => {
  return (
    <div className="uc">
      <figure className="cardsfigure">
        <img src={monster.image} alt={index} />
      </figure>
      <div className="infos">
        <h3>{monster.name}</h3>
        <p>{monster.description}</p>
      </div>
    </div>
  );
};

export default Cards;
