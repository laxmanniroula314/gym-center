
import './App.css';
import React from 'react';
import { Route, Router, Routes } from "react-router-dom";
import home from "./home/home.jsx";


function App() {
  return (
    <>
    <Router>
      <header/>
      <Routes>
          <Route path="/" element={<home/>} />
      </Routes>
    </Router>
    </>
    
  )
}

export default App;
