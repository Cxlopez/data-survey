import React, { useEffect, useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import { json } from "./data/json";
import { Bar } from "react-chartjs-2";
import { Chart } from 'chart.js/auto'; // Import Chart.js
import "./surveyComponent.css"

function SurveyComponent() {
  const [surveyModel, setSurveyModel] = useState(null);
  const [averages, setAverages] = useState([]);
  const [surveyCompleted, setSurveyCompleted] = useState(false); // Add state for survey completion

  useEffect(() => {
      const survey = new Model(json);
      survey.applyTheme(themeJson);
      survey.onComplete.add((sender, options) => {
          const data = sender.data;
          calculateAverages(data);
          setSurveyCompleted(true); // Update survey completion state
      });
      setSurveyModel(survey);
  }, []);

  const calculateAverages = (data) => {
      const pages = json.pages;
      const calculatedAverages = [];

      pages.forEach(page => {
          let total = 0;
          let count = 0;

          page.elements.forEach(question => {
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

  return (
      <div>
          {surveyModel && <Survey model={surveyModel} />}
          {surveyCompleted && ( // Conditionally render the chart after survey completion
              <div id="charts-container">
                  <BarChart averages={averages} />
              </div>
          )}
      </div>
  );
}

const BarChart = ({ averages }) => {
  const data = {
      labels: averages.map(avg => avg.label),
      datasets: [{
          label: 'Average',
          data: averages.map(avg => avg.average),
          backgroundColor: '#FF6384'
      }]
  };

  const options = {
      scales: {
          y: {
              ticks: {
                  maxTicksLimit: 5 // Limiting to maximum 5 ticks on y-axis
              }
          }
      }
  };

  return <Bar data={data} options={options} />;
};

export default SurveyComponent;

