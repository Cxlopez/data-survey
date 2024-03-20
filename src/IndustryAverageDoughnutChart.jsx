// IndustryAverageDoughnutChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";

const IndustryAverageDoughnutChart = () => {
  // Define hardcoded total average
  const totalAverage = 3.68;

  // Define chart data
  const data = {
    labels: ["Overall Industry Average"],
    datasets: [
      {
        label: "Overall Industry Average",
        data: [totalAverage],
        backgroundColor: ["#FF6384"]
      }
    ]
  };

  // Define chart options
  const options = {
    aspectRatio: 1,
    plugins: {
      legend: {
        position: "bottom",
      }
    }
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
      <p>Overall Average: 3.68</p>
    </div>
  );
};

export default IndustryAverageDoughnutChart;

