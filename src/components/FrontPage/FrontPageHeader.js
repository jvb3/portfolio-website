import React from "react";
import heroImg from "../../images/homepage/mobile/image-homepage-hero@2x.jpg";
import heroImgTablet from "../../images/homepage/tablet/image-homepage-hero@2x.jpg";
import heroImgDesktop from "../../images/homepage/desktop/image-homepage-hero@2x.jpg";
import downArrows from "../../images/icons/down-arrows.svg";

const FrontPageHeader = ({ handleClick }) => {
  return (
    <section className="grid-container header">
      <img className="header__img-mobile" src={heroImg} alt="#" />
      <img className="header__img-tablet" src={heroImgTablet} alt="#" />
      <img className="header__img-desktop" src={heroImgDesktop} alt="#" />
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
  );
};

export default FrontPageHeader;
