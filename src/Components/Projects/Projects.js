import React from "react";
import ProjectList from "../../Data/ProjectList";
import UUID from 'uuid/v1';
import "./Projects.css";

const Project = () => {
  const listProjects = ProjectList.map((project) => {
    return (
      <div key={UUID()} className="list-container">
        <h3 className="set-font set-margin">{project.projectName}</h3>
        <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
         <img src={require(`${project.imageSrc}`)} alt="project-src" className="image-item"/>
        </a>
        <p className="set-font proj-description">{project.projectDesc}</p>
        <p className="set-font">
          <b >Project Link: </b> 
          <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
          {project.shortLink}
          </a>
        </p>
        <p className="set-font"><b>Project Tech Stack:</b> {project.projectTech}</p>
      </div>
    );
  })
  return(
    <div id="project-ID" className="page-size project-page">
      <div className="project-container">
        <h1 className="section-title">Projects</h1>
        <div className="section-container">
          {listProjects} 
        </div>
      </div>

    </div>
  )
}

export default Project;