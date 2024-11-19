// pages/AboutPage.js
import React, { useEffect, useState } from "react";
import PageTemplate from "../components/PageTemplate";
import chart from "../../public/assets/growth.png";
import Modal from "../components/Modal";
import axios from "axios";
import { FoodDescriptions } from "../components/FoodDescriptions";

function AboutPage() {
  const [healthFoods, setHealthFoods] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFoodId, setSelectedFoodId] = useState("9037"); // Deafult food ID
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const foodOptions = [
    { id: "9037", name: "Avocado" },
    { id: "15167", name: "Oysters" },
    { id: "14097", name: "Red Wine" },
    { id: "20028", name: "Couscous" },
    { id: "5062", name: "Chicken" },
    { id: "20444", name: "Rice" },
    { id: "15076", name: "Salmon" },
    { id: "10015121", name: "Tuna" },
    { id: "9316", name: "Strawberries" },
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const fetchHealthFoods = async (foodId) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/food/ingredients/${foodId}/information`,
        {
          params: {
            apiKey: "a45d7e12ecf2482a9f0a06366e87a4b1",
            amount: 1,
          },
        }
      );

      setHealthFoods(response.data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching health foods:", error);
    }
  };

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1024);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetchHealthFoods(selectedFoodId);
  }, [selectedFoodId]);

  const handleFoodChange = (event) => {
    setSelectedFoodId(event.target.value);
  };

  const foodName = healthFoods.name?.toLowerCase();
  const description = FoodDescriptions[foodName] || "No Descriptions!";

  return (
    <PageTemplate>
      <div className="about-page-container">
        <h1 className="about-title">Discover Your Food’s Story</h1>
        <p id="about-page-paragraph">
          iNibble gives you insights into the food you eat, helping you
          understand how each nibble can nourish and protect you.
        </p>

        <section className="about-section">
          <h2 className="about-section-title">Empowering Healthy Choices</h2>
          <p className="about-section-paragraph">
            Our goal is to make eating a mindful and rewarding experience. We
            provide clear, easily accessible information about how food impacts
            your body.
          </p>

          {/* Dropdown for selecting different foods */}
          <div className="label-container">
            <label htmlFor="food-select">Choose a food: </label>
            <select
              id="food-select"
              value={selectedFoodId}
              onChange={handleFoodChange}
            >
              {foodOptions.map((food) => (
                <option key={food.id} value={food.id}>
                  {food.name}
                </option>
              ))}
            </select>
          </div>

          {/* Button to open modal */}
          <button onClick={toggleModal} className="open-modal-button">
            Learn About {healthFoods.name?.toUpperCase()}
          </button>

          <Modal isOpen={isModalOpen} onClose={toggleModal}>
            {/* Display the fetched health food information */}
            {healthFoods && (
              <div>
                <h3 id="health-food-ing">
                  {healthFoods.name?.charAt(0).toUpperCase() +
                    healthFoods.name?.slice(1)}
                </h3>
                <img
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${healthFoods.image}`}
                  alt={healthFoods.name}
                  style={{ width: "100px", height: "100px" }}
                />
                <div>
                  <p>
                    Calories:{" "}
                    {Math.round(
                      healthFoods.nutrition?.caloricBreakdown?.percentCarbs
                    )}
                    %
                  </p>
                  <p>
                    Protein:{" "}
                    {Math.round(
                      healthFoods.nutrition?.caloricBreakdown?.percentProtein
                    )}
                    %
                  </p>
                  <p>
                    Fat:{" "}
                    {Math.round(
                      healthFoods.nutrition?.caloricBreakdown?.percentFat
                    )}
                    %
                  </p>
                  <p className="food-descriptions">{description}</p>
                </div>
              </div>
            )}
          </Modal>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">How iNibble Works</h2>
          <p className="about-section-paragraph">
            With data-driven insights and a personalized touch, iNibble allows
            you to track what you eat and how it affects your well-being.
          </p>
          <div id="align-chart-img">
            <div id="chart-img-overlay">
              <img id="chart-img" src={chart} alt="chart" />
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">Your Health, Our Priority</h2>
          <p className="about-section-paragraph">
            We’re committed to helping you make choices that contribute to a
            balanced lifestyle. At iNibble, we believe that food is a key to
            wellness, and we’re here to support you every step of the way.
          </p>
          <div id="align-about-quote">
            <p id="about-quote">“Eating well is a form of self-respect.”</p>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}

export default AboutPage;
