import React from "react";
import PageHeader from "@/components/sections/PageHeader";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Terms of Service"
        subtitle="Understanding our service agreement"
      />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2>Service Agreement</h2>
          <p>
            By using Eagle Eye Enterprise's services, you agree to these terms.
            Please read them carefully.
          </p>

          <h3>Service Provision</h3>
          <ul>
            <li>We provide AC and industrial washing machine services</li>
            <li>Service availability may vary by location</li>
            <li>Service quality is guaranteed with warranty</li>
          </ul>

          <h3>Customer Responsibilities</h3>
          <ul>
            <li>Provide accurate service location and contact information</li>
            <li>Ensure access to service areas</li>
            <li>Timely payment for services rendered</li>
          </ul>

          <h3>Warranty and Service Guarantee</h3>
          <p>
            Our services come with a standard warranty period. Specific terms
            vary by service type.
          </p>

          <h3>Contact</h3>
          <p>
            For questions about these terms, contact us at{" "}
            <a href="mailto:contact@eagleeyeac.com" className="text-primary">
              contact@eagleeyeac.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
