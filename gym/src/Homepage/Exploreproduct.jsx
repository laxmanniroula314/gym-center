import React from "react";
import { Link } from "react-router-dom";
//import Productsgrid from "../Gallerypage/Productsgrid";
import "./Home.css";

const ExploreProducts = () => {
  return (
    <div className="explore-products">
      <div className="header">
        <h2>
          EXPLORE OUR <span className="highlight">PRODUCT</span>
        </h2>
        <Link to="/gallery" className="see-all">
          See All
        </Link>
      </div>
      {/*<Productsgrid />*/}
    </div>
  );
};

export default ExploreProducts;
