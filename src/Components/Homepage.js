import React from "react";
import Navbar from "./Navbar";
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
import "../CSS/PageLayout.css";
import '../CSS/Homepage.css';
const Homepage = () => {
  return(
    <div>
      <Navbar />
      <div className="page-container">
        <div className="image-container">
          <img className="homepage-image" src="https://i.imgur.com/MpL6SRw.jpg" alt="homepage"></img>
          <div className="text-centered">
            <h1> Samuel Kim</h1>
            <p>Web developer and software engineer at your service. 
              Building things is my passion and helping others build 
              amazing things is my game.
            </p>
          </div>
        </div>
        <div className="page-size">
          <h1 className="section-title">What I Do</h1>
          <h2>Front End</h2>
          <img className="about-images" src="https://i.imgur.com/1MnD1nl.png" alt='react-logo' />
          <img className="about-images" src="https://i.imgur.com/cK0WcSH.png" alt='react-logo' />
          <p>I develop and create easy to understand and responsive ui components using the 
            latest technologies and frameworks including React and Redux
          </p>
          <h2>Back End</h2>
          <p>Using Node, I create servers using asynchronous calls for a much more cohesive and faster calls to the server. I 
            am always looking to exanding my toolset by also learning Django, and Spring MVC. 
          </p>
          <img className="about-images" src="https://i.imgur.com/EZCSrpA.jpg" alt='react-logo' />
          <img className="about-images" src="https://i.imgur.com/iEtRuNg.png" alt='react-logo' />
        </div>
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  )
}

export default Homepage;