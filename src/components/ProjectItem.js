import React from "react";



function ProjectItem({ name, about, technologies }) {

 const technologyList= technologies.map((technology,index) => {
return <span>{technology}</span>
  })
console.log({technologyList});
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        
        
        <span>{technologyList}</span>
      </div>
    </div>
  );
}

export default ProjectItem;
