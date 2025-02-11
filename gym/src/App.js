import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home.jsx";
import Career from "./Career.jsx";
import Header from "./component/Header.jsx";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Career" element={<Career />} />
      </Routes>
    </Router>
  );
};

export default App;
