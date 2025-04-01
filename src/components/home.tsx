import React from "react";
import Navbar from "./layout/Navbar";
import HeroSection from "./sections/HeroSection";
import TrustIndicatorsComponent from "./sections/TrustIndicators";
import OurClients from "./sections/OurClients";
import Contact from "./sections/Contact";
import AboutUs from "./sections/AboutUs";
import EnhancedServices from "./sections/EnhancedServices";
import WhyChooseUs from "./sections/WhyChooseUs";
import Testimonials from "./sections/Testimonials";
import Footer from "./layout/Footer";

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-[#2563eb]/10 via-transparent to-[#ec4899]/10 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      </div>
      <div className="relative z-10">
        <main className="relative">
          <HeroSection />
          <div className="relative z-10 space-y-0">
            <div className="bg-gradient-to-r from-[#2563eb]/5 to-[#ec4899]/5">
              <TrustIndicatorsComponent />
              <OurClients />
            </div>
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/10 to-transparent transform -skew-y-6 scale-110" />
              <AboutUs />
            </div>
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-bl from-[#ec4899]/10 to-transparent transform skew-y-6 scale-110" />
              <EnhancedServices />
            </div>
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2563eb]/10 to-[#ec4899]/5 transform -skew-y-3 scale-110" />
              <WhyChooseUs />
            </div>
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2563eb]/10 to-[#ec4899]/5 transform -skew-y-3 scale-110" />
              <Testimonials />
            </div>
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tl from-[#ec4899]/10 to-[#2563eb]/5 transform skew-y-3 scale-110" />
              <Contact />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
