import React from "react";

const About = () => {
  return(
    <div id="about-ID" className="page-size about-page">
      <br />
      <h1 id="about-title" className="section-title">What I Do</h1>
      <br />
      <img className="my-image" alt='profile' src="https://i.imgur.com/DwUV9bu.jpg" />
      <div className = "about-table " >
        <div className="about-sections">
          <h2 className="set-font set-margin">Front End</h2>
          <p className="set-font">I develop and create easy to understand and responsive UI components using the 
            latest technologies and frameworks including React and Redux. 
          </p>
          <img className="about-images" src="https://i.imgur.com/1MnD1nl.png" alt='react-logo' />
          <img className="about-images" src="https://i.imgur.com/cK0WcSH.png" alt='redux-logo' />
        </div>
        <div className="about-sections">
          <h2 className="set-font set-margin">Back End</h2>
          <p className="set-font">Using Node.js, I create servers using asynchronous calls for a much faster running server and have utilized AWS S3 for 
            storing images and videos. I am always looking to exanding my toolset by looking into Django, and Spring MVC. 
          </p>
          <img className="about-images" src="https://i.imgur.com/Jff858A.png" alt='node-logo' />
          <img className="about-images" src="https://i.imgur.com/lK2RfMs.png" alt='aws-logo' />
        </div>
        <div className="about-sections">
          <h2 className="set-font set-margin">Database</h2>
          <p className="set-font"> I primarly utilize MongoDB for storing databases and Mongodb based cloud services such as MLab.
          </p>
          <img className="about-images" src="https://i.imgur.com/CO8ns1A.png" alt='mongodb-logo' />
          <img className="about-images" src="https://i.imgur.com/ok22dmV.png" alt='mlab-logo' />
        </div>
      </div>
    </div>
  )
}

export default About;