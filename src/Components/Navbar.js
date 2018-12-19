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
    // update underline and scroll position
    const updateScroll = (tab) => {
      const { currentID } = this.state;
      // text decoration not supported by IE or Edge and not working proerly in saffari 
      // so these commands must be ignored for these browsers
      // remove underline of the previously clicked tab
      document.getElementById(currentID).style.textDecoration = "none";
      // underline the new element
      document.getElementById(tab).style.textDecoration = "underline";
    
      this.setState({ currentID: tab });
    }
    // check position of the scroll
    const checkSrollPos = (scroll_pos) => {
      // console.log(scroll_pos)
      // console.log(document.body.scrollHeight)
      // total hieght of a webpage
      const totalHeight = document.body.scrollHeight;
      if (window.innerWidth > 1249) {
        // checks location of the current webpage
        if(scroll_pos <= (totalHeight * 0.1)) {
          updateScroll('home-tab');
        } else if (scroll_pos >= (totalHeight * 0.1) && scroll_pos < (totalHeight * 0.3)) {
          updateScroll('about-tab');
        } else if (scroll_pos >= (totalHeight * 0.3) && scroll_pos < (totalHeight * 0.49)) {
          updateScroll('project-tab');
        } else if (scroll_pos >= (totalHeight * 0.49) && scroll_pos <= (totalHeight * 0.78)) {
          updateScroll('exp-tab');
        } else {
          updateScroll('contact-tab');
        }
      } else {
        if(scroll_pos >= 0 && scroll_pos <= (totalHeight * 0.08)) {
          updateScroll('home-tab');
        } else if (scroll_pos >= (totalHeight * 0.08) && scroll_pos <= (totalHeight * 0.28)) {
          updateScroll('about-tab');
        } else if ((totalHeight * 0.28) && scroll_pos < (totalHeight * 0.57)) {
          updateScroll('project-tab');
        } else if (scroll_pos >= (totalHeight * 0.57) && scroll_pos <= (totalHeight * 0.8)) {
          updateScroll('exp-tab');
        } else {
          updateScroll('contact-tab');
        }
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
    const { currentID } = this.state;
      // remove underline of the previously clicked tab
    document.getElementById(currentID).style.textDecoration = "none";
    // underline the new element
    document.getElementById(tab).style.textDecoration = "underline";
    this.setState({ currentID: tab });
    // close tab on mobile
    if (window.innerWidth < 1250) {
      this.closeNav();
    }
  }
  openNav = () => {
    // controls the tab bar
    document.getElementById("my-sidebar").style.left = "0";
    document.getElementById("tab-div").style.left = "0";
    document.getElementById("open-toggle").style.display = "none";
    document.getElementById("closed-toggle").style.display = "block";
    // controls the rest of the application
    if (window.innerWidth > 1250) {
      document.getElementById("app-title").style.marginLeft = "225px";

    }
  };
  closeNav = () => {
    // true no matter what resolution
    document.getElementById("open-toggle").style.display = "block";
    document.getElementById("closed-toggle").style.display = "none";
    if (window.innerWidth > 1250) {
      // only if resolution above 800px width
      // moves rest of app to 0px;
      document.getElementById("app-title").style.marginLeft = "0px";
      document.getElementById("app-title").style.transition = "0.2s";
      // sidebar to original position and the buttons as well
      document.getElementById("my-sidebar").style.left = "-225px";
      document.getElementById("tab-div").style.left = "-225px";
      document.getElementById("my-sidebar").style.transition = "0.2s";
      document.getElementById("tab-div").style.transition = "0.2s";
    } else {
      // sidebar to original position and the buttons as well but for smaller resolutions
      document.getElementById("my-sidebar").style.left = "-300px";
      document.getElementById("tab-div").style.left = "-225px";
      document.getElementById("my-sidebar").style.transition = "0.2s";
      document.getElementById("tab-div").style.transition = "0.2s";
    }
  }

  render() {
    return(
      <div className="navbar-postion">
        <div id="tab-div" className="tab-button-div">
          <button id="open-toggle" className="open-button" onClick={this.openNav}>☰</button>
          <button id="closed-toggle" className="close-button" onClick={this.closeNav}>×</button>
        </div>
          <div className="topbar">
          </div>
          <div id="my-sidebar" className="sidebar">
            <br />
            <p id="home-tab" onClick={()=>this.currentLink("front-image", "home-tab")} className="other-button home-button">Home</p>
            <p id="about-tab" onClick={()=>this.currentLink("about-ID", "about-tab")} className="other-button">What I Do</p>
            <p id="project-tab" onClick={()=>this.currentLink("project-ID", "project-tab")} className="other-button">Projects</p>
            <p id="exp-tab"onClick={()=>this.currentLink("resume-ID", "exp-tab")} className="other-button">Experience</p>
            <p id="contact-tab"onClick={()=>this.currentLink("contact-ID", "contact-tab")} className="other-button">Contact</p>
        </div>
      </div>
    );
  }
}

export default Navbar;