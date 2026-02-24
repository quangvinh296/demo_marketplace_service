"use client";

import { ReactNode, Suspense } from "react";
import { TopNav, LeftSidebar, FloatingPanel, AlertBanner } from "@/components/layout";
import { MobileNav } from "@/components/layout/mobile-nav";
import { BottomNav } from "@/components/layout/bottom-nav";
import { SidebarSkeleton, LayoutSkeleton } from "@/components/shared/skeletons";
import { ClientOnly } from "@/components/shared/client-only";

export default function MarketplaceLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Desktop Top Nav */}
      <div className="hide-mobile">
        <ClientOnly>
          <TopNav />
        </ClientOnly>
      </div>

      {/* Mobile Top Nav */}
      <ClientOnly>
        <MobileNav />
      </ClientOnly>

      {/* Alert Banner */}
      <Suspense fallback={null}>
        <AlertBanner />
      </Suspense>

      <div className="flex flex-1">
        {/* Desktop Left Sidebar */}
        <div className="hide-mobile">
          <ClientOnly fallback={<SidebarSkeleton />}>
            <LeftSidebar />
          </ClientOnly>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-auto pb-20 md:pb-0">
          <div className="page-fade-in">
            <Suspense fallback={<LayoutSkeleton />}>
              {children}
            </Suspense>
          </div>
        </main>
      </div>

      {/* Floating Panel (Desktop only) */}
      <div className="hide-mobile">
        <FloatingPanel />
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNav />

      {/* Footer (Desktop only) */}
      <footer className="hide-mobile bg-gray-800 text-white py-2 px-4 text-xs flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-gray-400">© 2026 Loan Factory - Viet18 Marketplace</span>
          <div className="flex items-center gap-2 text-gray-500">
            <button className="hover:text-gray-300">Fill form</button>
            <span>|</span>
            <button className="hover:text-gray-300">Debug mode</button>
            <span>|</span>
            <button className="hover:text-gray-300">Which code is this?</button>
            <span>|</span>
            <button className="hover:text-gray-300">Clear page cache</button>
            <span>|</span>
            <button className="hover:text-gray-300">Get Help?</button>
            <span>|</span>
            <button className="hover:text-gray-300">LoanFactory AI Chat</button>
            <span>|</span>
            <button className="hover:text-gray-300">Consumer Chat</button>
            <span>|</span>
            <button className="hover:text-gray-300">datastore</button>
            <span>|</span>
            <button className="hover:text-gray-300">logs</button>
          </div>
        </div>
        <span className="text-gray-500">v3.46.0</span>
      </footer>
    </div>
  );
}
