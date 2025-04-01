import React, { useState } from "react";
import PageHeader from "@/components/sections/PageHeader";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import QuoteRequestForm from "@/components/forms/QuoteRequestForm";

const IndustrialWashingPage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Industrial Component Washing Services"
        subtitle="Precision Cleaning for Critical Components"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Advanced Hydrocarbon-Based Washing Technology
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Eagle Eye, we specialize in high-precision component washing
              services using our advanced hydrocarbon-based washing machine. Our
              system is designed to ensure thorough cleaning of porous
              components, removing contaminants and residues while maintaining
              the integrity of delicate parts.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              With 20+ years of industrial expertise and a proven track record,
              our washing services have been successfully implemented at
              BorgWarner Emissions, Manesar, along with three other leading
              industrial companies, where we clean critical components with high
              precision. Our cutting-edge washing technology ensures superior
              cleanliness standards, making it ideal for industries requiring
              contaminant-free parts for optimal performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://res.cloudinary.com/dsegbtegv/image/upload/v1741669127/IMG_1455_knuv5o.jpg"
              alt="Industrial Washing Machine"
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
            Why Choose Hydrocarbon-Based Component Washing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-4xl mx-auto">
            Hydrocarbon cleaning technology is an eco-friendly and highly
            efficient method for removing oils, dirt, and microscopic
            contaminants from porous components. Compared to conventional
            washing methods, it provides deep penetration cleaning, ensuring:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Thorough removal of grease, oil, and contaminants",
              "Zero residue buildup, preventing operational inefficiencies",
              "Non-corrosive and material-friendly cleaning process",
              "Eco-friendly alternative to solvent-based cleaning",
              "Enhanced component lifespan and improved performance",
              "Cost-effective long-term maintenance solution",
            ].map((benefit, index) => (
              <Card
                key={index}
                className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all h-full flex items-start"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-foreground">{benefit}</p>
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
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-4xl mx-auto">
            Our industrial washing services are ideal for sectors requiring
            high-precision cleanliness, including:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all h-full">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Automotive & Manufacturing
              </h3>
              <p className="text-muted-foreground mb-4">
                Cleaning of engine parts, transmission components, and
                precision-machined parts.
              </p>
              <img
                src="https://res.cloudinary.com/dsegbtegv/image/upload/v1741669127/IMG_1454_gpqx3s.jpg"
                alt="Automotive Parts"
                className="w-full h-48 object-cover rounded-lg"
              />
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all h-full">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Aerospace & Defense
              </h3>
              <p className="text-muted-foreground mb-4">
                Ensuring dust-free and oil-free parts for aircraft components.
              </p>
              <img
                src="https://res.cloudinary.com/dsegbtegv/image/upload/v1741669127/IMG_1450_rdw3ct.jpg"
                alt="Aerospace Components"
                className="w-full h-48 object-cover rounded-lg"
              />
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all h-full">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Medical Equipment
              </h3>
              <p className="text-muted-foreground mb-4">
                Sterile and contaminant-free washing for sensitive instruments
                and machinery.
              </p>
              <img
                src="https://res.cloudinary.com/dsegbtegv/image/upload/v1741669126/IMG_1449_ih24ur.jpg"
                alt="Medical Equipment"
                className="w-full h-48 object-cover rounded-lg"
              />
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all h-full">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Electronics & Semiconductor
              </h3>
              <p className="text-muted-foreground mb-4">
                Cleaning delicate porous components without damage.
              </p>
              <img
                src="https://res.cloudinary.com/dsegbtegv/image/upload/v1741669127/IMG_1455_knuv5o.jpg"
                alt="Electronics Components"
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
            Our Process – Advanced Hydrocarbon Washing
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-4xl mx-auto">
            Our state-of-the-art washing machine follows a multi-stage cleaning
            process to ensure unmatched precision:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "1️⃣",
                title: "Pre-Cleaning Assessment",
                description:
                  "Inspection of components to determine cleaning requirements.",
              },
              {
                number: "2️⃣",
                title: "Hydrocarbon-Based Cleaning",
                description:
                  "Deep cleaning using eco-friendly hydrocarbon solvents for optimal contaminant removal.",
              },
              {
                number: "3️⃣",
                title: "Ultrasonic Treatment",
                description:
                  "Advanced vibration technology for ultra-fine cleaning of porous structures (if required).",
              },
              {
                number: "4️⃣",
                title: "Vacuum Drying & Final Inspection",
                description:
                  "Ensuring completely dry, residue-free components ready for use.",
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Why Choose Eagle Eye?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Proven Expertise – 20+ years of experience in industrial cleaning solutions.",
              "Trusted by Industry Leaders – Successfully serving BorgWarner Emissions, Manesar, along with three other major industrial companies with high-precision washing.",
              "Eco-Friendly & Cost-Effective – Hydrocarbon-based cleaning that ensures maximum efficiency with minimal environmental impact.",
              "Advanced Technology – State-of-the-art hydrocarbon washing with deep pore penetration for critical components.",
              "Customized Solutions – Tailored washing services based on your industry needs.",
              "Reliable Support – Dedicated team ensuring consistent quality and timely service.",
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
            Get Reliable & High-Precision Washing Services Today!
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
            Ensure flawless cleanliness and extended component life with Eagle
            Eye's advanced industrial washing solutions.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-[#0033e4] to-[#FA008A] hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all"
            onClick={() => {
              // Store the service type in localStorage
              localStorage.setItem(
                "enquiredPartName",
                "Industrial Component Washing Services",
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
            title="Request a Consultation for Industrial Washing"
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

export default IndustrialWashingPage;
