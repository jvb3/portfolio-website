import React from "react";
import logo from "../../images/logo.svg";
import hamburger from "../../images/icons/hamburger.svg";

const MobileNavBar = ({ handleMenu, showMenu }) => {
  return (
    <div className="container grid-container__mobile-navbar">
      <section className="mobile-nav-bar">
        <img className="mobile-nav-bar__img" src={logo} alt="#" />
        {showMenu ? (
          <div className="mobile-nav-bar__close" onClick={handleMenu}>
            X
          </div>
        ) : (
          <img
            onClick={handleMenu}
            className="mobile-nav-bar__img"
            src={hamburger}
            alt="#"
          />
        )}
      </section>
    </div>
  );
};

export default MobileNavBar;
