import React from "react";
import ProjectManageImg from "..//..//images/portfolio/mobile/image-portfolio-manage@2x.jpg";
import ProjectBookmarkImg from "..//..//images/portfolio/mobile/image-portfolio-bookmark@2x.jpg";
import ProjectInsureImg from "..//..//images/portfolio/mobile/image-portfolio-insure@2x.jpg";
import ProjectFyloImg from "..//..//images/portfolio/mobile/image-portfolio-fylo@2x.jpg";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  let navigate = useNavigate();
  return (
    <div>
      <section className="project grid-container__project">
        <img className="project__img" src={ProjectManageImg} alt="#" />
        <br />
        <hr className="hr-divider" />
        <p className="heading">Manage</p>
        <p className="content">
          This project required me to build a fully responsive landing page to
          the designs provided. I used HTML5, along with CSS Grid and JavaScript
          for the areas that required interactivity, such as the testimonial
          slider.
        </p>
        <button
          onClick={() => {
            navigate("/manage");
          }}
          className="button"
        >
          VIEW PROJECT
        </button>
        <hr className="hr-divider" />
      </section>
      <section className="project grid-container__project">
        <img className="project__img" src={ProjectBookmarkImg} alt="#" />

        <hr className="hr-divider" />
        <p className="heading">Bookmark</p>
        <p className="content">
          This project required me to build a fully responsive landing page to
          the designs provided. I used HTML5, along with CSS Grid and JavaScript
          for the areas that required interactivity, such as the features
          section.
        </p>
        <button
          onClick={() => {
            navigate("/bookmark");
          }}
          className="button "
        >
          VIEW PROJECT
        </button>

        <hr className="hr-divider" />
      </section>

      <section className="project grid-container__project">
        <img className="project__img" src={ProjectInsureImg} alt="#" />
        <br />
        <hr className="hr-divider" />
        <p className="heading">Insure</p>
        <p className="content">
          This was a small project which mostly consisted of HTML and CSS. I
          built a fully-responsive landing page. The only JavaScript this
          project required was to enable the toggling of the mobile navigation.
        </p>
        <button
          onClick={() => {
            navigate("/insure");
          }}
          className="button"
        >
          VIEW PROJECT
        </button>
        <br />
        <hr className="hr-divider" />
      </section>

      <section className="project grid-container__project">
        <img className="project__img" src={ProjectFyloImg} alt="#" />

        <hr className="hr-divider" />
        <p className="heading">Fylo</p>
        <p className="content">
          This project was built in pure HTML and CSS. I had mobile and desktop
          designs to work to and built it so that it was fully-responsive. I
          took a mobile-first approach and used modern CSS like Flexbox and Grid
          for layout purposes.
        </p>
        <button
          onClick={() => {
            navigate("/fylo");
          }}
          className="button "
        >
          VIEW PROJECT
        </button>
      </section>
    </div>
  );
};

export default Projects;
