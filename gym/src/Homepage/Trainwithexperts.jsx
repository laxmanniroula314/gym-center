// src/components/Home/TrainWithExperts.js
import React from "react";
import lax from "../assets/lax.jpg";
import "./Home.css";

const experts = [
  { name: "Yoga Master", role: "Ayla Cozey", image: lax },
  { name: "Body Builder", role: "James Smith", image: lax },
];

const Trainwithexperts = () => {
  return (
    <div className="train-with-experts">
      <h2>TRAIN YOURSELF WITH OUR <span className="highlight">EXPERT</span></h2>
      <div className="experts-container">
        {experts.map((expert, index) => (
          <div className="expert-card" key={index}>
            <img src={expert.image} alt={expert.name} />
            <h3>{expert.name}</h3>
            <p>{expert.role}</p>
            <button className="btn">Explore More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainwithexperts;
