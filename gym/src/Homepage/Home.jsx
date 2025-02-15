// src/components/Home/Home.js
import React from "react";
import Herosection from "./Herosection";
import Whychooseus from "./Whychooseus";
import Fitnessgoal from "./Fitnessgoal";
import Healthybody from "./Healthybody";
import Trainwithexperts from "./Trainwithexperts";

import "./Home.css";

const Home = () => {
  return (
    <>
     
      <Herosection />
      <Whychooseus />
      <Fitnessgoal />
      <Healthybody />
      <Trainwithexperts />
    
      
    </>
  );
};

export default Home;
