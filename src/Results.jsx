import React from 'react';
import './Results.css';

function Results({ overallAverage, industryAverages }) {
  const industryAverage = Object.values(industryAverages).reduce((acc, val) => acc + val, 0) / Object.keys(industryAverages).length;
  const stage = calculateStage(overallAverage, industryAverage);

  return (
    <div className="results-container">
      <div className="results-banner">Reccomendations for your next phase of growth</div>
      <div className="stage-header"> You are in the {stage} stage.</div>
    </div>
  );
}

function calculateStage(overallAverage) {
  if (overallAverage <= 1.5) {
    return 'Emerging';
  } else if (overallAverage <= 3.5) {
    return 'Transitioning';
  } else {
    return 'Leading';
  }
}

export default Results;
