import React, { useEffect, useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import { json } from "./data/json";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart } from 'chart.js/auto'; // Import Chart.js
import "./surveyComponent.css";

function SurveyComponent() {
  const [surveyModel, setSurveyModel] = useState(null);
  const [averages, setAverages] = useState([]);
  const [overallAverage, setOverallAverage] = useState(0);
  const [surveyCompleted, setSurveyCompleted] = useState(false);

  // Define industry averages
  const industryAverages = {
    "Customer Experience": 3.65,
    "Product & Services": 3.60,
    "Strategy": 3.70,
    "Interactions & Data Security": 3.70,
    "Technology": 3.70,
    "Operations": 3.75,
    "Organization": 3.70,
    "Partners & Alliances": 3.65
  };

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
          total += parseFloat(response);
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
          total += parseFloat(response);
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
            <BarChart averages={averages} industryAverages={industryAverages} />
          </div>
          {/* <div className="doughnut-chart-container">
            <DoughnutChart overallAverage={overallAverage} />
          </div> */}
        </div>
      )}
    </div>
  );
}

const BarChart = ({ averages, industryAverages }) => {
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

  // Combine individual averages and industry averages
  const combinedData = averages.flatMap(avg => [
    { label: customPageNames[avg.label] || avg.label, average: avg.average },
    { label: `${customPageNames[avg.label]} (Industry Avg)`, average: industryAverages[customPageNames[avg.label]] || 0 }
  ]);

  const data = {
    labels: Object.keys(customPageNames).map(key => customPageNames[key]),
    datasets: [{
      label: 'Survey Average',
      data: averages.map(avg => avg.average),
      backgroundColor: averages.map(avg => {
        if (avg.average < 1.5) {
          return '#F38181'; // Red for values less than 1.5
        } else if (avg.average >= 1.5 && avg.average < 3) {
          return '#FCE38A'; // Yellow for values between 1.5 and 3
        } else {
          return '#D6F7AD'; // Green for values greater than or equal to 3
        }
      }),
      borderColor: '#000',
      borderWidth: 1
    }, {
      label: 'Industry Average',
      data: Object.values(industryAverages),
      backgroundColor: '#95E1D3', // Green for industry average
      borderColor: '#000',
      borderWidth: 1
    }]
  };
  

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        ticks: {
          stepSize: 0.2,
          minTicksLimit: 3,
          maxTicksLimit: 5,
          font: {
            size: 16, // Set font size for y-axis ticks
          }
        }
      },
      x: {
        ticks: {
          font: {
            size: 16, // Set font size for x-axis ticks
          }
        }
      }
    },
    animation: {
      onComplete: () => {
        console.log('Chart animation completed');
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default') {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
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

  // return (
  //   // <div className="doughnut-chart-container">
  //   //   <Doughnut data={data} />
  //   //   <p>Overall Average: {roundedAverage}</p>
  //   // </div>
  // );
};

export default SurveyComponent;




