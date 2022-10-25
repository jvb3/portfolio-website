import React from "react";
import InsureHeader from "./InsureHeader";
import MobileNavBar from "../../../MobileNavBar";
import NavBar from "../../../NavBar";
import DropDownMenu from "../../FrontPage/DropDownMenu";
import InsureBackground from "./InsureBackground";
import InsurePreviews from "./InsurePreviews";
import BrowserBtn from "../../../BrowserBtn";
import Contact from "../../FrontPage/Contact";
import Footer from "../../FrontPage/Footer";

const InsureGrid = ({ handleMenu, showMenu }) => {
  return (
    <div>
      <section className="container grid-container">
        <MobileNavBar handleMenu={handleMenu} showMenu={showMenu} />
        {showMenu ? (
          <section>
            <DropDownMenu />
          </section>
        ) : (
          ""
        )}
        <NavBar />
        <InsureHeader />
        <InsureBackground />
        <InsurePreviews />
        <BrowserBtn />
        <Contact />
        <Footer />
      </section>
    </div>
  );
};

export default InsureGrid;
