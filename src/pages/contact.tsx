import React from "react";
import PageHeader from "@/components/sections/PageHeader";
import Contact from "@/components/sections/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our experts for all your AC & Industrial Washing Machine needs"
      />
      <div className="py-20">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
