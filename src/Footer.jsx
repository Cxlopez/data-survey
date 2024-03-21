import React from "react";
import "./Footer.css";
import Logo from "./assets/geoLogo-white.gif";



function Footer({ openPrivacyModal, openTermsModal }) {
  return (
    <div className="footer">
      <div className="logo-container">
        <img className="geo-logo" alt="logo" src={Logo}></img>
      </div>
      <div className="line-divider"></div>
      <div className="footer-links">
      <span onClick={openPrivacyModal} style={{cursor: 'pointer'}}>Privacy Policy</span>
        <span style={{ margin: '0 5px' }}> | </span>
        <span onClick={openTermsModal} style={{cursor: 'pointer'}}>Terms of Use</span>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Geo Digital Partners. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
