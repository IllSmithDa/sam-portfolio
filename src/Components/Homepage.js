import React from "react";
import Navbar from "./Navbar";
import About from "./About";  
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
import "../CSS/PageLayout.css";
import '../CSS/Homepage.css';
const Homepage = () => {
  return(
    <div id="app-title" className="app-container">
      <Navbar />
      <div className="page-container">
        <div className="image-container">
          <img className="homepage-image" src="https://i.imgur.com/5xaWoLJ.jpg" alt="homepage"></img>
          <div className="text-centered">
              <h1 className="header-title"> Samuel Kim</h1>
              <h4 className="header-subtitle set-font">Full stack web developer at your service </h4>
          </div>
        </div>
        <About />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  )
}

export default Homepage;