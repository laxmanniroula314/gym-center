// src/components/Home/HeroSection.js
import React from "react";
import "./Home.css";

const Herosection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>MAKE YOURSELF <span className="highlight">STRONGER</span> & FITTER FOREVER</h1>
        <div className="hero-stats">
          <div>
            <h2>70K+</h2>
            <p>Happy Members</p>
          </div>
          <div>
            <h2>7K+</h2>
            <p>Successful Transformations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
