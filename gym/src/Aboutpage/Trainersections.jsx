import React from "react";
import { Link } from "react-router-dom";
import Trainercard from "./Trainercard";
import "./About.css";
import lax from "../assets/lax.jpg";
import sak from "../assets/sak.jpg";
import adi from "../assets/adi.jpg";
import fit from "../assets/fit.jpg";



const trainers = [
  { id: 1, name: "Abhiyan Niroula", specialty: "Yoga Master", rating: 5, isNew: true, img: sak },
  { id: 2, name: "Sweekar koirala", specialty: "Body Builder", rating: 4, isNew: true, img:lax  },
  { id: 3, name: "Aditya Thapa Magar", specialty: "Body Builder", rating: 7, isNew: false, img: adi},
  { id: 4, name: "Awan Adhakari", specialty: "Gymnast", rating: 6, isNew: true, img: fit },
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
      <Link to="/Trainers" className="see-all">See All</Link>
    </div>
  );
};

export default Trainersection;
