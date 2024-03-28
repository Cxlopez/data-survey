import React, { useEffect, useState, useRef } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import { json } from "./data/json";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart } from 'chart.js/auto'; // Import Chart.js
import { useReactToPrint } from 'react-to-print';
import "./surveyComponent.css";
import Results from './Results'
import ResultsHeader from "./ResultsHeader";

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

  useEffect(() => {
    // Hook into beforeprint event to resize charts before printing
    window.addEventListener('beforeprint', resizeChartsBeforePrint);

    // Hook into afterprint event to restore chart size after printing
    window.addEventListener('afterprint', resizeChartsAfterPrint);

    return () => {
      // Remove event listeners when component unmounts
      window.removeEventListener('beforeprint', resizeChartsBeforePrint);
      window.removeEventListener('afterprint', resizeChartsAfterPrint);
    };
  }, []);

  // Function to resize charts before printing
  const resizeChartsBeforePrint = () => {
    for (let id in Chart.instances) {
      Chart.instances[id].resize();
    }
  };

  // Function to restore chart size after printing
  const resizeChartsAfterPrint = () => {
    // Restore the chart size to its original size here if needed
    const originalChartSizes = {}; // Store original chart sizes
    
    // Loop through all Chart.js instances
    for (let id in Chart.instances) {
      const chart = Chart.instances[id];
      
      // Store original size if not already stored
      if (!originalChartSizes[id]) {
        originalChartSizes[id] = {
          width: chart.width,
          height: chart.height
        };
      }

      // Set chart size back to its original dimensions
      chart.resize(originalChartSizes[id].width, originalChartSizes[id].height);
    }
  };

  const handlePrint = () => {
    window.print(); // Trigger browser's print functionality
  };

  return (
    <div>
      {surveyModel && <Survey model={surveyModel} />}
      {surveyCompleted && (
      
        <div className="charts-container">
          <ResultsHeader/>
          <div className="doughnut-chart-container">
            <DoughnutChart overallAverage={overallAverage} />
          </div>
          <div id="bar-chart-container" className="bar-chart-container">
            <BarChart averages={averages} industryAverages={industryAverages} />
          </div>
          {/* <button onClick={handlePrint}>Print Survey Report</button> */}
          <Results id="results-component" overallAverage={overallAverage} industryAverages={industryAverages}/>
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
  let delayed;
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked'
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    },
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    layout: {
      padding: {
        left: 0, // Add left padding
        right: 0 // Add right padding
      }
    }
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
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

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: {
        left: 0, // Add left padding
        right: 0 // Add right padding
      }
    }
  };

  return (
    <div className="doughnut-chart-container">
      <Doughnut data={data} options={options} />
      <p>Overall Average: {roundedAverage}</p>
    </div>
  );
};

export default SurveyComponent;

