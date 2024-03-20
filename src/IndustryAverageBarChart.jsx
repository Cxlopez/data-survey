import React from "react";
import { Bar } from "react-chartjs-2";

const IndustryAverageBarChart = () => {
  // Define industry average data
  const industryAverages = {
    "Customer Experience": 3.65,
    "Products & Services": 3.60,
    "Strategy": 3.70,
    "Interactions & Data": 3.70,
    "Tech": 3.70,
    "Operations": 3.75,
    "Organization": 3.70,
    "Partners": 3.65
  };

  // Extract labels and data from industry average object
  const labels = Object.keys(industryAverages);
  const data = Object.values(industryAverages);

  // Define chart data
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Industry Average",
        data: data,
        backgroundColor: [
          "#FF6384", "#36A2EB", "#FFCE56", "#7C52FF", "#FF715B", "#49E887", "#2C99FF", "#FF9F40"
        ]
      }
    ]
  };

  // Define chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 0.2,
          min: 0,
          max: 5
        }
      }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default IndustryAverageBarChart;
