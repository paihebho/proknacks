export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  date: string;
  tags: string[];
  testimonial?: {
    quote: string;
    author: string;
  };
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Kitchen Remodel",
    description:
      "Complete kitchen renovation with custom cabinetry and quartz countertops",
    category: "Renovation",
    beforeImage: "images/portfolio/kitchen-before.png",
    afterImage: "images/portfolio/kitchen-after.png",
    date: "2023-06-15",
    tags: ["kitchen", "remodel", "cabinetry"],
    testimonial: {
      quote: "They transformed our outdated kitchen into a modern dream space!",
      author: "Sarah Johnson",
    },
  },
  {
    id: "2",
    title: "Bathrom Markover",
    description: "Complete Bathroom renovation",
    category: "Renovation",
    beforeImage: "images/portfolio/bath-before.png",
    afterImage: "images/portfolio/bath-after.png",
    date: "2024-06-15",
    tags: ["Bathroom", "remodel", "cabinetry"],
    testimonial: {
      quote: "Brought the bathroom back to life!",
      author: "Tunde Abey",
    },
  },
  {
    id: "3",
    title: "Deck Remodel",
    description: "Gave the deck a facelift",
    category: "Renovation",
    beforeImage: "images/portfolio/deck-before.png",
    afterImage: "images/portfolio/deck-after.png",
    date: "2024-06-15",
    tags: ["deck", "painting"],
    testimonial: {
      quote: "I almost think it's a different house!",
      author: "John H.",
    },
  },
  // Add more items...
];

export const allCategories = Array.from(
  new Set(portfolioItems.map((item) => item.category))
);
