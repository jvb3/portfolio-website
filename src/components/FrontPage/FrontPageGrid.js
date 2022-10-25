import React from "react";
import MobileNavBar from "../../MobileNavBar";
import NavBar from "../../NavBar";
import FrontPageHeader from "./FrontPageHeader";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
import DropDownMenu from "./DropDownMenu";

const FrontPageGrid = ({ handleClick, handleMenu, showMenu }) => {
  return (
    <main className="front-page-grid grid-container">
      <MobileNavBar handleMenu={handleMenu} showMenu={showMenu} />
      {showMenu ? (
        <section>
          <DropDownMenu />
        </section>
      ) : (
        ""
      )}
      <NavBar />
      <FrontPageHeader handleClick={handleClick} />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  );
};

export default FrontPageGrid;
