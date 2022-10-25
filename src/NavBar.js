import React from "react";
import logo from "./images/logo.svg";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ handleMenu, showMenu }) => {
  const currentPage = useLocation();
  console.log(currentPage);
  return (
    <section className="grid-container nav-bar">
      <img className="nav-bar__logo" src={logo} alt="#" />
      <ui className="nav-bar__links">
        <Link className="nav-bar__link current" to="/">
          <li>HOME</li>
        </Link>

        <Link
          style={
            currentPage.pathname === "/portfolio-index"
              ? { color: "#5FB4A2" }
              : { color: "black" }
          }
          className="nav-bar__link"
          to="/portfolio-index"
        >
          <li>PORTFOLIO</li>
        </Link>
        <Link
          style={
            currentPage.pathname === "/contact-me"
              ? { color: "#5FB4A2" }
              : { color: "black" }
          }
          className="nav-bar__link"
          to="/contact-me"
        >
          <li>CONTACT ME</li>
        </Link>
      </ui>
    </section>
  );
};

export default NavBar;
