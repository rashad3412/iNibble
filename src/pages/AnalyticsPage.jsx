import React from "react";
import PageTemplate from "../components/PageTemplate";
import foodComparisonData from "../data/FoodComparisonData";
import ComparisonChart from "../components/ComparisonChart";

function AnalyticsPage() {
  // Insights based on Data

  const keyInsights = [
    "Foods high in protein genrally contain low carbs.",
    "Fat content varies widely across foods, with some items being nearly fat-free.",
    "Carbohydrate levels are highest in energy-dense foods.",
  ];

  return (
    <PageTemplate>
      <div id="home-title">
        <div>Insights into Your Health and Wellness</div>
      </div>

      <div
        className="chart-container"
        style={{ width: "95%", margin: "0 auto" }}
      >
        <ComparisonChart />
      </div>
      <div>
        <h2 id="analytics-h2">Key Insights</h2>
        <ul className="key-insights-container">
          {keyInsights.map((insight, index) => (
            <li key={index} id="key-insights">
              {insight}
            </li>
          ))}
        </ul>
      </div>
    </PageTemplate>
  );
}

export default AnalyticsPage;
