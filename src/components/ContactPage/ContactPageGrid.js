import ContactPageHeader from "./ContactPageHeader";
import ContactForm from "./ContactForm";

import React from "react";

const ContactPageGrid = () => {
  return (
    <main className="container grid-container">
      <ContactPageHeader />
      <ContactForm />
    </main>
  );
};

export default ContactPageGrid;
