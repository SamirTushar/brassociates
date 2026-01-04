"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { CONTACT_PHONE, PHONE_LINK, WHATSAPP_LINK } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="home" className="bg-cream py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column - Text Content (55%) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 lg:w-[55%] text-center lg:text-left"
          >
            {/* Small Gold Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-secondary font-body font-medium text-sm uppercase tracking-wider mb-4"
            >
              Welcome to Bhakti Rajput & Associates
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight"
            >
              Trusted Legal Counsel in Pune & Mumbai
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-body text-lg text-muted mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Navigating complex legal matters with integrity, dedication, and a
              commitment to your success. From criminal defense to corporate
              law, we stand by your side.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Call Button */}
              <Link
                href={PHONE_LINK}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-dark font-body font-semibold rounded-md hover:bg-opacity-90 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                <span>Call: {CONTACT_PHONE}</span>
              </Link>

              {/* WhatsApp Button */}
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-body font-semibold rounded-md hover:bg-opacity-90 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Image with Navy Block (45%) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 lg:w-[45%] relative h-[400px] sm:h-[450px] lg:h-[500px] w-full max-w-md lg:max-w-none"
          >
            {/* Navy Blue Block */}
            <div className="absolute right-0 top-10 w-4/5 h-[350px] sm:h-[400px] lg:h-[450px] bg-primary rounded-l-lg" />

            {/* Image Placeholder - Overlapping Navy Block */}
            <div className="absolute left-0 top-0 w-4/5 h-[400px] sm:h-[450px] lg:h-[500px] bg-gray-300 rounded-lg shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <p className="font-body text-muted text-base sm:text-lg font-medium">
                  Lawyer Photo
                </p>
                <p className="font-body text-muted text-xs sm:text-sm mt-2">400 x 500</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
