import { Feature } from "@/types";
import {
  Award,
  CheckCircle,
  Clock,
  Droplets,
  Headset,
  Palette,
  Shield,
  Wrench,
  Zap,
} from "lucide-react";

export interface StatItem {
  // The pure number to animate to. Use `null` for stats that shouldn't animate (like "24/7").
  numericValue: number | null;
  // The final string to display after the animation, or from the start.
  displayValue: string;
  label: string;
}

export const stats: StatItem[] = [
  { numericValue: 500, displayValue: "500+", label: "Projects Completed" },
  { numericValue: 15, displayValue: "15+", label: "Years Experience" },
  { numericValue: 98, displayValue: "98%", label: "Customer Satisfaction" },
  // This item won't animate, it will just display "24/7".
  { numericValue: null, displayValue: "24/7", label: "Emergency Support" },
];

export const services = [
  {
    icon: Wrench,
    title: "Cabinet Making",
    description: "Custom cabinets designed to perfection",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Palette,
    title: "Interior Painting",
    description: "Transform spaces with premium finishes",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Zap,
    title: "Electrical Work",
    description: "Safe, reliable electrical solutions",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description: "Expert plumbing repairs and installations",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Shield,
    title: "General Repairs",
    description: "Comprehensive home maintenance",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Award,
    title: "Renovations",
    description: "Complete home transformations",
    color: "from-indigo-500 to-purple-600",
  },
];

export const features: Feature[] = [
  {
    title: "Quality Guaranteed",
    description:
      "Every project is backed by our commitment to excellence and attention to detail.",
    icon: CheckCircle, // Import from lucide-react
    color: "from-yellow-500/70 to-yellow-500",
  },
  {
    title: "On-Time Delivery",
    description:
      "We respect your schedule and complete projects within the agreed timeframe.",
    icon: Clock, // Import from lucide-react
    color: "from-yellow-500/70 to-yellow-500",
  },
  {
    title: "Expert Support",
    description:
      "Our experienced team provides guidance and support throughout your project.",
    icon: Headset, // Import from lucide-react
    color: "from-yellow-500/70 to-yellow-500",
  },
];

export const testimonials = [
  {
    name: "Isaiah Perkins",
    role: "Homeowner",
    content:
      "I’m giving this 5 stars because of the work done in my house it was done well and right the remodeling looks beautiful",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face&auto=format",
  },
  {
    name: "Ben Jackson",
    role: "Homeownwer",
    content:
      "Honestly I was really skeptical at first being the fact that they’re new but they honestly had a great and quick installation.",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face&auto=format",
  },
];
