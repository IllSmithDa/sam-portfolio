import React from "react";

const About = () => {
  return(
    <div id="aboutID" className="page-size white-page">
      <div className="page-size">
        <br />
        <h1 className="section-title">What I Do</h1>
        <br />
        <img className="my-image" alt='profile' src="https://i.imgur.com/DwUV9bu.jpg" />
        <div className = "section-container" >
          <div className="section-divider-left">
            <h2>Front End</h2>
            <p>I develop and create easy to understand and responsive ui components using the 
              latest technologies and frameworks including React and Redux. 
            </p>
            <img className="about-images" src="https://i.imgur.com/1MnD1nl.png" alt='react-logo' />
            <img className="about-images" src="https://i.imgur.com/cK0WcSH.png" alt='redux-logo' />
          </div>
          <div className="section-divider-center">
            <h2>Back End</h2>
            <p>Using Node, I create servers using asynchronous calls for a much more cohesive and faster calls to the server. I 
              am always looking to exanding my toolset by also learning Django, and Spring MVC. 
            </p>
            <img className="about-images" src="https://i.imgur.com/EZCSrpA.jpg" alt='node-logo' />
          </div>
          <div className="section-divider-right">
            <h2>Database</h2>
            <p>I primarly utilize Mongodb and cloud databases including MLab. I also have utilize AWS S3 for 
              storing images and videoes
            </p>
            <img className="about-images" src="https://i.imgur.com/iEtRuNg.png" alt='aws-logo' />
            <img className="about-images" src="https://i.imgur.com/CO8ns1A.png" alt='mongodb-logo' />
            <img className="about-images" src="https://i.imgur.com/ok22dmV.png" alt='mlab-logo' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;