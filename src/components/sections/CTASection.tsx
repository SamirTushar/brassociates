"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CONTACT_PHONE, PHONE_LINK, WHATSAPP_LINK } from "@/lib/constants";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-primary to-[#2a4a6f] py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="font-heading text-2xl md:text-3xl font-bold text-white mb-4"
        >
          Ready to Discuss Your Case?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-body text-lg text-cream mb-8 max-w-2xl mx-auto"
        >
          Get in touch today for a confidential consultation. We're here to
          help.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Call Button */}
          <Link
            href={PHONE_LINK}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-dark font-body font-semibold rounded-lg hover:bg-opacity-90 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 w-full sm:w-auto animate-pulse hover:animate-none"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now: {CONTACT_PHONE}</span>
          </Link>

          {/* WhatsApp Button */}
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-body font-semibold rounded-lg hover:bg-opacity-90 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Us</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
