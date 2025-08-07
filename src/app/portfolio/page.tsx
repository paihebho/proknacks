// app/portfolio/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { PortfolioCard } from "@/components/PortfolioCard";
import { Button } from "@/components/ui/button";
// --- FIX: Import the new PortfolioItem type along with the data ---
import {
  allCategories,
  portfolioItems,
  type PortfolioItem,
} from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const lightboxSlides = filteredItems.flatMap((item) => [
    { src: item.beforeImage, title: `${item.title} - Before` },
    { src: item.afterImage, title: `${item.title} - After` },
  ]);

  // --- FIX: Apply the PortfolioItem type to the 'item' parameter ---
  const openLightbox = (item: PortfolioItem) => {
    const itemIndexInFilteredList = filteredItems.findIndex(
      (p) => p.id === item.id
    );
    if (itemIndexInFilteredList !== -1) {
      setLightboxIndex(itemIndexInFilteredList * 2);
      setLightboxOpen(true);
    }
  };

  return (
    <>
      <main className="bg-gray-950 text-amber-50/80">
        <section className="relative text-center py-24 lg:py-32 bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-gray-950 opacity-30 [mask-image:conic-gradient(from_90deg_at_50%_50%,#000000_0deg,#ffffff_90deg,#000000_180deg,#ffffff_270deg,#000000_360deg)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Our Work
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-4 text-lg md:text-xl text-amber-50/70 max-w-3xl mx-auto">
              A Showcase of Our Craftsmanship and Dedication to Excellence.
            </motion.p>
          </div>
        </section>

        <div className="relative text-gray-900">
          <svg
            className="w-full h-[100px]"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            aria-hidden="true">
            <polygon points="0,0 1200,100 0,100" />
          </svg>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {["All", ...allCategories].map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}>
                {category}
              </Button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}>
                  <PortfolioCard
                    item={item}
                    onClick={() => openLightbox(item)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link href="/request">Inspired? Get Your Free Quote</Link>
            </Button>
          </div>
        </section>
      </main>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={lightboxIndex}
        styles={{
          container: { backgroundColor: "rgba(12, 10, 9, 0.9)" },
          icon: { color: "#fcd34d" },
        }}
        carousel={{ finite: true }}
      />
    </>
  );
}
