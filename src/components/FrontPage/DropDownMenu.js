import React from "react";
import { Link } from "react-router-dom";
import FrontPageGrid from "./FrontPageGrid";

const DropDownMenu = () => {
  return (
    <section className="menu">
      <ul className="menu__list-container">
        <Link to="/">
          <li className="menu__list-item">HOME</li>
        </Link>
        <Link to="/portfolio-index">
          <li className="menu__list-item">PORTFOLIO</li>
        </Link>
        <li className="menu__list-item">CONTACT ME</li>
      </ul>
    </section>
  );
};

export default DropDownMenu;
