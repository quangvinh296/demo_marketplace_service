"use client";

import { useState, memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Inquiry } from "@/mocks/data";

interface InquiryCardProps {
  inquiry: Inquiry;
  isLatest: boolean;
}

export const InquiryCard = memo(function InquiryCard({ inquiry, isLatest }: InquiryCardProps) {
  const [showComments, setShowComments] = useState(false);

  return (
    <Card className={cn("glass-card glass-card-hover overflow-hidden", isLatest && "featured-card")}>
      <CardContent className="p-5">
        {isLatest && (
          <div className="flex items-center gap-2 mb-3">
            <Badge className="badge-featured-solid text-[10px] font-bold shadow-lg">
              🔥 LATEST INQUIRY
            </Badge>
          </div>
        )}
        <div className="flex items-start gap-4">
          <Avatar className="w-12 h-12 shadow-lg">
            <AvatarImage src={inquiry.lender.avatar} alt={inquiry.lender.name} />
            <AvatarFallback>{inquiry.lender.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-foreground text-lg">{inquiry.lender.name}</span>
                <a href="#" className="text-xs text-[#F36F20] hover:underline font-medium">(Loan Factory)</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{inquiry.createdAt}</span>
                {inquiry.status === "OPEN" && (
                  <Badge className="badge-live text-xs shadow">Active</Badge>
                )}
              </div>
            </div>
            
            <div className="text-xs text-gray-400 mb-2 font-mono">ID: #{inquiry.id.toString().padStart(11, "0")}</div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">{inquiry.content}</p>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-[#06B6D4] h-8 text-xs gap-1">
                <ThumbsUp className="h-4 w-4" /> {inquiry.likes}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-[#06B6D4] h-8 text-xs gap-1"
                onClick={() => setShowComments((prev) => !prev)}
              >
                <MessageCircle className="h-4 w-4" /> {inquiry.comments} Comment(s)
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-[#06B6D4] h-8 text-xs gap-1">
                <Share2 className="h-4 w-4" /> Share
              </Button>
            </div>

            {showComments && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="space-y-3 mb-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#06B6D4] to-blue-500 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold shadow">J</div>
                    <div className="flex-1 bg-white dark:bg-[#16213E] rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm">John D.</span>
                        <span className="text-xs text-muted-foreground">1 hour ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Great question! For FHA loans, I recommend checking current rates.</p>
                      <Button variant="ghost" size="sm" className="text-[#06B6D4] text-xs h-6 mt-2">Reply</Button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#F36F20] to-[#FBBF24] flex-shrink-0 flex items-center justify-center text-white text-xs font-bold shadow">Y</div>
                  <Input placeholder="Write a comment..." className="flex-1 h-10 text-xs bg-gray-50 dark:bg-gray-800 border-0" />
                  <Button size="sm" className="bg-[#06B6D4] hover:bg-[#0891B2] h-10 shadow-lg">
                    <Share2 className="h-4 w-4 rotate-90" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
});
