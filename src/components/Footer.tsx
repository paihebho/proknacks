// components/Footer.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SITE_CONFIG } from "@/lib/constants";
import { Phone, Mail, MapPin, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

const socialIcons = {
  facebook: <SiFacebook className="w-5 h-5" />,
  linkedin: <SiLinkedin className="w-5 h-5" />,
  instagram: <SiInstagram className="w-5 h-5" />,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export function Footer() {
  return (
    <footer className="relative bg-gray-950 text-amber-50/70 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gray-900 opacity-80 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
      <div className="absolute inset-0 w-full h-full bg-gray-950 opacity-30 [mask-image:conic-gradient(from_90deg_at_50%_50%,#000000_0deg,#ffffff_90deg,#000000_180deg,#ffffff_270deg,#000000_360deg)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Branding section */}
          <motion.div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                {SITE_CONFIG.name}
              </h2>
            </Link>
            <p className="text-base leading-relaxed max-w-md">
              Transforming spaces with precision craftsmanship and innovative
              design. Your vision, our expertise, exceptional results.
            </p>
            <div className="space-y-3 pt-4">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  SITE_CONFIG.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
                {SITE_CONFIG.address}
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                {SITE_CONFIG.email}
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4">
            <h3 className="text-lg font-semibold text-white tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 hover:text-amber-400 transition-colors">
                    <ChevronRight className="w-4 h-4 text-amber-400/50 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div className="space-y-4">
            <h3 className="text-lg font-semibold text-white tracking-wider">
              Join Our Newsletter
            </h3>
            <p className="text-sm">
              Get insights on design trends and special offers.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800/50 border-amber-400/20 placeholder:text-amber-50/40 text-white focus:ring-amber-400 focus:border-amber-400 flex-1"
              />
              <Button
                type="submit"
                size="icon"
                className="bg-amber-400 hover:bg-orange-500 text-gray-900 font-bold flex-shrink-0">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </motion.div>

        {/* --- MODIFICATION: Updated Copyright Section --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-amber-400/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left text-sm text-white space-y-1 md:space-y-0">
            <p>
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
              reserved.
            </p>

            <p className="text-amber-50/50">
              Designed & Developed by{" "}
              <a
                href="https://client.cofellow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-amber-50/50 hover:text-amber-400 transition-colors">
                Cofellow
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2">
            {SITE_CONFIG.socials?.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-amber-50/60 hover:text-amber-400 bg-transparent hover:bg-amber-400/10 rounded-lg transition-all">
                {
                  socialIcons[
                    social.name.toLowerCase() as keyof typeof socialIcons
                  ]
                }
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
