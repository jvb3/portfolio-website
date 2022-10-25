import React from "react";
import leftArrow from "./images/icons/arrow-left.svg";
import rightArrow from "./images/icons/arrow-right.svg";
import { useNavigate, useLocation } from "react-router-dom";

const BrowserBtn = () => {
  let navigate = useNavigate();
  let currentLocation = useLocation();
  const handleNavigateLeft = () => {
    if (currentLocation.pathname === "/manage") {
      navigate("/fylo");
    } else if (currentLocation.pathname === "/fylo") {
      navigate("/insure");
    } else if (currentLocation.pathname === "/insure") {
      navigate("/bookmark");
    } else if (currentLocation.pathname === "/bookmark") {
      navigate("/manage");
    }
  };
  const handleNavigateRight = () => {
    if (currentLocation.pathname === "/manage") {
      navigate("/bookmark");
    } else if (currentLocation.pathname === "/bookmark") {
      navigate("/insure");
    } else if (currentLocation.pathname === "/insure") {
      navigate("/fylo");
    } else if (currentLocation.pathname === "/fylo") {
      navigate("/manage");
    }
  };

  return (
    <div className="container grid-container">
      <section className="browser">
        <button
          onClick={handleNavigateLeft}
          className="browser__button browser__button-left"
        >
          <img className="browser__image" src={leftArrow} alt="#" />

          {currentLocation.pathname === "/manage" && (
            <p className="browser__title">Fylo</p>
          )}
          {currentLocation.pathname === "/bookmark" && (
            <p className="browser__title">Manage</p>
          )}
          {currentLocation.pathname === "/insure" && (
            <p className="browser__title">Bookmark</p>
          )}
          {currentLocation.pathname === "/fylo" && (
            <p className="browser__title">Insure</p>
          )}

          <p className="browser__subtitle">Previous Project</p>
        </button>
        <button
          onClick={handleNavigateRight}
          className="browser__button browser__button-right"
        >
          <img className="browser__image" src={rightArrow} alt="#" />
          {currentLocation.pathname === "/manage" && (
            <p className="browser__title">Bookmark</p>
          )}
          {currentLocation.pathname === "/bookmark" && (
            <p className="browser__title">Insure</p>
          )}
          {currentLocation.pathname === "/insure" && (
            <p className="browser__title">Fylo</p>
          )}
          {currentLocation.pathname === "/fylo" && (
            <p className="browser__title">Manage</p>
          )}
          <p className="browser__subtitle">Next Project</p>
        </button>
      </section>
    </div>
  );
};
export default BrowserBtn;
