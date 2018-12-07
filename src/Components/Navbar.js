import React, {Component} from "react";
import $ from "jquery";
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
    // update underline and scroll position
    const updateScroll = (tab) => {
      const { currentID } = this.state;
      // remove underline of the previously clicked tab
      document.getElementById(currentID).style.textDecoration = "none";
      // underline the new element
      document.getElementById(tab).style.textDecoration = "underline";
      this.setState({ currentID: tab });
    }

    // check position of the scroll
    const checkSrollPos = (scroll_pos) => {
      console.log(scroll_pos);
      if(scroll_pos >= 0 && scroll_pos <= 499) {
        updateScroll('home-tab');
      } else if (scroll_pos >= 500 && scroll_pos <= 1400) {
        updateScroll('about-tab');
      } else if (scroll_pos >= 1401 && scroll_pos <= 2430) {
        updateScroll('project-tab');
      } else if (scroll_pos >= 2431 && scroll_pos <= 3860) {
        updateScroll('exp-tab');
      } else {
        updateScroll('contact-tab');
      }
    }
    // check scroll position evey time user scrolls
    window.addEventListener('scroll', () => { 
      let last_known_scroll_position = 0;
      last_known_scroll_position = window.scrollY;
      checkSrollPos(last_known_scroll_position);
    })
  }



  currentLink = (link, tab) => {
    // scroll into the selecte element
    document.getElementById(link).scrollIntoView({behavior: "smooth", block: "start"});
    // update current element 
    this.setState({ currentID: tab });
    // close tab on mobile
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
            <p id="home-tab" onClick={()=>this.currentLink("front-image", "home-tab")} className="other-button sidebar-color home-button">Home</p>
            <p id="about-tab" onClick={()=>this.currentLink("aboutID", "about-tab")} className="other-button sidebar-color">What I Do</p>
            <p id="project-tab" onClick={()=>this.currentLink("projectID", "project-tab")} className="other-button sidebar-color">Projects</p>
            <p id="exp-tab"onClick={()=>this.currentLink("resumeID", "exp-tab")} className="other-button sidebar-color">Experience</p>
            <p id="contact-tab"onClick={()=>this.currentLink("contactID", "contact-tab")} className="other-button sidebar-color">Contact</p>
        </div>
      </div>
    );
  }
}

export default Navbar;