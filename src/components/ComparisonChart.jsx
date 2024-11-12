// src/components/ComparisonChart.jsx
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Scatter } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import foodComparisonData from "../data/FoodComparisonData";
import plugin from "chartjs-plugin-datalabels";

// Register required components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Chart Component to create charts and add data to chart and edit data
// Chart component is being renderd in the Comparison Chart component below

function ChartComponent({ title, data, labels, chartType = "bar", color }) {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: color,
        borderColor: color,
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: title },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 14,
            family: "Arial", // Font family for chart labels
          },
          color: "#ffff", // Legend color
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#ffff",
          font: { size: 12 },
        },
        title: {
          display: true,
          color: "#ffff",
          font: { size: 14 },
        },
        grid: {
          color: "#888888", // Darker grid lines on Y-axis
        },
      },
      y: {
        ticks: {
          color: "#ffff",
          font: { size: 12 },
        },
        grid: {
          color: "#888888", // Darker grid lines on Y-axis
        },
      },
    },
  };

  // Choose chart type
  const ChartType = chartType === "line" ? Line : Bar;

  return <ChartType data={chartData} options={options} />;
}

// Comparison Chart function being imported on Analytics page to render
function ComparisonCharts() {
  const labels = foodComparisonData.map((item) => item.name);

  return (
    /* Charts */

    <div>
      <ChartComponent
        title="Protein Content (g)"
        data={foodComparisonData.map((item) => item.protein)}
        labels={labels}
        chartType="bar"
        color="rgb(75, 192, 192)"
      />
      <ChartComponent
        title="Fat Content (g)"
        data={foodComparisonData.map((item) => item.fat)}
        labels={labels}
        chartType="line"
        color="rgb(255, 99, 133)"
      />

      <ChartComponent
        title="Calories (g)"
        data={foodComparisonData.map((item) => item.calories)}
        labels={labels}
        chartType="bar"
        color="rgb(255, 207, 86)"
      />
      <ChartComponent
        title="Carbs Content (g)"
        data={foodComparisonData.map((item, index) => ({
          x: index, // or a specific x value if available
          y: item.carbs, // y value
        }))}
        labels={labels}
        chartType="line"
        color="rgb(17, 233, 93)"
      />
    </div>
  );
}

export default ComparisonCharts;
