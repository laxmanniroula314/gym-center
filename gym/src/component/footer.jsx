import React from "react";
import "./Header.css";
import Fitnessjourney from "./Fitnessjourney";

const Footer = () => {
  
  return (
    <>
    <Fitnessjourney />
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-section">
          <h2>LOGO</h2>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contacts">Contacts</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="/help">Help center</a></li>
            <li><a href="/privacy">Privacy and cookies policy</a></li>
            <li><a href="/faq">FAQ’s</a></li>
            <li><a href="/terms">Newsletter, terms and conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h3>NEWSLETTER</h3>
          <p>What To Know What’s Next For You? Subscribe To Our Newsletter For Any Update!</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="social-media">
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
      </div>
    </footer>
    </>
  );
};

export default Footer;
