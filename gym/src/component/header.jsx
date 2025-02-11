import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav-container">
        <nav className="navbar">
          <Link to="/" className="nav-item">🏠</Link>
          <Link to="/about" className="nav-item">ABOUT US</Link>
          <Link to="/offerings" className="nav-item">OUR OFFERINGS</Link>
          <Link to="/news" className="nav-item">NEWS & EVENTS</Link>
          
          {/* Career Dropdown */}
          <div 
            className="nav-item dropdown" 
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="dropdown-toggle">CAREER</span>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/career/working" className="dropdown-item">WORKING AT MAHINDRA HZPC</Link>
                <Link to="/career/people" className="dropdown-item">MEET OUR PEOPLE</Link>
                <Link to="/career/evp" className="dropdown-item">EVP</Link>
                <Link to="/career/work" className="dropdown-item">WORK WITH US</Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="nav-item">CONTACT US</Link>
        </nav>

        {/* Google Search Box */}
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </header>
  );
};

export default Header;
