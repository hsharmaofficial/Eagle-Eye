import React from "react";
import { Card } from "../ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { Settings, Wrench, Clock, Users } from "lucide-react";

const AboutUs = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const services = [
    {
      icon: Settings,
      title: "Installation & Sales",
      description: "Expert setup and new equipment",
    },
    {
      icon: Wrench,
      title: "Annual Maintenance",
      description: "Regular servicing and upkeep",
    },
    {
      icon: Clock,
      title: "Repairs & Service",
      description: "Quick and reliable fixes",
    },
    {
      icon: Users,
      title: "Spare Parts",
      description: "Genuine replacement components",
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-20 px-4 md:px-8 relative flex items-center"
    >
      <motion.div style={{ y }} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            20+ Years of Excellence in Cooling & Industrial Cleaning Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Eagle Eye, we specialize in Annual Maintenance Contracts (AMC) to
            ensure your Panel ACs, Chillers, and Industrial HVAC systems run at
            peak efficiency all year round. With 24/7 breakdown support, expert
            servicing, and the most competitive rates, we help you avoid
            downtime and massive losses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((Service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-lg p-2 mb-4 flex items-center justify-center">
                  {React.createElement(Service.icon, {
                    className: "w-8 h-8 text-white",
                  })}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {Service.title}
                </h3>
                <p className="text-muted-foreground">{Service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
