import React, { useState, useEffect } from "react";

function FetchCuisine() {
  const [recipes, setRecipes] = useState([]); // store recipes
  const [selectedRecipe, setSelectedRecipe] = useState(null); // store details of selected recipe
  const [query, setQuery] = useState("american"); // store the cuisine type (default: American)

  const apiKey = "a45d7e12ecf2482a9f0a06366e87a4b1";

  // Fetch recipes based on cuisine type
  const fetchRecipesCuisine = async (cuisineType) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisineType}&apiKey=${apiKey}`
      );
      const data = await response.json();
      setRecipes(data.results);
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

  // Fetch recipes when the component loads or when the query changes
  useEffect(() => {
    fetchRecipesCuisine(query);
  }, [query]);

  // RecipeDetails Component
  function RecipeDetails({ recipe, onBack }) {
    return (
      <div>
        <button onClick={onBack}>Back</button>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
        <h3>Summary: </h3>
        <p>{recipe.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>
        <h3>Ingredients:</h3>
        <ul>
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <p>{recipe.instructions || "No instructions provided."}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Cuisine Recipes</h1>

      {/* Input to change the cuisine type */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter cuisine type (e.g., Italian)"
      />
      <button onClick={() => fetchRecipesCuisine(query)}>Search</button>

      {/* Show details of the selected recipe */}
      {selectedRecipe ? (
        <RecipeDetails
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe(null)}
        />
      ) : (
        // Show recipe titles
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <button onClick={() => fetchRecipeDetails(recipe.id)}>
                {recipe.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchCuisine;
