import React from "react";
import Particle from "./Particle";
import oyo from "../images/oyo.png";
import halodoc from "../images/halodoc.png";
import arcesium from "../images/arcesium.png";
import chase from "../images/chase.png";
import "../styles/Work.scss";

const Work = () => {
  return (
    <div className="work section">
      <Particle />
      <div className="work_heading">
        <h1>Work-Experience</h1>
      </div>
      <div className="work_content">
        <div className="work_card_container">
          <div className="cards">
            <div className="work_item">
              <div className="marker">
                <img src={arcesium} alt="" />
              </div>
              <div className="description"></div>
            </div>
            <div className="work_item">
              <div className="marker">
                <img src={oyo} alt="" />
              </div>
              <div className="description"></div>
            </div>
            <div className="work_item">
              <div className="marker">
                <img src={halodoc} alt="" />
              </div>
              <div className="description"></div>
            </div>
            <div className="work_item">
              <div className="marker">
                <img src={chase} alt="" />
              </div>
              <div className="description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
