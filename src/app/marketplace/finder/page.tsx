import { Suspense } from "react";
import { getInquiries } from "@/lib/data";
import { FinderHero } from "./_components/hero";
import { FinderActions, FinderFilters } from "./_components/actions";
import { InquiryList } from "./_components/inquiry-list";

export default async function FinderPage() {
  const inquiries = await getInquiries();

  return (
    <div className="min-h-screen bg-mesh-gradient">
      <FinderHero />

      <div className="max-w-7xl mx-auto px-6 py-6">
        <FinderActions />
        <FinderFilters />
        
        <Suspense fallback={<div className="space-y-4">{Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-48 glass-card rounded-xl animate-pulse" />
        ))}</div>}>
          <InquiryList inquiries={inquiries} />
        </Suspense>
      </div>
    </div>
  );
}
