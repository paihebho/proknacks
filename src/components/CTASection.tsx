// components/CTASection.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

export function CTASection() {
  return (
    // --- THEME & BRANDING OVERHAUL: Final dark theme section with angular divider ---
    <section className="relative bg-gray-900 pt-10 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="block text-amber-50 mb-2">
                Ready to Start Your
              </span>
              <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Dream Project?
              </span>
            </h2>

            <p className="text-lg text-amber-50/70 max-w-lg leading-relaxed">
              Join hundreds of satisfied customers across Nigeria who&apos;ve
              transformed their spaces with {SITE_CONFIG.name}. Your vision,
              crafted with our expertise, is just a conversation away.
            </p>

            <motion.div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-amber-400 py-6 text-gray-900 font-bold hover:bg-amber-600 group relative transition-all duration-300 hover:scale-[1.03] overflow-hidden">
                <Link href="/request">
                  Get Your Free Quote
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </Button>
            </motion.div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 border-t border-amber-400/10">
              {/* --- BRANDING: Geometric icon holders --- */}
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center group">
                <div
                  className="w-10 h-10 bg-amber-400/10 flex items-center justify-center mr-3 transition-colors group-hover:bg-amber-400/20"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  }}>
                  <Phone className="w-5 h-5 text-amber-300" />
                </div>
                <span className="text-amber-50/80 transition-colors group-hover:text-amber-50">
                  {SITE_CONFIG.phone}
                </span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center group">
                <div
                  className="w-10 h-10 bg-amber-400/10 flex items-center justify-center mr-3 transition-colors group-hover:bg-amber-400/20"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  }}>
                  <Mail className="w-5 h-5 text-amber-300" />
                </div>
                <span className="text-amber-50/80 transition-colors group-hover:text-amber-50">
                  {SITE_CONFIG.email}
                </span>
              </a>
            </div>
          </motion.div>

          {/* --- GEOMETRIC IMAGE MASK --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-80 lg:h-[500px]"
            // The clip-path creates the sharp, angular mask for the image.
            style={{
              clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",
            }}>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/50 to-transparent z-10" />
            <Image
              src="/images_homes.png"
              alt="A beautifully crafted modern home interior"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
