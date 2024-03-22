import React from 'react';

function Results({ overallAverage, industryAverages }) {
  const industryAverage = Object.values(industryAverages).reduce((acc, val) => acc + val, 0) / Object.keys(industryAverages).length;

  console.log(industryAverages,"HERE")

  return (
    <div>
      Results:
      <p>Your overall average is: {overallAverage}</p>
      <p>The industry average is: {industryAverage}</p>
    </div>
  );
}


export default Results;
