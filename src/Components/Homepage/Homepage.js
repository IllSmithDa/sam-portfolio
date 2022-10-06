import React, { Component } from "react";
import Desktopnav from '../Desktopnav/Desktopnav';
import Mobilenav from '../Mobilenav/Mobilenav';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import './Homepage.css';

export default function Homepage() {
  return (
    <div id="Home-ID" className="app-container"> 
  
        <div className="homepage-container">
        <Desktopnav />
        <Mobilenav />
          <div className="text-banner">
            <div>
              <h1>Hi!</h1>
              <h2>I'm Sam</h2>
              <h2>A Full Stack Web Developer from California</h2>
            </div>
          </div>
        </div>
        <About />
        <Projects />
        <Contact />
    </div>
  )
}