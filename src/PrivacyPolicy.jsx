import React from "react";
import "./PrivacyPolicy.css";

function PrivacyPolicy({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="privacy-header">
          <h2>Privacy Policy</h2>
          <button className="close-btn" onClick={onClose}>Back to Assessment</button>
        </div>
        <p className="privacy-content">
          This Privacy Policy describes how we collect, use, and disclose
          information collected from users ("you" or "your") of the Digital
          Needs Assessment Survey (the "Survey").
          <br></br>
          <br></br>
          <b>1. Information We Collect</b>
          <br></br>
          We collect information that you provide when you voluntarily complete
          the Survey. This may include personal information such as your name,
          email address, company name, and any other information you choose to
          provide in response to the survey questions.
          <br></br>
          <br></br>
          <b>2. Use of Information</b>
          <br></br>
          The information collected through the Survey is used for the purpose
          of conducting a digital needs assessment for your company. We may use
          the information to analyze your responses, generate reports, and
          provide you with insights into your digital needs compared to
          benchmark scores.
          <br></br>
          <br></br>
          <b>3. Data Security</b>
          <br></br>
          We are committed to ensuring that your information is secure. We have
          implemented appropriate technical and organizational measures to
          safeguard and secure the information we collect through the Survey.
          <br></br>
          <br></br>
          <b>4. Data Sharing</b>
          <br></br>
          We do not sell, trade, or otherwise transfer your personally
          identifiable information to outside parties. However, we may share
          aggregated and anonymized data collected through the Survey with third
          parties for research, analysis, or other purposes.
          <br></br>
          <br></br>
          <b>5. Consent</b>
          <br></br>
          By voluntarily completing the Survey, you consent to the collection,
          use, and disclosure of your information as described in this Privacy
          Policy.
          <br></br>
          <br></br>
          <b>6. Your Rights</b>
          <br></br>
          You have the right to access, correct, or delete any personal
          information we hold about you. If you would like to exercise any of
          these rights, please contact us using the contact information provided
          below.
          <br></br>
          <br></br>
          <b>7. Changes to this Privacy Policy</b>
          <br></br>
          We reserve the right to update or change this Privacy Policy at any
          time. Any changes will be effective immediately upon posting the
          revised Privacy Policy on this page.
          <br></br>
          <br></br>
          <b>8. Contact Us</b>
          <br></br>
          If you have any questions or concerns about this Privacy Policy or our
          privacy practices, please contact us at:
          <br></br>[Your Company Name]
          <br></br>[Address]
          <br></br>[City, State, Zip Code]
          <br></br>[Email Address]
          <br></br>[Phone Number]
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
