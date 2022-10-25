import React from "react";
import ManageHeader from "./ManageHeader";
import MobileNavBar from "../../../MobileNavBar";
import DropDownMenu from "../../FrontPage/DropDownMenu";
import NavBar from "../../../NavBar";
import ManageBackground from "./ManageBackground";
import ManagePreviews from "./ManagePreviews";
import BrowserBtn from "../../../BrowserBtn";
import Contact from "../../FrontPage/Contact";
import Footer from "../../FrontPage/Footer";

const ManageGrid = ({ handleMenu, showMenu }) => {
  return (
    <div>
      <section className="manage-container grid-container">
        <MobileNavBar handleMenu={handleMenu} showMenu={showMenu} />
        {showMenu ? (
          <section>
            <DropDownMenu />
          </section>
        ) : (
          ""
        )}
        <NavBar />
        <ManageHeader />
        <ManageBackground />
        <ManagePreviews />
        <BrowserBtn />
        <Contact />
        <Footer />
      </section>
    </div>
  );
};

export default ManageGrid;
