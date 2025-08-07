// lib/homepage-blog.ts
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types/blog";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export async function getHomepageBlogPosts(
  limit: number = 3
): Promise<BlogPost[]> {
  try {
    // Check if directory exists
    await fs.access(BLOG_DIR);

    const filenames = await fs.readdir(BLOG_DIR);

    // Filter only .md files
    const markdownFiles = filenames.filter((filename) =>
      filename.endsWith(".md")
    );

    if (markdownFiles.length === 0) {
      console.warn("No markdown files found in blog directory");
      return [];
    }

    const posts = await Promise.all(
      markdownFiles.map(async (filename) => {
        try {
          const slug = filename.replace(/\.md$/, "");
          const filePath = path.join(BLOG_DIR, filename);
          const fileContents = await fs.readFile(filePath, "utf8");
          const { data } = matter(fileContents);

          return {
            ...(data as Omit<BlogPost, "content">),
            slug,
            content: "",
          } as BlogPost;
        } catch (error) {
          console.error(`Error processing file ${filename}:`, error);
          return null;
        }
      })
    );

    // Filter out null values and sort
    const validPosts = posts.filter((post): post is BlogPost => post !== null);

    return validPosts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

// Optional: Add a function to get a single post by slug
export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    const fileContents = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      ...(data as Omit<BlogPost, "content">),
      slug,
      content,
    } as BlogPost;
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

// For static generation
export async function generateStaticBlogParams() {
  try {
    await fs.access(BLOG_DIR);
    const filenames = await fs.readdir(BLOG_DIR);

    return filenames
      .filter((filename) => filename.endsWith(".md"))
      .map((filename) => ({
        slug: filename.replace(/\.md$/, ""),
      }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
