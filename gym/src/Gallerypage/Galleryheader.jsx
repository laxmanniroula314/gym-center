import React from "react";
import "./Gallery.css";

const Galleryheader = () => {
  return (
    <>
      <div className="gallery-header-img">
      <h1>Gallery</h1>
      </div>
      <div className="gallery-header">
        <h2>
          VIEW OUR <span className="highlight">GALLERY</span>
        </h2>
        <button className="gallery-btn">Explore More</button>
      </div>
    </>
  );
};

export default Galleryheader;
