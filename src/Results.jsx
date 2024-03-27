import React from 'react';
import './Results.css';

function Results({ overallAverage, industryAverages }) {
  const industryAverage = Object.values(industryAverages).reduce((acc, val) => acc + val, 0) / Object.keys(industryAverages).length;
  const { stage, description } = calculateStage(overallAverage, industryAverage);

  return (
    <div className="results-container">
      <div className="results-banner">Reccomendations for your next phase of growth</div>
      <div className="stage-header"> You are in the {stage} stage.</div>
      <div className='stage-description'>{description}</div>
    </div>
  );
}

function calculateStage(overallAverage) {
let stage, description;

  if (overallAverage <= 1.5) {
    stage = "Emerging";
    description = "In the early stage phase, companies can lay the groundwork for their digital transformation. The chance to invest in basic digital infrastructure characterizes this phase, gathers valuable customer feedback, and starts experimenting with digital channels. It’s a time for exploration and learning, setting the stage for future growth and development in the digital landscape."
  } else if (overallAverage <= 3.5) {
    stage = "Development";
    description ="Companies in the development phase can refine and expand their digital initiatives. This phase involves strengthening data security measures, embracing advanced technologies for operational efficiency, and fostering a culture of digital innovation. It’s a critical stage where companies can speed up their digital transformation journey and solidify their competitive position in the market."
  } else {
    stage = 'Leading';
    description = "In the advanced phase, companies have reached a high level of digital maturity and excellence. A strong focus on continuous innovation, strategic partnerships, and driving digital transformation on scale characterizes this phase. Companies should take the lead in their industry by using the latest technologies to stay competitive and achieve long-term growth."
  }
  return { stage, description };
}

export default Results;
