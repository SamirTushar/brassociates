"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    { title: "Clarity", description: "explaining the law in a way that clients can truly understand" },
    { title: "Integrity", description: "offering advice that is honest, realistic, and in the best interest of the client" },
    { title: "Dedication", description: "investing time and attention into each matter" },
    { title: "Respect", description: "treating every case with sensitivity, especially in family and criminal matters" },
    { title: "Professionalism", description: "maintaining high standards in communication, drafting, and courtroom conduct" },
  ];

  return (
    <section id="about" ref={ref} className="bg-cream py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-secondary font-body font-medium text-sm uppercase tracking-wider mb-3"
          >
            About Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6"
          >
            Our Approach
          </motion.h2>

          {/* Intro Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-base md:text-lg text-dark leading-relaxed max-w-4xl mx-auto"
          >
            At Adv. Bhakti Rajput & Associates, our focus is on offering clear, practical, and reliable legal support. We assist clients across a wide range of matters including divorce and family disputes, domestic violence cases, property issues, criminal litigation, and all forms of legal drafting and documentation. We keep our approach simple: transparent communication, client-focused advice, and representation rooted in integrity.
          </motion.p>
        </div>

        {/* Advocates Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Advocate 1 - Bhakti Rajput */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-md border-l-4 border-secondary"
          >
            <h3 className="font-heading text-2xl font-bold text-primary mb-2">
              Adv. Bhakti Tejsing Rajput
            </h3>
            <p className="font-body text-sm text-secondary font-semibold mb-4">
              B.A., LL.B., LL.M.
            </p>

            <ul className="space-y-2 mb-4">
              <li className="font-body text-sm text-dark flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span>Five years of litigation experience</span>
              </li>
              <li className="font-body text-sm text-dark flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span>Regular practice before Shivaji Nagar Sessions Court and the Bombay High Court</span>
              </li>
              <li className="font-body text-sm text-dark flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span>Graduate of ILS Law College</span>
              </li>
              <li className="font-body text-sm text-dark flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span>Postgraduate specialization in Company Law</span>
              </li>
            </ul>

            <p className="font-body text-base text-dark leading-relaxed">
              Adv. Bhakti is known for a calm approach, strong drafting skills, and the ability to simplify complex issues for clients. Her work blends practical thinking with a deep understanding of procedural and substantive law.
            </p>
          </motion.div>

          {/* Advocate 2 - Vishnu Pote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-md border-l-4 border-secondary"
          >
            <h3 className="font-heading text-2xl font-bold text-primary mb-2">
              Adv. Vishnu Vilas Pote
            </h3>
            <p className="font-body text-sm text-secondary font-semibold mb-4">
              B.E., LL.B., LL.M.
            </p>

            <ul className="space-y-2 mb-4">
              <li className="font-body text-sm text-dark flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span>Six years of courtroom experience</span>
              </li>
              <li className="font-body text-sm text-dark flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span>Practice before Shivaji Nagar Sessions Court and the Bombay High Court</span>
              </li>
              <li className="font-body text-sm text-dark flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span>Graduate of ILS Law College</span>
              </li>
              <li className="font-body text-sm text-dark flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span>Postgraduate specialization in Constitutional Law from Pune University</span>
              </li>
            </ul>

            <p className="font-body text-base text-dark leading-relaxed">
              Adv. Vishnu brings a strong analytical mindset from his engineering background and pairs it with firm legal reasoning. He is appreciated for his strategic courtroom presence and clear, structured advice.
            </p>
          </motion.div>
        </div>

        {/* Mission & Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-lg shadow-md"
        >
          {/* Mission */}
          <div className="mb-8">
            <h3 className="font-heading text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <span className="text-secondary">—</span> Our Mission
            </h3>
            <p className="font-body text-base md:text-lg text-dark leading-relaxed">
              Our mission is to make the law understandable, accessible, and supportive for every client who walks through our door. We aim to guide people with honesty, compassion, and professionalism so they feel informed and empowered at each stage of their case.
            </p>
          </div>

          {/* Values */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <span className="text-secondary">—</span> Our Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-body font-bold text-dark mb-1">{value.title}</h4>
                    <p className="font-body text-sm text-muted leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
