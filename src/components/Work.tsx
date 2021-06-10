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
              <div className="description">
                <div className="company_header">
                  <div className="name">
                    <span>ARCESIUM</span>
                  </div>
                  <div className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Bengaluru</span>
                  </div>
                </div>
                <div className="details">
                  <div className="segment">
                    <div className="designation">
                      <span>Senior Software Engineer</span>
                    </div>
                    <div className="duration">
                      <span>June'20 - Present</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="work_item">
              <div className="marker">
                <img src={oyo} alt="" />
              </div>
              <div className="description">
                <div className="company_header">
                  <div className="name">
                    <span>OYO</span>
                  </div>
                  <div className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Bengaluru</span>
                  </div>
                </div>
                <div className="details">
                  <div className="segment">
                    <div className="designation">
                      <span>Software development Engineer I</span>
                    </div>
                    <div className="duration">
                      <span>Sept'19 - June'20</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="work_item">
              <div className="marker">
                <img src={halodoc} alt="" />
              </div>
              <div className="description">
                <div className="company_header">
                  <div className="name">
                    <span>HALODOC</span>
                  </div>
                  <div className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Bengaluru</span>
                  </div>
                </div>
                <div className="details">
                  <div className="segment">
                    <div className="designation">
                      <span>Software development Engineer I</span>
                    </div>
                    <div className="duration">
                      <span>Sept'18 - July'19</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="work_item">
              <div className="marker">
                <img src={chase} alt="" />
              </div>
              <div className="description">
                <div className="company_header">
                  <div className="name">
                    <span>JP MORGAN CHASE & CO.</span>
                  </div>
                  <div className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Bengaluru</span>
                  </div>
                </div>
                <div className="details">
                  <div className="segment">
                    <div className="designation">
                      <span>Technology Analyst</span>
                    </div>
                    <div className="duration">
                      <span>July'17 - August'18</span>
                    </div>
                  </div>
                  <div className="segment">
                    <div className="designation">
                      <span>Summer Intern</span>
                    </div>
                    <div className="duration">
                      <span>May'16 - July'16</span>
                    </div>
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

export default Work;
