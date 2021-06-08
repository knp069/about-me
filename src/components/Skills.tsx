import React from "react";
import Particle from "./Particle";
import "../styles/Skills.scss";

const Skills = () => {
  return (
    <div className="section skill">
      <Particle />
      <div className="skill_heading">
        <h1>Tech I know</h1>
      </div>
      <div className="skill_content">
        <div className="skill_card_container">
          <div className="cards">
            <div className="skill_item">
              <div className="marker">
                <i className="fas fa-code"></i>
              </div>
              <div className="description"></div>
            </div>
            <div className="skill_item">
              <div className="marker">
                <i className="fas fa-database"></i>
              </div>
              <div className="description"></div>
            </div>
            <div className="skill_item">
              <div className="marker">
                <i className="fas fa-tools"></i>
              </div>
              <div className="description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
