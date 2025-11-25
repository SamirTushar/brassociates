"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PHONE_LINK, WHATSAPP_LINK } from "@/lib/constants";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in buttons after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 md:bottom-6 md:right-6 z-50 flex flex-col gap-3">
          {/* Phone Call Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link
              href={PHONE_LINK}
              className="flex items-center justify-center w-14 h-14 md:w-14 md:h-14 bg-secondary rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
              aria-label="Call Now"
            >
              <Phone className="w-6 h-6 text-dark" />
            </Link>
          </motion.div>

          {/* WhatsApp Button with Pulse */}
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Link
              href={`${WHATSAPP_LINK}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20legal%20services`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center w-[60px] h-[60px] md:w-[60px] md:h-[60px] bg-[#25D366] rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
              aria-label="WhatsApp"
            >
              {/* Pulse Animation Ring */}
              <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />

              {/* Icon */}
              <MessageCircle className="relative w-7 h-7 text-white" />
            </Link>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
