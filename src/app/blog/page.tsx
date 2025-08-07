// ============================================================================
// src/app/blog/page.tsx - Blog Page
// ============================================================================

import { generateMetadata } from "@/lib/metadata";
import { getAllBlogPosts } from "@/data/blog";
import { BlogLoop } from "@/components/BlogLoop";

export const metadata = generateMetadata({
  title: "Home Improvement Blog - Tips, Trends & Expert Advice",
  description:
    "Discover expert home improvement tips, latest trends, and professional advice from the Proknacks team. Stay updated with our latest blog posts.",
  keywords: [
    "home improvement blog",
    "renovation tips",
    "home design trends",
    "diy advice",
    "expert tips",
  ],
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="min-h-screen mt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the latest insights, tips, and trends in home renovation
            and interior design.
          </p>
        </div>

        <BlogLoop
          posts={posts}
          showExcerpt={true}
          showAuthor={true}
          showCategory={true}
          showTags={true}
        />
      </div>
    </div>
  );
}
