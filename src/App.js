import React, { useState } from "react";
import SurveyComponent from "./SurveyComponent";
import Footer from "./Footer";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfUse from "./TermsOfUse";

function App() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const openPrivacyModal = () => {
    setShowPrivacyModal(true)
  };

  const closePrivacyModal = () => {
    setShowPrivacyModal(false);
  };

  const [showTermsModal, setShowTermsModal] = useState(false);

  const openTermsModal = () => {
    setShowTermsModal(true)
  };

  const closeTermsModal = () => {
    setShowTermsModal(false);
  };

  return (

      <div className="App">
        <SurveyComponent />
        <Footer openPrivacyModal={openPrivacyModal} openTermsModal={openTermsModal}/>
        {showPrivacyModal && <PrivacyPolicy onClose={closePrivacyModal} />}
        {showTermsModal && <TermsOfUse onClose={closeTermsModal} />}
      </div>

  );
}

export default App;
