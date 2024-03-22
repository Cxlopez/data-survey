import React from 'react';

function Results({ overallAverage, industryAverages }) {
  const industryAverage = Object.values(industryAverages).reduce((acc, val) => acc + val, 0) / Object.keys(industryAverages).length;
  const stage = calculateStage(overallAverage, industryAverage);

  return (
    <div>
      <p>Results:</p>
      <p>Your overall average is: {overallAverage}</p>
      <p>The industry average is: {industryAverage}</p>
      <p>You are in the {stage} stage.</p>
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
