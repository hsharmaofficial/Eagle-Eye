import React from "react";
import PageHeader from "@/components/sections/PageHeader";
import AboutUs from "@/components/sections/AboutUs";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TrustIndicators from "@/components/sections/TrustIndicators";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="About Us"
        subtitle="Two decades of excellence in AC & Industrial Washing Machine solutions"
      />
      <div className="py-20">
        <TrustIndicators />
      </div>
      <div className="py-20">
        <AboutUs />
      </div>
      <div className="py-20">
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default AboutPage;
