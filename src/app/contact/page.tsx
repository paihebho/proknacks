// app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import ContactForm from "@/components/ContactForm"; // Assuming ContactForm is in components folder

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: SITE_CONFIG.phone,
      href: `tel:${SITE_CONFIG.phone}`,
      details: "Mon - Fri, 8AM - 6PM WAT",
    },
    {
      icon: Mail,
      title: "Email",
      content: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
      details: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      content: SITE_CONFIG.address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        SITE_CONFIG.address
      )}`,
      details: "Click Address to see map",
    },
  ];

  return (
    <main className="bg-gray-950 text-amber-50/80">
      {/* Section 1: Page Header */}
      <section className="relative text-center py-24 lg:py-32 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gray-950 opacity-30 [mask-image:conic-gradient(from_90deg_at_50%_50%,#000000_0deg,#ffffff_90deg,#000000_180deg,#ffffff_270deg,#000000_360deg)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-lg md:text-xl text-amber-50/70 max-w-3xl mx-auto">
            Have a question or a project in mind? We'd love to hear from you.
            Reach out and let's start building together.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2 space-y-8">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start group">
                  <div className="w-16 h-16 bg-amber-400/10 rounded-md flex items-center justify-center mr-6 transition-colors group-hover:bg-amber-400/20">
                    <Icon className="w-20 h-8 rounded-md text-amber-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-lg text-amber-50/90 transition-colors group-hover:text-amber-400">
                      {item.content}
                    </p>
                    <p className="text-sm text-amber-50/60">{item.details}</p>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-3 bg-gray-900/30 backdrop-blur-sm border border-amber-400/20 p-8 lg:p-12 rounded-md">
            <h2 className="text-2xl font-bold text-white mb-6">
              Send Us a Message
            </h2>
            {/* The ContactForm component now lives inside our branded container */}
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
