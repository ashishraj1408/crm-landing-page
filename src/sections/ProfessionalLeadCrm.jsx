import leftImage from "../assets/images/professionalcrm/leftcorner-image.png"
import centerImage from "../assets/images/professionalcrm/center-image.png"
import rightImage from "../assets/images/professionalcrm/right-corner-image.png"

import salesforce from "../assets/images/professionalcrm/salesforce.png"
import hubspot from "../assets/images/professionalcrm/hubspot.png"
import pipedrive from "../assets/images/professionalcrm/pipedrive.png"
import capterra from "../assets/images/professionalcrm/capteraa.png"


function ProfessionalHero() {
  return (
    <section className="relative bg-[#eef1f5] pt-16 pb-24 overflow-hidden">

      {/* Top Heading */}
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-semibold text-[#090F4E]">
          Join Thousands of Professionals Using LeadCRM
        </h3>
      </div>

      {/* Blue Gradient Box */}
      <div className="relative max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-[#0d5c7f] to-[#1a7fa6] px-8 pt-16  overflow-hidden">

        {/* Dots Background Effect */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] [background-size:40px_40px]" />

        {/* Main Heading */}
        <div className="relative text-center mb-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Your LinkedIn Powerhouse for Smarter Lead Management
          </h1>

          {/* Logos Row */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
            <img src={salesforce} alt="" className="h-10 object-contain rounded-full" />
            <img src={hubspot} alt="" className="h-10 object-contain" />
            <img src={pipedrive} alt="" className="h-10 object-contain" />
            <img src={capterra} alt="" className="h-12 object-contain" />
          </div>
        </div>

        {/* Floating UI Images */}
        <div className="relative p-0 flex justify-center items-end w-full m-0">

          {/* Left */}
          <img
            src={leftImage}
            alt=""
            className="w-full rounded-2xl shadow-2xl translate-y-6"
          />

          {/* Center (Bigger) */}
          <img
            src={centerImage}
            alt=""
            className="w-full rounded-2xl px-4 shadow-2xl z-10"
          />

          {/* Right */}
          <img
            src={rightImage}
            alt=""
            className="w-full rounded-2xl shadow-2xl translate-y-6"
          />
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-[#9EE25A] hover:bg-[#8ed24e] transition px-10 py-4 rounded-xl text-lg font-semibold text-[#171717] shadow-lg">
          Get Started Today →
        </button>
      </div>

    </section>
  )
}

export default ProfessionalHero
