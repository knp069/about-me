import React, { useState } from "react";
import "../styles/HamburgerMenu.scss";
interface Props {
  setMenuClass?: any;
  setPageClass?: any;
  setMenuButtonClass?: any;
  menuButtonClass: string;
}
const HamburgerMenu = (props: Props) => {
  function toggleMenu() {
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
      <button
        onClick={toggleMenu}
        className={`ham_button ${props.menuButtonClass}`}
        aria-label="Main ham_button"
      >
        <ul className="lines">
          <li className="line line1"></li>
          <li className="line line2"></li>
          <li className="line line3"></li>
        </ul>
      </button>
    </>
  );
};

export default HamburgerMenu;
