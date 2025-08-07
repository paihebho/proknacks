// components/TestimonialsSection.tsx
"use client";

import { Card } from "@/components/ui/card";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/siteData";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TestimonialsSection() {
  // --- FIX: Combined page index and direction into a single state for atomic updates ---
  const [[activeTestimonial, direction], setPage] = useState([0, 0]);

  // --- REFACTOR: Simplified pagination logic ---
  const paginate = (newDirection: number) => {
    let newIndex = activeTestimonial + newDirection;
    if (newIndex < 0) {
      newIndex = testimonials.length - 1;
    } else if (newIndex >= testimonials.length) {
      newIndex = 0;
    }
    setPage([newIndex, newDirection]);
  };

  const goToTestimonial = (index: number) => {
    // Determine direction based on whether the target index is ahead or behind
    const newDirection = index > activeTestimonial ? 1 : -1;
    setPage([index, newDirection]);
  };

  // --- REFACTOR: Increased travel distance for a better slide effect ---
  const testimonialVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-20 lg:py-28 bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Trusted by Our Clients
          </h2>
          <p className="mt-4 text-lg text-amber-50/70">
            Real stories from satisfied partners in Indiana and beyond.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-2">
            <Card className="relative bg-gray-900/30 backdrop-blur-sm border border-amber-400/20 min-h-[400px] lg:min-h-[350px] flex items-center overflow-hidden">
              <Quote className="w-24 h-24 text-amber-500/5 absolute top-4 right-4" />
              {/* --- FIX: Added mode="wait" for cleaner transitions --- */}
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  // The key must be unique to the testimonial index to trigger animation
                  key={activeTestimonial}
                  custom={direction}
                  variants={testimonialVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute w-full px-8 py-10 lg:px-12" // Use absolute positioning for the sliding item
                >
                  <blockquote className="text-lg md:text-xl text-amber-50/90 mb-6 leading-relaxed">
                    {testimonials[activeTestimonial]?.content}
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-20 h-20 mr-4 flex-shrink-0">
                      <Avatar className="h-full w-full">
                        <AvatarImage
                          src={testimonials[activeTestimonial]?.image}
                          alt={testimonials[activeTestimonial]?.name}
                        />
                        <AvatarFallback className="bg-gray-800 text-amber-300 text-lg">
                          {testimonials[activeTestimonial]?.name?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-50">
                        {testimonials[activeTestimonial]?.name}
                      </h4>
                      <p className="text-amber-50/60">
                        {testimonials[activeTestimonial]?.role}
                      </p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < (testimonials[activeTestimonial]?.rating || 0)
                                ? "text-amber-400 fill-amber-400"
                                : "text-amber-400/20"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Card>
          </div>

          <div className="flex flex-row lg:flex-col items-center justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="border-amber-400/30 text-amber-400 hover:bg-amber-400/10 hover:text-amber-300">
              <ChevronLeft />
            </Button>
            <div className="flex lg:flex-col gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 transition-colors duration-300 ${
                    activeTestimonial === index
                      ? "bg-amber-400"
                      : "bg-amber-400/30 hover:bg-amber-400/50"
                  }`}
                  style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              size="lg"
              variant="outline"
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="border-amber-400/30 text-amber-400 hover:bg-amber-400/10 hover:text-amber-300">
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
