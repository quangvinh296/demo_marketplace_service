"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, AlertTriangle } from "lucide-react";

interface AlertBannerProps {
  message?: string;
}

export function AlertBanner({ message }: AlertBannerProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-[#FF9800] text-white px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm">
        <AlertTriangle className="h-4 w-4" />
        <span>
          {message || "You have pending leave requests waiting for approval."}
        </span>
        <Button
          variant="link"
          size="sm"
          className="text-white underline text-sm p-0 h-auto"
        >
          View now
        </Button>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6 text-white hover:bg-white/20"
        onClick={() => setVisible(false)}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}
