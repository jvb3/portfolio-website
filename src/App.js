import "./styles/styles.css";
import { Routes, Route, useLocation } from "react-router-dom";
// import MobileNavBar from "./components/FrontPage/MobileNavBar";
// import FrontPageHeader from "./components/FrontPage/FrontPageHeader";
// import AboutMe from "./components/FrontPage/AboutMe";
// import Contact from "./components/FrontPage/Contact";
// import Footer from "./components/FrontPage/Footer";
// import DropDownMenu from "./components/FrontPage/DropDownMenu";
import FrontPageGrid from "./components/FrontPage/FrontPageGrid";
import PortfolioIndexGrid from "./components/PortfolioIndex/PortfolioIndexGrid";
import ContactPageGrid from "./components/ContactPage/ContactPageGrid";
import ContactForm from "./components/ContactPage/ContactForm";

import { useState, useEffect } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const currentLocation = useLocation();
  console.log(currentLocation);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowMenu(false);
  }, [currentLocation]);

  const handleClick = () => {
    const scrollToId = "about-me";
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    // <Routes>
    //   <Route
    //     path="/"
    //     element={
    //       <FrontPageGrid
    //         handleClick={handleClick}
    //         handleMenu={handleMenu}
    //         showMenu={showMenu}
    //       />
    //     }
    //   />

    //   <Route
    //     path="/portfolio-index"
    //     element={
    //       <PortfolioIndexGrid handleMenu={handleMenu} showMenu={showMenu} />
    //     }
    //   />
    // </Routes>
    <ContactPageGrid />
  );
}

export default App;
