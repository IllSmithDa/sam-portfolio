import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Homepage from './Components/Homepage';
import Resume from './Components/Resume';
import Project from './Components/Projects';
import Errorpage from './Components/Projects';
import './App.css';

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
            <Route path="/resume" component={Resume} />
            <Route component={Errorpage} />
          </Switch>
        </Router>,
      </div>
    );
  }
}

export default App;
