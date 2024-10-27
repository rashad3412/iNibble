// pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import logo from "../../public/assets/logo.png";
function HomePage() {
  return (
    <>
      <PageTemplate>
        <div className="home-container">
          <h2 className="homepage-slogan-1">
            “Feel Your Curiosity One Bite at a Time!”
          </h2>
          <h1 className="homepage-welcome-h1">
            Welcome to i<span>N</span>ibble!
          </h1>
          <p className="homepage-paragraph">
            "Empowering You with the Facts Behind Every Bite!"
          </p>
          <Link to="/aboutpage">
            <button>Nibble Away</button>
          </Link>
          <div id="homepage-logo-overlay">
            <img id="homepage-logo-img" src={logo} alt="iNibble Logo" />
          </div>
        </div>
      </PageTemplate>
    </>
  );
}

export default HomePage;
