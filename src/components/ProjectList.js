import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectElement= projects.map((project) =>{
    return <li>{project}</li>
  })
console.log(projectElement);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
      vvcbb 
      </div>
    </div>
  );
}

export default ProjectList;
