import React, {Component} from "react";
import ExperienceData from '../Data/Resume';
import "../CSS/PageLayout.css";


export default class Resume extends Component {
  downloadResume = () => {
    window.open("https://drive.google.com/file/d/1BZZoDuWin-CGwhqM1L3jX_PoGeiBidKb/view?ths=true");
  }
  getExperience = () => {
    const finalArr = [];
    for (let i = 0; i < ExperienceData.length; i++) {
      let expArr = [];
      if (ExperienceData[i].type === "experience") {
        expArr.push(<h3 className="set-font">{ExperienceData[i].title}</h3>);
        expArr.push(<p className="set-font"><b>Date:</b> {ExperienceData[i].date}</p>);
        expArr.push(<p className="set-font"><b>Location:</b> {ExperienceData[i].location}</p>);
        for (let j = 0; j < ExperienceData[i].bulletList.length; j++) {
          expArr.push(<p>{ExperienceData[i].bulletList[j]}</p>)
        }
      }
      finalArr.push(<div className="experience-margin">{expArr}</div>);
    }
    
    return finalArr;
  }

  render() {
    return(
      <div id="resumeID" className="page-size resume-page">
        <br />
        <h1 className="section-title set-font">Experience</h1>
        <br />
        {this.getExperience()}
        <br />
        <button className="resume-button" onClick={this.downloadResume}><h2 className="button-font">See Full Resume</h2></button>
      </div>
    )
  }
}


// <iframe src="https://drive.google.com/file/d/1E5DZHA5J-DTX22TCf7CfQETBl5YChIFU/preview" width="100%" height="90%"></iframe>