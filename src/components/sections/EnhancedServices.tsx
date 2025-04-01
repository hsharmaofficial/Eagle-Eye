import React from "react";
import { Card } from "../ui/card";
import { motion } from "framer-motion";

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface EnhancedServicesProps {
  services?: ServiceProps[];
}

const defaultServices: ServiceProps[] = [
  {
    title: "Panel AC & Chiller Maintenance",
    description:
      "Expert installation, annual maintenance contracts, repair, and servicing for all commercial cooling systems.",
    icon: "https://cdn.lordicon.com/iltqorsz.json", // AC/Cooling icon
    features: [
      "Panel AC Maintenance",
      "Chiller Servicing",
      "HVAC System Support",
      "24/7 Breakdown Assistance",
    ],
  },
  {
    title: "Industrial Washing Machines",
    description:
      "Comprehensive solutions for industrial washing machines including installation, maintenance, repairs, and sales.",
    icon: "https://cdn.lordicon.com/xsdtfyne.json", // Washing icon
    features: [
      "Installation & Setup",
      "Annual Maintenance Contracts",
      "Repairs & Servicing",
      "Sales & Spare Parts",
    ],
  },
];

const EnhancedServices = ({
  services = defaultServices,
}: EnhancedServicesProps) => {
  return (
    <section
      id="enhanced-services"
      className="w-full py-20 px-4 md:px-8 bg-background flex items-center"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive Solutions for Your Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From installation to maintenance, we provide end-to-end services for
            all your AC and industrial washing machine needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <lord-icon
                        src={service.icon}
                        trigger="hover"
                        colors="primary:#2563eb,secondary:#ec4899"
                        style={{ width: "64px", height: "64px" }}
                      ></lord-icon>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    <h4 className="text-lg font-medium text-foreground mb-4">
                      Our Services Include:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedServices;
