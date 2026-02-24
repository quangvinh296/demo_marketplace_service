"use client";

import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LikeDislikeButtonsProps {
  likes: number;
  dislikes: number;
  onLike?: () => void;
  onDislike?: () => void;
}

export function LikeDislikeButtons({ likes, dislikes, onLike, onDislike }: LikeDislikeButtonsProps) {
  return (
    <div className="flex items-center gap-3">
      <Button
        variant="ghost"
        size="sm"
        className="flex items-center gap-1 text-muted-foreground hover:text-[#F36F20]"
        onClick={onLike}
      >
        <ThumbsUp className="w-4 h-4" />
        <span>{likes}</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="flex items-center gap-1 text-gray-500 hover:text-[#EF4444]"
        onClick={onDislike}
      >
        <ThumbsDown className="w-4 h-4" />
        <span>{dislikes}</span>
      </Button>
    </div>
  );
}
