import React from "react";
import twitterLogo from "../../images/icons/twitter-dark.svg";
import githubLogo from "../../images/icons/github-dark.svg";
import linkedinLogo from "../../images/icons/linkedin-dark.svg";

const ContactPageHeader = () => {
  return (
    <section className="contact-header">
      <div className="flex-row-dt">
        <p className="heading contact-header__heading"> Get in Touch</p>
        <div>
          <p className="content contact-header__content">
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>

          <div className="footer__icon-container">
            <img
              className="footer__icon contact-header__icon"
              src={githubLogo}
              alt="#"
            />
            <img
              className="footer__icon contact-header__icon"
              src={twitterLogo}
              alt="#"
            />
            <img
              className="footer__icon contact-header__icon"
              src={linkedinLogo}
              alt="#"
            />
          </div>
        </div>
      </div>
      <hr className="hr-divider contact-header__hr-divider" />
    </section>
  );
};

export default ContactPageHeader;
