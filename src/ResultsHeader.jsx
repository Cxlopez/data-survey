import React from 'react'
import GeoLogo from "./assets/2024-logo-landscape-red-dark.png"
import './ResultsHeader.css'

function ResultsHeader() {
  return (
    <div className="header">
      <div className="header-container">
      <img className="header-logo" alt="logo" src={GeoLogo}></img>
      <div>
        <p>www.geodigitalpartners.com</p>
      </div>
      </div>
      <div className="header-divider"></div>
      <div className="company-name">
        <p>[Company Name]</p>
      </div>
    </div>
  )
}

export default ResultsHeader