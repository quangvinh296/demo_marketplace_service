"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  reviews?: number;
  showCount?: boolean;
}

export function StarRating({ rating, reviews, showCount = true }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < fullStars
                ? "text-[#FBBF24] fill-[#FBBF24]"
                : i === fullStars && hasHalfStar
                ? "text-[#FBBF24] fill-[#FBBF24]/50"
                : "text-gray-300 dark:text-gray-600"
            )}
          />
        ))}
      </div>
      {showCount && (
        <span className="text-sm text-muted-foreground ml-1">
          {rating} ({reviews})
        </span>
      )}
    </div>
  );
}
