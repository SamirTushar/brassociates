"use client";

import { CheckCircle, Phone, MessageCircle, Video, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const steps = [
  {
    number: "1",
    title: "Submit Your Details",
    description:
      "Fill in the booking form with your basic information and the type of legal matter. This helps us understand the nature of your issue before we connect.",
  },
  {
    number: "2",
    title: "Get a Confirmation",
    description:
      "You will receive a call or message confirming your consultation time. We schedule sessions as per your convenience.",
  },
  {
    number: "3",
    title: "Speak with the Advocate",
    description:
      "Connect through a phone call, WhatsApp call, or in-person meeting. Your discussion stays completely confidential.",
  },
  {
    number: "4",
    title: "Understand Your Legal Options",
    description:
      "We explain the applicable laws, your rights, and possible steps in simple and clear language.",
  },
  {
    number: "5",
    title: "Decide the Next Steps",
    description:
      "If you want to proceed, we guide you on documentation, fees, and further representation. There is no obligation to continue after the free consultation.",
  },
];

export default function Consultation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);

    // Combine date and time into a single string
    const preferredDate = formData.get('preferredDate') as string;
    const preferredTime = formData.get('preferredTime') as string;
    let preferredDateTime = '';

    if (preferredDate && preferredTime) {
      // Format: "Jan 15, 2024 at 3:00 PM"
      const dateObj = new Date(preferredDate);
      const formattedDate = dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      preferredDateTime = `${formattedDate} at ${preferredTime}`;
    } else if (preferredDate) {
      const dateObj = new Date(preferredDate);
      preferredDateTime = dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } else if (preferredTime) {
      preferredDateTime = preferredTime;
    }

    const data = {
      fullName: formData.get('fullName') as string,
      mobile: formData.get('mobile') as string,
      email: formData.get('email') as string,
      legalMatter: formData.get('legalMatter') as string,
      consultationMode: formData.get('consultationMode') as string,
      preferredDateTime,
      description: formData.get('description') as string,
    };

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.currentTarget.reset();
        // Scroll to top of form to show success message
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultation" ref={ref} className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-cream border-2 border-secondary px-4 py-2 rounded-full mb-4"
          >
            <CheckCircle className="w-4 h-4 text-secondary" />
            <span className="font-body text-sm font-semibold text-dark">
              First Consultation is Free
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Book a Free Consultation
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-base md:text-lg text-dark leading-relaxed max-w-3xl mx-auto"
          >
            Quick, confidential, and hassle-free. Get clear guidance on your legal matter with a simple and easy booking process.
          </motion.p>
        </div>

        {/* How It Works Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-heading text-2xl md:text-3xl font-bold text-primary text-center mb-10"
          >
            How It Works
          </motion.h3>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-cream p-6 rounded-lg border-l-4 border-secondary hover:shadow-lg transition-shadow"
              >
                {/* Step Number */}
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <span className="font-heading text-xl font-bold text-dark">
                    {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h4 className="font-body text-lg font-bold text-primary mb-2">
                  {step.title}
                </h4>

                {/* Step Description */}
                <p className="font-body text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Booking Form Section */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-cream p-8 md:p-10 rounded-lg shadow-md"
          >
            <h3 className="font-heading text-2xl font-bold text-primary mb-6 text-center">
              Book Your Free Consultation
            </h3>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="font-body text-green-800 font-semibold">
                    Thank you! Your consultation request has been submitted successfully.
                  </p>
                </div>
                <p className="font-body text-sm text-green-700 mt-2">
                  We will contact you shortly to confirm your consultation time.
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="font-body text-red-800 font-semibold">
                  Oops! Something went wrong. Please try again or call us directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block font-body text-sm font-medium text-primary mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full border border-gray-300 rounded-md py-3 px-4 font-body text-dark focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors bg-white"
                  placeholder="Your full name"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label
                  htmlFor="mobile"
                  className="block font-body text-sm font-medium text-primary mb-2"
                >
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  required
                  className="w-full border border-gray-300 rounded-md py-3 px-4 font-body text-dark focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors bg-white"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-body text-sm font-medium text-primary mb-2"
                >
                  Email (optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md py-3 px-4 font-body text-dark focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors bg-white"
                  placeholder="your@email.com"
                />
              </div>

              {/* Type of Legal Matter */}
              <div>
                <label
                  htmlFor="legalMatter"
                  className="block font-body text-sm font-medium text-primary mb-2"
                >
                  Type of Legal Matter *
                </label>
                <select
                  id="legalMatter"
                  name="legalMatter"
                  required
                  className="w-full border border-gray-300 rounded-md py-3 px-4 font-body text-dark focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors bg-white"
                >
                  <option value="">Select type of legal matter</option>
                  <option value="family-law">Family Law</option>
                  <option value="criminal-defense">Criminal Defense</option>
                  <option value="civil-disputes">Civil Disputes</option>
                  <option value="cheque-bounce">Cheque Bounce (138 NI Act)</option>
                  <option value="property-matters">Property Matters</option>
                  <option value="consumer-matters">Consumer Matters</option>
                  <option value="cyber-crime">Cyber Crime</option>
                  <option value="business-corporate">Business / Corporate</option>
                  <option value="labour-employment">Labour & Employment</option>
                  <option value="legal-documentation">Legal Documentation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Preferred Consultation Mode */}
              <div>
                <label className="block font-body text-sm font-medium text-primary mb-3">
                  Preferred Consultation Mode *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="consultationMode"
                      value="phone-call"
                      required
                      className="w-4 h-4 text-secondary focus:ring-secondary"
                    />
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="font-body text-sm text-dark">Phone Call</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="consultationMode"
                      value="whatsapp-call"
                      required
                      className="w-4 h-4 text-secondary focus:ring-secondary"
                    />
                    <MessageCircle className="w-4 h-4 text-primary" />
                    <span className="font-body text-sm text-dark">WhatsApp</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="consultationMode"
                      value="video-call"
                      required
                      className="w-4 h-4 text-secondary focus:ring-secondary"
                    />
                    <Video className="w-4 h-4 text-primary" />
                    <span className="font-body text-sm text-dark">Video Call</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="consultationMode"
                      value="in-person"
                      required
                      className="w-4 h-4 text-secondary focus:ring-secondary"
                    />
                    <Users className="w-4 h-4 text-primary" />
                    <span className="font-body text-sm text-dark">In-Person</span>
                  </label>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Preferred Date */}
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block font-body text-sm font-medium text-primary mb-2"
                  >
                    Preferred Date (optional)
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full border border-gray-300 rounded-md py-3 px-4 font-body text-dark focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors bg-white"
                  />
                </div>

                {/* Preferred Time */}
                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block font-body text-sm font-medium text-primary mb-2"
                  >
                    Preferred Time (optional)
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    className="w-full border border-gray-300 rounded-md py-3 px-4 font-body text-dark focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors bg-white"
                  >
                    <option value="">Select time slot</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                    <option value="08:00 PM">08:00 PM</option>
                    <option value="09:00 PM">09:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Brief Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block font-body text-sm font-medium text-primary mb-2"
                >
                  Brief Description of Your Issue (optional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md py-3 px-4 font-body text-dark focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors resize-none bg-white"
                  placeholder="Briefly describe your legal matter..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary text-dark font-body font-bold py-4 rounded-md hover:bg-opacity-90 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
              </button>

              {/* Privacy Note */}
              <p className="text-center font-body text-xs text-muted">
                Your information is kept strictly confidential and will only be used to contact you regarding your consultation.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
