import React from "react";
import ResumeData from "../Data/Resume";
import "../CSS/PageLayout.css";

const lambdaSchool = () => {
  let experienceArr = [];
  for (let i = 0; i < ResumeData.length; i++) {
    console.log(ResumeData[i].bulletList)
    if (ResumeData[i].title === "Lambda School") {
      for (let j = 0; j < ResumeData[i].bulletList.length; j++) {
        experienceArr.push(<p>{ResumeData[i].bulletList[j]}</p>);
      }
    }
  }
  return experienceArr;
}
const allenTemple = () => {
  let experienceArr = [];
  for (let i = 0; i < ResumeData.length; i++) {
    console.log(ResumeData[i].bulletList)
    if (ResumeData[i].title === "Allen Temple Health and Social Services") {
      for (let j = 0; j < ResumeData[i].bulletList.length; j++) {
        experienceArr.push(<p>{ResumeData[i].bulletList[j]}</p>);
      }
    }
  }
  return experienceArr;
}

const selfStudy = () => {
  let experienceArr = [];
  for (let i = 0; i < ResumeData.length; i++) {
    console.log(ResumeData[i].bulletList)
    if (ResumeData[i].title === "Code Self Study") {
      for (let j = 0; j < ResumeData[i].bulletList.length; j++) {
        experienceArr.push(<p>{ResumeData[i].bulletList[j]}</p>);
      }
    }
  }
  return experienceArr;
}

const getEducation = () => {
  let educationArr = [];
  for (let i = 0; i < ResumeData.length; i++) {
    console.log(ResumeData[i].bulletList)
    if (ResumeData[i].type === "education") {
      for (let j = 0; j < ResumeData[i].bulletList.length; j++) {
        educationArr.push(<p>{ResumeData[i].bulletList[j]}</p>);
      }
    }
  }
  return educationArr;
}

const getSKills = () => {
  let educationArr = [];
  for (let i = 0; i < ResumeData.length; i++) {
    console.log(ResumeData[i].bulletList)
    if (ResumeData[i].type === "skills") {
      for (let j = 0; j < ResumeData[i].bulletList.length; j++) {
        educationArr.push(<p>{ResumeData[i].bulletList[j]}</p>);
      }
    }
  }
  return educationArr;
}

const Resume = () =>{
  return(
    <div id="resumeID" className="page-size white-page">
      <br />
      <h1 className="section-title">Resume</h1>
      <br />
      <iframe src="https://drive.google.com/file/d/1eX18C85QvmFlzcHFHPGsebPxKeKSfwHg/preview" width="100%" height="80%"></iframe>
    </div>
  )
}

export default Resume;