// components/PageTemplate.js
import React, { useState } from "react";
import Navbar from "./NavBar";
import { Link } from "react-router-dom";
import logo from "../../public/assets/logo.png";

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
        <div>{!isOpen && children}</div>
      </div>
    </>
  );
}

export default PageTemplate;
