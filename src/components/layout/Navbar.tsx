import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";

import { ThemeToggle } from "./ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

interface NavbarProps {
  menuItems?: Array<{
    label: string;
    href: string;
  }>;
  onContactClick?: () => void;
}

const Navbar = ({
  menuItems = [
    { label: "Home", href: "/#hero" },
    { label: "Services", href: "/#enhanced-services" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
  onContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  },
}: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-background/50 backdrop-blur-sm"}`}
    >
      <div className="px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <Logo />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+919911397792"
              className="bg-gradient-to-r from-[#2563eb] to-[#ec4899] hover:opacity-90 text-white transition-all px-3 py-1.5 rounded-md flex items-center gap-1.5 font-bold text-sm"
            >
              <Phone className="h-3.5 w-3.5" /> Call Now: +91 99113 97792
            </a>

            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-foreground hover:text-primary"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-background border-border"
              >
                <div className="flex flex-col space-y-4 mt-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-foreground/70 hover:text-foreground transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="tel:+919911397792"
                    className="bg-gradient-to-r from-[#2563eb] to-[#ec4899] hover:opacity-90 text-white transition-all px-3 py-1.5 rounded-md flex items-center gap-1.5 font-bold text-sm justify-center mt-4"
                  >
                    <Phone className="h-3.5 w-3.5" /> Call Now: +91 99113 97792
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
