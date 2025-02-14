import React from "react";

import "./Community.css";
import fit from "../assets/fit.jpg";
import cus from "../assets/cus.jpg";
import logo from "../assets/logo.jpg";
import adi from "../assets/adi.jpg";



const reviews = [
  { name: "Martin Smith", title: "Business Consultant", image: fit, review:"I love this gym! The variety of workouts keeps me engaged, and the staff is always supportive. It’s an amazing place to improve both fitness and mental well-being, with a friendly and welcoming atmosphere.",
   },
  {name: "Sara Allen",title: "Fitness Coach",image: adi, review:"A fantastic gym that truly focuses on individual growth! The trainers are knowledgeable, the equipment is always in great shape, and the positive environment makes every workout enjoyable and motivating.",
    },
  { name: "John Doe", title: "Software Engineer", image: logo, review:"Amazing gym with top-notch equipment and friendly atmosphere! The staff is excellent, facilities are clean, and a variety of classes makes workouts exciting and challenging.",
    },
  { name: "Yumi Fujiwara", title: "Nutrition & Fitness Expert", image: cus, review:"Highly recommend this gym! The environment is motivating, the trainers are knowledgeable, and I’ve seen great progress in my fitness journey. They truly care about helping people reach their goals.",
     },
];

const Customerreviews = () => {
  return (
    <div className="customer-reviews">
     <div className="community-header">
        <h1>Community</h1>
      </div>
      {/* Inserted Community Header here */}
      <h2>WHAT'S OUR <span className="highlight">CUSTOMER SAY</span></h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img src={review.image} alt={review.name} className="review-image" />
            <h3>{review.name}</h3>
            <p className="review-title">{review.title}</p>
            <p className="review-text">“{review.review}”</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customerreviews;
