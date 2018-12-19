import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Components/Homepage";
import FullResume from "./Components/FullResume";
import Errorpage from "./Components/Errorpage";
import "./CSS/PageLayout.css";

class App extends Component {
  componentWillMount() {
    window.addEventListener("resize", function(){
      // moves position of app based on tab closed or open and resolution
      // less than 800px and close button is appearing
      if (window.innerWidth > 1250 && document.getElementById("closed-toggle").style.display === "block" ) {
        // move rest of app by 225px left
        document.getElementById("app-title").style.marginLeft = "225px";
        
      }   // less than 800px and close button is not appearing
      if (window.innerWidth > 1250 && document.getElementById("closed-toggle").style.display === "none") {
        // move rest of app back to 0 and sidebar back to original position
        document.getElementById("app-title").style.marginLeft = "0px";
        document.getElementById("my-sidebar").style.left = "-225px";
      } 
      if (window.innerWidth <= 1250 && document.getElementById("closed-toggle").style.display === "block") {
        document.getElementById("app-title").style.marginLeft = "0px";
      }
      if (window.innerWidth <= 1250 && document.getElementById("closed-toggle").style.display === "none") {
        document.getElementById("my-sidebar").style.left = "-300px";
      }
    });
  }
  render() {
    return (
      <div id="app-title">
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/fullresume" component={FullResume} />
            <Route component={Errorpage} />
          </Switch>
        </Router>,
      </div>
    );
  }
}

export default App;
