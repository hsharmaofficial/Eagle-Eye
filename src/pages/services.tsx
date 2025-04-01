import React from "react";
import PageHeader from "@/components/sections/PageHeader";
import ServiceShowcase from "@/components/sections/ServiceShowcase";
import EnhancedServices from "@/components/sections/EnhancedServices";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive AC & Industrial Washing Machine solutions for your business"
      />
      <div className="py-20">
        <ServiceShowcase />
      </div>
      <div className="py-20">
        <EnhancedServices />
      </div>
    </div>
  );
};

export default ServicesPage;
