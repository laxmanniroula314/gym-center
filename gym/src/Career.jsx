import React, { useState } from "react";
import "./Career.css";
import { FaUserTie, FaUsers } from "react-icons/fa";
import lax from "./assets/lax.png";

const peopleData = [
  {
    name: "Chirag Gautam, Area Manager, Crop Production",
    quote: "It's a gateway to career opportunities. In such a short span of my career, I have learnt enormously from international exposure, high performance culture and the faith of company on young talent.",
    image: "./assets/person1.jpg",
  },
  {
    name: "Divakar Rai, Regional Manager, Crop Production",
    quote: "This is the place that encourages you to choose your own passion. Every day there is a new challenge and possibility.",
    image: "./assets/person2.jpg",
  },
  {
    name: "Dr. Indira Dhumne, Senior Manager, Minitubers Facility",
    quote: "It's truly enriching experience to work at Mahindra HZPC. Wholesome international exposure, global work culture and freedom to experiment. What else do I need as a young professional? It's one of my dream places to work.",
    image: "./assets/person3.jpg",
  },
];

const Career = () => {
  const [selectedSection, setSelectedSection] = useState("WORKING AT MAHINDRA HZPC");

  const sections = {
    "WORKING AT MAHINDRA HZPC": {
      title: "Working at Mahindra HZPC",
      content: "At Mahindra HZPC, we support a culture of cooperation and innovation. Our greatest asset is our people. Our team is diverse and passionate about working with the farming community.",
      
    },
    "MEET OUR PEOPLE": {
      title: "Meet Our People",
      content: peopleData,
      
    },
    EVP: {
      title: "Employee Value Proposition (EVP)",
      content: "We encourage healthy competition and create a high-performance culture through rewards and recognition for achievers. At Mahindra HZPC, we all contribute to a great responsibility of supplying food for the growing population.",
     
    },
    "WORK WITH US": {
      title: "Work With Us",
      content: "Join us to be part of a team that drives innovation in agriculture. We are looking for passionate individuals dedicated to making a difference in farming and food security.",
      
    }
  };

  return (
    <div className="career-container">
      {/* Header Image */}
      <img src={lax}  className="header-image" />

      <div className="content-wrapper">
        {/* Sidebar Navigation */}
        <div className="sidebar">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              className={`sidebar-item ${selectedSection === section ? "active" : ""}`}
              onClick={() => setSelectedSection(section)}
            >
              {section} →
            </button>
          ))}
        </div>

        {/* Main Content Section */}
        <div className="main-content" key={selectedSection}>
          <div className="breadcrumb">
            <FaUserTie /> Home ❯
            <FaUsers /> Careers ❯
            <span className="current-section"> {selectedSection} </span>
          </div>

          <h2>{sections[selectedSection].title}</h2>

          {selectedSection === "MEET OUR PEOPLE" ? (
            <div className="people-section">
              {sections[selectedSection].content.map((person, index) => (
                <div key={index} className="person-card">
                  <img src={person.image} alt={person.name} className="person-image" />
                  <h3>{person.name}</h3>
                  <p>"{person.quote}"</p>
                </div>
              ))}
            </div>
          ) : (
            <>
              <p>{sections[selectedSection].content}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Career;