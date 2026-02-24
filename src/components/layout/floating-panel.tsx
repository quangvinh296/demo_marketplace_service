"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  ThumbsUp,
  Code,
  RefreshCw,
  HelpCircle,
  ArrowUp,
  MessageCircle,
} from "lucide-react";

export function FloatingPanel() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 bottom-20 flex flex-col items-center gap-2 z-40">
      <div className="flex flex-col gap-1 bg-white rounded-lg shadow-lg p-1 border border-gray-200">
        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-[#00BCD4]">
          <Check className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-[#00BCD4]">
          <ThumbsUp className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-[#00BCD4]">
          <Code className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-[#00BCD4]">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      <Button
        variant="outline"
        size="sm"
        className="bg-[#00BCD4] text-white hover:bg-[#00ACC1] border-0 text-xs"
      >
        <HelpCircle className="h-3.5 w-3.5 mr-1" />
        HELP
      </Button>

      <div className="relative cursor-pointer group">
        <div className="w-12 h-12 rounded-full bg-[#FFA726] flex items-center justify-center shadow-lg group-hover:scale-110 transition">
          <span className="text-2xl">🐭</span>
        </div>
        <Badge className="absolute -top-1 -right-1 h-5 min-w-5 p-0 flex items-center justify-center text-[10px] bg-red-500">
          30
        </Badge>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full bg-white shadow-md"
        onClick={scrollToTop}
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  );
}
