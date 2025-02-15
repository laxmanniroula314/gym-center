import React, { useState } from "react";
import "./contactus.css";

const Contactform = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your message has been sent!");
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
        
        <label htmlFor="phone" className="form-label">Phone</label>
        <input type="text" id="phone" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
        
        <label htmlFor="email" className="form-label">E-Mail</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
        
        <label htmlFor="message" className="form-label">Message</label>
        <textarea id="message" name="message" placeholder="Enter your message" value={formData.message} onChange={handleChange} required />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contactform;
