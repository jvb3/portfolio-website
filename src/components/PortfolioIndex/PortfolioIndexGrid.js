import React from "react";
import MobileNavBar from "../../MobileNavBar";
import NavBar from "../../NavBar";
import DropDownMenu from "../FrontPage/DropDownMenu";
import Projects from "./Projects";
import Contact from "../FrontPage/Contact";
import Footer from "../FrontPage/Footer";

const PortfolioIndexGrid = ({ handleMenu, showMenu }) => {
  return (
    <div className="grid-container">
      <MobileNavBar handleMenu={handleMenu} showMenu={showMenu} />
      {showMenu ? (
        <section>
          <DropDownMenu />
        </section>
      ) : (
        ""
      )}
      <NavBar />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default PortfolioIndexGrid;
