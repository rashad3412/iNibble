import React from "react";
import PageTemplate from "../components/PageTemplate";
import foodComparisonData from "../data/FoodComparisonData";
import ComparisonChart from "../components/ComparisonChart";

function AnalyticsPage() {
  return (
    <PageTemplate>
      <div id="home-title">
        <div>Insights into Your Health and Wellness</div>
      </div>
      <div className="chart-container">
        <ComparisonChart />
      </div>
    </PageTemplate>
  );
}

export default AnalyticsPage;
