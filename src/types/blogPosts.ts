import { BlogPost } from "./blog";

export const getBlogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "10-home-renovation-ideas",
    author: {
      name: "Mike Thompson",
      role: "Renovation Specialist",
      avatar: "/api/placeholder/64/64",
    },
    title: "10 Home Renovation Ideas That Add Value",
    excerpt:
      "Discover the top home improvements that increase your property's worth while enhancing your living space.",
    date: "May 15, 2023",
    category: "Renovation",
    readTime: "5 min read",
    imageUrl: "/10-Home-Renovation-Ideas-That-Add-Value.png",
    content: "<p>Full content here...</p>",
    tags: ["budget", "bathroom", "renovation", "diy"],
  },
  {
    id: "2",
    slug: "The-Complete-Guide-to-Kitchen-Remodeling",
    title: "The Complete Guide to Kitchen Remodeling",
    author: {
      name: "Mike Thompson",
      role: "Renovation Specialist",
      avatar: "/api/placeholder/64/64",
    },
    excerpt:
      "Everything you need to know before starting your kitchen remodel, from planning to execution.",
    date: "April 28, 2023",
    category: "Kitchen",
    readTime: "8 min read",
    imageUrl: "Complete-Guide-to-Kitchen-Remodeling.png",
    content: "<p>Full content here...</p>",
    tags: ["budget", "litchen", "diy"],
  },
  {
    id: "3",
    slug: "Sustainable-Materials-for-to-Modern-Homes",
    title: "Sustainable Materials for Modern Homes",
    author: {
      name: "Mike Thompson",
      role: "Renovation Specialist",
      avatar: "/api/placeholder/64/64",
    },
    excerpt:
      "Explore eco-friendly building materials that don't compromise on style or durability.",
    date: "April 10, 2023",
    category: "Sustainability",
    readTime: "6 min read",
    imageUrl: "Sustainable-Materials-for-Modern-Homes.png",
    content: "<p>Full content here...</p>",
    tags: ["budget", "Homeowner", "renovation", "diy"],
  },

  {
    id: "4",
    slug: "the-art-of-interior-design-transforming-spaces-into-dreams",
    title: "The Art of Interior Design: Transforming Spaces into Dreams",
    author: {
      name: "Mike Thompson",
      role: "Renovation Specialist",
      avatar: "/api/placeholder/64/64",
    },
    excerpt:
      "Your home is more than just a place to live; a home is also where you can express your personality, taste, and style.",
    date: "October 10, 2023",
    category: "Sustainability",
    readTime: "6 min read",
    imageUrl: "Art-of-Interior-Design-Transforming-Spaces-into-Dreams.png",
    content: "<p>Full content here...</p>",
    tags: ["budget", "renovation", "diy"],
  },
  {
    id: "5",
    slug: "transform-your-home-with-expert-home-repair-services",
    title: "Transform Your Home with Expert Home Repair Services",
    author: {
      name: "Mike Thompson",
      role: "Renovation Specialist",
      avatar: "/api/placeholder/64/64",
    },
    excerpt:
      "In today's fast-paced world, our homes serve as sanctuaries of comfort and security. However, wear and tear, as well as unforeseen issues, can disrupt this peace.",
    date: "April 10, 2023",
    category: "Sustainability",
    readTime: "6 min read",
    imageUrl: "Transform-Your-Home-with-Expert-Home-Repair-Services.png",
    content:
      "<p>In today's fast-paced world, our homes serve as sanctuaries of comfort and security. However, wear and tear can disrupt this peace.</p>",
    tags: ["budget", "renovation", "expert"],
  },
];

// Service functions
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return getBlogPosts;
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return getBlogPosts.find((post) => post.slug === slug) || null;
}

export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return getBlogPosts.find((post) => post.id === id) || null;
}

export async function getBlogPostsByCategory(
  category: string
): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return getBlogPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return getBlogPosts.filter((post) => post.tags?.includes(tag));
}

export function generateStaticBlogParams() {
  return getBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}
