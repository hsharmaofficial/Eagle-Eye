import React from "react";
import { Card } from "../ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Users, Badge, Cog, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const reasons = [
    {
      icon: Award,
      title: "20+ Years of Experience",
      description: "Proven expertise in the industry",
    },
    {
      icon: Users,
      title: "1000+ Clients Served",
      description: "Trusted across Delhi/NCR",
    },
    {
      icon: Badge,
      title: "Certified Technicians",
      description: "Skilled and qualified team",
    },
    {
      icon: Cog,
      title: "Rare Spare Parts",
      description: "Access to specialized components",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance",
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 relative flex items-center">
      <motion.div style={{ y }} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground">
            Industry-leading expertise and customer satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-lg p-2 mb-4 flex items-center justify-center">
                  {React.createElement(reason.icon, {
                    className: "w-8 h-8 text-white",
                  })}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
