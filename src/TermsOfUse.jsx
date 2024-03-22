import React from "react";
import "./TermsOfUse.css";
import TermsOfUseContent from "././content/terms.json";


function TermsOfUse({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="terms-header">
          <h2>{TermsOfUseContent.title}</h2>
          <button className="close-btn" onClick={onClose}>Back to Assessment</button>
        </div>
        <p className="terms-content">
        {TermsOfUseContent.content}
        </p>
      </div>
    </div>
  );
}

export default TermsOfUse;
