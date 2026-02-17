import hubspotLogo from "../assets/images/hubspot.png";
import pipedriveLogo from "../assets/images/pipedrive.png";
import salesforceLogo from "../assets/images/salesforce.png";
import capterraLogo from "../assets/images/capteralogo.png";
import chromeLogo from "../assets/images/chromelogo.png";

import AccessIcon from "../assets/icons/access.png";
import OneClickIcon from "../assets/icons/one-click-push.png";
import CustomFieldIcon from "../assets/icons/custom-field.png";
import AdvancedWaterIcon from "../assets/icons/advanced-waterfall.png";
import InstantEmailIcon from "../assets/icons/pngtree.png";
import BulkExportIcon from "../assets/icons/DevMode.png";
import SeamlessDealIcon from "../assets/icons/handoff.png";
import Underline from "../assets/images/underline.png";

import "../styles/hero.css";

function Hero() {
  const features = [
    {
      id: 1,
      image: AccessIcon,
      text: "Access to ",
      highlight: "700M+ Contacts",
    },
    {
      id: 2,
      image: OneClickIcon,
      text: "One click push ",
      highlight: "to CRM",
    },
    {
      id: 3,
      image: CustomFieldIcon,
      text: "",
      highlight: "Custom Field Mapping",
    },
    {
      id: 4,
      image: AdvancedWaterIcon,
      text: "Advanced ",
      highlight: "Water Enrichment",
    },
    {
      id: 5,
      image: InstantEmailIcon,
      text: "",
      highlight: "Instant Email Sender",
    },
    {
      id: 6,
      image: BulkExportIcon,
      text: "",
      highlight: "Bulk Export & Enrich",
    },
    {
      id: 7,
      image: SeamlessDealIcon,
      text: "",
      highlight: "Seamless Deal Management",
    },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#f3f6fb] pt-20 pb-20 border-b overflow-hidden">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.04]
          bg-[linear-gradient(to_right,#000_1px,transparent_1px),
          linear-gradient(to_bottom,#000_1px,transparent_1px)]
          bg-[size:60px_60px]"
        />

        <div className="relative max-w-[1000px] mx-auto flex flex-col items-center text-center px-6">
          <div className="hero-badge">
            🚀 Thousands of Professionals using LeadCRM
          </div>

          <h1 className="hero-title">
            LinkedIn CRM Integration <br />
            Capture, Sync and Enrich in{" "}
            <span className="highlight-wrapper">
              Both Ways
              <img src={Underline} alt="" className="highlight-underline" />
            </span>
          </h1>

          <p className="hero-description">
            Automatically sync LinkedIn prospects to your CRM and overlay
            existing CRM contacts on LinkedIn profiles. Complete bi-directional
            integration with HubSpot, Salesforce, and Pipedrive.
          </p>

          {/* Works With */}
          <div className="hero-pill">
            <span className="pill-text">Works with</span>

            <div className="circle orange">
              <img src={hubspotLogo} alt="HubSpot" />
            </div>

            <div className="circle green">
              <img src={pipedriveLogo} alt="Pipedrive" />
            </div>

            <div className="circle white">
              <img src={salesforceLogo} alt="Salesforce" />
            </div>
          </div>

          {/* Ratings */}
          <div className="hero-ratings">
            <div className="rating-block">
              <img src={chromeLogo} alt="Chrome" />
              <span className="stars">★★★★★</span>
              <span className="rating-text">5/5</span>
            </div>

            <div className="rating-block">
              <img src={capterraLogo} alt="Capterra" />
              <span className="stars">★★★★★</span>
              <span className="rating-text">5/5</span>
            </div>
          </div>

          {/* CTA */}
          <div className="hero-buttons">
            <button className="chrome-btn">
              <img src={chromeLogo} alt="Chrome" />
              Chrome Web Store
            </button>

            <button className="green-btn">Get a Free Trial Now!</button>
          </div>
        </div>
      </section>

      {/* ================= FEATURE MARQUEE ================= */}
      <section className="bg-white border-b border-[#e5e7eb] py-14 overflow-hidden">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...features, ...features].map((item, index) => (
              <div key={index} className="feature-item">
                <img src={item.image} alt={item.highlight} />
                <span>
                  {item.text}
                  <strong>{item.highlight}</strong>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
