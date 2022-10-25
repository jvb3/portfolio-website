import React from "react";
import { useNavigate } from "react-router-dom";

//Manage Pics
import ProjectManageImg from "..//..//images/portfolio/mobile/image-portfolio-manage@2x.jpg";
import ProjectManageImgTablet from "..//..//images/portfolio/tablet/image-portfolio-manage@2x.jpg";
import ProjectManageImgDesktop from "..//..//images/portfolio/desktop/image-portfolio-manage@2x.jpg";

//Bookmark Pics
import ProjectBookmarkImg from "..//..//images/portfolio/mobile/image-portfolio-bookmark@2x.jpg";
import ProjectBookmarkImgTablet from "..//..//images/portfolio/tablet/image-portfolio-bookmark@2x.jpg";
import ProjectBookmarkImgDesktop from "..//..//images/portfolio/desktop/image-portfolio-bookmark@2x.jpg";

//Insure Pics
import ProjectInsureImg from "..//..//images/portfolio/mobile/image-portfolio-insure@2x.jpg";
import ProjectInsureImgTablet from "..//..//images/portfolio/tablet/image-portfolio-insure@2x.jpg";
import ProjectInsureImgDesktop from "..//..//images/portfolio/desktop/image-portfolio-insure@2x.jpg";

//Fylo Pics
import ProjectFyloImg from "..//..//images/portfolio/mobile/image-portfolio-fylo@2x.jpg";
import ProjectFyloImgTablet from "..//..//images/portfolio/tablet/image-portfolio-fylo@2x.jpg";
import ProjectFyloImgDesktop from "..//..//images/portfolio/desktop/image-portfolio-fylo@2x.jpg";

const Projects = () => {
  let navigate = useNavigate();
  return (
    <>
      <section className="grid-container portfolio-grid">
        <div className="img-container">
          <img
            className="project__img img-mobile "
            src={ProjectManageImg}
            alt="#"
          />
          <img
            className="project__img img-tablet"
            src={ProjectManageImgTablet}
            alt="#"
          />
          <img
            className="project__img img-desktop"
            src={ProjectManageImgDesktop}
            alt="#"
          />
        </div>
        <div className="content-container">
          <hr className="hr-divider index__hr-divider-top hr-divider-top " />
          <p className="heading index__heading">Manage</p>
          <p className="content index__content">
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            testimonial slider.
          </p>

          <button
            onClick={() => {
              navigate("/manage");
            }}
            className="button index__button"
          >
            VIEW PROJECT
          </button>
          <hr className="hr-divider index__hr-divider-bottom hr-divider-bottom  " />
        </div>
      </section>
      <section className="grid-container portfolio-grid">
        <div className="img-container img-container-bookmark">
          <img
            className="project__img img-mobile"
            src={ProjectBookmarkImg}
            alt="#"
          />
          <img
            className="project__img img-tablet"
            src={ProjectBookmarkImgTablet}
            alt="#"
          />
          <img
            className="project__img img-desktop"
            src={ProjectBookmarkImgDesktop}
            alt="#"
          />
        </div>
        <div className="content-container content-container-bookmark">
          <hr className=" hr-divider index__hr-divider-top hr-divider-top  " />
          <p className="heading index__heading">Bookmark</p>
          <p className="content index__content">
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            features section.
          </p>
          <button
            onClick={() => {
              navigate("/bookmark");
            }}
            className="button index__button"
          >
            VIEW PROJECT
          </button>

          <hr className="hr-divider index__hr-divider-bottom hr-divider-bottom  " />
        </div>
      </section>

      <section className="grid-container portfolio-grid">
        <div className="img-container">
          <img
            className="project__img img-mobile"
            src={ProjectInsureImg}
            alt="#"
          />
          <img
            className="project__img img-tablet"
            src={ProjectInsureImgTablet}
            alt="#"
          />
          <img
            className="project__img img-desktop"
            src={ProjectInsureImgDesktop}
            alt="#"
          />
        </div>
        <div className="content-container">
          <hr className="hr-divider index__hr-divider-top hr-divider-top  " />
          <p className="heading index__heading">Insure</p>
          <p className="content index__content">
            This was a small project which mostly consisted of HTML and CSS. I
            built a fully-responsive landing page. The only JavaScript this
            project required was to enable the toggling of the mobile
            navigation.
          </p>
          <button
            onClick={() => {
              navigate("/insure");
            }}
            className="button index__button"
          >
            VIEW PROJECT
          </button>
          <br />
          <hr className="hr-divider index__hr-divider-bottom hr-divider-bottom  " />
        </div>
      </section>

      <section className="grid-container portfolio-grid">
        <div className="img-container img-container-fylo">
          <img
            className="project__img img-mobile"
            src={ProjectFyloImg}
            alt="#"
          />

          <img
            className="project__img img-tablet"
            src={ProjectFyloImgTablet}
            alt="#"
          />
          <img
            className="project__img img-desktop"
            src={ProjectFyloImgDesktop}
            alt="#"
          />
        </div>
        <div className="content-container content-container-fylo">
          <hr className="hr-divider index__hr-divider-top hr-divider-top  " />
          <p className="heading index__heading">Fylo</p>
          <p className="content index__content">
            This project was built in pure HTML and CSS. I had mobile and
            desktop designs to work to and built it so that it was
            fully-responsive. I took a mobile-first approach and used modern CSS
            like Flexbox and Grid for layout purposes.
          </p>
          <button
            onClick={() => {
              navigate("/fylo");
            }}
            className="button index__button "
          >
            VIEW PROJECT
          </button>
          <hr className="hr-divider index__hr-divider-bottom hr-divider-bottom  " />
        </div>
      </section>
    </>
  );
};

export default Projects;
