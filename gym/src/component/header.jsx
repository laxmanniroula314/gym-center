
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact" >Contact Us</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
      <div className="nav-actions">
        <button className="login-btn">Login</button>
        <div className="cart-icon">🛍️</div>
      </div>
    </nav>
  );
};

export default Header