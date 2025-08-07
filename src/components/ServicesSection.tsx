// components/ServicesSection.tsx
"use client";

import { motion, Variants } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/siteData"; // Assuming services are imported from a data file
import { Button } from "./ui/button";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
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

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-20 lg:py-28 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Our Expert Services
          </h2>
          <p className="mt-4 text-lg text-amber-50/70 max-w-3xl mx-auto">
            From small repairs to complete renovations, we handle every aspect
            of your needs with precision and care.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              {/* --- BRANDING: Redesigned card for dark theme --- */}
              <Card className="group relative overflow-hidden h-full bg-gray-900/30 backdrop-blur-sm border border-amber-400/20 hover:border-amber-400/50 transition-colors duration-300 flex flex-col">
                <CardHeader className="pb-4">
                  <motion.div
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4 rounded-md">
                    <service.icon className="w-8 h-8 text-gray-900" />
                  </motion.div>
                  <CardTitle className="text-xl text-amber-50">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-amber-50/60">{service.description}</p>
                </CardContent>

                <CardFooter>
                  <Link href="/services" className="mt-4">
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="flex items-center text-amber-400 font-semibold cursor-pointer">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.div>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          {/* --- BRANDING: Button styled to match brand --- */}
          <Button
            size="lg"
            className="bg-amber-400 text-gray-900 font-bold hover:bg-orange-500 transition-all duration-300 hover:scale-105"
            asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* --- BRANDING: Replaced floating circles with geometric shapes --- */}
      <div
        className="absolute top-1/4 left-0 w-40 h-40 bg-amber-500/5 blur-2xl"
        style={{
          clipPath:
            "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
        }}
      />
      <div
        className="absolute bottom-10 right-0 w-32 h-32 bg-orange-500/5 blur-2xl"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} // Triangle
      />
    </section>
  );
}
