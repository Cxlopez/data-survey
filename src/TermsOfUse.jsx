import React from "react";
import "./TermsOfUse.css";

function TermsOfUse({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="terms-header">
          <h2>Terms of Use</h2>
          <button onClick={onClose}>Back to Assessment</button>
        </div>
        <p>
          These Terms of Use ("Terms") govern your access to and use of the
          Digital Needs Assessment Survey (the "Survey"). By accessing or using
          the Survey, you agree to be bound by these Terms.
          <br></br>
          <br></br>
          <b>1. Use of the Survey</b>
          <br></br>
          You may use the Survey for the purpose of conducting a digital needs
          assessment for your company. You agree to provide accurate and
          complete information in response to the survey questions.
          <br></br>
          <br></br>
          <b>2. Intellectual Property</b>
          <br></br>
          All content, including but not limited to text, graphics, logos,
          images, and software, used in or made available through the Survey is
          the property of [Your Company Name] or its licensors and is protected
          by copyright, trademark, and other intellectual property laws. You may
          not use, reproduce, modify, or distribute any content from the Survey
          without the prior written consent of [Your Company Name].
          <br></br>
          <br></br>
          <b>3. Data Collection and Privacy</b>
          <br></br>
          We collect and process personal information as described in our
          Privacy Policy. By using the Survey, you consent to the collection,
          use, and disclosure of your information as described in the Privacy
          Policy.
          <br></br>
          <br></br>
          <b>4. Prohibited Activities</b>
          <br></br>
          You agree not to:
          <br></br>
          Use the Survey in any unlawful or fraudulent manner. Interfere with or
          disrupt the operation of the Survey or the servers or networks used to
          make the Survey available. Attempt to gain unauthorized access to any
          part of the Survey or any other systems or networks connected to the
          Survey.
          <br></br>
          <br></br>
          <b>5. Disclaimer of Warranties</b>
          <br></br>
          The Survey is provided on an "as is" and "as available" basis, without
          any warranties of any kind, express or implied. [Your Company Name]
          does not warrant that the Survey will be error-free or uninterrupted,
          or that any defects will be corrected.
          <br></br>
          <br></br>
          <b>6. Limitation of Liability</b>
          <br></br>
          In no event shall [Your Company Name] be liable for any indirect,
          incidental, special, consequential, or punitive damages, including but
          not limited to lost profits, lost revenue, or lost data, arising out
          of or in connection with your use of the Survey.
          <br></br>
          <br></br>
          <b>7. Changes to the Terms</b>
          <br></br>
          We reserve the right to update or change these Terms at any time. Any
          changes will be effective immediately upon posting the revised Terms
          on this page.
          <br></br>
          <br></br>
          <b>8. Governing Law</b>
          <br></br>
          These Terms shall be governed by and construed in accordance with the
          laws of [Your Jurisdiction], without regard to its conflict of law
          provisions.
          <br></br>
          <br></br>
          <b>9. Contact Us</b>
          <br></br>
          If you have any questions or concerns about these Terms, please
          contact us at:
          <br></br>
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

export default TermsOfUse;
