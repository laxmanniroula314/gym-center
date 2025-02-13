import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./contactus.css";

const Contactdetails = () => {
  return (
    <div className="contact-details">
      <h2>GET IN <span className="highlight">TOUCH</span> WITH US</h2>
      <p>They're personally inspected by our team and carefully selected so you'll find only the most special spaces.</p>
      
      <div className="details">
        <div className="detail-item"><FaMapMarkerAlt /> <span>Our Address</span></div>
        <div className="detail-item"><FaPhoneAlt /> <span>+1 470 012 3456</span></div>
        <div className="detail-item"><FaEnvelope /> <span>support@website.com</span></div>
      </div>

      <h3>Follow us on</h3>
      <div className="social-icons">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </div>
    </div>
  );
};

export default Contactdetails;
