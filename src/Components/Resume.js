import React, {Component} from "react";
import ExperienceData from '../Data/Resume';
import "../CSS/PageLayout.css";


export default class Resume extends Component {
  downloadResume = () => {
    window.open("https://drive.google.com/file/d/10nO07Hvjhxmkr3x4iC5_FxuQ3a7ICff7/view?ths=true");
  }
  getExperience = () => {
    const finalArr = [];
    for (let i = 0; i < ExperienceData.length; i++) {
      let expArr = [];
      if (ExperienceData[i].type === "experience") {
        expArr.push(<h3>{ExperienceData[i].title}</h3>);
        expArr.push(<p><b>Date:</b> {ExperienceData[i].date}</p>);
        expArr.push(<p><b>Location:</b> {ExperienceData[i].location}</p>);
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
      <div id="resumeID" className="page-size white-page">
        <br />
        <h1 className="section-title">Experience</h1>
        <br />
        {this.getExperience()}
        <br />
        <button className="resume-button" onClick={this.downloadResume}><h2 className="button-font">See Full Resume</h2></button>
      </div>
    )
  }
}


// <iframe src="https://drive.google.com/file/d/1E5DZHA5J-DTX22TCf7CfQETBl5YChIFU/preview" width="100%" height="90%"></iframe>