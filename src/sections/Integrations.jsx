import "../styles/Integration.css";

import BannerThumb from "../assets/images/integrations/banner-thumb-message.png";
import CompaniesLogo from "../assets/images/integrations/companies.png";
import ContactsLogo from "../assets/images/integrations/contact.png";
import ConversationLogo from "../assets/images/integrations/conversation.png";
import RightSidelogo from "../assets/images/integrations/right-all-logo.png";
import CenterIcon from "../assets/images/integrations/group-logo.png";
import TopDotArrow from "../assets/images/integrations/top-dot-arrow.png";
import BottomDotArrow from "../assets/images/integrations/bottom-dot-arrow.png";
import CenterDotArrow from "../assets/images/integrations/center-dot-arrow.png";
import LinkedInIcon from "../assets/images/integrations/LinkedIn.png";
import CollobrationImg from "../assets/images/integrations/Collaboration.png";

const Tag = ({ label, variant = "teal" }) => (
  <div className={`tag tag--${variant}`}>{label}</div>
);

const SourceNode = ({ imgSrc, label }) => (
  <div className="source-node">
    <div className="source-node__circle">
      <img src={imgSrc} alt="" />
    </div>
    <div className="source-node__label">
      <img src={LinkedInIcon} alt="LinkedIn" />
      <span>{label}</span>
    </div>
  </div>
);

export default function Integrations() {
  return (
    <section className="integrations-section">
      {/* HEADER */}
      <div className="integrations-header">
        <div className="integrations-header__icon-wrap">
          <img src={BannerThumb} alt="" width={40} />
        </div>
        <h2>Our Supported LeadCRM</h2>
        <p>
          LeadCRM provides Native Integrations with popular CRM tools to make
          the most out of your LinkedIn prospecting.
        </p>
      </div>

      {/* CARD */}
      <div className="integrations-card">
        {/* LEFT */}
        <div className="source-nodes">
          <SourceNode imgSrc={ConversationLogo} label="Conversation" />
          <SourceNode imgSrc={ContactsLogo} label="Contacts" />
          <SourceNode imgSrc={CompaniesLogo} label="Companies" />
        </div>

        {/* LEFT FLOW */}
        <div className="flow-lines">
          <div className="flow-row">
            <img src={TopDotArrow} className="flow-arrow" alt="" />
            <Tag label="Conversations" />
          </div>

          <div className="flow-row">
            <img src={CenterDotArrow} className="flow-arrow" alt="" />
            <Tag label="First Name" />
            <Tag label="Last Name" />
            <Tag label="Website" />
          </div>

          <div className="flow-row">
            <img src={BottomDotArrow} className="flow-arrow" alt="" />
            <Tag label="Company Employees" />
          </div>
        </div>

        {/* CENTER */}
        <div className="center-logo-wrap">
          <div className="center-logoa">
            <img src={CenterIcon} alt="" />
          </div>
        </div>

        {/* RIGHT FLOW */}
        <div className="output-lines">
          <div className="flow-row">
            <img src={CenterDotArrow} className="flow-arrow" alt="" />
            <Tag label="Employees" variant="green" />
            <Tag label="Website" variant="green" />
            <Tag label="Conversations" variant="red" />
            <Tag label="Last Name" variant="red" />
            <Tag label="First Name" variant="red" />
          </div>
        </div>

        {/* CRM PANEL */}
        <div className="crm-panel">
          <img src={RightSidelogo} alt="" />
        </div>
      </div>

      {/* CTA */}
      <div className="integrations-cta">
        <button className="cta-btn">Lets Integrate your CRM Now!</button>
      </div>

      {/* FLOATING COLLABORATION IMAGE */}
      <div className="integration-floating-img">
        <img src={CollobrationImg} alt="Collaboration" />
      </div>
    </section>
  );
}
