// types/blog.ts
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  imageUrl: string;
  author?: {
    name: string;
    avatar: string;
    role: string;
  };
  tags: string[];
}
