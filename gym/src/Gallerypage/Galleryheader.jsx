import React, { useState } from "react";
import "./Gallery.css";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import gym from "../assets/gym.jpg";
import adi from "../assets/adi.jpg";

const galleryImages = [
  { id: 1, img: g2 },
  { id: 2, img: g1 },
  { id: 3, img: g3 },
  { id: 4, img: g4 },
  { id: 5, img: gym},
  { id: 6, img: g6 },
  { id: 7, img: adi },
  { id: 8, img: g5 },
  { id: 9, img: g1 },
  
];

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMore = () => {
    setVisibleCount(galleryImages.length);
  };

  return (
    <div className="gallery-section">
      <div className="gallery-header-img">
        <h1>Gallery</h1>
      </div>
      <div className="gallery-header">
        <h2>
          VIEW OUR <span className="highlight">GALLERY</span>
        </h2>
      </div>
      <div className="gallery-grid">
        {galleryImages.slice(0, visibleCount).map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.img} alt={`Gallery ${image.id}`} />
          </div>
        ))}
      </div>
      {visibleCount < galleryImages.length && (
        <button className="view-all" onClick={loadMore}>
          View All
        </button>
      )}
    </div>
  );
};

export default Gallery;
