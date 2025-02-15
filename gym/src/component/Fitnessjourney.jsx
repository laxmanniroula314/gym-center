import React from "react";
import "./Fitnessjourney.css";
import fit from "../assets/fit.jpg";
import { Link } from "react-router-dom";
const Fitnessjourney = () => {
  return (
    <div className="fitness-journey">
      <div className="content">
        <h2>
          YOUR <span className="highlight">FITNESS JOURNEY</span> STARTS HERE!
        </h2>
        <p>
          Search and connect with personal trainers who specialize in fitness goals and truly care.
          From fat burning to strength training and everything in between.
        </p>
        <div className="button-container">
          <Link to="LoginSignup">
        <button className="start-btn">Signup now</button>
        </Link>
        </div>
      </div>
      <div className="image-container">
        <img src={fit} alt="Fitness Journey" />
      </div>
    </div>
  );
};

export default Fitnessjourney;
