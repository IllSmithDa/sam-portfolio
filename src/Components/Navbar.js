import React, {Component} from "react";
import "../CSS/Navbar.css";
class Navbar extends Component {

  homeLink = () => {
    window.location = "/";
  }
  resumeLink = () => {
    window.location = "/resume";
  }
  projectLink = () => {
    window.location = "/projects";
  }
  contactLink = () => {
    window.location = "/contact";
  }

  render() {
    return(
      <div className="navbar-container">
        <div className="navbar-margins">
          <div className="navbar-items-left">
            <button onClick={this.homeLink} className="name-button">Samuel Kim</button>
          </div>
          <div className="navbar-items-right">
            <button onClick={this.resumeLink} className="other-button">Resume</button>
            <button onClick={this.projectLink} className="other-button">Projects</button>
            <button onClick={this.contactLink} className="other-button">Contact</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;