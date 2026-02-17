import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  LogIn
} from "lucide-react";

import logo from "../../assets/images/LeadcrmLogo.png";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-[#fff] border-b border-[#e6edf5] sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[70px] px-6">

        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="LeadCRM" className="h-10" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-[42px] text-[15px] font-medium text-[#334155]">

          <div className="flex items-center gap-1 cursor-pointer hover:text-black transition">
            Product <ChevronDown size={16} />
          </div>

          <div className="cursor-pointer hover:text-black transition">
            Pricing
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-black transition">
            Resources <ChevronDown size={16} />
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-black transition">
            Company <ChevronDown size={16} />
          </div>

        </nav>

        {/* Right Side Buttons */}
        <div className="hidden lg:flex items-center gap-[18px]">

          <button className="h-[48px] px-[28px] rounded-[14px] bg-[#2ea6c8] text-white text-[15px] font-medium hover:opacity-90 transition">
            Get Your Free Account
          </button>

          <button className="h-[48px] px-[26px] rounded-[14px] border border-[#2ea6c8] text-[#2ea6c8] text-[15px] font-medium hover:bg-[#e6f7fb] transition flex items-center gap-2">
            <LogIn size={16} />
            Login
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-6 text-[#334155] font-medium">

          <div className="flex justify-between items-center">
            Product <ChevronDown size={16} />
          </div>

          <div>Pricing</div>

          <div className="flex justify-between items-center">
            Resources <ChevronDown size={16} />
          </div>

          <div className="flex justify-between items-center">
            Company <ChevronDown size={16} />
          </div>

          <div className="pt-6 border-t border-gray-200 flex flex-col gap-4">

            <button className="h-[48px] rounded-[14px] bg-[#2ea6c8] text-white font-medium">
              Get Your Free Account
            </button>

            <button className="h-[48px] rounded-[14px] border border-[#2ea6c8] text-[#2ea6c8] font-medium flex items-center justify-center gap-2">
              <LogIn size={16} />
              Login
            </button>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
