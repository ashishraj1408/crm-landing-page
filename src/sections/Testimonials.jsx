import davidImg from "../assets/images/howitworks/david.png";
import lillianImg from "../assets/images/howitworks/david.png";
import michaelImg from "../assets/images/howitworks/david.png";
import capterraLogo from "../assets/images/capteralogo.png";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";

function Testimonials() {
  return (
    <section className="py-24 bg-[#F5F6FA]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-[38px] font-semibold text-[#090F4E] tracking-tight Exo ">
            What people are saying about LeadCRM
          </h2>

          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full border border-[#0F1B4C] flex items-center justify-center text-[#0F1B4C]">
              <ChevronLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#0F1B4C] flex items-center justify-center text-white">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#EDE7F2] rounded-[28px] p-10 flex flex-col min-h-[320px]">
            <p className="text-[#2C2C2C] text-[16px]  leading-relaxed mb-8">
              “Reliable Data Sync I've only had to refresh the extension a
              couple of times. The multi-contact enrichment is still a huge
              plus, and support is very responsive.“
            </p>

            <div className="flex items-center gap-2 mb-8">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <img
                  src={capterraLogo}
                  className="w-5 h-5 object-contain"
                  alt="Capterra"
                />
              </div>

              <div className="flex items-center gap-1">
                <Star className="fill-[#0F1B4C] text-[#0F1B4C]" size={18} />
                <Star className="fill-[#0F1B4C] text-[#0F1B4C]" size={18} />
                <Star className="fill-[#0F1B4C] text-[#0F1B4C]" size={18} />
                <Star className="fill-[#0F1B4C] text-[#0F1B4C]" size={18} />
                <Star className="fill-[#0F1B4C] text-[#0F1B4C]" size={18} />
              </div>
            </div>

            <div className="border-t border-[#D6D1DD] pt-6 mt-auto flex items-center gap-4">
              <img
                src={davidImg}
                className="w-12 h-12 rounded-full object-cover"
                alt=""
              />
              <div>
                <p className="font-semibold text-[#0F1B4C] text-[18px]">
                  David Fincher
                </p>
                <p className="text-[#7A7A7A] text-[14px]">On Capterra</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#EDE7F2] rounded-[28px] p-10 flex flex-col min-h-[320px]">
            <p className="text-[#2C2C2C] text-[16px] leading-relaxed mb-8">
              “My experience with LeadCRM has been excellent. It has streamlined
              my workflow, improved lead tracking, and made follow-ups more
              efficient. The responsive customer support is a big plus. Highly
              recommend it for reliable lead management!”
            </p>

            <div className="flex items-center gap-2 mb-8">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <img
                  src={capterraLogo}
                  className="w-5 h-5 object-contain"
                  alt="Capterra"
                />
              </div>

              <div className="flex items-center gap-1">
                <Star className="fill-[#0F1B4C] text-[#0F1B4C]" size={18} />
                <Star className="fill-[#0F1B4C] text-[#0F1B4C]" size={18} />
                <Star className="fill-[#0F1B4C] text-[#0F1B4C]" size={18} />
                <Star className="fill-[#0F1B4C] text-[#0F1B4C]" size={18} />
                <Star className="fill-[#0F1B4C] text-[#0F1B4C]" size={18} />
              </div>
            </div>

            <div className="border-t border-[#D6D1DD] pt-6 mt-auto flex items-center gap-4">
              <img
                src={lillianImg}
                className="w-12 h-12 rounded-full object-cover"
                alt=""
              />
              <div>
                <p className="font-semibold text-[#0F1B4C] text-[18px]">
                  Lillian Williams
                </p>
                <p className="text-[#7A7A7A] text-[14px]">On Capterra</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#EDE7F2] rounded-[28px] p-10 flex flex-col min-h-[320px]">
            <p className="text-[#2C2C2C] text-[16px] leading-relaxed mb-8">
              “Reliable Data Sync I've only had to refresh the extension a
              couple of times. The multi-contact enrichment is still a huge
              plus, and support is very responsive.“
            </p>

            <div className="flex items-center gap-2 mb-8">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <img
                  src={capterraLogo}
                  className="w-5 h-5 object-contain"
                  alt="Capterra"
                />
              </div>

              <div className="flex items-center gap-1">
                <Star className="fill-[#0F1B4C] text-[#0F1B4C]" size={18} />
                <Star className="fill-[#0F1B4C] text-[#0F1B4C]" size={18} />
                <Star className="fill-[#0F1B4C] text-[#0F1B4C]" size={18} />
                <Star className="fill-[#0F1B4C] text-[#0F1B4C]" size={18} />
                <Star className="fill-[#0F1B4C] text-[#0F1B4C]" size={18} />
              </div>
            </div>

            <div className="border-t border-[#D6D1DD] pt-6 mt-auto flex items-center gap-4">
              <img
                src={michaelImg}
                className="w-12 h-12 rounded-full object-cover"
                alt=""
              />
              <div>
                <p className="font-semibold text-[#0F1B4C] text-[18px]">
                  Michael
                </p>
                <p className="text-[#7A7A7A] text-[14px]">On Capterra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
