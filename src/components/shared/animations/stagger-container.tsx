"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 50,
}: StaggerContainerProps) {
  const childArray = Array.isArray(children) ? children : [children];

  return (
    <div className={cn(className)}>
      {childArray.map((child, index) => (
        <div
          key={index}
          className="card-enter"
          style={{ animationDelay: `${index * staggerDelay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
