import React from "react";
import logo from "./images/logo.svg";
import hamburger from "./images/icons/hamburger.svg";

const MobileNavBar = ({ handleMenu, showMenu }) => {
  return (
    <section className="mobile-nav-bar ">
      <img className="mobile-nav-bar__logo" src={logo} alt="#" />
      {showMenu ? (
        <div className="mobile-nav-bar__close" onClick={handleMenu}>
          X
        </div>
      ) : (
        <img
          onClick={handleMenu}
          className="mobile-nav-bar__menu"
          src={hamburger}
          alt="#"
        />
      )}
    </section>
  );
};

export default MobileNavBar;
