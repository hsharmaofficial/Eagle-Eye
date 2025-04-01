import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  headline = "Never Let Your Machines Break Down – Stay Cool with Eagle Eye!",
  subheadline = "EAGLE EYE – EXPERTS IN PANEL AC & CHILLER MAINTENANCE\n\nPANEL AC • CHILLER • HVAC & OTHER COOLING UNITS – WE KEEP THEM RUNNING!\n\n80% of machine failures happen due to cooling issues—DON'T LET YOUR BUSINESS SUFFER!",

  ctaText = "Request a Quote",
  onCtaClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  },
}: HeroSectionProps) => {
  return (
    <div id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Spline Animation Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://my.spline.design/bganimation-537ee961cbaa0a578fe9a3488c12527b/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="scale-150"
          loading="lazy"
          referrerPolicy="no-referrer"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/10 via-transparent to-[#ec4899]/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {headline}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {subheadline}
          </p>

          <Button
            size="lg"
            onClick={onCtaClick}
            className="bg-gradient-to-r from-[#0033e4] to-[#FA008A] hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all"
          >
            {ctaText}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
