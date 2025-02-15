// src/components/Home/FitnessGoals.js
import React from "react";
import gym from "../assets/gym.jpg";
import "./Home.css";
import { Link } from "react-router-dom";

const Fitnessgoal = () => {
  return (
    <div className="fitness-goals">
      <div className="text">
        <h2>
          GET READY TO ACHIEVE{" "}
          <span className="highlight"> YOUR FITNESS GOALS</span>
        </h2>
        <p>
          Join our gym and transform your fitness journey with expert trainers
          and modern equipment.
        </p>
        <div className="button-container">
          <Link to="LoginSignup">
            <button className="btn">Get Started</button>
          </Link>
        </div>
      </div>
      <div className="image">
        <img src={gym} alt="Fitness Goals" />
      </div>
    </div>
  );
};

export default Fitnessgoal;
