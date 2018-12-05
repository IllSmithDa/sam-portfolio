import React from "react";
import ProjectList from "../Data/ProjectList";
import "../CSS/Projects.css";
import "../CSS/PageLayout.css";

const listProjects = () => {
  const projectList = [];
  for (let i = 0; i < ProjectList.length; i++) {
    const projectArr = [];
    projectArr.push(<p className="set-font"><b>Project Name:</b> {ProjectList[i].projectName}</p>)
    projectArr.push(<p className="set-font"><b>Project Description:</b> {ProjectList[i].projectDesc}</p>)
    projectArr.push(<p>
                      <b  className="set-font">Project Link: </b> 
                      <a href={ProjectList[i].projectLink} target="_blank" rel="noopener noreferrer">
                      {ProjectList[i].projectLink}
                      </a>
                    </p>)
    projectArr.push(<p className="set-font"><b>Project Tech Stack:</b> {ProjectList[i].projectTech}</p>)
    projectArr.push(<a href={ProjectList[i].projectLink} target="_blank" rel="noopener noreferrer">
                      <img src={ProjectList[i].imageSrc} alt="project-src" className="image-item"/>
                    </a>)
    projectList.push(<div className="section-divider-center">{projectArr}</div>);
  }
  return projectList;
}
const Project = () => {
  listProjects();
  return(
    <div id="projectID" className="page-size project-page project-margin">
      <br />
      <h1 className="section-title">Projects</h1>
      <div className="section-container">
        {listProjects()} 
      </div>
    </div>
  )
}

export default Project;