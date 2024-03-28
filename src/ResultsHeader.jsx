import React from 'react'
import GeoLogo from "./assets/2024-logo-landscape-red-dark.png"
import './ResultsHeader.css'

function ResultsHeader() {
  return (
    <div>
      <div className="header-container">
      <img className="header-logo" alt="logo" src={GeoLogo}></img>
      <div>
        <p>www.geodigitalpartners.com</p>
      </div>
      </div>
      <div className="header-divider"></div>
      <div className="assessment-overview">
        <p className="company-name">[Company Name]</p>
        <h1 className="header">Digital Assessment Transformation Results</h1>
        <p className="overview">This report evaluates your digital performace in eight crucial areas, comparing it to industry benchmarks for success in today's digital age. It also highlights key priorities and areas to concentrate on as you begin your journey of digital evolution and competitiveness.</p>
      </div>
    </div>
  )
}

export default ResultsHeader