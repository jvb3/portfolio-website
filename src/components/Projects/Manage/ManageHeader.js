import React from "react";
import heroImage from "../../../images/detail/mobile/image-manage-hero@2x.jpg";
import heroImageTablet from "../../../images/detail/tablet/image-manage-hero@2x.jpg";
import heroImageDesktop from "../../../images/detail/desktop/image-manage-hero@2x.jpg";
import { useNavigate } from "react-router-dom";
import ProjectImage1Desktop from "../../../images/detail/desktop/image-manage-preview-1@2x.jpg";
import ProjectImage2Desktop from "../../../images/detail/desktop/image-manage-preview-2@2x.jpg";

const Manage = () => {
  let navigate = useNavigate();
  return (
    <main className="manage-container grid-container">
      <section className="project project-header-grid">
        <img className="project__image" src={heroImage} alt="#" />
        <img
          className="project__image project__image-tablet"
          src={heroImageTablet}
          alt="#"
        />
        <img
          className="project__image project__image-desktop"
          src={heroImageDesktop}
          alt="#"
        />
        <hr className="hr-divider project__hr-divider-top" />
        <p className="heading project__heading">Manage</p>
        <p className="content project__content">
          This project required me to build a fully responsive landing page to
          the designs provided. I used HTML5, along with CSS Grid and JavaScript
          for the areas that required interactivity, such as the testimonial
          slider.
        </p>
        <p className="content project__content content-green">
          Interaction Design / Front End Development HTML / CSS / JS
        </p>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="project__button button"
        >
          VIEW WEBSITE
        </button>
        <hr className="hr-divider project__hr-divider-bottom" />
        <section className="project project-grid-desktop">
          <p className="heading project__sub-heading">Project Background</p>
          <p className="content">
            This project was a front-end challenge from Frontend Mentor. It’s a
            platform that enables you to practice building websites to a design
            and project brief. Each challenge includes mobile and desktop
            designs to show how the website should look at different screen
            sizes. Creating these projects has helped me refine my workflow and
            solve real-world coding problems. I’ve learned something new with
            each project, helping me to improve and adapt my style.
          </p>
        </section>
        <section className=" project__static-previews-desktop">
          <p className="heading project__sub-heading">Static Previews</p>

          <img
            className="project__image-desktop"
            src={ProjectImage1Desktop}
            alt="#"
          />
          <img
            className="project__image-desktop project__preview-image"
            src={ProjectImage2Desktop}
            alt="#"
          />
        </section>
      </section>
    </main>
  );
};

export default Manage;
