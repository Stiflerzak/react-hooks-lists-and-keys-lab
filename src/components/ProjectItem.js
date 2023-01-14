import React from "react";
import user from "../data/user";


function ProjectItem({ name, about, technologies }) {

 const technologyList= technologies.map((technology) => {
return <li>{technology}</li>
  })
console.log({technologyList});
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {<span>{technologies}</span>}
        
        <span>{technologyList}</span>
      </div>
    </div>
  );
}

export default ProjectItem;
