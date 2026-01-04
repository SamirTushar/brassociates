"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  CONTACT_PHONE,
  PHONE_LINK,
  CONTACT_EMAIL,
  ADDRESS,
} from "@/lib/constants";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="bg-cream py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-secondary font-body font-medium text-sm uppercase tracking-wider mb-3"
          >
            Get in Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl font-bold text-primary"
          >
            Contact Us
          </motion.h2>
        </div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Phone */}
            <a
              href={PHONE_LINK}
              className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary group hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-secondary rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <Phone className="w-7 h-7 text-dark" />
              </div>
              <div>
                <p className="font-body text-sm font-medium text-muted mb-1">
                  Phone
                </p>
                <p className="font-body text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                  {CONTACT_PHONE}
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary group hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-secondary rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <Mail className="w-7 h-7 text-dark" />
              </div>
              <div>
                <p className="font-body text-sm font-medium text-muted mb-1">
                  Email
                </p>
                <p className="font-body text-lg font-semibold text-primary group-hover:text-secondary transition-colors break-all">
                  {CONTACT_EMAIL}
                </p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary md:col-span-2">
              <div className="flex-shrink-0 w-14 h-14 bg-secondary rounded-lg flex items-center justify-center">
                <MapPin className="w-7 h-7 text-dark" />
              </div>
              <div>
                <p className="font-body text-sm font-medium text-muted mb-1">
                  Location
                </p>
                <p className="font-body text-lg font-semibold text-primary">
                  {ADDRESS}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary md:col-span-2">
              <div className="flex-shrink-0 w-14 h-14 bg-secondary rounded-lg flex items-center justify-center">
                <Clock className="w-7 h-7 text-dark" />
              </div>
              <div>
                <p className="font-body text-sm font-medium text-muted mb-1">
                  Office Hours
                </p>
                <p className="font-body text-lg font-semibold text-primary">
                  Monday – Saturday: 10:00 AM – 9:00 PM
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
