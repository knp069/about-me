import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.scss";
import HamburgerMenu from "./HamburgerMenu";

interface Props {
  setMenuClass?: any;
  menuClass?: string;
  setPageClass?: any;
  setMenuButtonClass?: any;
  menuButtonClass: string;
}

const Menu = (props: Props) => {
  function toggleClass() {
    if (props.menuButtonClass === "opened") {
      props.setMenuButtonClass("");
      props.setMenuClass("");
      props.setPageClass("");
    } else {
      props.setMenuButtonClass("opened");
      props.setMenuClass("opened_menu");
      props.setPageClass("inactive");
    }
  }

  return (
    <>
      <div onClick={toggleClass} className={`menu_box ${props.menuClass}`}>
        <ul className="menu_items">
          <li className="item">
            <Link to="/" id="home">
              <span>home</span>
              <i className="fas fa-home"></i>
            </Link>
          </li>
          <li className="item">
            <Link to="/skills" id="skills">
              <span>skills</span>
              <i className="fas fa-cog"></i>
            </Link>
          </li>
          <li className="item">
            <Link to="/work" id="work">
              <span>work</span>
              <i className="fas fa-briefcase"></i>
            </Link>
          </li>
          <li className="item">
            <Link to="/projects" id="projects">
              <span>projects</span>
              <i className="fas fa-rocket"></i>
            </Link>
          </li>
          <li className="item">
            <Link to="/contact" id="contact">
              <span>CONTACT</span>
              <i className="fas fa-envelope"></i>
            </Link>
          </li>
        </ul>
        <HamburgerMenu
          setMenuClass={props.setMenuClass}
          setPageClass={props.setPageClass}
          menuButtonClass={props.menuButtonClass}
          setMenuButtonClass={props.setMenuButtonClass}
        />
      </div>
    </>
  );
};

export default Menu;
