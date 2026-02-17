import React, { useState } from "react";
import {
  Database,
  RefreshCw,
  Download,
  Sparkles,
  X,
  Check,
} from "lucide-react";
import DavidImg from "../assets/images/howitworks/david.png";
import ZBImage from "../assets/images/linkedinsales/zb-valid.png";
import LeadCRMlogo from "../assets/icons/logo.png";
import MailsIcons from "../assets/images/linkedinsales/mails-icons.png";
import ContactStar from "../assets/images/linkedinsales/contact-stars.png";
import CheckIcons from "../assets/images/linkedinsales/checked-icons.png";
import RightArrow from "../assets/images/linkedinsales/right-arrow.png";
import SearchIcons from "../assets/images/linkedinsales/search-icons.png";
import RightSearchFrame from "../assets/images/linkedinsales/right-search-frame.png";
import DownArrow from "../assets/images/linkedinsales/down-arrow.png";
import Dlogo from "../assets/images/linkedinsales/d-logo.png";
import SHlogo from "../assets/images/linkedinsales/sh-logo.png";
import Pinlogo from "../assets/images/linkedinsales/pin-logo.png";
import Rocketlogo from "../assets/images/linkedinsales/rocket-logo.png";
import PhoneRing from "../assets/images/linkedinsales/phone-ring.png";
import LinkedInTop from "../assets/images/linkedinsales/linkedintop-float.png";
import { Phone, Mail } from "lucide-react";
import "../styles/LinkedInSales.css";

// ── Vendor logo components ──────────────────────────────────────────────────

const DropContactLogo = () => (
  <img src={Pinlogo} alt="DropContact" className="li-brand-logo-img" />
);

const DatagmaLogo = () => (
  <img src={Dlogo} alt="Datagma" className="li-brand-logo-img" />
);

const RocketReachLogo = () => (
  <img src={Rocketlogo} alt="Rocket Reach" className="li-brand-logo-img" />
);

const SignalHireLogo = () => (
  <img src={SHlogo} alt="Signal Hire" className="li-brand-logo-img" />
);

const SnovLogo = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 inline"
  >
    <circle cx="8" cy="8" r="8" fill="#7C3AED" />
    <text
      x="4"
      y="12"
      fontFamily="Arial"
      fontSize="9"
      fontWeight="900"
      fill="white"
    >
      S
    </text>
  </svg>
);

// ── Static data ──────────────────────────────────────────────────────────────

const tabs = [
  { label: "CRM Data Enrichment", icon: <Database size={16} /> },
  { label: "CRM Data Sync", icon: <RefreshCw size={16} /> },
  { label: "Bulk Export & Enrichment", icon: <Download size={16} /> },
  { label: "AI Productivity", icon: <Sparkles size={16} /> },
];

