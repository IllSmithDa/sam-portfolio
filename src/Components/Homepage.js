import React, { Component } from "react";
import Navbar from "./Navbar";
import About from "./About";  
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
import "../CSS/PageLayout.css";
import '../CSS/Homepage.css';

export default class Homepage extends Component{
  constructor() {
    super();
    this.state ={
      imageURL: ''
    }
  }
  componentDidMount() {
    
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
    document.getElementById("front-image").style.height = `${window.screen.height}px `;
  }
  render() {
    const { imageURL } = this.state;
    return(
      <div className="app-container">
        <Navbar />
        <div id="page-div" className="page-container">
          <div className="image-container">
            <img id="front-image" className="homepage-image" src={imageURL} alt="homepage"></img>
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
}
