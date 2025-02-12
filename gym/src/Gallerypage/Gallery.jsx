import React from "react";
import Galleryheader from "./Galleryheader.jsx";
import "./Gallery.css";
import Productsgrid from './Productsgrid.jsx';

const Gallery = () => {
  return (
    <>
      
      <div className="gallery-container">
        <Galleryheader />
        <Productsgrid/>
       
      </div>
      
    </>
  );
};

export default Gallery;
