import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import logo from "../../public/assets/logo.png";

function HomePage() {
  const [isTitlePage, setIsTitlePage] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function BackToTitlePage() {
    // function to go back to titlePage
    setIsTitlePage(!isTitlePage);
  }

  return (
    <>
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className="home-page">
        <div id="home-overlay">
          <Link to="/" onClick={BackToTitlePage}>
            <img id="home-logo" src={logo} alt="iNibble Logo" />
          </Link>
        </div>
        <div>{!isOpen && <h1 className="home-title">Home</h1>}</div>
      </div>
    </>
  );
}

export default HomePage;
