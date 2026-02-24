"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  FolderPlus,
  LayoutDashboard,
  Megaphone,
  Wrench,
  FileText,
  Settings,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

const mainMenu: MenuItem[] = [
  { label: "CREATE A NEW LOAN", href: "/new-loan", icon: <FolderPlus className="h-4 w-4" /> },
  { label: "MAIN FEATURES", icon: <LayoutDashboard className="h-4 w-4" />, children: [] },
  { label: "MARKETING FEATURES", icon: <Megaphone className="h-4 w-4" />, children: [] },
  { label: "MISCELLANEOUS FEATURES", icon: <Wrench className="h-4 w-4" />, children: [] },
  { label: "LOAN PRODUCTS", icon: <FileText className="h-4 w-4" />, children: [] },
];

const userSettings: MenuItem[] = [
  { label: "Loan Officer Important Settings", href: "/settings/lo-important" },
  { label: "System Preference Settings", href: "/settings/system" },
  { label: "Credentials Settings", href: "/settings/credentials" },
  { label: "Marketing Settings", href: "/settings/marketing" },
];

const adminMenu: MenuItem[] = [
  { label: "Transactions", href: "/admin/transactions" },
  { label: "Rate Alerts", href: "/admin/rate-alerts" },
  { label: "Users", href: "/admin/users" },
  { label: "Associate's To-Dos", href: "/admin/todos" },
  { label: "Admin", href: "/admin" },
  { label: "Service Desks", href: "/admin/service-desks" },
  { label: "Customer Relationship", href: "/admin/crm" },
  { label: "Leave Management", href: "/admin/leave" },
  { label: "Recruiting", href: "/admin/recruiting" },
  { label: "LO Recruiting", href: "/admin/lo-recruiting" },
  { label: "Compensation", href: "/admin/compensation" },
  { label: "Shared Documents", href: "/admin/documents" },
  { label: "Marketing", href: "/admin/marketing" },
  { label: "My Training Academy", href: "/admin/training" },
  { label: "Real Estate Division", href: "/admin/real-estate" },
];

interface SidebarItemProps {
  item: MenuItem;
  collapsed: boolean;
}

function SidebarItem({ item, collapsed }: SidebarItemProps) {
  const content = item.children ? (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-muted-foreground nav-item-premium rounded-md mx-1">
          <div className="flex items-center gap-2">
            {item.icon}
            {!collapsed && item.label}
          </div>
          {!collapsed && <Plus className="h-3 w-3" />}
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        {!collapsed && (
          <div className="pl-6 text-xs text-muted-foreground">
            {item.children.length === 0 && (
              <span className="text-muted-foreground/50 italic py-2 block">No items</span>
            )}
          </div>
        )}
      </CollapsibleContent>
    </Collapsible>
  ) : (
    <Link href={item.href || "#"}>
      <div className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground nav-item-premium rounded-md mx-1">
        {item.icon}
        {!collapsed && item.label}
      </div>
    </Link>
  );

  if (collapsed && item.icon) {
    return (
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <div className="flex justify-center py-1">
            <div className="sidebar-collapsed-icon">
              {item.icon}
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="right" className="font-medium">
          {item.label}
        </TooltipContent>
      </Tooltip>
    );
  }

  return content;
}

interface MenuGroupProps {
  title: string;
  items: MenuItem[];
  collapsed: boolean;
  icon?: React.ReactNode;
}

function MenuGroup({ title, items, collapsed, icon }: MenuGroupProps) {
  return (
    <div className="py-2">
      {!collapsed && title && (
        <div className="px-3 py-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
          {icon}
          {title}
        </div>
      )}
      {collapsed && icon && (
        <div className="flex justify-center py-2">
          <div className="sidebar-collapsed-icon">
            {icon}
          </div>
        </div>
      )}
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} collapsed={collapsed} />
      ))}
    </div>
  );
}

export function LeftSidebar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <aside
      className={cn(
        "sidebar-premium transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-2 border-b border-border h-12">
        {!collapsed && (
          <span className="text-xs font-semibold text-muted-foreground px-2">
            MENU
          </span>
        )}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "h-6 w-6 nav-item-premium",
            collapsed && "mx-auto"
          )}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <MenuGroup title="" items={mainMenu} collapsed={collapsed} />

        {!collapsed && (
          <>
            <Separator className="my-2" />

            <MenuGroup 
              title="USER SETTINGS" 
              items={userSettings} 
              collapsed={collapsed}
              icon={<Settings className="h-3 w-3" />}
            />

            <Separator className="my-2" />

            <MenuGroup 
              title="ADMIN" 
              items={adminMenu} 
              collapsed={collapsed}
              icon={<Users className="h-3 w-3" />}
            />
          </>
        )}
      </ScrollArea>

      {!collapsed && (
        <div className="p-2 border-t border-border text-center">
          <span className="text-[10px] text-muted-foreground">v3.46.0</span>
        </div>
      )}
    </aside>
  );
}
