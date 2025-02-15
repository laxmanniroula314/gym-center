import React, { useState } from "react";
import Productcard from "./Productcard";
import "./Gallery.css";
import gt1 from "../assets/gt1.jpg";
import sh from "../assets/sh.jpg";
import w1 from "../assets/w1.jpg";
import gm1 from "../assets/gm1.jpg";
import ss2 from "../assets/ss2.jpg";
import t1 from "../assets/t1.jpg";
import bg1 from "../assets/bg1.jpg";
import gg1 from "../assets/gg1.jpg";
import gmb1 from "../assets/gmb1.jpg";
import sh2 from "../assets/sh2.jpg";
import w2 from "../assets/w2.jpg";
import gm2 from "../assets/gm2.jpg";



const products = [
  { id: 1, name: "Ladies Shirt", price: "$50", img: gt1 },
  { id: 2, name: "Gym Shoes", price: "$80", img: sh },
  { id: 3, name: "Water Bottle", price: "$20", img: w1 },
  { id: 4, name: "Gym Mat", price: "$60", img: gm1 },
  { id: 5, name: "Gym Shorts", price: "$35", img: ss2 },
  { id: 6, name: "Gym T-Shirt", price: "$40", img: t1 },
  { id: 7, name: "Gym Bag", price: "$70", img: bg1 },
  { id: 8, name: "Gym Gloves", price: "$30", img: gg1 },
  { id: 9, name: "Gym Belt", price: "$25", img: gmb1 },
  { id: 10, name: "Gym Shorts", price: "$35", img: ss2 },
  { id: 11, name: "Gym Shoes", price: "$80", img: sh2 },
  { id: 12, name: "Water Bottle", price: "$20", img: w2 },
  { id: 13, name: "Gym Mat", price: "$60", img: gm2 },
  { id: 14, name: "Gym Shorts", price: "$35", img: ss2 },
  { id: 15, name: "Gym T-Shirt", price: "$40", img: t1 },
  

];

const Productsgrid = ({ addToCart }) => {
  const [visibleCount, setVisibleCount] = useState(5); 

  const loadMore = () => {
    setVisibleCount(products.length); 
  };

  return (
    <div className="product-section">
      <h2>
        OUR <span className="highlight">PRODUCTS</span>
      </h2>
      <div className="product-grid">
        {products.slice(0, visibleCount).map((product) => (
          <Productcard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {visibleCount < products.length && (
        <button className="load-more" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Productsgrid;
