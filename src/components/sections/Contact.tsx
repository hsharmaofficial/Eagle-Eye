import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import QuoteRequestForm from "../forms/QuoteRequestForm";
import { useForm } from "react-hook-form";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-20 px-4 md:px-8 bg-background overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 overflow-hidden"></div>

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get in Touch with Our Experts!
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <QuoteRequestForm isSticky={false} />
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <Card className="p-8 bg-card border-border">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-foreground font-semibold">Phone</p>
                    <a
                      href="tel:+919911397792"
                      className="text-muted-foreground hover:text-primary"
                    >
                      +91 99113 97792 / +91 99900 02435
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-foreground font-semibold">Email</p>
                    <a
                      href="mailto:contact@eagleeyeac.com"
                      className="text-muted-foreground hover:text-primary"
                    >
                      contact@eagleeyeac.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-foreground font-semibold">Location</p>
                    <p className="text-muted-foreground">
                      1125, Sector-6, Part-II, Dharuhera, Haryana, India
                    </p>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-[#2563eb] to-[#ec4899] hover:opacity-90 text-white font-semibold mt-4 transition-all"
                  onClick={() => (window.location.href = "tel:+911234567890")}
                >
                  Call Now for a Free Consultation
                </Button>
              </div>
            </Card>

            {/* Google Maps Embed */}
            <div className="h-[350px] rounded-lg overflow-hidden border border-border mt-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.0604862793243!2d76.79659237556708!3d28.20517497621461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3f8b42c3421d%3A0x1e7c0d22444b8b56!2sSector%206%2C%20Dharuhera%2C%20Haryana%20123106!5e0!3m2!1sen!2sin!4v1710644183044!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
