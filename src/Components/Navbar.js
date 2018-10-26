import React, {Component} from "react";
import "../CSS/Navbar.css";
import "../CSS/PageLayout.css";
class Navbar extends Component {

  homeLink = () => {
    window.location = "/";
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
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("toggleButton").style.display = "none";
    document.getElementById("closedToggle").style.display = "block";
  }
  closeNav = () => {
    document.getElementById("mySidebar").style.width = "75px";
    document.getElementById("toggleButton").style.display = "block";
    document.getElementById("closedToggle").style.display = "none";
  }
  render() {
    return(
      <div className="navbar-postion">
          <div id="mySidebar" className="bg-info sidebar">
            <button id="toggleButton" className="open-button bg-info" onClick={this.openNav}>☰</button>
            <p id="closedToggle" className="close-button" onClick={this.closeNav}>×</p>
            <p id="name-button"onClick={this.homeLink} className="name-button bg-info">Samuel Kim</p>
            <p onClick={this.homeLink} className="other-button bg-info">Home</p>
            <p onClick={this.projectLink} className="other-button bg-info">Projects</p>
            <p onClick={this.resumeLink} className="other-button bg-info">Resume</p>
            <p onClick={this.contactLink} className="other-button bg-info">Contact</p>
        </div>
      </div>
    );
  }
}

export default Navbar;