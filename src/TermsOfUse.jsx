import React from "react";
import "./TermsOfUse.css";
import Terms from './content/Terms.jsx';


function TermsOfUse({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="terms-header">
          <h2>Terms of Use</h2>
          <button className="close-btn" onClick={onClose}>Back to Assessment</button>
        </div>
        <p className="terms-content">
        <Terms/>
        </p>
      </div>
    </div>
  );
}

export default TermsOfUse;
