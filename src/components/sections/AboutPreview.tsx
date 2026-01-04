"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="bg-cream py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column - Image (45%) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="flex-1 lg:w-[45%] w-full"
          >
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-gray-300 rounded-lg shadow-lg border-l-4 border-secondary flex items-center justify-center">
              <div className="text-center">
                <p className="font-body text-muted text-base sm:text-lg font-medium">
                  Advocate Photo
                </p>
                <p className="font-body text-muted text-xs sm:text-sm mt-2">
                  400 x 500
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text Content (55%) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 lg:w-[55%] text-center lg:text-left"
          >
            {/* Small Gold Text */}
            <p className="text-secondary font-body font-medium text-sm uppercase tracking-wider mb-4">
              About the Founder
            </p>

            {/* Heading */}
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-3">
              Adv. Bhakti Rajput
            </h2>

            {/* Subheading */}
            <p className="font-body text-lg text-muted mb-6">
              Founder, Bhakti Rajput & Associates
            </p>

            {/* Bio Paragraph */}
            <p className="font-body text-base text-dark leading-relaxed mb-8">
              With a passion for justice and a commitment to her clients,
              Advocate Bhakti Rajput founded Bhakti Rajput & Associates to provide
              accessible, high-quality legal services in Pune and Mumbai. She
              practices at the Mumbai High Court and various district courts
              across Maharashtra, handling matters ranging from criminal defense
              to civil litigation. Her approach combines thorough legal research
              with compassionate client care, ensuring every client feels heard
              and supported throughout their legal journey.
            </p>

            {/* CTA Link */}
            <Link
              href="#about"
              className="inline-flex items-center gap-2 font-body text-secondary font-semibold hover:underline transition-all group"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
