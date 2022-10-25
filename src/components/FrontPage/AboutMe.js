import React from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../images/homepage/mobile/image-homepage-profile@2x.jpg";
import profileTablet from "../../images/homepage/tablet/image-homepage-profile@2x.jpg";
import profileDesktop from "../../images/homepage/desktop/image-homepage-profile@2x.jpg";

const AboutMe = () => {
  let navigate = useNavigate();
  return (
    <section id="about-me" className="profile grid-container">
      <img className="profile__img" src={profile} alt="#" />
      <img className="profile__img-tablet" src={profileTablet} alt="#" />
      <img className="profile__img-desktop" src={profileDesktop} alt="#" />
      <div className="hr-divider profile__hr-divider-top"></div>
      <p className="profile__heading heading">About Me</p>
      <p className="profile__content">
        {" "}
        I’m a junior front-end developer looking for a new role in an exciting
        company. I focus on writing accessible HTML, using modern CSS practices
        and writing clean JavaScript. When writing JavaScript code, I mostly use
        React, but I can adapt to whatever tools are required. I’m based in
        London, UK, but I’m happy working remotely and have experience in remote
        teams. When I’m not coding, you’ll find me outdoors. I love being out in
        nature whether that’s going for a walk, run or cycling. I’d love you to
        check out my work.
      </p>
      <div className="profile__btn-container">
        <button
          onClick={() => {
            navigate("/portfolio-index");
          }}
          className="profile__button button"
        >
          GO TO PORTFOLIO
        </button>
      </div>
      <div className="profile__hr-divider-bottom hr-divider"></div>
    </section>
  );
};

export default AboutMe;
