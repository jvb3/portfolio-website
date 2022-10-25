import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const initialValues = {
    name: "",
    address: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (!values.name) {
      errors.name = "Can't be blank";
    }
    if (!values.address) {
      errors.address = "Can't be blank";
    } else if (!regex.test(values.address)) {
      errors.address = "Invalid email address";
    }
    if (!values.message) {
      errors.message = "Can't be blank";
    }
    return errors;
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form flex-row-dt">
        <div className="min-width-50">
          <p className="heading form__heading">Contact Me</p>
        </div>
        <div>
          <div className="form__input-container">
            <label className="form__text">Name</label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              placeholder="Jane Appleseed"
              className="form__input"
              onChange={handleInput}
            />
            <p className="error">{formErrors.name}</p>
          </div>
          <div className="form__input-container">
            <label className="form__text">Email Address</label>
            <input
              type="text"
              name="address"
              value={formValues.address}
              placeholder="email@example.com"
              className="form__input"
              onChange={handleInput}
            />
            <p className="error">{formErrors.address}</p>
          </div>
          <div className="form__input-container">
            <label className="form__text">Message</label>
            <textarea
              type="text"
              name="message"
              value={formValues.message}
              placeholder="How can I help?"
              className="form__input"
              onChange={handleInput}
            />
            <p className="error">{formErrors.message}</p>
          </div>
          <button type="submit" className="button button-blue form__button">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
