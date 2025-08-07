// components/StatsSection.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { stats } from "@/data/siteData"; // Make sure to import from your data file

export function StatsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            By The Numbers
          </h2>
          <p className="mt-4 text-lg text-amber-50/70">
            Our track record of excellence and dedication.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              // --- FIX: Pass the new props ---
              numericValue={stat.numericValue}
              displayValue={stat.displayValue}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  // --- FIX: Updated props to match the new data structure ---
  numericValue,
  displayValue,
  label,
  index,
}: {
  numericValue: number | null;
  displayValue: string;
  label: string;
  index: number;
}) {
  // --- REFACTOR: This state now holds the text to be displayed ---
  const [displayText, setDisplayText] = useState(
    numericValue === null ? displayValue : "0"
  );

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    // --- FIX: Only animate if there's a numeric value ---
    if (inView && numericValue !== null) {
      const controls = animate(0, numericValue, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          // During animation, display the rounded number
          setDisplayText(Math.round(value).toLocaleString());
        },
        onComplete() {
          // When animation completes, show the final display string (e.g., "500+")
          setDisplayText(displayValue);
        },
      });
      return () => controls.stop();
    }
  }, [inView, numericValue, displayValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}>
      <Card className="relative text-center overflow-hidden h-full bg-gray-900/30 backdrop-blur-sm border border-amber-400/20 hover:border-amber-400/50 transition-colors duration-300">
        <div
          className="absolute -bottom-8 -left-8 w-24 h-24 bg-amber-500/5 blur-lg"
          style={{
            clipPath:
              "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
          }}
        />
        <CardContent className="p-6 flex flex-col items-center justify-center h-full">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            {/* --- FIX: Render the displayText state --- */}
            {displayText}
          </div>
          <p className="mt-2 text-sm md:text-base text-amber-50/80 font-medium">
            {label}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
