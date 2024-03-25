import React from 'react';
import './Results.css';

function Results({ overallAverage, industryAverages }) {
  const industryAverage = Object.values(industryAverages).reduce((acc, val) => acc + val, 0) / Object.keys(industryAverages).length;
  const stage = calculateStage(overallAverage, industryAverage);

  return (
    <div className="results-container">
      <p className="results-content">Results:
      <br></br>
      Your overall average is: {overallAverage}
      <br></br>
      The industry average is: {industryAverage.toFixed(2)}
      <br></br>
      You are in the {stage} stage.</p>
    </div>
  );
}

function calculateStage(overallAverage) {
  if (overallAverage <= 0.5) {
    return 'Emerging';
  } else if (overallAverage <= 0.7) {
    return 'Developing';
  } else {
    return 'Optimus Prime';
  }
}

export default Results;
