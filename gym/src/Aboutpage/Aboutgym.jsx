import React from "react";
import "./About.css";

const Aboutgym = () => {
  return (
    <div className="about-section">
      {/* ABOUT US HEADER */}
      <div className="about-header">
        <h1>ABOUT US</h1>
      </div>

      {/* ABOUT GYM CONTENT */}
      <div className="about-gym">
        <h2>ABOUT OUR <span className="highlight">GYM</span></h2>
        <p>
          At <span className="logo-text">LOGO</span>, we are more than just a fitness center – we are a community 
          dedicated to helping you achieve your health and wellness goals. With state-of-the-art equipment, 
          expert trainers, and a variety of classes, we provide a supportive environment where everyone, from 
          beginners to pros, can thrive. Your journey to a stronger, healthier you starts here.
        </p>
        <div className="button-container">
        <button className="explore-btn">Explore more →</button>
        </div>
        
      </div>
    </div>
  );
};

export default Aboutgym;