const vendors = [
  {
    name: "Vendor 1",
    brand: "DropContact",
    Logo: DropContactLogo,
    found: false,
  },
  { name: "Vendor 2", brand: "Datagma", Logo: DatagmaLogo, found: false },
  {
    name: "Vendor 3",
    brand: "Rocket Reach",
    Logo: RocketReachLogo,
    found: false,
  },
  { name: "Vendor 4", brand: "Signal Hire", Logo: SignalHireLogo, found: true },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function LinkedInSales() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="li-section">
      <img
        src={LinkedInTop}
        alt="LinkedIn Decoration"
        className="li-top-float"
      />
      <div className="li-container">
        {/* ── HEADER ── */}
        <div className="li-header">
          <h2>Complete LinkedIn Sales Solutions</h2>
          <p>Everything you need for professional LinkedIn prospecting</p>
        </div>

        {/* ── TABS ── */}
        <div className="li-tabs">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`li-tab-btn${activeTab === i ? " active" : ""}`}
            >
              <span className="tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── SUBTEXT ── */}
        <div className="li-subtext">
          It's hard to find the accurate contact data for every prospects by{" "}
          <span className="li-badge-incomplete">Incomplete Data</span>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="li-main-grid">
          {/* ═══════════════ LEFT BLOCK ═══════════════ */}
          <div className="li-left-block">
            <h3>Here is how LeadCRM tackles that situation.</h3>

            <button className="li-try-btn">
              Try LeadCRM Data Enrichment
              <img src={RightArrow} alt="Right Arrow" />
            </button>

            {/* Cards row */}
            <div className="li-cards-row">
              {/* ── Verified Email & Phone Card ── */}
              <div className="li-verified-card">
                {/* Header label */}
                <div className="li-verified-header">
                  <img src={MailsIcons} alt="Verified Email & Phone" />
                  <span>Verified Email & Phone</span>
                </div>

                {/* Inner contact card */}
                <div className="li-contact-card">
                  {/* Floating top row */}
                  <div className="li-card-top-row">
                    {/* Avatar */}
                    <div className="li-avatar-wrap">
                      <div className="li-avatar-circle">
                        <img src={DavidImg} alt="David Steinhoff" />
                      </div>
                      <div className="li-avatar-badge">
                        <img src={LeadCRMlogo} alt="LeadCRM Logo" />
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="li-badges-row">
                      {/* Badge 1 – LeadCRM */}
                      <div className="li-badge-item">
                        <div className="li-badge-logo">
                          <img src={LeadCRMlogo} alt="LeadCRM Valid" />
                        </div>
                        <span className="li-badge-valid">✔ Valid</span>
                      </div>

                      {/* Badge 2 – ZB */}
                      <div className="li-badge-item">
                        <div className="li-badge-logo rounded-square">
                          <img src={ZBImage} alt="ZB Valid" />
                        </div>
                        <span className="li-badge-valid">✔ Valid</span>
                      </div>
                    </div>
                  </div>

                  {/* Name */}
                  <div className="li-contact-name">
                    <h4>David Steinhoff</h4>
                  </div>

                  {/* Email */}
                  <div className="li-info-row">
                    <span className="info-text">
                      <Mail className="w-4 h-4 mr-2" />
                      davidsteinhoff@gmail.com
                    </span>
                    <span className="check-icon">
                      <img src={CheckIcons} alt="Checked" />
                    </span>
                  </div>
                  <p className="li-info-sub">
                    Found via snov.io <SnovLogo />
                  </p>

                  {/* Phone */}
                  <div className="li-info-row">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="info-text">+91 93245 45236</span>
                    <span className="check-icon">
                      <img src={CheckIcons} alt="Checked" />
                    </span>
                  </div>
                  <p className="li-info-sub li-info-sub-phone">
                    Found via snov.io <SnovLogo />
                  </p>

                  {/* CTA */}
                  <button className="li-contacts-btn">
                    <img src={ContactStar} alt="" />
                    <span>Contacts Found</span>
                  </button>
                </div>
              </div>

              {/* ── 40+ Search Filters Card ── */}
              <div className="li-search-clip">
                <div className="li-search-card">
                  <div className="li-search-header">
                    <img src={SearchIcons} alt="" />
                    <span>40+ Search Filters</span>
                  </div>
                  <div className="li-search-frame">
                    <img src={RightSearchFrame} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* end li-cards-row */}
          </div>
          {/* end li-left-block */}

          {/* ═══════════════ RIGHT BLOCK ═══════════════ */}
          <div className="li-right-block">
            <h3>
              If it does not works for you ! try our
              <button className="li-waterfall-btn">
                Advanced Waterfall Enrichment
                <img src={RightArrow} alt="Right Arrow" />
              </button>
            </h3>

            <div className="li-vendors-container">
              {vendors.map((vendor, i) => (
                <div className="li-vendor-row-wrap" key={i}>
                  {/* Vendor row */}
                  <div className="li-vendor-row">
                    {/* Label */}
                    <span className="li-vendor-label">{vendor.name}</span>

                    {/* Brand pill */}
                    <div className="li-brand-pill">
                      <div className="li-brand-logo">
                        <vendor.Logo />
                      </div>
                      <span className="li-brand-name">{vendor.brand}</span>
                    </div>

                    {/* Status */}
                    <div>
                      {vendor.found ? (
                        <div className="li-status-found">
                          <div className="li-status-icon phone">
                            <img src={PhoneRing} alt="Phone" />
                          </div>
                          <div className="li-status-icon check-green">
                            <Check size={12} color="#16A34A" />
                          </div>
                          <div className="li-status-icon email">
                            <img src={MailsIcons} alt="Email" />
                          </div>
                          <div className="li-status-icon check-green">
                            <Check size={12} color="#16A34A" />
                          </div>
                        </div>
                      ) : (
                        <div className="li-status-not-found">
                          <X size={16} color="#9CA3AF" />
                          <span>Contacts Not Found</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Down arrow between rows */}
                  {i < vendors.length - 1 && (
                    <div className="li-down-arrow">
                      <img src={DownArrow} alt="" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* end li-right-block */}
        </div>
        {/* end li-main-grid */}
      </div>
      {/* end li-container */}
    </section>
  );
}
