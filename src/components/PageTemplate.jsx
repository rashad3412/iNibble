// components/PageTemplate.js
import React, { useState } from "react";
import Navbar from "./NavBar";
import { Link } from "react-router-dom";
import logo from "../../public/assets/logo.png";

// This PageTemplate component is for the navigation bar to be set on each page.
function PageTemplate({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className="home-page">
        <div id="home-overlay">
          <Link to="/">
            <img id="home-logo" src={logo} alt="iNibble Logo" />
          </Link>
        </div>
        {/* Ensures the children passed to PageTemplate the nav menu is closed so the content can show in mobile view */}
        <div>{!isOpen && children}</div>
      </div>
    </>
  );
}

export default PageTemplate;
