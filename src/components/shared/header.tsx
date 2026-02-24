"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/marketplace/lenders", label: "Lenders" },
  { href: "/marketplace/finder", label: "Lender Finder" },
  { href: "/marketplace/events", label: "Events" },
  { href: "/marketplace/dpa", label: "DPA Programs" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-background shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#F36F20] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className="text-xl font-bold text-foreground">Mortgage Marketplace</span>
        </Link>
        <Button className="bg-[#F36F20] hover:bg-[#E5611A]">Login</Button>
      </div>
      {pathname.startsWith("/marketplace") && (
        <nav className="max-w-7xl mx-auto px-4 border-t border-border">
          <div className="flex gap-1 overflow-x-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors",
                  pathname === item.href
                    ? "text-[#F36F20] border-b-2 border-[#F36F20]"
                    : "text-muted-foreground hover:text-[#F36F20]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
