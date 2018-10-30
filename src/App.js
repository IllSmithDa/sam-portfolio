import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import http from "http";
import Homepage from "./Components/Homepage";
import Errorpage from "./Components/Errorpage";

class App extends Component {
  componentWillMount() {
    setInterval(() => {
      http.get("https://samuel404kim.herokuapp.com");
    }, 300000);
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
