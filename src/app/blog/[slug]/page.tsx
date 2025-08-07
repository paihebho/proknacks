// app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getBlogPostBySlug, generateStaticBlogParams } from "@/data/blog";

// Generate static params for static export
export async function generateStaticParams() {
  return generateStaticBlogParams();
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16 bg-white mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button asChild variant="ghost" className="">
            <Link href="/blog" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Post Header */}
        <header className="mb-12">
          <Badge
            variant="outline"
            className="mb-4 bg-amber-50 text-amber-600 border-amber-200">
            {post.category}
          </Badge>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          {/* Meta information */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-gray-600 mb-8">
            {/* Only render author info if author exists */}
            {post.author && (
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={post.author.avatar} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-gray-500">{post.author.role}</p>
                </div>
              </div>
            )}

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <CalendarDays className="w-4 h-4 mr-2" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured image */}
          <div className="rounded-xl overflow-hidden mb-8">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={1200}
              height={630}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </header>

        {/* Content */}
        <div
          className="blog-content prose prose-lg prose-amber max-w-none prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:py-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="px-3 py-1 text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Author bio - Only render if author exists */}
        {post.author && (
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Avatar className="h-16 w-16">
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  About {post.author.name}
                </h3>
                <p className="text-gray-600 mt-2">
                  {post.author.role} at Proknacks with over 10 years of
                  experience in home renovations and design.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
