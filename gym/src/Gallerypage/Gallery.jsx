import React from "react";
import Galleryheader from "./Galleryheader.jsx";
import "./Gallery.css";
import Productsgrid from './Productsgrid.jsx';

const Gallery = ({ addToCart }) => {
  return (
    <>
      
      <div className="gallery-container">
        <Galleryheader />
        <Productsgrid addToCart={addToCart}/>
       
      </div>
      
    </>
  );
};

export default Gallery;
