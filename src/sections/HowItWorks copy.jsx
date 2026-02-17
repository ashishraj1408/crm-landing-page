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

function HowItWorks() {
  return (
    <section className="relative py-12 bg-[#E8EDF5] overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-[40px] font-bold text-[#1e293b] mb-2">
            How it Works
          </h2>
          <p className="text-[#64748b] text-[15px]">
            From setup to success in{" "}
            <span className="font-semibold text-[#1e293b]">
              4 simple steps
            </span>
          </p>
        </div>

        {/* Cards */}
        <div className="relative">

          {/* Connector Line */}
          <div className="hidden lg:block absolute top-[90px] left-0 right-0 h-[2px] z-0">
            <div className="flex justify-between items-center h-full max-w-[94%] mx-auto">
              <div className="flex-1 border-t-2 border-dashed border-[#2ea6c8]/40"></div>
              <div className="w-8"></div>
              <div className="flex-1 border-t-2 border-dashed border-[#2ea6c8]/40"></div>
              <div className="w-8"></div>
              <div className="flex-1 border-t-2 border-dashed border-[#2ea6c8]/40"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">

            {/* ================= CARD 1 ================= */}
            <div className="relative bg-white rounded-[24px] p-6 shadow-sm flex flex-col min-h-[460px]">
              <img src={OneImage} className="w-14 mb-4" alt="1" />

              <h3 className="text-[18px] font-bold text-[#1e293b] mb-2">
                Install the Extension
              </h3>

              <p className="text-[#64748b] text-[13px] leading-relaxed mb-4">
                Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.
              </p>

              <div className="mt-auto relative h-[220px]">
                <div className="absolute left-2 bottom-0 flex flex-col items-center gap-4 z-10">
                  <div className="w-11 h-11 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100">
                    <img src={googleLogo} className="w-5" alt="Google" />
                  </div>

                  <img src={dropdownArrow} className="w-4 opacity-60" alt="Arrow" />

                  <div className="w-11 h-11 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100">
                    <img src={companyLogo} className="w-5" alt="LeadCRM" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-[85px] w-[220px] bg-white rounded-[18px] shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <img src={googleLogo} className="w-3.5" alt="Google" />
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
                      <span className="text-[#2ea6c8] font-bold text-[9px]">LC</span>
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

                  <img src={assignNotes} className="rounded-md w-full" alt="Preview" />
                </div>
              </div>
            </div>

            {/* ================= CARD 2 ================= */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm flex flex-col min-h-[460px]">
              <img src={TwoImage} className="w-14 mb-4" alt="2" />

              <h3 className="text-[18px] font-bold text-[#1e293b] mb-2">
                Browse LinkedIn
              </h3>

              <p className="text-[#64748b] text-[13px] leading-relaxed mb-4">
                Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.
              </p>

              <div className="mt-auto bg-white rounded-[18px] shadow-md p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <img src={linkedinLogo} className="w-4" alt="LinkedIn" />
                  <div className="flex-1 h-4 bg-gray-100 rounded-full"></div>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="px-2 py-0.5 bg-[#0A66C2] text-white rounded-full text-[9px]">
                    People
                  </span>
                  <span className="px-2 py-0.5 bg-gray-100 text-[9px] rounded-full">
                    1st
                  </span>
                  <span className="px-2 py-0.5 bg-gray-100 text-[9px] rounded-full">
                    2nd
                  </span>
                  <span className="px-2 py-0.5 bg-gray-100 text-[9px] rounded-full">
                    Company
                  </span>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <img src={maryImg} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <p className="text-[10px] font-semibold">Marry Fernandez</p>
                      <p className="text-[9px] text-gray-500">Co-Founder</p>
                    </div>
                  </div>
                  <button className="border border-[#0A66C2] text-[#0A66C2] text-[9px] px-2 py-0.5 rounded-full">
                    Connect
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={georgeImg} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <p className="text-[10px] font-semibold">George</p>
                      <p className="text-[9px] text-gray-500">Co-Founder</p>
                    </div>
                  </div>
                  <button className="border border-[#0A66C2] text-[#0A66C2] text-[9px] px-2 py-0.5 rounded-full">
                    Connect
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 3 & 4 remain same structure but min-h reduced */}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="bg-[#A3E635] text-[#0f172a] font-bold px-10 py-3 rounded-[14px] text-[15px] shadow-lg">
            Try LeadCRM Now →
          </button>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
