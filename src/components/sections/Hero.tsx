"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { FIRM_NAME, TAGLINE, CONTACT_PHONE, PHONE_LINK, WHATSAPP_LINK } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="home" className="bg-cream pt-8 pb-8 md:py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Column - Text Content (55%) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 lg:w-[55%] text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge - First Consultation Free */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white border-2 border-secondary px-4 py-2 rounded-full mb-4"
            >
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span className="font-body text-sm font-semibold text-dark">First Consultation Free</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 leading-tight"
            >
              {FIRM_NAME}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-body text-xl md:text-2xl text-primary font-medium mb-4 max-w-2xl mx-auto lg:mx-0"
            >
              {TAGLINE}
            </motion.p>

            {/* Value Line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-body text-lg text-dark mb-4 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Professional guidance, clear answers, and strong representation when you need it most
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-body text-base text-muted mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Your legal matter deserves attention and clarity. We help you understand your rights and move forward with confidence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Book Free Consultation Button */}
              <Link
                href="#consultation"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-dark font-body font-bold rounded-md hover:bg-opacity-90 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <span>Book Free Consultation</span>
              </Link>

              {/* Call Button */}
              <Link
                href={PHONE_LINK}
                className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-primary text-primary font-body font-semibold rounded-md hover:bg-primary hover:text-white transition-all duration-200 hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                <span>Call: {CONTACT_PHONE}</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Image with Navy Block (45%) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 lg:w-[45%] relative h-[350px] sm:h-[450px] lg:h-[500px] w-full max-w-md lg:max-w-none order-1 lg:order-2"
          >
            {/* Navy Blue Block */}
            <div className="absolute right-0 top-10 w-4/5 h-[300px] sm:h-[400px] lg:h-[450px] bg-primary rounded-l-lg" />

            {/* Lawyer Photo - Overlapping Navy Block */}
            <div className="absolute left-0 top-0 w-4/5 h-[350px] sm:h-[450px] lg:h-[500px] rounded-lg shadow-2xl overflow-hidden">
              <Image
                src="/photo1.webp"
                alt="Adv. Bhakti Rajput - Legal Advocate"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
