import withImg from "../assets/images/withLeadCRM.png";
import withoutImg from "../assets/images/withoutLeadCRM.png";

import biDirectionalIcon from "../assets/icons/bi-directional.png";
import accessIcon from "../assets/icons/access.png";
import crmOverlayIcon from "../assets/icons/crm-overlay.png";
import aiIcon from "../assets/icons/beautiful-tradition.png";
import CompanyLogo from "../assets/icons/logo.png";
import saveHoursImg from "../assets/images/Savehrsmonth.png";
import arrowVector from "../assets/images/Vector1769.png";

import { X } from "lucide-react";

function Challenges() {
  return (
    <section className="py-14 bg-[#ffff]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Title */}
        <h2 className="text-[36px] font-bold text-center text-[#0f172a] mb-20">
          Every LinkedIn Prospector faces these daily challenges
        </h2>

        <div className="relative grid md:grid-cols-2 gap-16 items-start">
          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-[1px] bg-[#e2e8f0]" />
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-[#64748b] font-semibold">
            VS
          </div>

          {/* ================= LEFT ================= */}
          <div className="bg-[#fff7f8] p-8 rounded-[28px] shadow-sm border border-[#fbd5d9]">
            <div className="mb-8 rounded-2xl overflow-hidden">
              <img src={withoutImg} alt="Without LeadCRM" />
            </div>

            <h3 className="text-[22px] font-semibold text-[#D24B68] mb-6">
              Without LeadCRM
            </h3>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <X className="text-red-500 mt-1" size={20} />
                <div>
                  <div className="flex gap-2">
                    <p className="font-semibold text-[#0f172a]">
                      Manual Data Entry
                    </p>
                    <span className="bg-[#FFDCD4] text-[#FF4C51] text-xs px-4 py-1 rounded-full">
                      3+ Hours Wasted Daily
                    </span>
                  </div>
                  <p className="text-sm text-[#64748b] mt-1">
                    Copying LinkedIn contacts manually plus losing conversation
                    history
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <X className="text-red-500 mt-1" size={20} />
                <div>
                  <div className="flex gap-2">
                    <p className="font-semibold text-[#0f172a]">
                      Incomeplete Data
                    </p>
                    <span className="bg-[#FFDCD4] text-[#FF4C51] text-xs px-4 py-1 rounded-full">
                      60% Data incomplete
                    </span>
                  </div>
                  <p className="text-sm text-[#64748b] mt-1">
                    LinkedIn profiles missing Email and Phones
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <X className="text-red-500 mt-1" size={20} />
                <div>
                  <div className="flex gap-2">
                    <p className="font-semibold text-[#0f172a]">
                      No CRM Visibility
                    </p>
                    <span className="bg-[#FFDCD4] text-[#FF4C51] text-xs px-4 py-1 rounded-full">
                      Zero context available
                    </span>
                  </div>
                  <p className="text-sm text-[#64748b] mt-1">
                    Can't see CRM contacts while browsing
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <X className="text-red-500 mt-1" size={20} />
                <div>
                  <div className="flex gap-2">
                    <p className="font-semibold text-[#0f172a]">
                      Limited Productivity
                    </p>
                    <span className="bg-[#FFDCD4] text-[#FF4C51] text-xs px-4 py-1 rounded-full">
                      No smart assistance
                    </span>
                  </div>
                  <p className="text-sm text-[#64748b] mt-1">
                    No automation or AI assistance
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="bg-[#fff] p-8 rounded-[28px] shadow-sm border border-[#ccebdc]">
            <div className="mb-8 rounded-2xl overflow-hidden">
              <img src={withImg} alt="With LeadCRM" />
            </div>

            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-[22px] font-semibold text-[#097737]">
                With LeadCRM
              </h3>
              <img src={CompanyLogo} className="w-6 h-6" />
              <span className="bg-[#E6FFF1] text-[#097737] text-xs px-4 py-1 rounded-full">
                4+ Hours/day Saved
              </span>
            </div>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <img src={biDirectionalIcon} className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold text-[#0f172a]">
                    Complete Bi-Directional Sync
                  </p>
                  <p className="text-sm text-[#64748b] mt-1">
                    Automatically sync contacts, messages, and notes in real
                    time.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <img src={accessIcon} className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold text-[#0f172a]">
                    700M+ Contacts + Enrichment
                  </p>
                  <p className="text-sm text-[#64748b] mt-1">
                    Get verified emails and phone numbers instantly.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <img src={crmOverlayIcon} className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold text-[#0f172a]">
                    CRM Overlay on LinkedIn
                  </p>
                  <p className="text-sm text-[#64748b] mt-1">
                    See CRM insights directly on LinkedIn profiles.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <img src={aiIcon} className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold text-[#0f172a]">
                    AI Response + Templates + Bulk Exports
                  </p>
                  <p className="text-sm text-[#64748b] mt-1">
                    Save time with smart replies and automation.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Button */}
          <button
            className="
      bg-[#B3FC6A]
      hover:brightness-95
      text-[#0f172a]
      font-semibold
      text-[18px]
      px-12
      py-4
      rounded-[16px]
      shadow-md
      transition
    "
          >
            Start Using LeadCRM Now
          </button>

          {/* Arrow Vector */}
          <img
            src={arrowVector}
            alt="Arrow"
            className="w-[90px] object-contain"
          />

          {/* Save 40+ Hours Image */}
          <img
            src={saveHoursImg}
            alt="Save 40+ hours every Month"
            className="w-[220px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Challenges;
