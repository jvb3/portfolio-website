import React from "react";
import InsureHeader from "./InsureHeader";
import MobileNavBar from "../../FrontPage/MobileNavBar";
import DropDownMenu from "../../FrontPage/DropDownMenu";
import InsureBackground from "./InsureBackground";
import InsurePreviews from "./InsurePreviews";
import InsureBrowserBtn from "./InsureBrowserBtn";
import Contact from "../../FrontPage/Contact";
import Footer from "../../FrontPage/Footer";

const InsureGrid = ({ handleMenu, showMenu }) => {
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
        <InsureHeader />
        <InsureBackground />
        <InsurePreviews />
        <InsureBrowserBtn />
        <Contact />
        <Footer />
      </section>
    </div>
  );
};

export default InsureGrid;
