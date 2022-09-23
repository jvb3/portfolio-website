import React from "react";

const ContactForm = () => {
  return (
    <div className="container grid-container__contact-form">
      <section>
        <p className="heading">Contact Me</p>
        <form className="form">
          <div className="form__input-container">
            <p className="form__text">Name</p>
            <input
              type="text"
              placeholder="Jane Appleseed"
              className="form__input"
            />
          </div>
          <div className="form__input-container">
            <p className="form__text">Email Address</p>
            <input
              type="text"
              placeholder="email@example.com"
              className="form__input"
            />
          </div>
          <div className="form__input-container">
            <p className="form__text">Message</p>
            <textarea
              type="text"
              placeholder="How can I help?"
              className="form__input"
            />
          </div>
        </form>
        <button className="button button-blue">Send Message</button>
      </section>
    </div>
  );
};

export default ContactForm;
