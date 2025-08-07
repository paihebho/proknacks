// components/PortfolioCard.tsx
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type PortfolioItem } from "@/data/portfolio";
import { Eye } from "lucide-react";

export function PortfolioCard({
  item,
  onClick,
}: {
  item: PortfolioItem;
  onClick: () => void;
}) {
  return (
    <Card
      className="group relative h-full w-full overflow-hidden bg-gray-900/30 backdrop-blur-sm border border-amber-400/20 hover:border-amber-400/50 transition-colors duration-300 flex p-0 flex-col cursor-pointer"
      onClick={onClick}>
      <CardHeader className="relative p-0 h-64 grid grid-rows-1 w-full">
        <div className="relative w-full h-full">
          <Image
            src={item.beforeImage}
            alt={`Before: ${item.title}`}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-2 left-2 bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm">
            BEFORE
          </div>
        </div>

        {/* After image with a corrected clip-path reveal on hover */}
        <div className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out [clip-path:polygon(0%_100%,100%_100%,100%_100%,0_100%)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
          <Image
            src={item.afterImage}
            alt={`After: ${item.title}`}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute z-40 top-2 left-2 bg-amber-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm">
            AFTER
          </div>
        </div>

        {/* View project overlay */}
        <div className="absolute inset-0 bg-black/70 flex h-full bottom-0 flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Eye className="w-10 h-10 text-amber-400 mb-2" />
          <p className="font-semibold text-white">View Project</p>
        </div>
      </CardHeader>

      <CardContent className="p-6 flex-grow">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg text-white">{item.title}</CardTitle>
          <Badge className="bg-amber-400/10 text-amber-300 border-amber-400/20 flex-shrink-0">
            {item.category}
          </Badge>
        </div>
        <p className="mt-2 text-sm text-amber-50/70">{item.description}</p>

        {item.testimonial && (
          <div className="mt-4 p-3 bg-gray-800/50 border-l-2 border-amber-400">
            <blockquote className="text-sm italic text-amber-50/90">
              &quot;{item.testimonial.quote}&quot;
            </blockquote>
            <p className="text-xs mt-2 font-semibold text-amber-50/70 text-right">
              — {item.testimonial.author}
            </p>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-gray-700/50 text-amber-50/60 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
