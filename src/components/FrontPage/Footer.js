import React from "react";
import logoWhite from "../../images/icons/logo-white.svg";
import twitterLogo from "../../images/icons/twitter.svg";
import githubLogo from "../../images/icons/github.svg";
import linkedinLogo from "../../images/icons/linkedin.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="footer">
      <img src={logoWhite} alt="#" />
      <ul className="footer__list-container">
        <Link to="/">
          <li className="footer__list-item">HOME</li>
        </Link>
        <Link to="/portfolio-index">
          <li className="footer__list-item">PORTFOLIO</li>
        </Link>
        <Link to="/contact-me">
          <li className="footer__list-item">CONTACT ME</li>
        </Link>
      </ul>
      <div className="footer__icon-container">
        <img className="footer__icon" src={githubLogo} alt="#" />
        <img className="footer__icon" src={twitterLogo} alt="#" />
        <img className="footer__icon" src={linkedinLogo} alt="#" />
      </div>
    </section>
  );
};

export default Footer;
