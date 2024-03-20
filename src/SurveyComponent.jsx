import React, { useEffect, useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import { json } from "./data/json";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart } from 'chart.js/auto'; // Import Chart.js
import IndustryAverageBarChart from "./IndustryAverageBarChart";
import IndustryAverageDoughnutChart from "./IndustryAverageDoughnutChart";
import "./surveyComponent.css";

function SurveyComponent() {
  const [surveyModel, setSurveyModel] = useState(null);
  const [averages, setAverages] = useState([]);
  const [overallAverage, setOverallAverage] = useState(0);
  const [surveyCompleted, setSurveyCompleted] = useState(false);

  useEffect(() => {
    const survey = new Model(json);
    survey.applyTheme(themeJson);
    survey.onComplete.add((sender, options) => {
      const data = sender.data;
      calculateAverages(data);
      setOverallAverage(calculateOverallAverage(data));
      setSurveyCompleted(true);
    });
    setSurveyModel(survey);
  }, []);

  const calculateAverages = (data) => {
    const pages = json.pages;
    const calculatedAverages = [];

    pages.forEach((page) => {
      let total = 0;
      let count = 0;

      page.elements.forEach((question) => {
        const response = data[question.name];
        if (response !== undefined) {
          total += parseInt(response);
          count++;
        }
      });

      if (count > 0) {
        const average = total / count;
        calculatedAverages.push({ average, label: page.name });
      }
    });

    setAverages(calculatedAverages);
  };

  const calculateOverallAverage = (data) => {
    let total = 0;
    let count = 0;

    json.pages.forEach((page) => {
      page.elements.forEach((question) => {
        const response = data[question.name];
        if (response !== undefined) {
          total += parseInt(response);
          count++;
        }
      });
    });

    return count > 0 ? total / count : 0;
  };

  return (
    <div>
      {surveyModel && <Survey model={surveyModel} />}
      {surveyCompleted && (
        <div className="charts-container">
          <div className="bar-chart-container">
            <BarChart averages={averages} />
          </div>
          <div className="bar-chart-container">
            <IndustryAverageBarChart />
          </div>
          <div className="doughnut-chart-container">
            <DoughnutChart overallAverage={overallAverage} />
          </div>
          <div className="doughnut-chart-container">
            <IndustryAverageDoughnutChart />
          </div>
        </div>
      )}
    </div>
  );
}

const BarChart = ({ averages }) => {
  const customPageNames = {
    page1: "Customer Experience",
    page2: "Product & Services",
    page3: "Strategy",
    page4: "Interactions & Data Security",
    page5: "Technology",
    page6: "Operations",
    page7: "Organization",
    page8: "Partners & Alliances"
  };

  const data = {
    labels: averages.map(avg => customPageNames[avg.label] || avg.label),
    datasets: [{
      label: 'Average',
      data: averages.map(avg => avg.average),
      backgroundColor: ['#FFE6E6', '#E1AFD1', '#AD88C6', '#7469B6']
    }]
  };

  const options = {
    scales: {
      y: {
        ticks: {
          stepSize: 0.2,
          minTicksLimit: 3,
          maxTicksLimit: 5
        }
      }
    }
  };

  return <Bar data={data} options={options} />;
};

const DoughnutChart = ({ overallAverage }) => {
  const roundedAverage = overallAverage.toFixed(2);

  const data = {
    labels: ['Overall Average'],
    datasets: [{
      label: 'Overall Average',
      data: [overallAverage],
      backgroundColor: ['#E1AFD1']
    }]
  };

  return (
    <div className="doughnut-chart-container">
      <Doughnut data={data} />
      <p>Overall Average: {roundedAverage}</p>
    </div>
  );
};

export default SurveyComponent;



