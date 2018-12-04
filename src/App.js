import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Components/Homepage";
import FullResume from "./Components/FullResume";
import Errorpage from "./Components/Errorpage";

class App extends Component {
  componentWillMount() {
    window.addEventListener("resize", function(){
      if (window.innerWidth > 800 && document.getElementById("closedToggle").style.display === "block" ) {
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
