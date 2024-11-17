import React, { useState, useEffect } from "react";

function FetchCuisine() {
  const [recipes, setRecipes] = useState([]); // Store recipes
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Store selected recipe details
  const [query, setQuery] = useState(""); // Store selected cuisine type

  const apiKey = "a45d7e12ecf2482a9f0a06366e87a4b1";
  const cuisines = [
    "African",
    "Asian",
    "American",
    "European",
    "Italian",
    "Mexican",
  ]; // Smaller list of cuisines

  // Fetch recipes based on cuisine type
  const fetchRecipesCuisine = async (cuisineType) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisineType}&number=10&addRecipeInformation=true&apiKey=${apiKey}`
      );
      const data = await response.json();
      setRecipes(data.results || []); // Handle cases where no recipes are found
    } catch (error) {
      console.error("Error fetching recipes", error);
    }
  };

  // Fetch details of a selected recipe
  const fetchRecipeDetails = async (id) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
      );
      const data = await response.json();
      setSelectedRecipe(data); // Update state with fetched recipe details
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  const handleCuisineChange = (cuisineType) => {
    setSelectedRecipe(null); // Reset the selected recipe
    setQuery(cuisineType); // Update the query state
    fetchRecipesCuisine(cuisineType); // Fetch recipes for the selected cuisine
  };

  // RecipeDetails Component
  function RecipeDetails({ recipe, onBack }) {
    return (
      <div className="recipe-details-container">
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
        <h3>Summary:</h3>
        <p>{recipe.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>
        <h3>Ingredients:</h3>
        <ul>
          {recipe.extendedIngredients.map((ingredient, index) => (
            <li key={ingredient.id || `ingredient-${index}`}>
              {ingredient.original}
            </li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <p>
          {recipe.instructions.replace(/<\/?[^>]+(>|$)/g, "") ||
            "No instructions provided."}
        </p>
        <button onClick={onBack}>Back To Recipes</button>
      </div>
    );
  }

  return (
    <div>
      <div className="cuisine-container">
        {/* Dropdown to select cuisine */}
        <select
          id="cuisine-dropdown"
          value={query}
          onChange={(e) => handleCuisineChange(e.target.value)}
        >
          <option value="" disabled>
            Select a cuisine
          </option>
          {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine.toLowerCase()}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>

      {/* Show details of the selected recipe */}
      {selectedRecipe ? (
        <RecipeDetails
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe(null)}
        />
      ) : // Show recipe titles
      recipes.length > 0 ? (
        <div className="recipe-button-container">
          <ul>
            {recipes.map((recipe) => (
              <li key={recipe.id}>
                <button onClick={() => fetchRecipeDetails(recipe.id)}>
                  {recipe.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        query && <p>No recipes found for {query} cuisine.</p>
      )}
    </div>
  );
}

export default FetchCuisine;
