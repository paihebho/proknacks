"use client";

import { CTASection } from "@/components/CTASection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/HeroSection";
import HomepageBlog from "@/components/HomepageBlog";

import { ServicesSection } from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { getHomepageBlogPosts } from "@/lib/homepage-blog";
import { testimonials } from "@/types";

import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  // State for scroll animations
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  // State for testimonial carousel
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials with safety checks
  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const [formHighlighted, setFormHighlighted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleGetQuoteClick = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
    setFormHighlighted(true);
    setTimeout(() => setFormHighlighted(false), 2000); // Highlight for 2 seconds
  };

  // const featuredPosts = getHomepageBlogPosts(3);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}

      <StatsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Blog Preview Section */}
      {/* <HomepageBlog /> */}

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
