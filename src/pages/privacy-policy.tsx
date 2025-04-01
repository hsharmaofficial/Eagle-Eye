import React from "react";
import PageHeader from "@/components/sections/PageHeader";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Privacy Policy"
        subtitle="Learn how we protect and handle your information"
      />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2>Information Collection and Use</h2>
          <p>
            Eagle Eye Enterprise is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, and safeguard your
            information when you use our services.
          </p>

          <h3>Information We Collect</h3>
          <ul>
            <li>Contact information (name, email, phone number)</li>
            <li>Service request details</li>
            <li>Location information for service delivery</li>
          </ul>

          <h3>How We Use Your Information</h3>
          <ul>
            <li>To provide and maintain our services</li>
            <li>To contact you regarding service requests</li>
            <li>To send important service updates</li>
          </ul>

          <h3>Data Protection</h3>
          <p>
            We implement appropriate security measures to protect your personal
            information and ensure it is not accessed, disclosed, altered, or
            destroyed.
          </p>

          <h3>Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a href="mailto:contact@eagleeyeac.com" className="text-primary">
              contact@eagleeyeac.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
