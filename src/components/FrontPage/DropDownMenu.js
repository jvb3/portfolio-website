import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="/contact-me">
          <li className="menu__list-item">CONTACT ME</li>
        </Link>
      </ul>
    </section>
  );
};

export default DropDownMenu;
