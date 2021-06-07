import React from "react";
import coder from "../images/profile.png";
import "../styles/Landing.scss";
import Particle from "./Particle";
const Landing = () => {
  return (
    <>
      <div className="section">
        <Particle />
        <div className="content">
          <div className="left">
            <div className="intro">
              <h1 className="heading">I'M NISHANT </h1>
              <br />
              <h1 className="subtitle">A FULL-STACK DEVELOPER</h1>
            </div>
            <div className="social">
              <ul className="social-icon-list">
                <li className="icon">
                  <i className="fab fa-linkedin"></i>
                </li>
                <li className="icon">
                  <i className="fab fa-facebook-square"></i>
                </li>
                <li className="icon">
                  <i className="fab fa-github-square"></i>
                </li>
                <li className="icon">
                  <i className="fab fa-instagram-square"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <img src={coder} width="100%"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
