import React from "react";
import leftArrow from "../../../images/icons/arrow-left.svg";
import rightArrow from "../../../images/icons/arrow-right.svg";
import { useNavigate } from "react-router-dom";

const BookmarkBrowserBtn = () => {
  let navigate = useNavigate();
  return (
    <div className="container grid-container">
      <section className="browser">
        <button
          onClick={() => {
            navigate("/manage");
          }}
          className="browser__button browser__button-left"
        >
          <img className="browser__image" src={leftArrow} alt="#" />
          <p className="browser__title">Manage</p>

          <p className="browser__subtitle">Previous Project</p>
        </button>
        <button
          onClick={() => {
            navigate("/insure");
          }}
          className="browser__button browser__button-right"
        >
          <img className="browser__image" src={rightArrow} alt="#" />
          <p className="browser__title">Insure</p>
          <p className="browser__subtitle">Next Project</p>
        </button>
      </section>
    </div>
  );
};

export default BookmarkBrowserBtn;
