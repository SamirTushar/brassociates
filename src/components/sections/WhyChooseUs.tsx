"use client";

import { UserCheck, MessageCircle, Users, Landmark, Heart, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: UserCheck,
    title: "Client-First Approach",
    description:
      "We listen carefully, respond promptly, and keep you informed at every stage. Your case is our priority.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description:
      "No hidden fees, no complex jargon. We explain everything in simple terms so you know exactly where you stand.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Years of litigation experience across family law, criminal defense, civil matters, and more.",
  },
  {
    icon: Landmark,
    title: "Strong Court Presence",
    description:
      "Regular practice at Shivaji Nagar Sessions Court and Bombay High Court.",
  },
  {
    icon: Heart,
    title: "Compassionate & Professional",
    description:
      "We understand that legal matters can be stressful. We offer support, clarity, and respect throughout.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "Our success comes from preparation, dedication, and a deep understanding of law and procedure.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-primary py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-secondary font-body font-medium text-sm uppercase tracking-wider mb-3"
          >
            Why Bhakti Rajput & Associates
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl font-bold text-white"
          >
            What Sets Us Apart
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <Icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="font-body text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-base text-cream leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
