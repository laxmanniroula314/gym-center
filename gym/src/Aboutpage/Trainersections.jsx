import React from "react";
import Trainercard from "./Trainercard";
import "./About.css";

const trainers = [
  { id: 1, name: "Ayla Cozey", specialty: "Yoga Master", rating: 5, isNew: true, img: "/images/yoga_trainer.png" },
  { id: 2, name: "James Smith", specialty: "Body Builder", rating: 5, isNew: false, img: "/images/bodybuilder1.png" },
  { id: 3, name: "Harris Ali", specialty: "Body Builder", rating: 5, isNew: false, img: "/images/bodybuilder2.png" },
  { id: 4, name: "Masha Allen", specialty: "Gymnast", rating: 5, isNew: false, img: "/images/gymnast.png" },
];

const Trainersection = () => {
  return (
    <div className="trainers-section">
      <h2>TRAIN YOURSELF WITH OUR <span className="highlight">EXPERT</span></h2>
      <div className="trainers-list">
        {trainers.map(trainer => (
          <Trainercard key={trainer.id} trainer={trainer} />
        ))}
      </div>
      <a href="/trainers" className="see-all">See All</a>
    </div>
  );
};

export default Trainersection;
