import React from "react";
import PageTemplate from "../components/PageTemplate";
import foodComparisonData from "../data/FoodComparisonData";
import ComparisonChart from "../components/ComparisonChart";

function AnalyticsPage() {
  return (
    <PageTemplate>
      <h1 className="home-title">Analytics</h1>
      <ComparisonChart />
    </PageTemplate>
  );
}

export default AnalyticsPage;
