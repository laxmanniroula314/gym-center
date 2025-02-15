import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import h1 from "../assets/h1.jpg";

const Healthybody = () => {
  return (
    <div className="healthy-body">
      <div className="healthy-body-container">
        <div className="image-section">
          <img src={h1} alt="Workout" />
        </div>
        <div className="text-section">
          <h2>
            GET HEALTHY BODY WITH THE <span className="highlight">PERFECT
            EXERCISE</span>
          </h2>
          <p>
            Building physical strength starts with mental resilience. Stay
            focused, stay disciplined, and conquer every obstacle. Embrace the
            burn; it's a sign of progress. What feels tough now will be your
            triumph later.
          </p>
          <p className="quote"> <span className="highlight">"NO PAIN NO GAIN"</span></p>
          <Link to="Trainers">
            <button className="startbtn">Start Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Healthybody;
