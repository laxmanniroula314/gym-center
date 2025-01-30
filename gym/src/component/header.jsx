import React from "react";
import "./header.css";

const header = () => {
  return (
    <div className="header">
      <div className="logo">
        My GYM
        <img src="" alt="logo" />
      </div>
      <nav className="navbar">Home Community Gallery Contact us About us</nav>
      <div className="login-cont">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Signup</button>
      </div>
    </div>
  );
};

export default header;
