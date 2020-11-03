import React from "react";
import Desktopnav from "../Desktopnav/Desktopnav";
import ProjectList from "../../Data/ProjectList";
import UUID from 'uuid/v1';
import "./Projects.css";

const listProjects = () => {
  const projectList = [];
  for (let i = 0; i < ProjectList.length; i++) {
    const projectArr = [];
    projectArr.push(<h3 key={UUID()} className="set-font set-margin">{ProjectList[i].projectName}</h3>)
    projectArr.push(<a key={UUID()} href={ProjectList[i].projectLink} target="_blank" rel="noopener noreferrer">
    <img key={UUID()} src={ProjectList[i].imageSrc} alt="project-src" className="image-item"/>
  </a>)
    projectArr.push(<p key={UUID()} className="set-font">{ProjectList[i].projectDesc}</p>)
    projectArr.push(<p key={UUID()} className="set-font">
                      <b >Project Link: </b> 
                      <a key={UUID()} href={ProjectList[i].projectLink} target="_blank" rel="noopener noreferrer">
                      {ProjectList[i].shortLink}
                      </a>
                    </p>)
    projectArr.push(<p key={UUID()} className="set-font"><b>Project Tech Stack:</b> {ProjectList[i].projectTech}</p>)
    projectList.push(<div key={UUID()} className="project-table">{projectArr}</div>);
  }
  return projectList;
}
const Project = () => {
  listProjects();
  return(
    <div id="project-ID" className="page-size project-page">
      <div className="project-container">
        <h1 className="section-title">Projects</h1>
        <div className="section-container">
          {listProjects()} 
        </div>
      </div>

    </div>
  )
}

export default Project;