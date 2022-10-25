import React from "react";
import BookmarkHeader from "./BookmarkHeader";
import MobileNavBar from "../../../MobileNavBar";
import NavBar from "../../../NavBar";
import DropDownMenu from "../../FrontPage/DropDownMenu";
import BookmarkBackground from "./BookmarkBackground";
import BookmarkPreviews from "./BookmarkPreviews";
import BrowserBtn from "../../../BrowserBtn";
import Contact from "../../FrontPage/Contact";
import Footer from "../../FrontPage/Footer";

const BookmarkGrid = ({ handleMenu, showMenu }) => {
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
        <BookmarkHeader />
        <BookmarkBackground />
        <BookmarkPreviews />
        <BrowserBtn />
        <Contact />
        <Footer />
      </section>
    </div>
  );
};

export default BookmarkGrid;
