// src/components/Home/WhyChooseUs.js
import React from "react";
import { FaDumbbell, FaMedal, FaBroom, FaHeartbeat } from "react-icons/fa";
import "./Home.css";

const Whychooseus = () => {
  const reasons = [
    { icon: <FaDumbbell />, title: "Diverse Workouts", desc: "Explore various exercises for all fitness levels." },
    { icon: <FaMedal />, title: "Determination", desc: "Personalized programs to reach your goals." },
    { icon: <FaBroom />, title: "Clean Facilities", desc: "Well-maintained equipment and hygiene standards." },
    { icon: <FaHeartbeat />, title: "Science-Driven", desc: "Data-backed routines for optimal results." },
  ];

  return (
    <div className="why-choose-us">
      <h2>WHY CHOOSE US</h2>
      <div className="reasons-container">
        {reasons.map((item, index) => (
          <div className="reason-card" key={index}>
            <span className="icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whychooseus;
