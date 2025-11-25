"use client";

import { Scale, Users, Shield, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const trustIndicators = [
  {
    icon: Scale,
    text: "Mumbai High Court Practice",
  },
  {
    icon: Users,
    text: "Client-Centric Approach",
  },
  {
    icon: Shield,
    text: "Complete Confidentiality",
  },
  {
    icon: Target,
    text: "Personalized Strategy",
  },
];

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-white border-t border-b border-gray-200 py-8"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustIndicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <Icon className="w-8 h-8 text-secondary mb-3" />
                <p className="font-body text-xs sm:text-sm font-medium text-dark leading-tight">
                  {indicator.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
