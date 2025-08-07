// components/AboutSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Award, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    title: "Quality First",
    description:
      "We never compromise on quality, ensuring every project meets our high standards and exceeds your expectations.",
    icon: Award,
  },
  {
    title: "Integrity",
    description:
      "Honest communication and transparent practices guide all our interactions with clients and partners.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    description:
      "We strive for perfection in every detail, from initial planning to final execution and beyond.",
    icon: Star,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export function AboutSection() {
  return (
    // --- THEME OVERHAUL: Switched to consistent dark theme for the entire page ---
    <main className="bg-gray-950 text-amber-50/80">
      {/* Section 1: Page Header */}
      <section className="relative text-center py-24 lg:py-32 bg-gray-900 overflow-hidden">
        {/* --- BRANDING: Geometric background pattern --- */}
        <div className="absolute inset-0 w-full h-full bg-gray-950 opacity-30 [mask-image:conic-gradient(from_90deg_at_50%_50%,#000000_0deg,#ffffff_90deg,#000000_180deg,#ffffff_270deg,#000000_360deg)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            About Proknacks
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-lg md:text-xl text-amber-50/70 max-w-3xl mx-auto">
            Transforming spaces with precision craftsmanship and an unwavering
            dedication to excellence.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32 py-16 lg:py-24">
        {/* Section 2: Our Story */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Our Story</h2>
            <p>
              Founded with a passion for exceptional craftsmanship, Proknacks
              has been serving homeowners in Nigeria with reliable, high-quality
              home improvement services. Our journey began with a simple belief:
              every home deserves professional execution.
            </p>
            <p>
              Over the years, we've built a reputation for excellence by
              consistently delivering outstanding results. We believe that
              quality work speaks for itself, and our portfolio reflects our
              unwavering commitment to our craft.
            </p>
          </div>
          <div
            className="relative w-full h-80 lg:h-96"
            style={{ clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 80%)" }}>
            <Image
              src="/about-img.png"
              alt="Proknacks team at work"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.section>

        {/* Section 3: Our Values */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-white">Our Core Values</h2>
            <p className="mt-4 text-lg text-amber-50/70 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we approach
              every single project.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <motion.div key={value.title} variants={itemVariants}>
                <div className="h-full bg-gray-900/30 border border-amber-400/20 p-8 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6 rounded-md">
                    <value.icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="flex-grow">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section 4: Call to Action */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-gradient-to-r from-amber-400 to-orange-500 text-center p-8 lg:p-12"
          style={{ clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0 100%)" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can bring your vision to
            life with our expertise.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-gray-900 text-white hover:bg-black hover:scale-105 transition-transform duration-300">
            <Link href="/contact">
              Get In Touch <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.section>
      </div>
    </main>
  );
}
