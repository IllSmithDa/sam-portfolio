import React from "react";
import Navbar from "./Navbar";
import "../CSS/PageLayout.css"
const Homepage = () => {
  return(
    <div>
      <Navbar />
      <div className="page-container">
        <h1>About Me</h1>

        <p>Web developer and software engineer at your service. 
          Building things is my passion and helping others build 
          amazing things is my game.
        </p>
        <h1>What I do</h1>
        <h2>Front End</h2>
        <img src="https://cdn-images-1.medium.com/max/1600/1*xkvjbVykgUr8I3nZntymsg.png" alt='react-logo' />
        <p>I develop and create easy to understand and responsive ui components using the 
          latest technologies and frameworks including React and Redux
        </p>
        <h2>Back End</h2>
        <p>Using Node, I create servers using asynchronous calls for a much more cohesive and faster calls to the server. I 
          am always looking to exanding my toolset by also learning Django, and Spring MVC. </p>
      </div>
    </div>
  )
}

export default Homepage;