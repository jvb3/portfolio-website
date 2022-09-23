import React from "react";
import FyloHeader from "./FyloHeader";
import MobileNavBar from "../../FrontPage/MobileNavBar";
import DropDownMenu from "../../FrontPage/DropDownMenu";
import FyloBackground from "./FyloBackground";
import FyloPreviews from "./FyloPreviews";
import FyloBrowserBtn from "./FyloBrowserBtn";
import Contact from "../../FrontPage/Contact";
import Footer from "../../FrontPage/Footer";

const FyloGrid = ({ handleMenu, showMenu }) => {
  return (
    <div>
      <section className="container grid-container">
        <MobileNavBar handleMenu={handleMenu} showMenu={showMenu} />
        {showMenu ? (
          <section className="mobile-nav-bar">
            <DropDownMenu />
          </section>
        ) : (
          ""
        )}
        <FyloHeader />
        <FyloBackground />
        <FyloPreviews />
        <FyloBrowserBtn />
        <Contact />
        <Footer />
      </section>
    </div>
  );
};

export default FyloGrid;
