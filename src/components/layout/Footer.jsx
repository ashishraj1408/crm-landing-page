import "../../styles/footer.css"

import logo from "../../assets/icons/footer-logo.png"
import facebooklogo from "../../assets/icons/footer-fb.png"
import Xlogo from "../../assets/icons/footer-x.png"
import Linkedinlogo from "../../assets/icons/footer-linkedin.png"
import InstaLogo from "../../assets/icons/footer-insta.png"

import ChromeLogo from "../../assets/icons/Link.png"
import OpenEmail from "../../assets/icons/open-email.png"
import Question from "../../assets/icons/question.png"
import Phone from "../../assets/icons/ring.png"

function Footer() {
  return (
    <footer className="leadcrm-footer">
      <div className="footer-container">

        <div className="footer-grid">

          {/* LEFT BRAND */}
          <div className="footer-brand">
            <div className="brand-row">
              <img src={logo} alt="LeadCRM" className="footer-logo" />
            </div>

            <p className="footer-description">
              LeadCRM is LinkedIn integration tool for your CRM.
            </p>

            <div className="social-icons">
              <div className="icon">
                <img src={facebooklogo} alt="" />
              </div>
              <div className="icon">
                <img src={Xlogo} alt="" />
              </div>
              <div className="icon">
                <img src={Linkedinlogo} alt="" />
              </div>
              <div className="icon">
                <img src={InstaLogo} alt="" />
              </div>
            </div>
          </div>

          {/* INTEGRATIONS */}
          <div>
            <h4 className="footer-title">Integrations</h4>
            <ul>
              <li>HubSpot</li>
              <li>Salesforce</li>
              <li>Pipedrive</li>

              <li className="coming-item">
                Close.io
                <span className="badge">Coming Soon</span>
              </li>

              <li className="coming-item">
                Insightly
                <span className="badge">Coming Soon</span>
              </li>
            </ul>
          </div>

          {/* ALTERNATIVE */}
          <div>
            <h4 className="footer-title">Alternative</h4>
            <ul>
              <li>Surfe VS LeadCRM</li>
              <li>Linkmatch Alternative</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="footer-title">Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="footer-title">Contact Us</h4>
            <ul className="contact-list">
              <li>
                <img src={OpenEmail} alt="" />
                support@leadcrm.io
              </li>

              <li>
                <img src={Phone} alt="" />
                +1 231-538-7466
              </li>

              <li>
                <img src={Question} alt="" />
                Help Center
              </li>
            </ul>

            <div className="chrome-badge">
              
              <img src={ChromeLogo} alt="Chrome" />
            </div>
          </div>

        </div>

        {/* DISCLAIMER */}
        <div className="footer-disclaimer">
          Disclaimer : LeadCRM is not endorsed or certified by LinkedIn.
          All LinkedIn(tm) logos and trademarks displayed on this tool are
          property of LinkedIn. LeadCRM is distributed AS IS. Your use of
          LeadCRM is at your own risk.
        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          Copyright © 2025 LeadCRM. All Rights Reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer
