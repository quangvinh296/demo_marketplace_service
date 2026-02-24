"use client";

import Image from "next/image";
import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Lenders", href: "/marketplace/lenders" },
  { label: "Loan Factory Inc", href: "/marketplace/chau-chau-inc" },
  { label: "Lender Finder", href: "/marketplace/finder" },
  { label: "Events", href: "/marketplace/events" },
  { label: "DPA Programs", href: "/marketplace/dpa" },
  { label: "Trade Shows", href: "/marketplace/trade-shows" },
  { label: "Announcement", href: "/marketplace/announcement" },
  { label: "Vendors", href: "/marketplace/vendors" },
  { label: "Processors", href: "/marketplace/processors" },
  { label: "Shout-outs", href: "/marketplace/shoutouts" },
  { label: "Lender Stats", href: "/marketplace/lender-stats" },
  { label: "Company Stats", href: "/marketplace/company-stats" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <header className="header-premium sticky top-0 z-50 md:hidden">
      <div className="flex items-center justify-between px-4 h-14">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10 touch-target nav-item-premium">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] p-0 sidebar-premium">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-border">
                <Image
                  src="/logo.svg"
                  alt="Loan Factory"
                  width={140}
                  height={40}
                  className="h-8 w-auto object-contain block dark:hidden"
                  priority
                />
                <Image
                  src="/logo-dark.png"
                  alt="Loan Factory"
                  width={140}
                  height={40}
                  className="h-8 w-auto object-contain hidden dark:block"
                  priority
                />
              </div>
              <nav className="flex-1 overflow-y-auto py-2">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block px-4 py-3 text-sm transition-colors touch-target",
                        isActive
                          ? "sidebar-item-active"
                          : "nav-item-premium text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="p-4 border-t border-border">
                <Button className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white touch-target shadow-sm">
                  GO LIVE
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Image
          src="/logo.svg"
          alt="Loan Factory"
          width={120}
          height={32}
          className="h-7 w-auto object-contain block dark:hidden"
          priority
        />
        <Image
          src="/logo-dark.png"
          alt="Loan Factory"
          width={120}
          height={32}
          className="h-7 w-auto object-contain hidden dark:block"
          priority
        />

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="h-10 w-10 relative touch-target nav-item-premium">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
          </Button>
        </div>
      </div>
    </header>
  );
}
