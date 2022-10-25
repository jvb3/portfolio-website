import React from "react";
import ProjectImage1 from "../../../images/detail/mobile/image-manage-preview-1@2x.jpg";
import ProjectImage1Tablet from "../../../images/detail/tablet/image-manage-preview-1@2x.jpg";
import ProjectImage1Desktop from "../../../images/detail/desktop/image-manage-preview-1@2x.jpg";
import ProjectImage2 from "../../../images/detail/mobile/image-manage-preview-2@2x.jpg";
import ProjectImage2Tablet from "../../../images/detail/tablet/image-manage-preview-2@2x.jpg";
import ProjectImage2Desktop from "../../../images/detail/desktop/image-manage-preview-2@2x.jpg";
const ManagePreviews = () => {
  return (
    <main className="manage-container grid-container">
      <section className="project project__static-previews project__static-previews-desktop">
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

export default ManagePreviews;
