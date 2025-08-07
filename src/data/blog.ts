import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types/blog";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function generateStaticBlogParams() {
  const filenames = fs.readdirSync(BLOG_DIR);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const filenames = fs.readdirSync(BLOG_DIR);
  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(BLOG_DIR, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      ...(data as Omit<BlogPost, "content">),
      slug,
      content,
    };
  });

  // Optional: sort by date
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);

  const html = processedContent.toString();

  return {
    ...(data as Omit<BlogPost, "content">),
    slug,
    content: html,
  };
}
