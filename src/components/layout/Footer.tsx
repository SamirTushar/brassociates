import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  FIRM_NAME,
  TAGLINE,
  CONTACT_PHONE,
  PHONE_LINK,
  CONTACT_EMAIL,
  ADDRESS,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primary">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 - Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-heading text-2xl font-bold text-white mb-2">
              {FIRM_NAME}
            </h3>
            <p className="text-secondary text-sm italic mb-4">{TAGLINE}</p>
            <p className="text-cream text-sm leading-relaxed">
              Providing trusted legal counsel in Pune and Mumbai. We stand by
              our clients through every legal challenge.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <a
                href="#"
                className="text-cream hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-cream hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-cream hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-cream hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-body text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-cream text-sm hover:text-secondary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-cream text-sm hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#practice-areas"
                  className="text-cream text-sm hover:text-secondary transition-colors"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-cream text-sm hover:text-secondary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cream text-sm hover:text-secondary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cream text-sm hover:text-secondary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Practice Areas */}
          <div className="text-center md:text-left">
            <h4 className="font-body text-lg font-semibold text-white mb-4">
              Practice Areas
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#practice-areas"
                  className="text-cream text-sm hover:text-secondary transition-colors"
                >
                  Criminal Defense
                </Link>
              </li>
              <li>
                <Link
                  href="#practice-areas"
                  className="text-cream text-sm hover:text-secondary transition-colors"
                >
                  Family & Matrimonial
                </Link>
              </li>
              <li>
                <Link
                  href="#practice-areas"
                  className="text-cream text-sm hover:text-secondary transition-colors"
                >
                  Civil Litigation
                </Link>
              </li>
              <li>
                <Link
                  href="#practice-areas"
                  className="text-cream text-sm hover:text-secondary transition-colors"
                >
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link
                  href="#practice-areas"
                  className="text-cream text-sm hover:text-secondary transition-colors"
                >
                  Property & Real Estate
                </Link>
              </li>
              <li>
                <Link
                  href="#practice-areas"
                  className="text-cream text-sm hover:text-secondary transition-colors"
                >
                  Cyber Crime
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-body text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={PHONE_LINK}
                  className="flex items-center gap-2 text-cream text-sm hover:text-secondary transition-colors justify-center md:justify-start"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{CONTACT_PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 text-cream text-sm hover:text-secondary transition-colors justify-center md:justify-start"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-cream text-sm justify-center md:justify-start">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>{ADDRESS}</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 text-cream text-sm justify-center md:justify-start">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#162d4a] py-4">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-cream text-sm text-center md:text-left">
              © 2024 {FIRM_NAME}. All Rights Reserved.
            </p>
            <p className="text-cream text-sm text-center md:text-right">
              Designed with care for our clients
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
