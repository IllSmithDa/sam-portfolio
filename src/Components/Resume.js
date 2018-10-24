import React from "react";
import Navbar from "./Navbar";
import ResumeData from '../Data/Resume';
import '../CSS/PageLayout.css';

const lambdaSchool = () => {
  let experienceArr = [];
  for (let i = 0; i < ResumeData.length; i++) {
    console.log(ResumeData[i].bulletList)
    if (ResumeData[i].title === 'Lambda School') {
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
    if (ResumeData[i].title === 'Allen Temple Health and Social Services') {
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
    if (ResumeData[i].title === 'Code Self Study') {
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
    if (ResumeData[i].type === 'education') {
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
    if (ResumeData[i].type === 'skills') {
      for (let j = 0; j < ResumeData[i].bulletList.length; j++) {
        educationArr.push(<p>{ResumeData[i].bulletList[j]}</p>);
      }
    }
  }
  return educationArr;
}

const Resume = () =>{
  return(
    <div>
      <Navbar />
      <div className='page-container'>
        <h1>Resume</h1>
        <div>
          <h1>Experience</h1>
          <h2>Lambda School </h2>
            {lambdaSchool()}
          <h2>Code Self Study</h2>
            {selfStudy()}
          <h2>Allen Temple Health and Social Services</h2>
            {allenTemple()}
        </div>
        <div>
          <h1>Education</h1>
          {getEducation()}
        </div>
        <div>
          <h1>Skills</h1>
          {getSKills()}
        </div>
      </div>
    </div>
  )
}

export default Resume;