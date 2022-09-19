import React from "react";
import MobileNavBar from "./MobileNavBar";
import DropDownMenu from "../FrontPage/DropDownMenu";
import Projects from "./Projects";
import Footer from "../FrontPage/Footer";

const PortfolioIndexGrid = ({ handleMenu, showMenu }) => {
  return (
    <div className="container grid-container">
      <MobileNavBar handleMenu={handleMenu} showMenu={showMenu} />
      {showMenu ? (
        <section className="mobile-nav-bar">
          <DropDownMenu />
        </section>
      ) : (
        ""
      )}
      <Projects />
      <Footer />
    </div>
  );
};

export default PortfolioIndexGrid;
