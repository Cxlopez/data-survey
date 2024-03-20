import React from 'react'

function TermsOfUse({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Terms of Use</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default TermsOfUse