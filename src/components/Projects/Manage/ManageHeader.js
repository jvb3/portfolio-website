import React from "react";
import heroImage from "../../../images/detail/mobile/image-manage-hero@2x.jpg";
import { useNavigate } from "react-router-dom";

const Manage = () => {
  let navigate = useNavigate();
  return (
    <main className="container grid-container">
      <section className="project">
        <img className="project__image" src={heroImage} alt="#" />
        <hr className="hr-divider" />
        <p className="heading">Manage</p>
        <p className="content">
          This project required me to build a fully responsive landing page to
          the designs provided. I used HTML5, along with CSS Grid and JavaScript
          for the areas that required interactivity, such as the testimonial
          slider.
        </p>
        <p className="content content-green">
          {" "}
          Interaction Design / Front End Development HTML / CSS / JS
        </p>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="button"
        >
          VIEW WEBSITE
        </button>
        <hr className="hr-divider" />
      </section>
    </main>
  );
};

export default Manage;
