"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Store,
  Search,
  Calendar,
  Building2,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/marketplace/lenders", label: "Lenders", icon: Store },
  { href: "/marketplace/finder", label: "Finder", icon: Search },
  { href: "/marketplace/events", label: "Events", icon: Calendar },
  { href: "/marketplace/chau-chau-inc", label: "Company", icon: Building2 },
  { href: "/profile", label: "Profile", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav-premium fixed bottom-0 left-0 right-0 z-50 md:hidden safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-colors min-w-[64px] touch-target",
                isActive
                  ? "nav-item-active"
                  : "text-muted-foreground nav-item-premium"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive && "stroke-[2.5]")} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
