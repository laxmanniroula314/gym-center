
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.jpg";;
const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img
          src={logo}
          alt="Gym Logo"
          className="logo-img"
        />
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact" >Contact Us</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
      <div className="nav-actions">
        {/* Login Button with Profile Icon */}
        <button className="login-btn">
          <img
            src="https://cdn-icons-png.flaticon.com/128/14026/14026766.png"
            alt="Profile"
            className="profile-icon"
          />
          Login
        </button>

        {/* Cart Section */}
        <div className="cart-section">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9485/9485970.png"
            alt="Cart"
            className="cart-icon"
          />
          <span className="cart-count">2</span> 
        </div>
      </div>
    </nav>
  );
};

export default Header