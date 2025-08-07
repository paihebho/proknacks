import { BlogLoop } from "@/components/BlogLoop";
import { getHomepageBlogPosts } from "@/lib/homepage-blog";

export default async function HomepageBlog() {
  const featuredPosts = await getHomepageBlogPosts(3);

  return (
    <>
      {/* Your existing sections */}

      {/* Blog Preview Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Latest Home Care Tips
          </h2>
          <BlogLoop
            posts={featuredPosts} // Now properly typed as BlogPost[]
            showExcerpt={true}
            showAuthor={false}
            showCategory={true}
          />
        </div>
      </section>
    </>
  );
}
