import React from "react";
import Contactheader from "./Contactheader";
import Contactform from "./Contactform";
import Contactdetails from "./Contactdetails";
import Map from "./Map";
import "./contactus.css";

const Contactus = () => {
  return (
    <>
      <div className="contact-container">
        <Contactheader />
        <div className="contact-content">
          <Contactdetails />
          <Contactform />
          
        </div>
        <Map />
      </div>
    </>
  );
};

export default Contactus;
