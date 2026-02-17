import React, { useState } from "react";
import { Database, RefreshCw, Download, Sparkles, X, Check, ArrowDown } from "lucide-react";
import DavidImg from "../assets/images/howitworks/david.png";
import ZBImage from "../assets/images/linkedinsales/zb-valid.png";
import LeadCRMlogo from "../assets/icons/logo.png";
import MailsIcons from "../assets/images/linkedinsales/mails-icons.png";
import ContactStar from "../assets/images/linkedinsales/contact-stars.png";
import CheckIcons from "../assets/images/linkedinsales/checked-icons.png";
import RightArrow from "../assets/images/linkedinsales/right-arrow.png";
import { Phone, Mail } from "lucide-react";

// ── Inline SVG placeholder logos (replace with real imports in your project) ──

const LeadCRMLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="40" height="40" rx="10" fill="#0EA5E9" />
    <path d="M10 20C10 14.477 14.477 10 20 10s10 4.477 10 10-4.477 10-10 10S10 25.523 10 20z" fill="white" fillOpacity="0.3" />
    <path d="M15 20l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ZBLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="40" height="40" rx="10" fill="#1E3A5F" />
    <text x="8" y="28" fontFamily="Arial" fontSize="18" fontWeight="900" fill="white">ZB</text>
  </svg>
);

const DavidAvatar = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="60" cy="60" r="60" fill="#D1D5DB" />
    <circle cx="60" cy="45" r="22" fill="#9CA3AF" />
    <ellipse cx="60" cy="105" rx="35" ry="28" fill="#9CA3AF" />
  </svg>
);

// Vendor logos as SVG components
const DropContactLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="20" cy="20" r="20" fill="#00C896" />
    <path d="M14 20a6 6 0 1 0 12 0 6 6 0 0 0-12 0z" fill="white" />
    <path d="M20 11v3M20 26v3M11 20h3M26 20h3" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const DatagmaLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="20" cy="20" r="20" fill="#3B82F6" />
    <text x="11" y="26" fontFamily="Arial" fontSize="16" fontWeight="900" fill="white">d</text>
  </svg>
);

const RocketReachLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="20" cy="20" r="20" fill="#FF4500" />
    <path d="M20 8c0 0 8 4 8 14l-8 4-8-4c0-10 8-14 8-14z" fill="white" />
    <circle cx="20" cy="20" r="3" fill="#FF4500" />
  </svg>
);

const SignalHireLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="40" height="40" rx="10" fill="#F3F4F6" />
    <text x="5" y="27" fontFamily="Arial" fontSize="13" fontWeight="900" fill="#374151">SH</text>
  </svg>
);

const SnovLogo = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline">
    <circle cx="8" cy="8" r="8" fill="#7C3AED" />
    <text x="4" y="12" fontFamily="Arial" fontSize="9" fontWeight="900" fill="white">S</text>
  </svg>
);

const tabs = [
  { label: "CRM Data Enrichment", icon: <Database size={16} />, active: true },
  { label: "CRM Data Sync", icon: <RefreshCw size={16} />, active: false },
  { label: "Bulk Export & Enrichment", icon: <Download size={16} />, active: false },
  { label: "AI Productivity", icon: <Sparkles size={16} />, active: false },
];

const vendors = [
  { name: "Vendor 1", brand: "DropContact", Logo: DropContactLogo, found: false },
  { name: "Vendor 2", brand: "Datagma", Logo: DatagmaLogo, found: false },
  { name: "Vendor 3", brand: "Rocket Reach", Logo: RocketReachLogo, found: false },
  { name: "Vendor 4", brand: "Signal Hire", Logo: SignalHireLogo, found: true },
];

