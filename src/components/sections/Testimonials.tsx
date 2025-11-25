"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "BR Associates handled my case with utmost professionalism and dedication. They were available whenever I needed guidance and kept me informed at every step. Highly recommended for anyone seeking trustworthy legal counsel.",
    name: "Rajesh M.",
    location: "Pune",
  },
  {
    quote:
      "I was extremely stressed about my property dispute, but the team at BR Associates made the entire process smooth and understandable. Their transparent approach gave me confidence throughout.",
    name: "Sunita K.",
    location: "Mumbai",
  },
  {
    quote:
      "Excellent legal support during a difficult time. The personal attention I received was remarkable. They genuinely care about their clients and it shows in their work.",
    name: "Amit P.",
    location: "Pune",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-secondary font-body font-medium text-sm uppercase tracking-wider mb-3"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl font-bold text-primary"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-secondary hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-secondary mb-4" />

              {/* Quote Text */}
              <p className="font-body text-base text-dark italic leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>

              {/* Divider */}
              <div className="border-t border-gray-200 my-4" />

              {/* Client Info */}
              <div>
                <p className="font-body font-semibold text-primary">
                  {testimonial.name}
                </p>
                <p className="font-body text-sm text-muted">
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
