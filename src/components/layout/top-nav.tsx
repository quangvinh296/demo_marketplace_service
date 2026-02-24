"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  LayoutDashboard,
  Calculator,
  Flame,
  Users,
  FolderOpen,
  Store,
  Video,
  BookOpen,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/pricing", label: "Pricing Engine", icon: Calculator },
  { href: "/hot-leads", label: "Hot Leads", icon: Flame },
  { href: "/leads", label: "Leads", icon: Users },
  { href: "/prospects", label: "Prospects", icon: FolderOpen },
  { href: "/loans", label: "Loans", icon: FolderOpen },
];

const marketplaceTabs = [
  { href: "/marketplace/lenders", label: "Lenders" },
  { href: "/marketplace/chau-chau-inc", label: "Loan Factory Inc" },
  { href: "/marketplace/finder", label: "Lender Finder" },
  { href: "/marketplace/events", label: "Events" },
  { href: "/marketplace/dpa", label: "DPA Programs" },
  { href: "/marketplace/trade-shows", label: "Trade Shows" },
  { href: "/marketplace/announcement", label: "Announcement" },
  { href: "/marketplace/vendors", label: "Vendors" },
  { href: "/marketplace/processors", label: "3rd-party Processors" },
  { href: "/marketplace/shoutouts", label: "Shout-outs" },
  { href: "/marketplace/lender-stats", label: "Lender Statistics" },
  { href: "/marketplace/company-stats", label: "Loan Factory Statistics" },
];

export function TopNav() {
  const pathname = usePathname();
  const isMarketplace = pathname.startsWith("/marketplace");

  return (
    <header className="header-premium sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
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
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 nav-item-premium">
              <Search className="h-4 w-4" />
            </Button>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "text-xs gap-1 nav-item-premium",
                    pathname === item.href && "nav-item-active"
                  )}
                >
                  <item.icon className="h-3.5 w-3.5" />
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link href="/marketplace/lenders">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "text-xs gap-1 nav-item-premium",
                  isMarketplace && "nav-item-active"
                )}
              >
                <Store className="h-3.5 w-3.5" />
                Marketplace
              </Button>
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white text-xs gap-1 shadow-sm">
            <Video className="h-3.5 w-3.5" />
            GO LIVE
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-xs gap-1 nav-item-premium">
                <BookOpen className="h-3.5 w-3.5" />
                Resources
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Training Videos</DropdownMenuItem>
              <DropdownMenuItem>Rate Sheets</DropdownMenuItem>
              <DropdownMenuItem>Forms & Templates</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="h-8 w-8 relative nav-item-premium">
            <MessageSquare className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-4 min-w-4 p-0 flex items-center justify-center text-[10px] bg-red-500 border-0">
              808
            </Badge>
          </Button>

          <ThemeToggle />

          <div className="flex items-center gap-2 ml-2 pl-2 border-l border-border">
            <div className="w-8 h-8 rounded-full bg-[#F36F20] flex items-center justify-center text-white text-sm font-medium shadow-sm">
              LF
            </div>
            <span className="text-sm font-medium hidden md:inline">Loan Factory</span>
          </div>
        </div>
      </div>

      {isMarketplace && (
        <div className="header-sub">
          <div className="flex items-center gap-1 px-4 py-1.5 overflow-x-auto">
            {marketplaceTabs.map((tab) => (
              <Link key={tab.href} href={tab.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "text-xs px-3 py-1 h-7 rounded-full nav-item-premium",
                    pathname === tab.href
                      ? "bg-[#F36F20] text-white hover:bg-[#E5611A] shadow-sm"
                      : "text-muted-foreground hover:text-[#F36F20]"
                  )}
                >
                  {tab.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
