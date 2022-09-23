import React from "react";
import ProjectImage1 from "../../../images/detail/mobile/image-fylo-preview-1@2x.jpg";
import ProjectImage2 from "../../../images/detail/mobile/image-fylo-preview-2@2x.jpg";
const FyloPreviews = () => {
  return (
    <main className="container grid-container">
      <section className="project">
        <p className="heading">Static Previews</p>
        <img className="project__image" src={ProjectImage1} alt="#" />
        <img
          className="project__image project__preview-image"
          src={ProjectImage2}
          alt="#"
        />
      </section>
    </main>
  );
};

export default FyloPreviews;
