import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Homepage/Home.jsx";

import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import Gallery from "./Gallerypage/Gallery.jsx";
import About from "./Aboutpage/About.jsx";
import Community from "./Communitypage/Community.jsx";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/About" element={<About/>} />

        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
