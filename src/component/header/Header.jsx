import React from "react";
import Nav from "../nav/nav";
import "./header.css";

import { CiLight } from "react-icons/ci";

function Header() {
  return (
    <header>
      <div></div>
      <Nav />
      <div className="icon-light">
        <CiLight />
      </div>
    </header>
  );
}

export default Header;
