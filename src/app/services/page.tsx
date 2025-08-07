// app/services/page.tsx
"use client";

import { motion, Variants } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function ServicesPage() {
  return (
    // --- THEME OVERHAUL: Switched to consistent dark theme ---
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
            Our Comprehensive Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-lg md:text-xl text-amber-50/70 max-w-3xl mx-auto">
            From concept to completion, we handle every detail with precision
            and care.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = LucideIcons[
              service.icon as keyof typeof LucideIcons
            ] as React.ComponentType<{ className?: string }>;
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <div className="group relative h-full bg-gray-900/30 backdrop-blur-sm border border-amber-400/20 p-8 flex flex-col text-center items-center hover:border-amber-400/50 transition-colors duration-300 rounded-md">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 rounded-md">
                    <Icon className="w-10 h-10 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="flex-grow text-amber-50/70">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Section: Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-gradient-to-r from-amber-400 to-orange-500 text-center p-8 lg:p-12"
          style={{ clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0 100%)" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Let&apos;s turn your vision into reality. Contact us today for a
            free consultation and quote.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-gray-900 text-white hover:bg-black hover:scale-105 transition-transform duration-300">
            <Link href="/contact">
              Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </main>
  );
}
