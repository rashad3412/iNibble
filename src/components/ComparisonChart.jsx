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
import { Bar, Line } from "react-chartjs-2";

import foodComparisonData from "../data/FoodComparisonData";
import plugins from "chartjs-plugin-datalabels";

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
      legend: {
        display: true,
        labels: {
          font: {
            size: 14,
            family: "Arial",
          },
          color: "#ffff",
        },
      },

      datalabels: {
        color: "#fff",
        font: { weight: "bold" },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => `Value: ${tooltipItem.raw}`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#ffff", font: { size: 12 } },
        title: { display: true, color: "#ffff", font: { size: 14 } },
        grid: { color: "#888888" },
      },
      y: {
        ticks: { color: "#ffff", font: { size: 12 } },
        grid: { color: "#888888" },
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
    /* This is returning the chart data from the chartComponent and Comparison Chat is rendering data from the FoodComparison Object Literal */

    <div>
      <ChartComponent
        title="Protein Content (g)"
        data={foodComparisonData.map((item) => item.protein)}
        labels={labels}
        chartType="bar"
        color="rgb(75, 192, 192)"
      />
      {/* Chart Descriptions for Protien content */};
      <div className="chart-component-desc">
        <h4>Protien Insights</h4>
        <p className="align-chart-desc-p">
          As you can see, meat is packed with protein, which helps fuel the
          body, strengthens the immune system, and can even help reduce
          overeating.
        </p>
      </div>
      {/*  */}
      <ChartComponent
        title="Fat Content (g)"
        data={foodComparisonData.map((item) => item.fat)}
        labels={labels}
        chartType="line"
        color="rgb(255, 99, 133)"
      />
      {/* Chart Descriptions for Fat content */};
      <div className="align-chart-component-desc-fat">
        <div className="chart-component-desc">
          <h4 id="chart-h4">Fat Insights</h4>
          <p className="align-chart-desc-p">
            Foods with fat content varies but the meat is taking much of fat
            content. Fat is a source of energy and fat helps your body absorbs
            fat-soluble vitamins A,D,E.
          </p>
        </div>
      </div>
      {/*  */}
      <ChartComponent
        title="Calories (g)"
        data={foodComparisonData.map((item) => item.calories)}
        labels={labels}
        chartType="bar"
        color="rgb(255, 207, 86)"
      />
      {/* Chart Descriptions for Calories content */};
      <div className="align-chart-component-desc-cal">
        <div className="chart-component-desc">
          <h4 id="chart-h4">Calorie Insights</h4>
          <p className="align-chart-desc-p">
            Calories are used for many bodily functions, including breathing,
            circulating blood, and physical activity.
          </p>
        </div>
      </div>
      {/*  */}
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
      {/* Chart Descriptions for Carbs content */};
      <div className="align-chart-component-desc-carbs">
        <div className="chart-component-desc">
          <h4 id="chart-h4">Carbs Insights</h4>
          <p className="align-chart-desc-p">
            Carbs contain essential nutrients like vitamins and minerals. For
            example, potatoes are a good source of potassium, fiber, and vitamin
            C.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ComparisonCharts;
