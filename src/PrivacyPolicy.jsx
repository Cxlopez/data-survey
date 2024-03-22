import React from "react";
import "./PrivacyPolicy.css";
import Privacy from "./content/Privacy"

function PrivacyPolicy({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="privacy-header">
          <h2>Privacy Policy</h2>
          <button className="close-btn" onClick={onClose}>Back to Assessment</button>
        </div>
        <p className="privacy-content">
          <Privacy />
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
