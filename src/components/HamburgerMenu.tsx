import React, { useState } from "react";
import "../styles/HamburgerMenu.scss";
const HamburgerMenu = () => {
  const [opened, setOpened] = useState("");

  function toggleMenu() {
    if (opened === "opened") {
      setOpened("");
    } else {
      setOpened("opened");
    }
  }
  return (
    <>
      <button
        onClick={toggleMenu}
        className={`menu ${opened}`}
        aria-label="Main Menu"
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
