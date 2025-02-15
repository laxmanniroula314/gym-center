import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Homepage/Home.jsx";
import Header from "./Component/Header.jsx";
import Footer from "./Component/Footer.jsx";
import Gallery from "./Gallerypage/Gallery.jsx";
import About from "./Aboutpage/About.jsx";
import Community from "./Communitypage/Community.jsx";
import Contactus from "./Contactuspage/Contactus.jsx";
import Trainers from "./Aboutpage/Trainers.jsx";
import Cart from "./Cartpage/Cart.jsx";  
import LoginSignup from "./Component/LoginSignup.jsx";

const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  });
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]); 
  };

  return (
    <Router>
      <Header cartCount={cartItems.length} /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Gallery" element={<Gallery addToCart={addToCart} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contactus />} />
        <Route path="/Trainers" element={<Trainers />} />
        <Route path="/Cart" element={<Cart cartItems={cartItems} />} /> 
        <Route path="/LoginSignup" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
