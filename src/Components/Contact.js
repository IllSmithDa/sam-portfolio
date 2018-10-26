import React from "react";
import Navbar from "./Navbar";
import "../CSS/PageLayout.css";
const Contact = () => {
  return(
    <div id="contactID" className="page-size green-page">
      <br />
      <h1 className="section-title">Contact</h1>
      <div className="center-contact">
      <br />
        <p>If you have any inquires, the best way to contact me would be through email or by phone.</p>
        <p><b>Email: </b>sam404kim@gmail.com</p>
        <p><b>Phone number: </b>(510) 589 - 8123</p>
        <p><b>Github: </b> <a href="https://github.com/IllSmithDa">https://github.com/IllSmithDa</a></p>
        <p><b>LinkedIn: </b> <a href="https://www.linkedin.com/in/samuel-kim-1336ab112/">https://www.linkedin.com/in/samuel-kim-1336ab112/</a></p>
      </div>
    </div>
  );
}

export default Contact;