import React from "react";
import heroImage from "../../../images/detail/mobile/image-fylo-hero@2x.jpg";
import heroImageTablet from "../../../images/detail/tablet/image-fylo-hero@2x.jpg";
import heroImageDesktop from "../../../images/detail/desktop/image-fylo-hero@2x.jpg";
import ProjectImage1Desktop from "../../../images/detail/desktop/image-fylo-preview-1@2x.jpg";
import ProjectImage2Desktop from "../../../images/detail/desktop/image-fylo-preview-2@2x.jpg";
import { useNavigate } from "react-router-dom";

const FyloHeader = () => {
  let navigate = useNavigate();
  return (
    <main className="container grid-container">
      <section className="project project-header-grid">
        <img className="project__image" src={heroImage} alt="#" />
        <img className="project__image-tablet" src={heroImageTablet} alt="#" />
        <img
          className="project__image-desktop"
          src={heroImageDesktop}
          alt="#"
        />
        <hr className="hr-divider project__hr-divider-top" />
        <p className="heading project__heading">Fylo</p>
        <p className="content project__content">
          This project was built in pure HTML and CSS. I had mobile and desktop
          designs to work to and built it so that it was fully-responsive. I
          took a mobile-first approach and used modern CSS like Flexbox and Grid
          for layout purposes.
        </p>
        <p className="content content-green project__content">
          {" "}
          Interaction Design / Front End Development HTML / CSS
        </p>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="button project__button"
        >
          VIEW WEBSITE
        </button>
        <hr className="hr-divider project__hr-divider-bottom" />
        <section className="project project-grid-desktop">
          <p className="heading project__sub-heading">Project Background</p>
          <p className="content project__content">
            This project was a front-end challenge from Frontend Mentor. It’s a
            platform that enables you to practice building websites to a design
            and project brief. Each challenge includes mobile and desktop
            designs to show how the website should look at different screen
            sizes. Creating these projects has helped me refine my workflow and
            solve real-world coding problems. I’ve learned something new with
            each project, helping me to improve and adapt my style.
          </p>
        </section>
        <section className="project__static-previews-desktop ">
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

export default FyloHeader;
