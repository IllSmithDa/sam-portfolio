import React, {Component} from "react";
import "../CSS/Navbar.css";
import "../CSS/PageLayout.css";
class Navbar extends Component {

  homeLink = () => {
    window.location = "/#app-title";
    this.closeNav();
  }
  aboutLink = () => {
    window.location = "/#aboutID";
    this.closeNav();
  }
  resumeLink = () => {
    window.location = "/#resumeID";
    this.closeNav();
  }
  projectLink = () => {
    window.location = "/#projectID";
    this.closeNav();
  }
  contactLink = () => {
    window.location = "/#contactID";
    this.closeNav();
  }
  openNav = () => {
    document.getElementById("mySidebar").style.left = "0";
    document.getElementById("toggleButton").style.display = "none";
    document.getElementById("closedToggle").style.display = "block";
  }
  closeNav = () => {
    document.getElementById("mySidebar").style.left = "-225px";
    document.getElementById("toggleButton").style.display = "block";
    document.getElementById("closedToggle").style.display = "none";
  }

  render() {
    return(
      <div className="navbar-postion">
          <div id="mySidebar" className="sidebar sidebar-color">
            <button id="toggleButton" className="open-button sidebar-color" onClick={this.openNav}>☰</button>
            <p id="closedToggle" className="close-button sidebar-color" onClick={this.closeNav}>×</p>
            <p onClick={this.homeLink} className="other-button sidebar-color">Home</p>
            <p onClick={this.aboutLink} className="other-button sidebar-color">What I Do</p>
            <p onClick={this.projectLink} className="other-button sidebar-color">Projects</p>
            <p onClick={this.resumeLink} className="other-button sidebar-color">Resume</p>
            <p onClick={this.contactLink} className="other-button sidebar-color">Contact</p>
        </div>
      </div>
    );
  }
}

export default Navbar;