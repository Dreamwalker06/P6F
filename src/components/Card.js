import React from "react";
import logementsDATA from "../assets/data/logements.json";

const Card = () => {
  return (
    <div className="cards-container">
      {logementsDATA.map((logement) => (
        <div className="card" key={logement.id}>
          <div className="image-container">
            <img src={logement.cover} alt={logement.title} />
            <div className="text-overlay">
              <h3>{logement.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
