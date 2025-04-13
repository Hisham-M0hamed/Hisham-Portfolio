import React from "react";
import "./nav.css";
function Nav() {
  return (
    <ul className="navbar">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
    </ul>
  );
}

export default Nav;
