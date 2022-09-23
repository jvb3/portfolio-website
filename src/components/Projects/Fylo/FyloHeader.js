import React from "react";
import heroImage from "../../../images/detail/mobile/image-fylo-hero@2x.jpg";
import { useNavigate } from "react-router-dom";

const FyloHeader = () => {
  let navigate = useNavigate();
  return (
    <main className="container grid-container">
      <section className="project">
        <img className="project__image" src={heroImage} alt="#" />
        <hr className="hr-divider" />
        <p className="heading">Fylo</p>
        <p className="content">
          This project was built in pure HTML and CSS. I had mobile and desktop
          designs to work to and built it so that it was fully-responsive. I
          took a mobile-first approach and used modern CSS like Flexbox and Grid
          for layout purposes.
        </p>
        <p className="content content-green">
          {" "}
          Interaction Design / Front End Development HTML / CSS
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

export default FyloHeader;
