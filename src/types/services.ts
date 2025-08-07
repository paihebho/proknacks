// types/services.ts
import * as LucideIcons from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: keyof typeof LucideIcons;
  color: string;
};

export const services: Service[] = [
  {
    title: "Cabinet Making and Installation",
    description:
      "Elevate your space with custom-crafted cabinets. Our skilled artisans create and install cabinets that are functional and a stunning addition to your home.",
    icon: "Box",
    color: "from-amber-500 to-amber-100",
  },

  {
    title: "Interior and Exterior Painting",
    description:
      "Refresh your home's appearance with our painting services. We add color and vibrancy to your space, inside and out.",
    icon: "Brush",
    color: "from-blue-500 to-blue-100",
  },
  {
    title: "Junk Removal and Hauling",
    description:
      "Let us clear the clutter. Our junk removal and hauling services make space for what matters most, ensuring a clean and organized home.",
    icon: "Trash2",
    color: "from-gray-500 to-gray-100",
  },
  {
    title: "Bathroom Fixture and Repair",
    description:
      "Revitalize your bathroom with our fixture installations and repair services. We'll ensure your bathroom is a place of comfort and style.",
    icon: "ShowerHead",
    color: "from-teal-500 to-teal-100",
  },
  {
    title: "Electrical and Fixtures",
    description:
      "Illuminate your life with our electrical and fixture services. We handle everything from lighting upgrades to fixture installations with precision and care.",
    icon: "Lightbulb",
    color: "from-yellow-500 to-yellow-100",
  },
  {
    title: "Plumbing",
    description:
      "Plumbing issues? We've got you covered. Our plumbing services address leaks, clogs, and repairs to keep your home's systems in shape.",
    icon: "Plug",
    color: "from-sky-500 to-sky-100",
  },
  {
    title: "Furniture Installation",
    description:
      "Transform your space with expert furniture installation. We assemble and arrange your furniture to create a stylish and functional living environment.",
    icon: "RockingChair",
    color: "from-red-500 to-brown-100",
  },
  {
    title: "General Repairs",
    description:
      "For all-around home maintenance, trust our general repair services. We take care of the small and large tasks to keep your home in excellent condition.",
    icon: "Wrench",
    color: "from-orange-500 to-orange-100",
  },
  {
    title: "Woodwork",
    description:
      "Elevate your home with our woodwork expertise. From intricate to structural elements, we craft wood features that stand out.",
    icon: "Hammer",
    color: "from-amber-700 to-amber-100",
  },
  {
    title: "Basement Remodeling",
    description:
      "Unleash the potential of your basement with our remodeling services. We'll transform this space into a functional and beautiful part of your home.",
    icon: "Home",
    color: "from-indigo-500 to-indigo-100",
  },
  {
    title: "Before and After Cleaning",
    description:
      "Prepare your space for renovations or ensure a spotless finish with our before and after cleaning services. We leave no mess behind.",
    icon: "BrushCleaning",
    color: "from-emerald-500 to-emerald-100",
  },
  {
    title: "Flooring Installation & Repair",
    description:
      "Expert installation of hardwood, laminate, tile, and carpet flooring with precision finishing",
    icon: "Square",
    color: "from-rose-500 to-rose-600",
  },
];
