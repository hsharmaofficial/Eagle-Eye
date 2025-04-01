import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    // Set a cookie with SameSite=Lax for better security
    document.cookie = "cookieConsent=true; path=/; SameSite=Lax; Secure";
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 shadow-lg z-50"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              We use cookies and third-party services to enhance your browsing
              experience. By continuing to use our site, you agree to our use of
              cookies and third-party services.
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={declineCookies}
                className="text-sm"
              >
                Decline
              </Button>
              <Button
                onClick={acceptCookies}
                className="text-sm bg-gradient-to-r from-[#2563eb] to-[#ec4899] text-white hover:opacity-90"
              >
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
