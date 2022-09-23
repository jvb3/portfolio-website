import React from "react";
import heroImage from "../../../images/detail/mobile/image-insure-hero@2x.jpg";
import { useNavigate } from "react-router-dom";

const InsureHeader = () => {
  let navigate = useNavigate();
  return (
    <main className="container grid-container">
      <section className="project">
        <img className="project__image" src={heroImage} alt="#" />
        <hr className="hr-divider" />
        <p className="heading">Insure</p>
        <p className="content">
          This was a small project which mostly consisted of HTML and CSS. I
          built a fully-responsive landing page. The only JavaScript this
          project required was to enable the toggling of the mobile navigation.
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

export default InsureHeader;
