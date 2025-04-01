import React, { useState } from "react";
import PageHeader from "@/components/sections/PageHeader";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Check, Clock, Wrench, AlertTriangle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import QuoteRequestForm from "@/components/forms/QuoteRequestForm";

const ACMaintenancePage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="AC & Chiller Maintenance Services"
        subtitle="Ensuring Peak Performance & Uninterrupted Cooling"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Expert Panel AC & Chiller Maintenance
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Eagle Eye, we specialize in Panel AC and Chiller repair,
              maintenance, and servicing, ensuring your industrial and
              commercial cooling units run at peak efficiency. With 20+ years of
              industry experience and 1000+ satisfied clients, we are the most
              experienced, skilled, and competitive company in the
              market—offering reliable, cost-effective, and expert cooling
              solutions to prevent breakdowns and extend the life of your
              equipment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://res.cloudinary.com/dsegbtegv/image/upload/v1741676291/20190313_115947_igzox0.jpg"
              alt="AC Maintenance Service"
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
            Why Regular Maintenance of Panel ACs & Chillers is Critical
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-4xl mx-auto">
            Cooling systems are the backbone of industrial operations,
            preventing overheating, system failures, and costly downtime. 80% of
            machine failures occur due to inefficient cooling, leading to
            production losses and expensive repairs. Regular maintenance can
            prevent up to 10-20% operational losses and ensure uninterrupted
            machine performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: "Prevent System Failures",
                description:
                  "Regular maintenance prevents unexpected breakdowns and system failures",
              },
              {
                icon: Zap,
                title: "Improve Energy Efficiency",
                description:
                  "Well-maintained systems consume 20-30% less electricity",
              },
              {
                icon: Clock,
                title: "Extend Equipment Lifespan",
                description:
                  "Proper maintenance significantly extends the life of your cooling equipment",
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Our Comprehensive Services
          </h2>

          <div className="space-y-12">
            {/* AMC Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  1. Annual Maintenance Contracts (AMC)
                </h3>
                <p className="text-muted-foreground mb-6">
                  With our specialized AMC services, we provide scheduled
                  maintenance, regular check-ups, and servicing to ensure your
                  cooling systems function optimally year-round. Our AMC
                  benefits include:
                </p>
                <ul className="space-y-2">
                  {[
                    "Regular inspections & preventive maintenance",
                    "Priority service & emergency breakdown support",
                    "Cost savings on repairs and energy efficiency improvements",
                    "Customized maintenance plans based on your industry needs",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dsegbtegv/image/upload/v1741676291/IMG-20190627-WA0009_iqkudo.jpg"
                  alt="Annual Maintenance Contract"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Panel AC Repair */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 rounded-lg overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dsegbtegv/image/upload/v1741676291/IMG-20171214-WA0005_uizofm.jpg"
                  alt="Panel AC Repair"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  2. Panel AC Repair & Servicing
                </h3>
                <p className="text-muted-foreground mb-6">
                  Panel ACs play a crucial role in cooling electrical control
                  panels to prevent overheating and failures. Our services
                  include:
                </p>
                <ul className="space-y-2">
                  {[
                    "Fault diagnosis & troubleshooting",
                    "Cooling efficiency optimization",
                    "Compressor, fan motor & PCB repairs",
                    "Filter cleaning & refrigerant top-ups",
                    "Electrical circuit inspections & fixes",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Chiller Repair */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  3. Chiller Repair & Maintenance
                </h3>
                <p className="text-muted-foreground mb-6">
                  Industrial chillers are vital for temperature control in
                  manufacturing and commercial facilities. Our expert team
                  ensures efficient and reliable cooling with services such as:
                </p>
                <ul className="space-y-2">
                  {[
                    "Refrigerant leak detection & gas refilling",
                    "Compressor repair & replacement",
                    "Heat exchanger & condenser coil cleaning",
                    "Water flow checks & pump maintenance",
                    "Sensor calibration & energy efficiency optimization",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dsegbtegv/image/upload/v1741676291/IMG-20190416-WA0001_mvgfsa.jpg"
                  alt="Chiller Maintenance"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Emergency Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 rounded-lg overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dsegbtegv/image/upload/v1741676291/IMG-20190223-WA0005_bshtoe.jpg"
                  alt="Emergency Breakdown Services"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  4. Emergency Breakdown Services – 24/7 Support
                </h3>
                <p className="text-muted-foreground mb-6">
                  We understand that cooling failures can halt operations,
                  leading to huge financial losses. That's why Eagle Eye offers
                  24/7 emergency support to minimize downtime and restore
                  operations quickly. Our rapid response team is equipped to
                  diagnose and fix breakdowns efficiently, ensuring
                  uninterrupted production and business continuity.
                </p>
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <p className="text-foreground font-medium">
                    Call our emergency hotline: +91 99113 97792
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            How Our Services Help You Save Money
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-4xl mx-auto">
            Investing in regular maintenance with Eagle Eye not only prevents
            unexpected failures but also offers several cost-saving advantages:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "💰",
                title: "Avoids Expensive Emergency Repairs",
                description:
                  "Regular servicing is up to 5x cheaper than emergency breakdown repairs.",
              },
              {
                icon: "⚙️",
                title: "Increases Equipment Lifespan",
                description:
                  "Well-maintained chillers and Panel ACs last significantly longer, delaying the need for replacements.",
              },
              {
                icon: "🔋",
                title: "Improves Energy Efficiency",
                description:
                  "Cleaning and servicing cooling units can reduce electricity consumption by 20-30%, lowering operational costs.",
              },
              {
                icon: "📉",
                title: "Reduces Downtime & Prevents Production Losses",
                description:
                  "Every hour of machine downtime due to overheating can cost businesses thousands. Our preventive maintenance ensures seamless operations.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all h-full"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
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
            Why Choose Eagle Eye?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "20+ years of experience in industrial cooling solutions.",
              "1000+ satisfied clients across diverse industries.",
              "Most skilled and competitive service provider in the market.",
              "Affordable, cost-effective AMC plans tailored to your needs.",
              "24/7 breakdown support for minimal operational disruption.",
              "Industry-best technicians & engineers with advanced expertise.",
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
            Get the Best Cooling Solutions Today!
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
            Contact us now to schedule a maintenance visit or learn more about
            our Annual Maintenance Contracts.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-[#0033e4] to-[#FA008A] hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all"
            onClick={() => {
              // Store the service type in localStorage
              localStorage.setItem(
                "enquiredPartName",
                "AC Maintenance Services",
              );

              // Open the quote modal
              setIsQuoteModalOpen(true);
            }}
          >
            Request a Consultation
          </Button>

          {/* Quote Request Modal */}
          <Modal
            open={isQuoteModalOpen}
            onOpenChange={setIsQuoteModalOpen}
            size="lg"
            title="Request a Consultation for AC Maintenance"
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

export default ACMaintenancePage;
