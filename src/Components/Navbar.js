import React, {Component} from "react";
import "../CSS/Navbar.css";
import "../CSS/PageLayout.css";
class Navbar extends Component {
  constructor () {
    super();
    this.state = {
      currentID: "home-tab",
    }
  }
  componentDidMount() {
    if (window.location === "/fullresume") {
      document.getElementById("exp-tab").style.textDecoration = "underline";
    }
  }
  homeLink = () => {
    window.location = "/#app-title";
    const { currentID } = this.state;
    document.getElementById(currentID).style.textDecoration = "none";
    // remove underline of the previously clicked tab
    document.getElementById("home-tab").style.textDecoration = "underline";
    this.setState({ currentID: "home-tab" });
    if (window.innerWidth < 800) {
      this.closeNav();
    }
  }
  aboutLink = () => {
    window.location = "/#aboutID";
    const { currentID } = this.state;
    document.getElementById(currentID).style.textDecoration = "none";
    document.getElementById("about-tab").style.textDecoration = "underline";
    this.setState({ currentID: "about-tab" });
    if (window.innerWidth < 800) {
      this.closeNav();
    }
  }
  resumeLink = () => {
    window.location = "/#resumeID";
    const { currentID } = this.state;
    document.getElementById(currentID).style.textDecoration = "none";
    document.getElementById("exp-tab").style.textDecoration = "underline";
    this.setState({ currentID: "exp-tab" });
    if (window.innerWidth < 800) {
      this.closeNav();
    }
  }
  projectLink = () => {
    window.location = "/#projectID";
    const { currentID } = this.state;
    document.getElementById(currentID).style.textDecoration = "none";
    document.getElementById("project-tab").style.textDecoration = "underline";
    this.setState({ currentID: "project-tab" });
    if (window.innerWidth < 800) {
      this.closeNav();
    }
  }
  contactLink = () => {
    window.location = "/#contactID";
    const { currentID } = this.state;
    document.getElementById(currentID).style.textDecoration = "none";
    document.getElementById("contact-tab").style.textDecoration = "underline";
    this.setState({ currentID: "contact-tab" });
    if (window.innerWidth < 800) {
      this.closeNav();
    }
  }
  openNav = () => {
    document.getElementById("mySidebar").style.left = "0";
    document.getElementById("toggleButton").style.display = "none";
    document.getElementById("closedToggle").style.display = "block";
    if (window.innerWidth > 800) {
      document.getElementById("app-title").style.marginLeft = "225px";
      document.getElementById("app-title").style.transition = "0.2s";
    }
    console.log(window.location);
    if (window.location.pathname === "/fullresume") {
      const { currentID } = this.state;
      document.getElementById(currentID).style.textDecoration = "none"; 
      document.getElementById("exp-tab").style.textDecoration = "underline";
    }
  };
  closeNav = () => {
    document.getElementById("mySidebar").style.left = "-225px";
    document.getElementById("toggleButton").style.display = "block";
    document.getElementById("closedToggle").style.display = "none";
    if (window.innerWidth >= 800) {
      document.getElementById("app-title").style.marginLeft = "0px";
      document.getElementById("app-title").style.transition = "0.2s";
    }
  }

  render() {
    return(
      <div className="navbar-postion">
          <div id="mySidebar" className="sidebar sidebar-color">
            <button id="toggleButton" className="open-button sidebar-color" onClick={this.openNav}>☰</button>
            <p id="closedToggle" className="close-button sidebar-color" onClick={this.closeNav}>×</p>
            <p id="home-tab" onClick={this.homeLink} className="other-button sidebar-color home-button">Home</p>
            <p id="about-tab" onClick={this.aboutLink} className="other-button sidebar-color">What I Do</p>
            <p id="project-tab" onClick={this.projectLink} className="other-button sidebar-color">Projects</p>
            <p id="exp-tab"onClick={this.resumeLink} className="other-button sidebar-color">Experience</p>
            <p id="contact-tab"onClick={this.contactLink} className="other-button sidebar-color">Contact</p>
        </div>
      </div>
    );
  }
}

export default Navbar;