import React from "react";
import "../Desktopnav/Desktopnav"
import Desktopnav from "../Desktopnav/Desktopnav";
import "./About.css";
const About = () => {
  return(
    <div  id="about-ID" className="about-container">
      <div className="about-page">
        <h1 id="about-title" className="section-title">About Me</h1>
        <img className="my-image" alt='profile' src="https://i.imgur.com/DwUV9bu.jpg" />
        <div className = "about-table" >
          <div className="about-sections">
            <h1 className="set-font set-margin">Front End</h1>
            <p className="set-font">I develop and create easy to understand and responsive UI components using the 
              latest technologies and frameworks including React, Angular and Salesforce LWC. 
            </p>
            <img className="about-images" src="https://i.imgur.com/1MnD1nl.png" alt='react-logo' />
            <img className="about-images" src="https://i.imgur.com/zi5Qor3.png" alt='angular-logo' />
            <img className="about-images" src="https://i.imgur.com/zElMk8K.png" alt='salesforce-logo' />
          </div>
          <div className="about-sections">
            <h1 className="set-font set-margin">Back End</h1>
            <p className="set-font">Using Node.js, I create servers using asynchronous calls for a much faster running server and have utilized AWS S3 for 
              storing images and videos. I have also completed projects utilizing Apex classes to make calls to retrieve Salesforce object records. 
            </p>
            <img className="about-images" src="https://i.imgur.com/Jff858A.png" alt='node-logo' />
            <img className="about-images" src="https://i.imgur.com/lK2RfMs.png" alt='aws-logo' />
          </div>
          <div className="about-sections">
            <h1 className="set-font set-margin">Database</h1>
            <p className="set-font"> I primarly utilize MongoDB for storing databases and Mongodb based cloud services such as MLab. I have also utilized SOQL queries 
            to retrieve Saleforce object records
            </p>
            <img className="about-images" src="https://i.imgur.com/CO8ns1A.png" alt='mongodb-logo' />
            <img className="about-images" src="https://i.imgur.com/ok22dmV.png" alt='mlab-logo' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;