import React from "react";
import Particle from "./Particle";
import "../styles/Projects.scss";
const Projects = () => {
  return (
    <div className="section Projects">
      <Particle />
      <div className="project_heading">
        <h1>Projects</h1>
      </div>
      <div className="project_content">
        <div className="project_card_container">
          <div className="cards">
            <div className="project_item"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
