// components/BlogLoop.tsx

import { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/utils";
import { CalendarDays, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface BlogLoopProps {
  posts: BlogPost[];
  showExcerpt?: boolean;
  showAuthor?: boolean;
  showCategory?: boolean;
  showTags?: boolean;
}

export function BlogLoop({
  posts,
  showExcerpt = true,
  showAuthor = true,
  showCategory = true,
  showTags = false,
}: BlogLoopProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card
          key={post.slug}
          className="overflow-hidden ring-1 ring-amber-200 border-0 hover:shadow-lg transition-shadow pt-0">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <CardHeader>
            <div className="flex items-center">
              {showCategory && (
                <Badge
                  variant="outline"
                  className="w-fit bg-amber-500 text-amber-50 border-amber-200">
                  {post.category}
                </Badge>
              )}

              <div className="flex ml-auto items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl mt-2 font-semibold text-gray-900 mb-2 line-clamp-2">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-blue-600 transition-colors">
                {post.title}
              </Link>
            </h3>

            <div className="flex items-center">
              <CalendarDays className="w-4 h-4 mr-1" />
              <span>{formatDate(post.date)}</span>
            </div>

            {showExcerpt && (
              <p className="text-gray-600 text-sm line-clamp-3">
                {post.excerpt}
              </p>
            )}
          </CardHeader>

          <CardContent className="pt-0">
            {showAuthor && post.author && (
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-3 ring-amber-200">
                  <AvatarImage src={post.author.avatar} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{post.author.name}</p>
                  <p className="text-xs text-gray-500">{post.author.role}</p>
                </div>
              </div>
            )}

            {showTags && post.tags && post.tags.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-amber-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
