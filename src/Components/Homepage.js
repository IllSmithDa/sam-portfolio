import React from "react";
import Navbar from "./Navbar";
import "../CSS/PageLayout.css"
const Homepage = () => {
  return(
    <div>
      <Navbar />
      <div className="page-container">
        <h1>Homepage</h1>
        <p>Web developer and software developer at your service. 
          Building things is my passion and helping others build 
          amazing things is my game.
        </p>
      </div>
    </div>
  )
}

export default Homepage;