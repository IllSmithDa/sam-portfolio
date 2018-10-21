import React from 'react';
import ProjectList from '../Data/ProjectList';

const listProjects = () => {
  console.log(ProjectList);
  const projectList = [];
  for (let i = 0; i < ProjectList.length; i++) {
    const projectArr = [];
    projectArr.push(<p><b>Project Name:</b> {ProjectList[i].projectName}</p>)
    projectArr.push(<p><b>Project Description:</b> {ProjectList[i].projectDesc}</p>)
    projectArr.push(<p><b>Project Link:</b> {ProjectList[i].projectLink}</p>)
    projectArr.push(<p><b>Project Tech Stack:</b> {ProjectList[i].projectTech}</p>)
    projectList.push(<div>{projectArr}</div>);
  }
  console.log(projectList);
  return projectList;
}
const Project = () => {
  listProjects();
  return(
    <div>
      <h1>Projects</h1>
      {listProjects()}
    </div>
  )
}

export default Project;