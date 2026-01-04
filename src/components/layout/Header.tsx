"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import {
  FIRM_NAME,
  PHONE_LINK,
  CONTACT_PHONE,
  WHATSAPP_LINK,
} from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md"
            : "bg-white md:bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          {/* Top Row - Logo and CTA Buttons */}
          <div className="flex items-center justify-between h-16 md:h-20 gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="font-heading text-lg md:text-2xl font-bold text-primary hover:opacity-80 transition-opacity flex-shrink-0"
            >
              {FIRM_NAME}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link
                href="#about"
                className="font-body text-dark hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="#practice-areas"
                className="font-body text-dark hover:text-primary transition-colors"
              >
                Practice Areas
              </Link>
              <Link
                href="#consultation"
                className="font-body text-dark hover:text-primary transition-colors"
              >
                Consultation
              </Link>
              <Link
                href="#marathi"
                className="font-body text-dark bg-secondary px-4 py-2 rounded-md hover:bg-opacity-90 hover:shadow-lg transition-all duration-200 font-semibold"
              >
                मराठी
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2">
              {/* Call Now Button */}
              <Link
                href={PHONE_LINK}
                className="flex items-center gap-2 px-3 md:px-4 py-2 bg-secondary text-dark font-body font-medium rounded-md hover:bg-opacity-90 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">Call Now</span>
              </Link>

              {/* WhatsApp Button */}
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-3 md:px-4 py-2 bg-[#25D366] text-white font-body font-medium rounded-md hover:bg-opacity-90 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden lg:inline">WhatsApp</span>
              </Link>

            </div>
          </div>

          {/* Mobile Navigation - Always visible on mobile */}
          <nav className="md:hidden flex items-center gap-3 overflow-x-auto pb-3 pt-2 border-t border-gray-200">
            <Link
              href="#about"
              className="font-body text-sm text-dark hover:text-primary transition-colors whitespace-nowrap px-2 py-1"
            >
              About
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="#practice-areas"
              className="font-body text-sm text-dark hover:text-primary transition-colors whitespace-nowrap px-2 py-1"
            >
              Practice Areas
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="#consultation"
              className="font-body text-sm text-dark hover:text-primary transition-colors whitespace-nowrap px-2 py-1"
            >
              Consultation
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="#marathi"
              className="font-body text-sm text-dark bg-secondary px-3 py-1 rounded-md hover:bg-opacity-90 transition-all font-semibold whitespace-nowrap"
            >
              मराठी
            </Link>
          </nav>
        </div>
      </motion.header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-24 md:h-20" />
    </>
  );
}
