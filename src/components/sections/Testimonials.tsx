import React from "react";
import { Card } from "../ui/card";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialProps {
  testimonials?: Array<{
    name: string;
    company: string;
    text: string;
    rating: number;
  }>;
}

const defaultTestimonials = [
  {
    name: "Madan Pal Arya",
    company: "OSG India",
    text: "Providing best service to our organisation from last 13 years.",
    rating: 5,
  },
  {
    name: "Vikash",
    company: "Moonlight",
    text: "After regular maintenance and servicing from Eagle Eye, our panel ACs are running smoother than ever. No more overheating issues in our control rooms.",
    rating: 5,
  },
  {
    name: "Santosh",
    company: "Amtek",
    text: "Thanks to Eagle Eye's maintenance services, our cooling systems last longer, and we are able to avoid costly emergency repairs, there team is highly skilled.",
    rating: 5,
  },
  {
    name: "Latish",
    company: "FCC clutch",
    text: "Our panel ACs now work flawlessly thanks to Eagle Eye's prompt servicing. Their team lead understands our problem, always ready to provide 24/7 solutions during breakdown, Highly recommended for any industrial cooling needs!.",
    rating: 5,
  },
  {
    name: "Manoj",
    company: "Rico Auto",
    text: "Professional, knowledgeable, and reliable! Eagle Eye's team ensures our chillers operate at maximum efficiency year-round.",
    rating: 5,
  },
  {
    name: "Abdesh",
    company: "Hi-Tech Gear",
    text: "Their AMC plan is cost-effective and gives us peace of mind. We haven't faced a single cooling failure since we signed up!.",
    rating: 5,
  },
  {
    name: "Satish Sharma",
    company: "Minda",
    text: "Our chiller system was losing efficiency, and Eagle Eye diagnosed and fixed the issue quickly. Now, our energy bills have reduced by 25%!.",
    rating: 5,
  },
  {
    name: "Jai Prakash",
    company: "Satyam",
    text: "We've saved thousands in repair costs since switching to Eagle Eye's maintenance plans.",
    rating: 5,
  },
  {
    name: "Avinash",
    company: "Honda",
    text: "Their quick response time and professional service make them the best in the industry, their AMC services are the best, connected with company since 15 years.",
    rating: 5,
  },
];

const Testimonials = ({
  testimonials = defaultTestimonials,
}: TestimonialProps) => {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-background flex items-center">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by businesses across Delhi/NCR
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
                <div className="flex items-center space-x-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#ec4899] fill-current"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="text-foreground font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground">{testimonial.company}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
