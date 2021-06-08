import React from "react";
import Particle from "./Particle";
import "../styles/Skills.scss";
import mysql from "../images/mysql.svg";
import typescript from "../images/typescript.svg";
import postgresql from "../images/postgresql.svg";

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
              <div className="description">
                <h2 className="title">Languages and frameworks</h2>
                <br />
                <div className="logos">
                  <div className="logo_holder">
                    <i className="devicon-java-plain"></i>
                    <h3>java</h3>
                  </div>
                  <div className="logo_holder">
                    <i className="devicon-python-plain"></i>
                    <h3>python</h3>
                  </div>
                  <div className="logo_holder">
                    <i className="devicon-javascript-plain"></i>
                    <h3>javascript</h3>
                  </div>
                  <div className="logo_holder">
                    <i className="devicon-html5-plain"></i>
                    <h3>html</h3>
                  </div>
                  <div className="logo_holder">
                    <i className="devicon-css3-plain"></i>
                    <h3>css</h3>
                  </div>
                  <div className="logo_holder">
                    <i className="devicon-react-plain"></i>
                    <h3>react</h3>
                  </div>
                  <div className="logo_holder">
                    <i className="devicon-sass-plain"></i>
                    <h3>sass</h3>
                  </div>
                  <div className="logo_holder">
                    <i className="devicon-typescript-plain"></i>
                    <h3>typescript</h3>
                  </div>
                  <div className="logo_holder">
                    <i className="devicon-spring-plain"></i>
                    <h3>spring boot</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill_item">
              <div className="marker">
                <i className="fas fa-database"></i>
              </div>
              <div className="description">
                <h2 className="title">DATABASES</h2>
                <br />
                <div className="logos">
                  <div className="logo_holder">
                    <i className="devicon-mysql-plain"></i>
                    <h3>mysql</h3>
                  </div>
                  <div className="logo_holder">
                    <i className="devicon-postgresql-plain"></i>
                    <h3>postgresql</h3>
                  </div>
                  <div className="logo_holder">
                    <i className="devicon-microsoftsqlserver-plain"></i>
                    <h3>ms-sql</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill_item">
              <div className="marker">
                <i className="fas fa-tools"></i>
              </div>
              <div className="description">
                <h2 className="title">TOOLS AND PLATFORMS</h2>
                <br />
                <div className="logos">
                  <div className="logo_holder">
                    <i className="devicon-amazonwebservices-plain"></i>
                    <h3>aws</h3>
                  </div>
                  <div className="logo_holder">
                    <i className="devicon-googlecloud-plain"></i>
                    <h3>google cloud</h3>
                  </div>
                  <div className="logo_holder">
                    <i className="devicon-git-plain"></i>
                    <h3>git</h3>
                  </div>
                  <div className="logo_holder">
                    <i className="devicon-figma-plain"></i>
                    <h3>figma</h3>
                  </div>
                  <div className="logo_holder">
                    <i className="devicon-vim-plain"></i>
                    <h3>vim</h3>
                  </div>
                  <div className="logo_holder">
                    <i className="devicon-linux-plain"></i>
                    <h3>linux</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
