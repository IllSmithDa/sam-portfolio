import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import http from "http";
import Homepage from "./Components/Homepage";
import Errorpage from "./Components/Errorpage";

class App extends Component {
  componentWillMount() {
    window.addEventListener("resize", function(){
      if (window.innerWidth > 800 && document.getElementById("closedToggle").style.display === "block") {
        document.getElementById("app-title").style.marginLeft = "225px";
      }
      if (window.innerWidth > 800 && document.getElementById("closedToggle").style.display === "none") {
        document.getElementById("app-title").style.marginLeft = "0px";
      }
      if (window.innerWidth <= 800 && document.getElementById("closedToggle").style.display === "block") {
        document.getElementById("app-title").style.marginLeft = "0px";
      }
    });
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route component={Errorpage} />
          </Switch>
        </Router>,
      </div>
    );
  }
}

export default App;
