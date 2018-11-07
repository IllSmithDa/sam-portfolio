import React from "react";
import ProjectList from "../Data/ProjectList";
import "../CSS/Projects.css";
import "../CSS/PageLayout.css";

const listProjects = () => {
  const projectList = [];
  for (let i = 0; i < ProjectList.length; i++) {
    const projectArr = [];
    projectArr.push(<p><b>Project Name:</b> {ProjectList[i].projectName}</p>)
    projectArr.push(<p><b>Project Description:</b> {ProjectList[i].projectDesc}</p>)
    projectArr.push(<p><b>Project Link:</b> <a href={ProjectList[i].projectLink}>{ProjectList[i].projectLink}</a></p>)
    projectArr.push(<p><b>Project Tech Stack:</b> {ProjectList[i].projectTech}</p>)
    projectArr.push(<a href={ProjectList[i].projectLink}><img src={ProjectList[i].imageSrc} alt="project-src" className="image-item"/></a>)
    projectList.push(<div className="section-divider-center">{projectArr}</div>);
  }
  return projectList;
}
const Project = () => {
  listProjects();
  return(
    <div id="projectID" className="page-size red-page project-margin">
      <br />
      <h1 className="section-title">Projects</h1>
      <div className="section-container">
        {listProjects()} 
      </div>
    </div>
  )
}

export default Project;