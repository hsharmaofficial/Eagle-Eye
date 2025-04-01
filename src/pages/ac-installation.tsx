import React, { useState } from "react";
import PageHeader from "@/components/sections/PageHeader";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Check, Settings, Shield, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import QuoteRequestForm from "@/components/forms/QuoteRequestForm";

const ACInstallationPage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="New Panel AC & Chiller"
        subtitle="Professional Installation for Optimal Performance"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              New Panel AC & Chiller Systems
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Eagle Eye Enterprise, we provide professional installation
              services for all types of cooling systems, including panel ACs,
              water chillers, and oil chillers. With over two decades of
              experience, our team ensures that your cooling systems are
              installed correctly, efficiently, and according to manufacturer
              specifications.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              <strong>Available Systems:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>New Panel AC From 450W to 6000W</li>
                <li>Water Chiller Available 1ton to 100ton</li>
                <li>Oil Chiller Available from 1ton to 20ton</li>
              </ul>
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              All systems are available with professional installation &
              commissioning services. Our certified technicians handle
              everything from site assessment to final testing, ensuring your
              systems operate at peak efficiency from day one.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://res.cloudinary.com/dsegbtegv/image/upload/v1742284475/Eagle_eye_PAC_nr1d3v.jpg"
              alt="Eagle Eye Panel AC Installation"
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Our Installation Process
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-4xl mx-auto">
            We follow a comprehensive, systematic approach to ensure flawless
            installation of your cooling systems:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Site Assessment",
                description:
                  "Thorough evaluation of your facility to determine optimal placement and specifications.",
              },
              {
                number: "02",
                title: "Custom Solution Design",
                description:
                  "Tailored installation plan based on your specific cooling requirements and space constraints.",
              },
              {
                number: "03",
                title: "Professional Installation",
                description:
                  "Expert installation by certified technicians following industry best practices.",
              },
              {
                number: "04",
                title: "Testing & Commissioning",
                description:
                  "Comprehensive testing to ensure optimal performance and efficiency before handover.",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all h-full"
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#ec4899] mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Types of Cooling Systems We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all h-full">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Panel AC Systems (450W-6000W)
              </h3>
              <p className="text-muted-foreground mb-4">
                Specialized cooling units designed for electrical control panels
                and industrial cabinets. Available in top-mount and side-mount
                configurations.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <img
                  src="https://res.cloudinary.com/dsegbtegv/image/upload/v1742284474/Eagle_eye_Panel_AC_twxgig.jpg"
                  alt="Panel AC Systems"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="https://res.cloudinary.com/dsegbtegv/image/upload/v1742284472/Top_Mount_Panel_AC_p5ryd3.jpg"
                  alt="Top Mount Panel AC"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <img
                src="https://res.cloudinary.com/dsegbtegv/image/upload/v1742284473/Floor_Mount_Panel_AC_gq9hkw.jpg"
                alt="Floor Mount Panel AC"
                className="w-full h-32 object-cover rounded-lg"
              />
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all h-full">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Water Chillers (1-100 ton)
              </h3>
              <p className="text-muted-foreground mb-4">
                High-capacity cooling systems for process cooling in
                manufacturing facilities. Available in various capacities to
                meet different industrial needs.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <img
                  src="https://res.cloudinary.com/dsegbtegv/image/upload/v1742284475/Eagle_eye_Chiller_wuof65.jpg"
                  alt="Eagle Eye Chiller"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="https://res.cloudinary.com/dsegbtegv/image/upload/v1742284473/Eagle_Eye_Water_Chiller_n7tw0y.jpg"
                  alt="Eagle Eye Water Chiller"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <img
                src="https://res.cloudinary.com/dsegbtegv/image/upload/v1742284470/Chiller_100ton_qbk6lr.jpg"
                alt="100 Ton Chiller"
                className="w-full h-32 object-cover rounded-lg mt-2"
              />
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all h-full">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Oil Chillers (1-20 ton)
              </h3>
              <p className="text-muted-foreground mb-4">
                Specialized cooling systems designed for industrial oil cooling
                applications. Critical for maintaining precise temperatures in
                hydraulic systems and industrial machinery.
              </p>
              <img
                src="https://res.cloudinary.com/dsegbtegv/image/upload/v1742284475/Eagle_eye_Chiller_wuof65.jpg"
                alt="Oil Chiller Systems"
                className="w-full h-48 object-cover rounded-lg"
              />
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Benefits of Professional Installation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Optimal Energy Efficiency",
                description:
                  "Properly installed systems consume up to 30% less energy, reducing operational costs.",
              },
              {
                icon: Settings,
                title: "Maximum Performance",
                description:
                  "Expert installation ensures your system delivers its full cooling capacity.",
              },
              {
                icon: Shield,
                title: "Extended Equipment Life",
                description:
                  "Correct installation prevents premature wear and extends system lifespan.",
              },
              {
                icon: Award,
                title: "Warranty Protection",
                description:
                  "Professional installation maintains manufacturer warranty coverage.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all h-full"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-lg p-2 mb-4 flex items-center justify-center">
                  {React.createElement(benefit.icon, {
                    className: "w-8 h-8 text-white",
                  })}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Why Choose Eagle Eye for Your AC Installation?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "20+ years of specialized experience in industrial and commercial cooling systems.",
              "Certified technicians trained in the latest installation techniques and safety protocols.",
              "Comprehensive service from initial consultation to post-installation support.",
              "Use of high-quality materials and components for reliable installations.",
              "Adherence to industry standards and manufacturer specifications.",
              "Competitive pricing with transparent quotes and no hidden costs.",
            ].map((reason, index) => (
              <Card
                key={index}
                className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all h-full flex items-start"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-foreground">{reason}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Get Your New Panel AC or Chiller?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
            Contact Eagle Eye Enterprise today for a consultation and free
            installation quote. Our experts will help you select the right
            cooling solution for your specific needs.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-[#0033e4] to-[#FA008A] hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all"
            onClick={() => {
              // Store the service type in localStorage
              localStorage.setItem(
                "enquiredPartName",
                "AC Installation Services",
              );

              // Open the quote modal
              setIsQuoteModalOpen(true);
            }}
          >
            Get a Free Installation Quote
          </Button>

          {/* Quote Request Modal */}
          <Modal
            open={isQuoteModalOpen}
            onOpenChange={setIsQuoteModalOpen}
            size="lg"
            title="Request a Free Installation Quote"
          >
            <QuoteRequestForm
              isSticky={false}
              isModal={true}
              onSuccess={() => setIsQuoteModalOpen(false)}
            />
          </Modal>
        </motion.div>
      </div>
    </div>
  );
};

export default ACInstallationPage;
