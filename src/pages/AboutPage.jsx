// pages/AboutPage.js
import React, { useEffect, useState } from "react";
import PageTemplate from "../components/PageTemplate";
import Modal from "../components/Modal";
import axios from "axios";

function AboutPage() {
  const [healthFoods, setHealthFoods] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    console.log("Modal toggled");
    setIsModalOpen(!isModalOpen);
  };

  const fetchHealthFoods = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/food/ingredients/9037/information`,
        {
          params: {
            apiKey: "a45d7e12ecf2482a9f0a06366e87a4b1",
            amount: 1,
          },
        }
      );
      console.log(response);
      setHealthFoods(response.data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching health foods:", error);
    }
  };

  useEffect(() => {
    fetchHealthFoods();
  }, []);

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

          {/* Button to open modal */}
          <button onClick={toggleModal} className="open-modal-button">
            More about Healthy Eating
          </button>

          <Modal isOpen={isModalOpen} onClose={toggleModal}>
            {/* Display the fetched health food information */}
            {healthFoods && (
              <div>
                <h3>Ingredient: {healthFoods.name}</h3>
                <img
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${healthFoods.image}`}
                  alt={healthFoods.name}
                  style={{ width: "100px", height: "100px" }}
                />
                <div>
                  <p>
                    Calories:{" "}
                    {healthFoods.nutrition?.caloricBreakdown?.percentCarbs}
                  </p>
                  <p>
                    Protein:{" "}
                    {healthFoods.nutrition?.caloricBreakdown?.percentProtein}
                  </p>
                  <p>
                    Fat: {healthFoods.nutrition?.caloricBreakdown?.percentFat}
                  </p>
                </div>
              </div>
            )}
          </Modal>
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
