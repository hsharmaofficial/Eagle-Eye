import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

interface ServiceShowcaseProps {
  services?: ServiceCardProps[];
}

const defaultServices: ServiceCardProps[] = [
  {
    title: "AC Services",
    description:
      "Professional AC installation, maintenance, and repair services for residential and commercial properties.",
    imageUrl:
      "https://images.unsplash.com/photo-1621532316674-6eec9f6e56d9?auto=format&fit=crop&q=80&w=500",
  },
  {
    title: "Industrial Washing Machine Services",
    description:
      "Expert maintenance and repair services for industrial washing machines and laundry equipment.",
    imageUrl:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=500",
  },
];

const ServiceCard = ({ title, description, imageUrl }: ServiceCardProps) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <Card className="h-full bg-card border-border overflow-hidden hover:border-primary/50 transition-colors">
        <div className="h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServiceShowcase = ({
  services = defaultServices,
}: ServiceShowcaseProps) => {
  return (
    <section
      id="services"
      className="w-full py-20 px-4 md:px-8 bg-background flex items-center"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
