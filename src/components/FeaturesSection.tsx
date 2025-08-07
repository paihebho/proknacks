// components/FeaturesSection.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import { features } from "@/data/siteData"; // Assuming features are in a data file

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function FeaturesSection() {
  return (
    // --- THEME OVERHAUL: Switched to dark theme and added relative positioning for the divider ---
    <section className="relative py-20 lg:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16">
          {/* --- BRANDING: Header now uses brand gradient --- */}
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Why Choose {SITE_CONFIG.name}?
          </h2>
          <p className="mt-4 text-lg text-amber-50/70 max-w-3xl mx-auto">
            We combine years of experience with modern techniques to deliver
            exceptional results for every project.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="group relative overflow-hidden h-full bg-gray-900/30 backdrop-blur-sm border border-amber-400/20 hover:border-amber-400/50 transition-colors duration-300 flex flex-col p-6">
                  <CardHeader className="p-0 pb-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-md flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-gray-900" />
                    </motion.div>
                    <CardTitle className="text-xl text-amber-50">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0 flex-grow">
                    <p className="text-amber-50/60">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
