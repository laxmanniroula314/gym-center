import React from "react";

import "./Community.css";
import lax from "../assets/lax.png";
//import customer2 from "../../assets/customer2.jpg";
//import customer3 from "../../assets/customer3.jpg";

const reviews = [
  {
    name: "Martin Smith",
    title: "Business Consultant",
    image: lax,
    review:
      "Amazing gym with top-notch equipment and friendly atmosphere! The staff is excellent, facilities are clean, and a variety of classes makes workouts exciting and challenging.",
  },
  {
    name: "Sara Allen",
    title: "Fitness Coach",
    image: lax,
    review:
      "Amazing gym with top-notch equipment and friendly atmosphere! The staff is excellent, facilities are clean, and a variety of classes makes workouts exciting and challenging.",
  },
  {
    name: "Akane Tendo",
    title: "Personal Trainer",
    image: lax,
    review:
      "Amazing gym with top-notch equipment and friendly atmosphere! The staff is excellent, facilities are clean, and a variety of classes makes workouts exciting and challenging.",
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
