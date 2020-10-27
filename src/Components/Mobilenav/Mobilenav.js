import React, {Component} from "react";
import "./Mobilenav.css";
import jquery from 'jquery';
class Mobilenav extends Component {
  constructor () {
    super();
    this.state = {
      currentID: "mob-home-tab",
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
  }
 
  render() {
    return(
      <div class="mobile-position">
        <nav class="navbar navbar-expand-md navbar-display">
          <a class="navbar-brand" href="#"></a>
          <button class="mobile-nav-button" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              &#9776;
            </button>
        </nav>
          <div class="collapse" id="collapsibleNavbar">
            <ul class="navbar-nav nav">
              <li class="nav-item">
                <span id="mob-home-tab" data-target="#collapsibleNavbar" data-toggle="collapse"  onClick={()=>this.currentLink("Home-ID", "mob-home-tab")}>Home</span>
              </li>
              <li class="nav-item">
                <span id="mob-about-tab"data-target="#collapsibleNavbar" data-toggle="collapse" onClick={()=>this.currentLink("about-ID", "mob-about-tab")}>About Me</span>
              </li>
              <li class="nav-item">
                <span id="mob-project-tab" data-target="#collapsibleNavbar" data-toggle="collapse" onClick={()=>this.currentLink("project-ID", "mob-project-tab")}>Projects</span>
              </li>
              <li class="nav-item">
                <span id="mob-contact-tab"  data-target="#collapsibleNavbar" data-toggle="collapse" onClick={()=>this.currentLink("contact-ID", "mob-contact-tab")} >Contact Me</span>
              </li>
            </ul>
          </div>
      </div>
    );
  }
}

export default Mobilenav;