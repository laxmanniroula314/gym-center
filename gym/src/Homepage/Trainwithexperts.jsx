import React from "react";
import lax from "../assets/lax.jpg";
import adi from "../assets/adi.jpg";
import sak from "../assets/sak.jpg";

import "./Home.css";

const experts = [
  { name: "Yoga Master", role: "Ayla Cozey", image: adi },
  { name: "Body Builder", role: "James Smith", image: lax },
  { name: "Gymnast", role: "Masha Allen", image: sak },
  

];

const Trainwithexperts = () => {
  return (
    <div className="train-with-experts">
      <h2>
        TRAIN YOURSELF WITH  <span className="highlight"> OUR EXPERT</span>
      </h2>
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
