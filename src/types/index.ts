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

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export interface MetadataConfig {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    title: string;
    description: string;
    type: string;
    url: string;
  };
}

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

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

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

export interface StatItem {
  number: number;
  label: string;
}

export const SITE_CONFIG = {
  // ... other config
  socials: [
    { name: "Twitter", href: "https://twitter.com/yourcompany" },
    { name: "Linkedin", href: "https://linkedin.com/company/yourcompany" },
    { name: "Instagram", href: "https://instagram.com/yourcompany" },
  ],
};
