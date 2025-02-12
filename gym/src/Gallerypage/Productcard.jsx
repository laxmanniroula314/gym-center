import React from "react";
import "./Gallery.css";

const Productcard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} />
      <h4>{product.name}</h4>
      <p className="price">{product.price}</p>
      <button className="buy-btn">Add to Cart</button>
    </div>
  );
};

export default Productcard;
