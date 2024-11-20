// pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import logo from "../../public/assets/logo.png";
function HomePage() {
  return (
    <>
      <div className="homepage-body">
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

            <div className="features-section">
              <h2>
                Why Choose i<span>N</span>ibble?
              </h2>
              <ul className="features-list">
                <li>
                  <span>✔</span>Detailed nutritional insights
                </li>
                <li>
                  <span>✔</span> Personalized food recommendations
                </li>
                <li>
                  {" "}
                  <span>✔</span> Track your health and wellness
                </li>
                <li>
                  {" "}
                  <span>✔</span> Learn about food-related diseases
                </li>
              </ul>
            </div>
          </div>
        </PageTemplate>
      </div>
    </>
  );
}

export default HomePage;
