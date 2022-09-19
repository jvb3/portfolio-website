import React from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../images/homepage/mobile/image-homepage-profile@2x.jpg";

const AboutMe = () => {
  let navigate = useNavigate();
  return (
    <div className="container grid-container__about-me">
      <section id="about-me" className="profile">
        <img className="profile__img" src={profile} alt="#" />
        <hr className="profile__hr-divider" />
        <p className="profile__heading heading">About Me</p>
        <p className="profile__content">
          {" "}
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
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
        <hr className="hr-divider" />
      </section>
    </div>
  );
};

export default AboutMe;
