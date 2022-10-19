import React, { Component, useEffect } from "react";
import Desktopnav from '../Desktopnav/Desktopnav';
import Mobilenav from '../Mobilenav/Mobilenav';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import './Homepage.css';

export default function Homepage() {
  useEffect(() => {
    const getDesktopNav = document.querySelector('.nav-height')
    if (getDesktopNav) {
      let parent = getDesktopNav.parentNode;
      parent.appendChild(getDesktopNav);
    }
  }, [])
  return (
    <div id="Home-ID" className="app-container"> 
        <Desktopnav />
        <Mobilenav />
        <div className="homepage-container">
            <div className="parallax">
              <div className="text-banner">
                <div>
                  <h1>Hi!</h1>
                  <h2>I'm Sam</h2>
                  <h2>A Full Stack Web Developer from California</h2>
                </div>
            </div>
          </div>
        </div>
        
        <div class="custom-shape-divider-top-1666219364">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>

        <About />
        <div class="custom-shape-divider-bottom-1666221043">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
        <Projects />
        <div class="custom-shape-divider-top-1666219364">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
        <Contact />
    </div>
  )
}