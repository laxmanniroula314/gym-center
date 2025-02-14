import React from "react";
import "./Community.css";

const involvementData = [
  {
    id: 1,
    name: "SUZUKA HINAMATA",
    description: "Our mission is to foster a strong community by promoting fitness and well-being. We offer free workout sessions, volunteer at health education events, and provide mentorship to help individuals of all fitness levels achieve their health goals."
 },
  {
    id: 2,
    name: "STEVE JOSEPH",
    description:"We're committed to strengthening our community by encouraging healthier lifestyles. Through free fitness classes, volunteer initiatives focused on health awareness, and personalized mentorship, we aim to inspire everyone to lead a balanced and active life."
},
  {
    id: 3,
    name: "ALEXANDER DOE",
    description: "By focusing on fitness as a path to personal and community growth, we provide free workout sessions, volunteer for health awareness campaigns, and mentor individuals to help them achieve their wellness goals, regardless of where they begin."
},
  {
    id: 4,
    name: "LISA KIM",
    description: "Fitness is more than just working out. We collaborate with schools, corporate offices, and local groups to provide educational fitness seminars, ensuring everyone has access to proper health knowledge and training.",
  },
  {
    id: 5,
    name: "JAMES BOND",
    description:"Our community-centered approach to fitness is built on inclusivity and support. We organize free workout programs, contribute to health education initiatives, and offer mentorship, ensuring everyone has the opportunity to improve their wellness, no matter their starting point."
 },
  {
    id: 6,
    name: "SARAH SMITH",
    description:
      "We believe in the power of fitness to unite and empower communities. We offer free workout sessions, volunteer at local health awareness programs, and provide mentorship, helping everyone, no matter their fitness level, to embrace a healthier lifestyle.",
},
];



const Communityinvolvement = () => {
  return (
    <div className="community-involvement">
      <h2>COMMUNITY <span className="highlight">INVOLVEMENT</span></h2>
      <div className="involvement-container">
        {involvementData.map((person) => (
          <div key={person.id} className="involvement-card">
            <h3 className="green-text">{person.name}</h3>
            <p className="desc">{person.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Communityinvolvement;
