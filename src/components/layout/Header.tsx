"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu } from "lucide-react";
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
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
          >
            {FIRM_NAME}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#home"
              className="font-body text-dark hover:text-primary transition-colors"
            >
              Home
            </Link>
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
              href="#contact"
              className="font-body text-dark hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Call Now Button */}
            <Link
              href={PHONE_LINK}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-secondary text-dark font-body font-medium rounded-md hover:bg-opacity-90 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
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
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#25D366] text-white font-body font-medium rounded-md hover:bg-opacity-90 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden lg:inline">WhatsApp</span>
            </Link>

            {/* Mobile Menu Icon */}
            <button
              className="md:hidden p-2 text-primary hover:bg-primary hover:bg-opacity-10 rounded-md transition-colors"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20" />
    </>
  );
}
