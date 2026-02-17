import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero";
import Footer from "../components/layout/Footer";
import Challenges from "../sections/Challenges";
import HowItWorks from "../sections/HowItWorks";
import Testimonials from "../sections/Testimonials";
import Integrations from "../sections/Integrations";
// import FinalCTA from "../sections/FinalCTA";

import { Link } from "lucide-react";
import LinkedInSales from "../sections/LinkedInSales";
import ProfessionalHero from "../sections/ProfessionalLeadCrm";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Challenges />
      <HowItWorks />
      <Testimonials />
      <LinkedInSales />
      <Integrations />
      <ProfessionalHero />
      {/* <FinalCTA /> */}

      <Footer />
    </>
  );
}

export default Home;
