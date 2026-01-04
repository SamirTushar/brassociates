"use client";

import {
  Gavel,
  Heart,
  FileText,
  Home,
  ShieldAlert,
  Scale,
  Users,
  Lightbulb,
  Briefcase,
  FileCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const practiceAreas = [
  {
    icon: Heart,
    title: "Family & Matrimonial Law",
    description: "Divorce, custody disputes, maintenance, domestic violence, and court marriages.",
  },
  {
    icon: Gavel,
    title: "Criminal Defense",
    description: "Representation in bail applications, trial proceedings, appeals, and quashing petitions.",
  },
  {
    icon: FileText,
    title: "Civil Litigation",
    description: "Property disputes, recovery suits, injunctions, and general civil matters before courts.",
  },
  {
    icon: Home,
    title: "Property & Real Estate",
    description: "Agreements, title disputes, possession matters, and property documentation.",
  },
  {
    icon: ShieldAlert,
    title: "Domestic Violence",
    description: "Protection orders, criminal complaints, and legal support under the Protection of Women from Domestic Violence Act.",
  },
  {
    icon: Scale,
    title: "Legal Drafting",
    description: "Contracts, agreements, legal notices, petitions, and affidavits across all practice areas.",
  },
  {
    icon: Users,
    title: "Court Marriages",
    description: "Assistance with registration, documentation, and legal formalities for court marriages.",
  },
  {
    icon: Lightbulb,
    title: "Consultation & Advisory",
    description: "Legal opinions, strategy sessions, and professional guidance tailored to your specific needs.",
  },
  {
    icon: Briefcase,
    title: "Labour & Employment",
    description: "Dedicated support for both employees and employers in workplace-related disputes.",
  },
  {
    icon: FileCheck,
    title: "Legal Documentation",
    description: "We prepare accurate, well-structured legal documents tailored to your needs.",
  },
];

export default function PracticeAreas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="practice-areas" ref={ref} className="bg-cream py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-secondary font-body font-medium text-sm uppercase tracking-wider mb-3"
          >
            Our Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl font-bold text-primary"
          >
            Practice Areas
          </motion.h2>
        </div>

        {/* Practice Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-transparent hover:border-secondary group"
              >
                <Icon className="w-10 h-10 text-primary mb-4 group-hover:text-secondary transition-colors duration-300" />
                <h3 className="font-body text-lg font-semibold text-primary mb-2">
                  {area.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
