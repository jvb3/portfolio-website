import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();
  return (
    <div className="container grid-container__contact">
      <section className="contact">
        <p className="contact__heading">
          Interested in doing a project together?
        </p>
        <button
          onClick={() => {
            navigate("/contact-me");
          }}
          className="button"
        >
          CONTACT ME
        </button>
      </section>
    </div>
  );
};

export default Contact;
