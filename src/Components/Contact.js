import React from "react";
import Navbar from "./Navbar";
import "../CSS/PageLayout.css";
const Contact = () => {
  return(
    <div>
      <Navbar />
      <div className="page-container">
        <h1>Contact</h1>
        <p>If you have any inquires, the best way to contact me would be through email or by phone.</p>
        <p><b>Email: </b>sam404kim@gmail.com</p>
        <p><b>Phone number: </b>(510) 589 - 8123</p>

      </div>
    </div>
  );
}

export default Contact;