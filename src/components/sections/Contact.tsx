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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-body text-sm font-medium text-primary mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-md py-3 px-4 font-body text-dark focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block font-body text-sm font-medium text-primary mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full border border-gray-300 rounded-md py-3 px-4 font-body text-dark focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-body text-sm font-medium text-primary mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md py-3 px-4 font-body text-dark focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Case Type */}
              <div>
                <label
                  htmlFor="caseType"
                  className="block font-body text-sm font-medium text-primary mb-2"
                >
                  Case Type
                </label>
                <select
                  id="caseType"
                  name="caseType"
                  className="w-full border border-gray-300 rounded-md py-3 px-4 font-body text-dark focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
                >
                  <option value="">Select Case Type</option>
                  <option value="family">Family & Matrimonial Law</option>
                  <option value="criminal">Criminal Defense</option>
                  <option value="civil">Civil Litigation</option>
                  <option value="property">Property & Real Estate</option>
                  <option value="domestic-violence">Domestic Violence</option>
                  <option value="legal-drafting">Legal Drafting</option>
                  <option value="court-marriage">Court Marriage</option>
                  <option value="consultation">Consultation & Advisory</option>
                  <option value="labour">Labour & Employment</option>
                  <option value="legal-documentation">Legal Documentation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-body text-sm font-medium text-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md py-3 px-4 font-body text-dark focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors resize-none"
                  placeholder="Briefly describe your legal matter..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-secondary text-dark font-body font-semibold py-3 rounded-md hover:bg-opacity-90 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              {/* Phone */}
              <a
                href={PHONE_LINK}
                className="flex items-start gap-4 group hover:text-secondary transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <Phone className="w-6 h-6 text-dark" />
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
                className="flex items-start gap-4 group hover:text-secondary transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <Mail className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-muted mb-1">
                    Email
                  </p>
                  <p className="font-body text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                    {CONTACT_EMAIL}
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-dark" />
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
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-dark" />
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

            {/* Google Maps Placeholder */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-300 h-64 flex items-center justify-center">
                <p className="font-body text-muted text-lg font-medium">
                  Google Map
                </p>
              </div>
              <div className="p-4 text-center">
                <p className="font-body text-sm text-muted">
                  Visit our office for in-person consultations
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
