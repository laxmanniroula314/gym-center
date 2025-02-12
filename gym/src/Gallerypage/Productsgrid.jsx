import React from "react";
import Productcard from "./Productcard";
import "./Gallery.css";

const products = [
  { id: 1, name: "Ladies Shirt", price: "$50", img: "/images/shirt.png" },
  { id: 2, name: "Gym Shoes", price: "$80", img: "/images/shoes.png" },
  { id: 3, name: "Water Bottle", price: "$20", img: "/images/bottle.png" },
  { id: 4, name: "Gym Mat", price: "$60", img: "/images/mat.png" },
  { id: 5, name: "Gym Shorts", price: "$35", img: "/images/shorts.png" },
  { id: 6, name: "Gym T-Shirt", price: "$40", img: "/images/tshirt.png" },
  { id: 7, name: "Gym Bag", price: "$70", img: "/images/bag.png" },
  { id: 8, name: "Gym Gloves", price: "$30", img: "/images/gloves.png" },
  { id: 9, name: "Gym Belt", price: "$25", img: "/images/belt.png" },
  { id: 10, name: "Gym Shorts", price: "$35", img: "/images/shorts.png" },

];

const Productsgrid= () => {
  return (
    <div className="product-section">
      <h2>OUR <span className="highlight">PRODUCTS</span></h2>
      <div className="product-grid">
        {products.map(product => (
          <Productcard key={product.id} product={product} />
        ))}
      </div>
      <button className="load-more">Load More</button>
    </div>
  );
};

export default Productsgrid;
