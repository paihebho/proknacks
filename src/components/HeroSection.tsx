// components/HeroSection.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { QuoteForm } from "./QuoteForm";

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "tween",
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      type: "tween",
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Video Background with a fallback gradient using standard Tailwind colors */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* --- UPDATED --- Fallback gradient using Tailwind's default palette */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-orange-500/20 to-gray-900"></div>
        </video>
        {/* Overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Grid pattern with a different blend mode for a more subtle, technical feel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, type: "tween" }}
        className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat mix-blend-lighten z-1"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6 relative z-10">
            <motion.h1
              variants={textVariants}
              // --- UPDATED --- Using amber-50 for light text
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-amber-50">
              {/* --- UPDATED --- Gradient now uses amber-400 and orange-500 */}
              <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Precision Craftsmanship
              </span>
              <span className="block text-white">Flawless Execution</span>
            </motion.h1>

            <motion.p
              variants={textVariants}
              // --- UPDATED --- Using amber-50 with opacity for the paragraph
              className="text-amber-50/80 text-xl md:text-2xl max-w-xl">
              We are committed to delivering top-notch craftsmanship and
              thoughtful designs that embody quality in every detail.
            </motion.p>
          </motion.div>

          {/* Form with animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="relative z-10">
            {/* --- UPDATED --- Pass a standard Tailwind color to the form component */}
            <QuoteForm />
          </motion.div>
        </div>
      </div>

      {/* Floating GEOMETRIC elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        // --- UPDATED --- Using amber-400 for the geometric shape
        className="absolute bottom-10 left-10 w-24 h-24 bg-amber-400/10 blur-md"
        style={{
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
      />
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        // --- UPDATED --- Using orange-500 for the geometric shape
        className="absolute top-1/4 right-20 w-32 h-32 bg-orange-500/5 blur-lg"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)",
        }}
      />
    </section>
  );
}
