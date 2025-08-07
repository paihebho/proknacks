// app/about/page.tsx

import { ArrowRight, Award, ShieldCheck, Star } from "lucide-react";
import { generateMetadata } from "@/lib/metadata";
import { AboutSection } from "@/components/AboutSection";

export const metadata = generateMetadata({
  title: "About Us - Professional Home Improvement Experts",
  description:
    "Learn about Proknacks' commitment to excellence in home improvement. Our experienced team delivers quality craftsmanship and personalized service for every project.",
  keywords: [
    "about proknacks",
    "home improvement company",
    "experienced contractors",
    "quality craftsmanship",
  ],
  path: "/about",
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.6,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-50">
      <AboutSection />
    </main>
  );
}
