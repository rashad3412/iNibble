import React from "react";
import PageTemplate from "../components/PageTemplate";
import FetchCuisine from "../components/SearchCuisine";

function RecipesPage() {
  return (
    <PageTemplate>
      <header className="recipe-page-container">
        <h1 id="recipe-page-h1">
          Explore <span className="highlight">Delicious Recipes</span> from
          Around the World!
        </h1>
        <p className="recipe-page-paragraph">
          Discover a variety of cuisines to inspire your next meal. Select a
          cuisine from the dropdown below and explore recipes with step-by-step
          instructions and ingredients.
        </p>
      </header>
      <FetchCuisine />
    </PageTemplate>
  );
}

export default RecipesPage;
