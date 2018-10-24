import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Project from "./Components/Projects";
import Errorpage from "./Components/Errorpage";

class App extends Component {
  componentDidMount() {
    setInterval(function() {
      axios.get("https://ironcodeman.herokuapp.com");
    }, 300000);
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Project} />
            <Route path="/contact" component={Contact} />
            <Route component={Errorpage} />
          </Switch>
        </Router>,
      </div>
    );
  }
}

export default App;
