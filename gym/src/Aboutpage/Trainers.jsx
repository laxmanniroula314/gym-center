import React from "react";
import Trainercard from "./Trainercard";
import "./About.css";
import lax from '../assets/lax.jpg';
import adi from "../assets/adi.jpg";
import sak from "../assets/sak.jpg";
import fit from "../assets/fit.jpg";
import cus from "../assets/cus.jpg";
import logo from "../assets/logo.jpg";
import trainer from "../assets/trainer.jpg";


const trainers = [
  { id: 1, name: "Ayla Cozey", specialty: "Yoga Master", rating: 4, isNew: true, img: sak },
  { id: 2, name: "Abhiyan Niroula", specialty: "Trainer", rating: 4, isNew: true, img: lax},
  { id: 3, name : "Aditya Thapa Magar", specialty: "Body Builder", rating: 5, isNew: false, img: adi },
  { id: 5, name: "Awan Adhakari", specialty: "Gymnast", rating: 7, isNew: false, img: fit },
  { id: 6, name: "Alisa hex", specialty: "Gymnast", rating: 3, isNew: true, img: cus },
  { id: 7, name: "Sweeekar Koirala",   specialty: "Yoga Master", rating: 5, isNew: false, img: sak},
  { id: 8, name: "Manoj karki", specialty: "Body Builder", rating: 4, isNew: true, img: trainer },
  { id: 9, name: "Harris Ali", specialty: "Trainer", rating: 6, isNew: false, img: logo },
  { id: 10, name: "Masha Allen", specialty: "Gymnast", rating: 4, isNew: true, img: cus },
  { id: 11, name: "James Smith", specialty: "Body Builder", rating: 3, isNew: true, img: adi },
  { id: 12, name: "Pushpa Basnet", specialty: "Body Builder", rating: 4, isNew: true, img: lax },
  { id: 13, name: "Masha Allen", specialty: "Gymnast", rating: 5, isNew: false, img: fit },
  { id: 14, name: "Ram Niroula", specialty: "Trainer", rating: 6, isNew: true, img: trainer },
  { id: 15, name: "Alex Carry", specialty: "Gymnast", rating: 5, isNew: false, img: fit },
  { id: 16, name: "Martin smith",   specialty: "Yoga Master", rating: 5, isNew: true, img: sak},
  ];

const Trainers = () => {
  return (
    <div className="trainers-section">
      <h2>
        TRAIN YOURSELF WITH <span className="highlight">OUR EXPERT</span>
      </h2>
      <div className="trainers-list">
        {trainers.map(trainer => (
          <Trainercard key={trainer.id} trainer={trainer} />
        ))}
      </div>
    </div>
  );
};

export default Trainers;
