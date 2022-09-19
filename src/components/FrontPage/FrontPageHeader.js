import React from "react";
import heroImg from "../../images/homepage/mobile/image-homepage-hero@2x.jpg";
import downArrows from "../../images/icons/down-arrows.svg";

const FrontPageHeader = ({ handleClick }) => {
  return (
    <div className="container grid-container__front-page-header">
      <section className="header">
        <img className="header__img" src={heroImg} alt="#" />
        <p className="header__text">
          Hey, I’m Alex Spencer and I love building beautiful websites
        </p>
        <button onClick={handleClick} className="header__button button">
          <div className="header__logo-container">
            <img className="header__btn-logo" src={downArrows} alt="#" />
          </div>
          <p className="header__btn-text">ABOUT ME</p>
        </button>
      </section>
    </div>
  );
};

export default FrontPageHeader;
