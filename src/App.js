import "./styles/styles.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import FrontPageGrid from "./components/FrontPage/FrontPageGrid";
import PortfolioIndexGrid from "./components/PortfolioIndex/PortfolioIndexGrid";
import ContactPageGrid from "./components/ContactPage/ContactPageGrid";

import ManageGrid from "./components/Projects/Manage/ManageGrid";
import BookmarkGrid from "./components/Projects/Bookmark/BookmarkGrid";
import InsureGrid from "./components/Projects/Insure/InsureGrid";
import FyloGrid from "./components/Projects/Fylo/FyloGrid";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const currentLocation = useLocation();
  console.log(currentLocation.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowMenu(false);
  }, [currentLocation]);

  const handleClick = () => {
    const scrollToId = "about-me";
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <FrontPageGrid
            handleClick={handleClick}
            handleMenu={handleMenu}
            showMenu={showMenu}
          />
        }
      />

      <Route
        path="/portfolio-index"
        element={
          <PortfolioIndexGrid handleMenu={handleMenu} showMenu={showMenu} />
        }
      />
      <Route
        path="contact-me"
        element={
          <ContactPageGrid showMenu={showMenu} handleMenu={handleMenu} />
        }
      />
      <Route
        path="/manage"
        element={<ManageGrid handleMenu={handleMenu} showMenu={showMenu} />}
      />
      <Route
        path="/bookmark"
        element={<BookmarkGrid handleMenu={handleMenu} showMenu={showMenu} />}
      />
      <Route
        path="/insure"
        element={<InsureGrid handleMenu={handleMenu} showMenu={showMenu} />}
      />
      <Route
        path="/fylo"
        element={<FyloGrid handleMenu={handleMenu} showMenu={showMenu} />}
      />
    </Routes>
  );
}

export default App;
