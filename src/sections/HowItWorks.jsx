import googleLogo from "../assets/images/howitworks/google-logo.png";
import linkedinLogo from "../assets/images/howitworks/linkedin.png";
import davidImg from "../assets/images/howitworks/david.png";
import georgeImg from "../assets/images/howitworks/george.png";
import maryImg from "../assets/images/howitworks/marry-ferndez.jpg";
import assignNotes from "../assets/images/howitworks/assign-task-notes.png";
import dropdownArrow from "../assets/images/howitworks/dropdown-arrow.png";
import companyLogo from "../assets/icons/logo.png";
import socialIcons from "../assets/images/howitworks/all-social-icons.png";

import OneImage from "../assets/images/howitworks/one.png";
import TwoImage from "../assets/images/howitworks/two.png";
import ThreeImage from "../assets/images/howitworks/three.png";
import FourImage from "../assets/images/howitworks/four.png";
import topLine from "../assets/images/howitworks/top-line.png";
import midLine from "../assets/images/howitworks/mid-line.png";
import bottomLine from "../assets/images/howitworks/bottom-line.png";
import LightBall from "../assets/images/howitworks/light-ball.png";

import { UserPlus, Send, Mail, Phone } from "lucide-react";

function HowItWorks() {
  return (
    <section className="relative py-12 bg-[#E8EDF5] overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="mb-10">
          <h2 className="text-[40px] font-bold text-[#1e293b] mb-2">
            How it Works
          </h2>
          <p className="text-[#64748b] text-[15px]">
            From setup to success in{" "}
            <span className="font-semibold text-[#1e293b]">4 simple steps</span>
          </p>
        </div>

        {/* ================= CONNECTOR ================= */}
        <div className="relative">
          <div className="hidden lg:block absolute top-[90px] left-0 right-0 h-[2px] z-0">
            <div className="flex justify-between items-center h-full max-w-[94%] mx-auto">
              <div className="flex-1 border-t-2 border-dashed border-[#2ea6c8]/40" />
              <div className="w-8" />
              <div className="flex-1 border-t-2 border-dashed border-[#2ea6c8]/40" />
              <div className="w-8" />
              <div className="flex-1 border-t-2 border-dashed border-[#2ea6c8]/40" />
            </div>
          </div>

          {/* ================= CARDS GRID ================= */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {/* ================= CARD 1 ================= */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm flex flex-col min-h-[250px] relative  overflow-hidden">
              <div className="flex flex-col items-center justify-center text-center">
                <img src={OneImage} className="w-10 mb-4" alt="1" />

                <h3 className="text-[18px] font-bold text-[#1e293b] mb-2">
                  Install the Extension
                </h3>

                <p className="text-[#64748b] text-[13px] leading-relaxed mb-4">
                  Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure
                  and seamless.
                </p>
              </div>

              <div className="mt-auto relative h-[220px]">
                {/* Flow Icons */}
                <div className="absolute left-2 bottom-0 flex flex-col items-center gap-4">
                  <div className="w-11 h-11 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100">
                    <img src={googleLogo} className="w-5" alt="" />
                  </div>

                  <img src={dropdownArrow} className="w-4 opacity-60" alt="" />

                  <div className="w-11 h-11 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100">
                    <img src={companyLogo} className="w-5" alt="" />
                  </div>
                </div>

                {/* Chrome Mock */}
                <div className="absolute bottom-0 left-[90px] z-20 w-[220px] bg-white rounded-[18px] shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <img src={googleLogo} className="w-3.5" alt="" />
                      <span className="text-[9px] text-gray-600">
                        Chrome web store
                      </span>
                    </div>
                    <div className="w-14 h-2.5 bg-gray-100 rounded-full" />
                  </div>

                  <div className="flex gap-3 text-[9px] mb-2">
                    <span className="text-gray-400">Discover</span>
                    <span className="text-[#2ea6c8] border-b border-[#2ea6c8] pb-0.5 font-medium">
                      Extensions
                    </span>
                    <span className="text-gray-400">Themes</span>
                  </div>

                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-8 h-8 bg-[#e6f4fb] rounded-md flex items-center justify-center">
                      <span className="text-[#2ea6c8] font-bold text-[9px]">
                        LC
                      </span>
                    </div>

                    <div className="flex-1">
                      <p className="text-[10px] font-semibold text-[#0f172a] mb-1">
                        LeadCRM | Integrate Leads
                      </p>
                      <div className="space-y-1">
                        <div className="h-1 bg-[#e2e8f0] rounded w-3/4" />
                        <div className="h-1 bg-[#e2e8f0] rounded w-1/2" />
                      </div>
                    </div>
                  </div>

                  <img src={assignNotes} className="rounded-md w-full" alt="" />
                </div>
              </div>
            </div>

            {/* ================= CARD 2 ================= */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm flex flex-col min-h-[250px] relative  overflow-hidden">
              <div className="flex flex-col items-center justify-center text-center">
                <img src={TwoImage} className="w-14 mb-4" alt="2" />

                <h3 className="text-[18px] font-bold text-[#1e293b] mb-2">
                  Browse LinkedIn
                </h3>

                <p className="text-[#64748b] text-[13px] leading-relaxed mb-4">
                  Use LinkedIn normally, our extension auto-captures data and
                  reveals CRM contacts instantly.
                </p>
              </div>

              <div className="mt-auto bg-[#F3F4F6] rounded-[18px] overflow-hidden border border-gray-200  relative z-20 top-[40px] left-[30px] w-full">
                {/* Top bar */}
                <div className="px-4 py-3 border-b border-gray-200 bg-[#F8F9FA]">
                  <div className="flex items-center gap-3">
                    <img src={linkedinLogo} className="w-4" alt="LinkedIn" />
                    <div className="flex-1 h-3 bg-gray-300 rounded-full"></div>
                  </div>
                </div>

                {/* Filters */}
                <div className="px-4 py-3 border-b border-gray-200 bg-white">
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 bg-[#057642] text-white text-[10px] rounded-full font-medium flex items-center gap-1">
                      People
                      <span className="text-[9px]">▾</span>
                    </button>

                    <button className="px-2.5 py-1 bg-gray-100 text-gray-600 text-[10px] rounded-full">
                      1st
                    </button>

                    <button className="px-2.5 py-1 bg-gray-100 text-gray-600 text-[10px] rounded-full">
                      2nd
                    </button>

                    <button className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] rounded-full flex items-center gap-1">
                      Company
                      <span className="text-[9px]">▾</span>
                    </button>

                    <button className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] rounded-full flex items-center gap-1">
                      Location
                      <span className="text-[9px]">▾</span>
                    </button>
                  </div>
                </div>

                {/* Result Count */}
                <div className="px-4 py-2 text-[10px] text-gray-500 bg-white">
                  About 42 People
                </div>

                {/* Person 1 */}
                <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100 bg-white">
                  <div className="flex items-center gap-3">
                    <img
                      src={maryImg}
                      className="w-9 h-9 rounded-full object-cover"
                      alt="Mary"
                    />
                    <div>
                      <p className="text-[12px] font-semibold text-gray-900">
                        Mary Fernandez
                      </p>
                      <p className="text-[10px] text-gray-600">
                        Co-Founder at Abc llc
                      </p>
                      <p className="text-[9px] text-gray-400">Spain</p>
                    </div>
                  </div>

                  <button className="px-3 py-1 text-[10px] font-medium border border-[#0A66C2] text-[#0A66C2] rounded-full hover:bg-blue-50 transition">
                    Connect
                  </button>
                </div>

                {/* Person 2 */}
                <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100 bg-white">
                  <div className="flex items-center gap-3">
                    <img
                      src={georgeImg}
                      className="w-9 h-9 rounded-full object-cover"
                      alt="George"
                    />
                    <div>
                      <p className="text-[12px] font-semibold text-gray-900">
                        George
                      </p>
                      <p className="text-[10px] text-gray-600">
                        Co-Founder at Abc llc
                      </p>
                      <p className="text-[9px] text-gray-400">Spain</p>
                    </div>
                  </div>

                  <button className="px-3 py-1 text-[10px] font-medium border border-[#0A66C2] text-[#0A66C2] rounded-full hover:bg-blue-50 transition">
                    Connect
                  </button>
                </div>
              </div>
            </div>

            {/* ================= CARD 3 ================= */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm flex flex-col min-h-[250px] relative  overflow-hidden">
              <div className="flex flex-col items-center justify-center text-center">
                <img src={ThreeImage} className="w-14 mb-4" alt="3" />

                <h3 className="text-[18px] font-bold text-[#1e293b] mb-2">
                  Get Enriched Data
                </h3>

                <p className="text-[#64748b] text-[13px] leading-relaxed mb-6">
                  Enrich profiles with verified emails, phones, and company data
                  with 95%+ accuracy guaranteed.
                </p>
              </div>

              <div className="mt-auto relative bg-white rounded-[20px] shadow-md p-5 border top-[40px] border-gray-100 z-20 ">
                <div className="flex items-start gap-1 flex-col sm:flex-row">
                  <div className="relative">
                    <img
                      src={davidImg}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#2ea6c8] rounded-full border-2 border-white flex items-center justify-center">
                      <img src={companyLogo} className="w-3" />
                    </div>
                  </div>

                  <div className="flex-1 pt-1">
                    <h4 className="text-[16px] font-semibold text-[#1e293b]">
                      David Steinhoff
                    </h4>
                    <div className="h-[6px] w-[110px] bg-gray-200 rounded-full mt-2" />
                  </div>
                </div>

                <div className="absolute -top-6 -right-6">
                  <img src={socialIcons} className="w-[110px]" />
                </div>

                <div className="flex gap-3 mt-4">
                  <button className="flex-1 bg-[#0A66C2] text-white text-[12px] py-1 rounded-full flex items-center justify-center gap-2">
                    <UserPlus size={14} />
                    Connect
                  </button>

                  <button className="flex-1 border border-[#0A66C2] text-[#0A66C2] text-[12px] py-1 rounded-full flex items-center justify-center gap-2">
                    <Send size={14} />
                    Message
                  </button>
                </div>

                <div className="border-t border-gray-200 my-4" />

                <div className="space-y-3 text-[13px]">
                  <div className="flex items-center gap-3">
                    <Mail size={14} className="text-gray-400" />
                    <span className="text-gray-500 w-[55px]">E Mail</span>
                    <span className="text-[#1A1A1A] font-medium ml-auto text-[12px] w-full text-ellipsis overflow-hidden whitespace-nowrap">
                      davidsteinhoff@gmail.com
                    </span>
                  </div>

                  <div className="flex text-start items-center gap-3">
                    <Phone size={14} className="text-gray-400" />
                    <span className="text-gray-500 w-[55px]">Phone</span>
                    <span className="text-[#1A1A1A] font-medium ml-auto text-[12px] w-full text-ellipsis overflow-hidden whitespace-nowrap">
                      +91 98765 43210
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= CARD 4 ================= */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm flex flex-col min-h-[250px] relative overflow-hidden ">
              <div className="flex flex-col items-center justify-center text-center">
                <img src={FourImage} className="w-14 mb-4" alt="4" />

                <h3 className="text-[18px] font-bold text-[#1e293b] mb-2">
                  Sync to CRM Instantly
                </h3>

                <p className="text-[#64748b] text-[13px] leading-relaxed mb-6">
                  Prospect data syncs to your CRM instantly with history,
                  tracking, and AI powered insights.
                </p>
              </div>

              {/* BUTTON AREA */}
              <div className="mt-auto relative h-[190px]">
                {/* ORANGE */}
                <div
                  className="absolute left-0 top-0 w-[136px] h-[38px] flex items-center justify-center
      bg-[#FFF9F5] border border-[#F8761E]
      rounded-[24px]
      shadow-[0px_38px_79px_rgba(17,12,46,0.15)]"
                >
                  <span className="text-[#F8761E] text-[12px] font-medium">
                    Sync with CRM
                  </span>
                </div>

                {/* BLUE */}
                <div
                  className="absolute left-0 top-[55px] w-[136px] h-[38px] flex items-center justify-center
      bg-[#EFFBFF] border border-[#00A1E0]
      rounded-[24px]
      shadow-[0px_38px_79px_rgba(17,12,46,0.15)]"
                >
                  <span className="text-[#00A1E0] text-[12px] font-medium">
                    Sync with CRM
                  </span>
                </div>

                {/* GREEN */}
                <div
                  className="absolute left-0 top-[110px] w-[136px] h-[38px] flex items-center justify-center
      bg-[#EEFFF5] border border-[#097737]
      rounded-[24px]
      shadow-[0px_38px_79px_rgba(17,12,46,0.15)]"
                >
                  <span className="text-[#097737] text-[12px] font-medium">
                    Sync with CRM
                  </span>
                </div>

                {/* CONNECTOR LINES IMAGES */}
                <img
                  src={topLine}
                  className="absolute left-[140px] top-[20px] w-[80px]"
                  alt=""
                />

                <img
                  src={midLine}
                  className="absolute left-[140px] top-[73px] w-[80px]"
                  alt=""
                />

                <img
                  src={bottomLine}
                  className="absolute left-[140px] top-[80px] w-[80px]"
                  alt=""
                />

                {/* RESULT BUBBLE */}
                <div
                  className="absolute left-[225px] top-[63px]
      w-[86px] h-[25px]
      flex items-center justify-center
      bg-[#EFFFFC] border border-[#1D4841]
      rounded-[19px]
      shadow-[0px_7px_29px_rgba(100,100,111,0.2)]"
                >
                  <span className="text-[#1D4841] text-[10px] font-medium">
                    Sync with CRM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-12 text-center">
          <button className="bg-[#A3E635] text-[#0f172a] font-bold px-10 py-3 rounded-[14px] text-[15px] shadow-lg">
            Try LeadCRM Now →
          </button>
        </div>
      </div>

      {/* BOTTOM RIGHT LIGHT BALL */}
      <img src={LightBall} alt="Light Decoration" className="hiw-lightball" />
    </section>
  );
}

export default HowItWorks;