export default function LinkedInSales() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section style={{ background: "#F8FAFC", padding: "80px 0", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 38, fontWeight: 700, color: "#0F1B4C", margin: 0, letterSpacing: "-0.5px" }}>
            Complete LinkedIn Sales Solutions
          </h2>
          <p style={{ color: "#6B7280", marginTop: 10, fontSize: 16 }}>
            Everything you need for professional LinkedIn prospecting
          </p>
        </div>

        {/* ── TABS ── */}
        <div style={{ display: "flex", justifyContent: "center", gap: 0, borderBottom: "1px solid #E5E7EB", marginBottom: 32 }}>
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "14px 32px",
                border: "none", background: "none", cursor: "pointer",
                fontSize: 14.5, fontWeight: activeTab === i ? 600 : 400,
                color: activeTab === i ? "#111827" : "#9CA3AF",
                borderBottom: activeTab === i ? "2.5px solid #111827" : "2.5px solid transparent",
                marginBottom: -1,
                transition: "all 0.2s",
              }}
            >
              <span style={{ color: activeTab === i ? "#111827" : "#9CA3AF" }}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── SUBTEXT ── */}
        <div style={{ fontSize: 16, color: "#374151", marginBottom: 28 }}>
          It's hard to find the accurate contact data for every prospects by{" "}
          <span style={{
            background: "#FFE4E6", color: "#E11D48",
            fontSize: 13, padding: "3px 12px", borderRadius: 999,
            fontWeight: 500, marginLeft: 4
          }}>
            Incomplete Data
          </span>
        </div>

        {/* ── MAIN GRID ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

          {/* ═══════════════════════════════ LEFT BLOCK ═══════════════════════════════ */}
          <div style={{ background: "#EEF2F7", borderRadius: 24, padding: "36px 32px" }}>
            <h3 style={{ fontSize: 19, fontWeight: 600, color: "#262626", margin: "0 0 8px" }}>
              Here is how LeadCRM tackles that situation.
             
            </h3>
            <button style={{
              background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center",
              color: "#097737", fontWeight: 600, fontSize: 18, padding: 0, marginBottom: 28, fontFamily:'Exo 2'
            }}>
              Try LeadCRM Data Enrichment 
              <img src={RightArrow} alt="Right Arrow" style={{ marginLeft: 8 }} />
            </button>

            {/* Cards row */}
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" , }}>

              {/* ── VERIFIED EMAIL & PHONE CARD ── */}
              <div style={{ flex: "0 0 auto", width: 320 ,  background:"#fff", padding:"16px", borderRadius:16}}>
                {/* Header label */}
                <div className="items-center justify-center" style={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 60 ,background:"#fff" }}>
                   <img src={MailsIcons} alt="Verified Email & Phone" style={{ width: 24, height: 24 }} />
                   <span style={{ fontSize: 14, fontWeight: 600, color: "#090F4E", fontFamily:"Poppins" }}>Verified Email & Phone</span>
                 
                </div>

                {/* White card */}
                <div style={{
                  background: "white", borderRadius: 24,
                  padding: "20px 20px 20px",
                  boxShadow: "rgb(15 23 42 / 28%) 0px 20px 50px",
                  position: "relative", paddingTop: 52,
                  overflow: "visible",
                }}>
                  

                  {/* Top row: Avatar (left, overlapping) + Badges (right, overlapping) */}
                  <div style={{
                    position: "absolute", top: -28, left: 0, right: 0,
                    display: "flex", justifyContent: "space-between",
                    alignItems: "flex-start", padding: "0 16px",
                    zIndex: 10,
                  }}>
                    {/* Avatar overlapping top-left */}
                    <div style={{ position: "relative", width: 80, height: 80 }}>
                      <div style={{ width: 80, height: 80, borderRadius: "50%", overflow: "hidden", border: "3px solid white", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
                       <img src={DavidImg} alt="David Steinhoff" />
                      </div>
                      <div style={{
                        position: "absolute", bottom: -2, right: -2,
                        width: 24, height: 24, borderRadius: "50%",
                        background: "white", padding: 3,
                        boxShadow: "0 2px 6px rgba(0,0,0,0.15)", overflow: "hidden"
                      }}>
                        <img src={LeadCRMlogo} alt="LeadCRM Logo" />
                      </div>
                    </div>

                    {/* Badges floating top-right */}
                    <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
                      {/* Badge 1 – LeadCRM */}
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{
                          background: "white", borderRadius: "50%",
                          width: 50, height: 50, padding: 6,
                          boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                          overflow: "hidden"
                        }}>
                          <img src={LeadCRMlogo} alt="LeadCRM Valid" />
                        </div>
                        <span style={{
                          marginTop: 4, fontSize: 10, color: "#16A34A",
                          border: "1px solid #16A34A", borderRadius: 999,
                          padding: "2px 7px", background: "white", whiteSpace: "nowrap",
                          position: "relative", zIndex: 10,
                          bottom: 65, // Adjust as needed to position the badge text
                          left: 25, // Adjust as needed to position the badge text
                        }}>✔ Valid</span>
                      </div>

                      {/* Badge 2 – ZB */}
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{
                          background: "white", borderRadius: 12,
                          width: 50, height: 50, padding: 4,
                          boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                          overflow: "hidden"
                        }}>
                          <img src={ZBImage} alt="ZB Valid" />
                        </div>
                        <span style={{
                          marginTop: 4, fontSize: 10, color: "#16A34A",
                          border: "1px solid #16A34A", borderRadius: 999,
                          padding: "2px 7px", background: "white", whiteSpace: "nowrap",
                           position: "relative", zIndex: 10,
                          bottom: 65, // Adjust as needed to position the badge text
                          left: 25,
                        }}>✔ Valid</span>
                      </div>
                    </div>
                  </div>

                  {/* Name below avatar */}
                  <div style={{ marginBottom: 14, marginTop: 8 }}>
                    <h4 style={{ fontSize: 17, fontWeight: 700, color: "#424242", margin: 0 , fontFamily:'Monstreat' }}>
                      David Steinhoff
                    </h4>
                  </div>

                  {/* Email */}
                  <div style={{ display: "flex", alignItems: "center", fontSize: 12.5, marginTop: 12 }}>
                    <span style={{ display: "flex", color:'#1A1A1A', fontFamily:'Monstreat', alignItems: "center", gap: 4 }}>
                     <Mail className="w-4 h-4 mr-2" /> davidsteinhoff@gmail.com
                    </span>
                    <span style={{ color: "#7C3AED", fontWeight: 700, marginLeft: 6 }}>
                      <img src={CheckIcons} alt="Checked Icon" />
                    </span>
                  </div>
                  <p style={{ fontSize: 10.5, color: "#B0B0B0", fontFamily:'Monstreat', margin: "2px 0 10px", textAlign: "left" }}>
                    Found via snov.io <SnovLogo className="ml-2" />
                  </p>

                  {/* Phone */}
                  <div style={{ display: "flex", alignItems: "center", fontSize: 12.5 }}>
                    <Phone className="w-4 h-4 mr-2" />
                    <span style={{ fontFamily:'Monstreat' , color:'#1A1A1A' }}> +91 93245 45236</span>
                    <span style={{ color: "#7C3AED", fontWeight: 700, marginLeft: 6 }}>
                      <img src={CheckIcons} alt="Checked Icon" />
                    </span>
                  </div>
                  <p style={{ fontSize: 10.5, color: "#B0B0B0", fontFamily:'Monstreat', margin: "2px 0 14px", textAlign: "left" }}>
                    Found via snov.io <SnovLogo className="ml-2 px-4" />
                  </p>

                  {/* CTA */}
                  <button style={{
                    width: "100%", 
                    background: "#333333", 
                    color: "#FFFFFF",
                    border: "none", 
                    borderRadius: 12, 
                    fontSize: 13.5, 
                    fontWeight: 700, 
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "12px 16px"
                  }}>
                    <img src={ContactStar} alt="" style={{ width: 16, height: 16 }} />
                    <span>Contacts Found</span>
                  </button>
                </div>
              </div>

              {/* ── 40+ SEARCH FILTERS CARD ── */}
              <div style={{
                flex: 1,
                background: "white", borderRadius: 24, padding: "20px",
                boxShadow: "0 12px 32px rgba(15,23,42,0.07)"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <div style={{
                    width: 30, height: 30, background: "#DCFCE7",
                    borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14
                  }}>🔎</div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>40+ Search Filters</span>
                </div>

                <div style={{ background: "#E7EDF3", borderRadius: 16, padding: "16px 14px" }}>
                  {/* Filter chips */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                    <span style={{ background: "#BBF7D0", color: "#166534", fontSize: 11, padding: "4px 10px", borderRadius: 999 }}>
                      Above 40+ ✕
                    </span>
                    <span style={{ background: "#BBF7D0", color: "#166534", fontSize: 11, padding: "4px 10px", borderRadius: 999 }}>
                      Bio Tech ✕
                    </span>
                    <span style={{ color: "#9CA3AF", fontSize: 11 }}>+ Add Filter</span>
                  </div>

                  {/* Table header */}
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#9CA3AF", marginBottom: 8 }}>
                    <span>Email</span>
                    <span>Phone</span>
                  </div>

                  {/* Rows */}
                  {[
                    { email: "aiden.brooks@gmail.com", phone: "+1 073xxxxxxx" },
                    { email: "jimmyanderson@gmail.com", phone: "+1 233xxxxxxx" },
                    { email: "philips@gmail.com", phone: "+1 023xxxxxxx" },
                  ].map((row, i) => (
                    <div key={i} style={{
                      display: "flex", justifyContent: "space-between",
                      fontSize: 11, color: "#374151", padding: "5px 0",
                      borderBottom: i < 2 ? "1px solid #D1D5DB" : "none"
                    }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <span style={{ fontSize: 10 }}>🟢</span> {row.email}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <span style={{ fontSize: 10 }}>🟢</span> {row.phone}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════ RIGHT BLOCK ═══════════════════════════════ */}
          <div style={{ background: "#EEF2F7", borderRadius: 24, padding: "36px 32px" }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#111827", margin: "0 0 8px", lineHeight: 1.4 }}>
              If it does not works for you ! try our{" "}
              <span style={{ color: "#15803D" }}>Advanced Waterfall Enrichment</span>{" "}
              <span style={{ color: "#15803D" }}>›</span>
            </h3>

            <div style={{
              background: "white", borderRadius: 20, padding: "28px 24px",
              boxShadow: "0 16px 40px rgba(15,23,42,0.06)", marginTop: 24
            }}>
              {vendors.map((vendor, i) => (
                <React.Fragment key={i}>
                  {/* Vendor row */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 0" }}>
                    {/* Left: vendor name */}
                    <span style={{ fontSize: 15, fontWeight: 500, color: "#374151", minWidth: 72 }}>
                      {vendor.name}
                    </span>

                    {/* Center: brand pill */}
                    <div style={{
                      display: "flex", alignItems: "center", gap: 8,
                      background: "#F3F4F6", borderRadius: 999,
                      padding: "6px 14px", minWidth: 140
                    }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                        <vendor.Logo />
                      </div>
                      <span style={{ fontSize: 13.5, fontWeight: 600, color: "#111827" }}>{vendor.brand}</span>
                    </div>

                    {/* Right: status */}
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      {vendor.found ? (
                        <>
                          {/* Multi-icon row for Vendor 4 */}
                          <div style={{ display: "flex", gap: 4 }}>
                            {[
                              { bg: "#DBEAFE", color: "#2563EB" },
                              { bg: "#DCFCE7", color: "#16A34A" },
                              { bg: "#FEF3C7", color: "#D97706" },
                              { bg: "#DCFCE7", color: "#16A34A" },
                            ].map((c, j) => (
                              <div key={j} style={{
                                width: 22, height: 22, borderRadius: "50%",
                                background: c.bg, display: "flex",
                                alignItems: "center", justifyContent: "center"
                              }}>
                                <Check size={12} color={c.color} />
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                          <X size={14} color="#9CA3AF" />
                          <span style={{ fontSize: 13, color: "#9CA3AF" }}>Contacts Not Found</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Downward arrow connector (except after last) */}
                  {i < vendors.length - 1 && (
                    <div style={{ display: "flex", justifyContent: "flex-start", padding: "2px 0 2px 36px" }}>
                      <ArrowDown size={18} color="#9CA3AF" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}