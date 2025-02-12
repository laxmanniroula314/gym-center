import React from "react";
import "./About.css";

const Trainercard = ({ trainer }) => {
  return (
    <div className="trainer-card">
      {trainer.isNew && <span className="new-tag">New</span>}
      <img src={trainer.img} alt={trainer.name} />
      <h4>{trainer.name}</h4>
      <p className="specialty">{trainer.specialty}</p>
      <p className="rating">{"⭐".repeat(trainer.rating)}</p>
      <p>Train yourself with experts and get better results</p>
      <button className="explore-btn">Explore More</button>
    </div>
  );
};

export default Trainercard;
