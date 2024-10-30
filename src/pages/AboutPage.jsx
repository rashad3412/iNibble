// pages/AboutPage.js
import React from "react";
import PageTemplate from "../components/PageTemplate";

function AboutPage() {
  return (
    <PageTemplate>
      <div className="about-page-container">
        <h1 className="about-title">Discover Your Food’s Story</h1>
        <p id="about-page-paragraph">
          iNibble gives you insights into the food you eat, helping you
          understand how each nibble can nourish and protect you. Make informed
          choices and start each day with the confidence that what you eat
          supports a healthier, more vibrant life.
        </p>

        <section className="about-section">
          <h2 className="about-section-title">Empowering Healthy Choices</h2>
          <p className="about-section-paragraph">
            Our goal is to make eating a mindful and rewarding experience. We
            provide clear, easily accessible information about how food impacts
            your body, from boosting energy to fortifying health. Join us on a
            journey toward more conscious, health-focused eating.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">How iNibble Works</h2>
          <p className="about-section-paragraph">
            With data-driven insights and a personalized touch, iNibble allows
            you to track what you eat and how it affects your well-being. Our
            platform is designed to educate and empower, putting nutritional
            knowledge at your fingertips.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">Your Health, Our Priority</h2>
          <p className="about-section-paragraph">
            We’re committed to helping you make choices that contribute to a
            balanced lifestyle. At iNibble, we believe that food is a key to
            wellness, and we’re here to support you every step of the way.
          </p>
        </section>
      </div>
    </PageTemplate>
  );
}

export default AboutPage;
