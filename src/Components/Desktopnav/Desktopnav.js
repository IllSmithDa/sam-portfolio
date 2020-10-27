import React, { Component } from "react";
import  "./Desktopnav.css";
class Desktopnav extends Component{
    constructor () {
        super();
        this.state = {
          currentID: "home-tab",
        }
      }
    componentDidMount() {
        const { currentID } = this.state;
        // remove underline of the previously clicked tab
        document.getElementById(currentID).style.textDecoration = "underline";
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
    }

    render() {
        return(
            <div className="nav-height">
                <div className="sticky-nav">
                    <div className="nav-container">
                        <div className="tab-container">
                            <span id="home-tab" onClick={()=>this.currentLink("Home-ID", "home-tab")}>Home</span>
                            <span id="about-tab" onClick={()=>this.currentLink("about-ID", "about-tab")}>About Me</span>
                            <span id="project-tab" onClick={()=>this.currentLink("project-ID", "project-tab")}>Projects</span>
                            <span id="contact-tab" onClick={()=>this.currentLink("contact-ID", "contact-tab")} >Contact Me</span>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Desktopnav;