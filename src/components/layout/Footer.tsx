import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { scrollToSection } from "@/lib/scroll";

const Footer = () => {
  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <footer className="w-full bg-background border-t border-border/10 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <img
            src="https://res.cloudinary.com/dsegbtegv/image/upload/v1740843828/EE_q7uckg.png"
            alt="Eagle Eye Enterprise Logo"
            className="h-20 w-auto mb-4"
          />
          <p className="text-muted-foreground select-text">
            Leading provider of AC & Industrial Washing Machine solutions in
            Delhi/NCR.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-4 select-text">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#hero"
                onClick={(e) => handleSectionClick(e, "hero")}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer select-text"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#enhanced-services"
                onClick={(e) => handleSectionClick(e, "enhanced-services")}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer select-text"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleSectionClick(e, "about")}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer select-text"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleSectionClick(e, "contact")}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer select-text"
              >
                Contact
              </a>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer select-text"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-of-service"
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer select-text"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-base font-semibold mb-4 select-text">
            Our Services
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/ac-installation"
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer select-text"
              >
                AC Installation
              </Link>
            </li>
            <li>
              <Link
                to="/ac-maintenance"
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer select-text"
              >
                AC Maintenance
              </Link>
            </li>
            <li>
              <Link
                to="/industrial-washing"
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer select-text"
              >
                Industrial Component Washing Services
              </Link>
            </li>
            <li>
              <Link
                to="/spare-parts"
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer select-text"
              >
                Spare Parts
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-base font-semibold mb-4 select-text">
            Contact Us
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="tel:+919911397792"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 cursor-pointer select-text"
              >
                <Phone className="w-4 h-4" />
                +91 99113 97792
              </a>
            </li>
            <li>
              <a
                href="tel:+919990002435"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 cursor-pointer select-text"
              >
                <Phone className="w-4 h-4" />
                +91 99900 02435
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@eagleeyeac.com"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 cursor-pointer select-text"
              >
                <Mail className="w-4 h-4" />
                contact@eagleeyeac.com
              </a>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground select-text">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <span>1125, Sector-6, Part-II, Dharuhera, Haryana</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-border/10">
        <div className="text-center text-xs text-muted-foreground mb-2">
          Built to make you say{" "}
          <a
            href="https://beacons.ai/oh.wow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Oh.Wow
          </a>
          !
        </div>
        <div className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Eagle Eye Enterprises. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
