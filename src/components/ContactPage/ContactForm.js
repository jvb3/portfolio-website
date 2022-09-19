import React from "react";

const ContactForm = () => {
  return (
    <div className="container grid-container__contact-form">
      <section>
        <p className="heading">Contact Me</p>
        <form className="form">
          <div className="form__input-container">
            <p className="form__text">Name</p>
            <input className="form__input" />
          </div>
          <div className="form__input-container">
            <p className="form__text">Email Address</p>
            <input className="form__input" />
          </div>
          <div className="form__input-container">
            <p className="form__text">Message</p>
            <textarea className="form__input" />
          </div>
          <button className="button header__button">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
