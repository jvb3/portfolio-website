import React from "react";

import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();

  return (
    <section className="contact grid-container">
      <p className="contact__heading">
        Interested in doing a project together?
      </p>
      <div className="contact__hr-divider"></div>
      <button
        onClick={() => {
          navigate("/contact-me");
        }}
        className="contact__button button"
      >
        CONTACT ME
      </button>
    </section>
  );
};

export default Contact;
