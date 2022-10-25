import React from "react";
import FyloHeader from "./FyloHeader";
import MobileNavBar from "../../../MobileNavBar";
import NavBar from "../../../NavBar";
import DropDownMenu from "../../FrontPage/DropDownMenu";
import FyloBackground from "./FyloBackground";
import FyloPreviews from "./FyloPreviews";
import BrowserBtn from "../../../BrowserBtn";
import Contact from "../../FrontPage/Contact";
import Footer from "../../FrontPage/Footer";

const FyloGrid = ({ handleMenu, showMenu }) => {
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
        <FyloHeader />
        <FyloBackground />
        <FyloPreviews />
        <BrowserBtn />
        <Contact />
        <Footer />
      </section>
    </div>
  );
};

export default FyloGrid;
