import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log("this is our projects prop: ", projects);

  const project = projects.map((project) => {

    console.log("individual project object: ", project);


  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projects.map((project) => {
        return (
          <ProjectItem
          key={project.id}
          name={project.name}
          about={project.about}
          technologies={project.technologies}
          />
        )
      })}
      </div>
    </div>
  );
}

export default ProjectList;

// ProjectList
// In the ProjectList component, a prop of projects is being passed down from the App component with an array of objects. 
// For each object in the array, render one ProjectItem component with the correct props. Use the id of the project for the key prop.

// ProjectItem
// The ProjectItem component should get a prop of technologies passed down from ProjectList. 
// For each element in this array of technologies, create a <span> tag that displays the name of the technology.
