import React from "react";
import BookmarkHeader from "./BookmarkHeader";
import MobileNavBar from "../../FrontPage/MobileNavBar";
import DropDownMenu from "../../FrontPage/DropDownMenu";
import BookmarkBackground from "./BookmarkBackground";
import BookmarkPreviews from "./BookmarkPreviews";
import BookmarkBrowserBtn from "./BookmarkBrowserBtn";
import Contact from "../../FrontPage/Contact";
import Footer from "../../FrontPage/Footer";

const BookmarkGrid = ({ handleMenu, showMenu }) => {
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
        <BookmarkHeader />
        <BookmarkBackground />
        <BookmarkPreviews />
        <BookmarkBrowserBtn />
        <Contact />
        <Footer />
      </section>
    </div>
  );
};

export default BookmarkGrid;
