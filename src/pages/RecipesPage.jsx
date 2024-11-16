import React from "react";
import PageTemplate from "../components/PageTemplate";
import FetchCuisine from "../components/SearchCuisine";

function RecipesPage() {
  return (
    <PageTemplate>
      <h1 className="home-title">Recipes</h1>
      <FetchCuisine />
    </PageTemplate>
  );
}

export default RecipesPage;
