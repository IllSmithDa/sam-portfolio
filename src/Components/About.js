import React from "react";

const About = () => {
  return(
    <div id="aboutID" className="page-size">
      <div className="page-size">
        <br />
        <h1 className="section-title">What I Do</h1>
        <div className = "section-container" >
          <div className="section-divider-left">
            <h2>Front End</h2>
            <img className="about-images" src="https://i.imgur.com/1MnD1nl.png" alt='react-logo' />
            <img className="about-images" src="https://i.imgur.com/cK0WcSH.png" alt='react-logo' />
            <p>I develop and create easy to understand and responsive ui components using the 
              latest technologies and frameworks including React and Redux. 
            </p>
          </div>
          <div className="section-divider-center">
            <h2>Back End</h2>
            <p>Using Node, I create servers using asynchronous calls for a much more cohesive and faster calls to the server. I 
              am always looking to exanding my toolset by also learning Django, and Spring MVC. 
            </p>
            <img className="about-images" src="https://i.imgur.com/EZCSrpA.jpg" alt='react-logo' />
            <img className="about-images" src="https://i.imgur.com/iEtRuNg.png" alt='react-logo' />
          </div>
          <div className="section-divider-right">
            <h2>Database</h2>
            <p>I primarly utilize Mongodb and cloud databases including MLab. I also have utilize AWS S3 for 
              storing images and videoes
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;