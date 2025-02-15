import React, { useState } from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => setIsSignup(!isSignup);

  return (
    <div className="login-signup-container">
      <h2 className="sig-header">{isSignup ? "Sign Up" : "Login"}</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button  className="loginsignup" type="submit">{isSignup ? "Sign Up" : "Login"}</button>
      </form>
      <p >
        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
        <span onClick={toggleForm} className="toggle-link">
          {isSignup ? "Login" : "Sign Up"}
        </span>
      </p>
    </div>
  );
};

export default LoginSignup;
