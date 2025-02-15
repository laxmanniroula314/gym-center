import React from "react";
import "./Gallery.css";

const Productcard = ({ product, addToCart}) => {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} />
      <h4>{product.name}</h4>
      <p className="price">{product.price}</p>
      <button className="buy-btn" onClick={() => addToCart(product)}>
        Add to Cart</button>
    </div>
  );
};

export default Productcard;
