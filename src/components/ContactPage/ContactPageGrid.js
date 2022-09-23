import MobileNavBar from "../FrontPage/MobileNavBar";
import ContactPageHeader from "./ContactPageHeader";
import DropDownMenu from "../FrontPage/DropDownMenu";
import ContactForm from "./ContactForm";
import Footer from "../FrontPage/Footer";

import React from "react";

const ContactPageGrid = ({ handleMenu, showMenu }) => {
  return (
    <main className="container grid-container">
      <MobileNavBar handleMenu={handleMenu} showMenu={showMenu} />
      {showMenu ? (
        <section className="mobile-nav-bar">
          <DropDownMenu />
        </section>
      ) : (
        ""
      )}
      <ContactPageHeader />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default ContactPageGrid;
