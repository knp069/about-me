import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.scss";
const Menu = () => {
  return (
    <>
      <div className="menu_box">
        <ul className="menu_items">
          <li className="item">
            <Link to="/">
              <i className="fas fa-home"></i>
            </Link>
          </li>
          <li className="item">
            <Link to="/skills">
              <i className="fas fa-cog"></i>
            </Link>
          </li>
          <li className="item">
            <Link to="/work">
              <i className="fas fa-briefcase"></i>
            </Link>
          </li>
          <li className="item">
            <Link to="/projects">
              <i className="fas fa-rocket"></i>
            </Link>
          </li>
          <li className="item">
            <Link to="/contact">
              <i className="fas fa-envelope"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
