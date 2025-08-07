import { Service } from "@/types";

export const SITE_CONFIG = {
  name: "Proknacks",
  description:
    "Expert home improvement services with precision craftsmanship and flawless execution.",
  url: "https://proknacks.com",
  phone: "(555) 123-4567",
  email: "info@proknacks.com",
  address: "5625 German Church Road #3106. Indianapolis, IN 46235, USA",
  socials: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/proknacks/?locale=is_IS",
    },
    { name: "Linkedin", href: "#" },
    { name: "Instagram", href: "#" },
  ],
} as const;

export const SERVICES: Service[] = [
  {
    id: "cabinet-making",
    title: "Cabinet Making and Installation",
    description:
      "Elevate your space with custom-crafted cabinets. Our skilled artisans create and install cabinets that are functional and a stunning addition to your home.",
  },
  {
    id: "painting",
    title: "Interior and Exterior Painting",
    description:
      "Refresh your home's appearance with our interior and exterior painting services. We add color and vibrancy to your space, inside and out.",
  },
  {
    id: "junk-removal",
    title: "Junk Removal and Hauling",
    description:
      "Let us clear the clutter. Our junk removal and hauling services make space for what matters most, ensuring a clean and organized home.",
  },
  {
    id: "bathroom-fixtures",
    title: "Bathroom Fixture and Repair",
    description:
      "Revitalize your bathroom with our fixture installations and repair services. We'll ensure your bathroom is a place of comfort and style.",
  },
  {
    id: "repairs",
    title: "Repairs",
    description:
      "From minor fixes to major overhauls, we're your go-to solution for all repair needs. Our expert team will ensure your home is in top condition.",
  },
  {
    id: "electrical",
    title: "Electrical and Fixtures",
    description:
      "Illuminate your life with our electrical and fixture services. We handle everything from lighting upgrades to fixture installations with precision and care.",
  },
  {
    id: "plumbing",
    title: "Plumbing",
    description:
      "Plumbing issues? We've got you covered. Our plumbing services address leaks, clogs, and repairs to keep your home's systems in shape.",
  },
  {
    id: "furniture-installation",
    title: "Furniture Installation",
    description:
      "Transform your space with expert furniture installation. We assemble and arrange your furniture to create a stylish and functional living environment.",
  },
  {
    id: "general-repairs",
    title: "General Repairs",
    description:
      "For all-around home maintenance, trust our general repair services. We take care of the small and large tasks to keep your home in excellent condition.",
  },
  {
    id: "cleaning",
    title: "Before and After Cleaning",
    description:
      "Prepare your space for renovations or ensure a spotless finish with our before and after cleaning services. We leave no mess behind.",
  },
  {
    id: "woodwork",
    title: "Woodwork",
    description:
      "Elevate your home with our woodwork expertise. From intricate to structural elements, we craft wood features that stand out.",
  },
  {
    id: "basement-remodeling",
    title: "Basement Remodeling",
    description:
      "Unleash the potential of your basement with our remodeling services. We'll transform this space into a functional and beautiful part of your home.",
  },
];
