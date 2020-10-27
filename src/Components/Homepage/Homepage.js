import React, { Component } from "react";
import Desktopnav from '../Desktopnav/Desktopnav';
import Mobilenav from '../Mobilenav/Mobilenav';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import './Homepage.css';

export default class Homepage extends Component{
  constructor() {
    super();
    this.state ={
      imageURL: ''
    }
  }
  componentDidMount() {
    // selects image src based on window resolution
    /*
    const checkResolution = () => {
      if (window.innerWidth >= 1100) {
        this.setState({ imageURL: "https://i.imgur.com/5xaWoLJ.jpg" });
      } else if (window.innerWidth < 1100 && window.innerWidth >= 700) {
        this.setState({ imageURL: "https://i.imgur.com/TOaYjyx.jpg" });
      } else {
        this.setState({ imageURL: "https://i.imgur.com/hDIvmbF.jpg" });
      }
    }
    checkResolution();
    window.addEventListener("resize", () => {
      checkResolution();
    })
    // set size of image based on screen size of monitor
    document.getElementById("front-image").style.height = `${window.screen.height - (window.screen.height * .1)}px `;
    */
  }
  render() {
    const { imageURL } = this.state;
    return(
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
}
// <img id="front-image" className="homepage-image" src={imageURL} alt="homepage"></img>