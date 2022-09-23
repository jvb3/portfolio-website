import React from "react";
import ManageHeader from "./ManageHeader";
import MobileNavBar from "../../FrontPage/MobileNavBar";
import DropDownMenu from "../../FrontPage/DropDownMenu";
import ManageBackground from "./ManageBackground";
import ManagePreviews from "./ManagePreviews";
import ManageBrowserBtn from "./ManageBrowserBtn";
import Contact from "../../FrontPage/Contact";
import Footer from "../../FrontPage/Footer";

const ManageGrid = ({ handleMenu, showMenu }) => {
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
        <ManageHeader />
        <ManageBackground />
        <ManagePreviews />
        <ManageBrowserBtn />
        <Contact />
        <Footer />
      </section>
    </div>
  );
};

export default ManageGrid;
