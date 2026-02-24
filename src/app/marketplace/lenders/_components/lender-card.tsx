"use client";

import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LikeDislikeButtons } from "@/components/shared/like-dislike-buttons";
import { StarRating } from "@/components/shared/star-rating";
import { cn } from "@/lib/utils";
import { Play, Shield } from "lucide-react";

interface LenderCardProps {
  id: number;
  name: string;
  logo: string;
  status: string;
  rating: number;
  reviews: number;
  products: string[];
  channel: string;
  likes: number;
  dislikes: number;
  isReferral?: boolean;
  productTags?: string[];
  isFeatured: boolean;
  onClick: () => void;
}

export const LenderCard = memo(function LenderCard({
  name,
  logo,
  status,
  rating,
  reviews,
  products,
  channel,
  likes,
  dislikes,
  isReferral,
  productTags,
  isFeatured,
  onClick,
}: LenderCardProps) {
  return (
    <Card
      className={cn(
        "glass-card glass-card-hover cursor-pointer overflow-hidden",
        isFeatured && "featured-card"
      )}
      onClick={onClick}
    >
      <CardContent className="p-5">
        {isFeatured && (
          <div className="absolute top-3 right-3">
            <Badge className="badge-featured-solid text-[10px] font-bold shadow-lg">
              ⭐ FEATURED
            </Badge>
          </div>
        )}

        <div className="flex justify-between items-start mb-4">
          <Badge
            className={cn(
              "flex items-center gap-1.5 text-xs font-semibold px-3 py-1",
              status === "LIVE"
                ? "badge-live"
                : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-0"
            )}
          >
            <span
              className={cn(
                "w-2 h-2 rounded-full",
                status === "LIVE" ? "bg-white animate-pulse" : "bg-slate-400"
              )}
            />
            {status}
          </Badge>
          {isReferral && (
            <Badge variant="destructive" className="text-[10px]">Referral</Badge>
          )}
        </div>

        <div className="flex justify-center mb-4">
          <div className="relative">
            <img src={logo} alt={name} className="w-24 h-24 rounded-2xl shadow-lg object-cover" />
            {status === "LIVE" && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#22C55E] rounded-full flex items-center justify-center shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>
            )}
          </div>
        </div>

        <div className="text-center mb-3">
          <h3 className="font-bold text-foreground text-lg">{name}</h3>
          <span className="text-xs text-muted-foreground">{channel} Channel</span>
        </div>

        <div className="flex flex-wrap justify-center gap-1.5 mb-4">
          {(productTags || products.slice(0, 3)).map((tag) => (
            <Badge
              key={tag}
              className="badge-product"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mb-4">
          <StarRating rating={rating} showCount={false} />
          <span className="text-sm font-bold text-foreground">{rating}</span>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>

        <Button className="w-full btn-brand text-xs font-semibold shadow-lg rounded-xl">
          <Play className="w-3 h-3 mr-1" />
          View Rate Sheet
        </Button>

        <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-border">
          <LikeDislikeButtons likes={likes} dislikes={dislikes} />
        </div>

        <div className="flex items-center justify-center gap-1 mt-3">
          <Shield className="w-3 h-3 text-[#22C55E]" />
          <span className="text-[10px] text-[#22C55E] font-medium">Verified Lender</span>
        </div>
      </CardContent>
    </Card>
  );
});
