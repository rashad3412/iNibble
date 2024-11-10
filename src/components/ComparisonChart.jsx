// src/components/ComparisonChart.jsx
import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  scales,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import foodComparisonData from "../data/FoodComparisonData";
import plugin from "chartjs-plugin-datalabels";
// Register only necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement);
ChartJS.register(ChartDataLabels);

function ComparisonChart() {
  const labels = foodComparisonData.map((item) => item.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Protein (g)",
        data: foodComparisonData.map((item) => item.protein),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Fat (g)",
        data: foodComparisonData.map((item) => item.fat),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "Carbs (g)",
        data: foodComparisonData.map((item) => item.carbs),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Calories (g)",
        data: foodComparisonData.map((item) => item.calories),
        backgroundColor: "rgba(255, 206, 86, 0.6)",
      },
    ],
  };

  const options = {
    repsonsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },

    plugins: {
      datalabels: {
        anchor: "end",
        align: "top",
        formatter: (value) => value,
        font: { weight: "bold" },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
export default ComparisonChart;
