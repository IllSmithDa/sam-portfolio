import React from "react";
import "../CSS/PageLayout.css";
const Contact = () => {
  return(
    <div id="contactID" className="contact-page-size green-page">
      <br />
      <h1 className="section-title">Contact</h1>
      <div className="center-contact">
      <br />
        <p className="text-size">If you have any inquires, the best way to contact me would be through email or by phone.</p>
        <p className="text-size"><b>Email: </b>sam404kim@gmail.com</p>
        <p className="text-size"><b>Phone number: </b>(510) 589 - 8123</p>
        <p className="text-size"><b>Other Links:</b></p>
        <a href="https://github.com/IllSmithDa"><img alt="linkedin_link" src="https://i.imgur.com/Zts5Hul.png" className="image-size" /></a>
        <a href="https://www.linkedin.com/in/samuel-kim-1336ab112/"><img alt="linkedin_link" src="https://i.imgur.com/VgNyC09.png" className="image-size" /></a>
      </div>
    </div>
  );
}

export default Contact;