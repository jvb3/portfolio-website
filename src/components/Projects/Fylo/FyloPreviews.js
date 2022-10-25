import React from "react";
import ProjectImage1 from "../../../images/detail/mobile/image-fylo-preview-1@2x.jpg";
import ProjectImage1Tablet from "../../../images/detail/tablet/image-fylo-preview-1@2x.jpg";
import ProjectImage1Desktop from "../../../images/detail/desktop/image-fylo-preview-1@2x.jpg";
import ProjectImage2 from "../../../images/detail/mobile/image-fylo-preview-2@2x.jpg";
import ProjectImage2Tablet from "../../../images/detail/tablet/image-fylo-preview-2@2x.jpg";
import ProjectImage2Desktop from "../../../images/detail/desktop/image-fylo-preview-2@2x.jpg";
const FyloPreviews = () => {
  return (
    <main className="container grid-container">
      <section className="project project__static-previews">
        <p className="heading project__sub-heading">Static Previews</p>
        <img className="project__image" src={ProjectImage1} alt="#" />
        <img
          className="project__image-tablet"
          src={ProjectImage1Tablet}
          alt="#"
        />
        <img
          className="project__image-desktop"
          src={ProjectImage1Desktop}
          alt="#"
        />
        <img
          className="project__image project__preview-image"
          src={ProjectImage2}
          alt="#"
        />
        <img
          className="project__image-tablet project__preview-image"
          src={ProjectImage2Tablet}
          alt="#"
        />
        <img
          className="project__image-desktop project__preview-image"
          src={ProjectImage2Desktop}
          alt="#"
        />
      </section>
    </main>
  );
};

export default FyloPreviews;
