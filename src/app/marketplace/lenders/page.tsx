import { Suspense } from "react";
import { getLenders, getOnlineLenderCount } from "@/lib/data";
import { LendersHero } from "./_components/hero";
import { FilterBar } from "./_components/filter-bar";
import { LenderGrid } from "./_components/lender-grid";
import { Testimonials } from "./_components/testimonials";
import { ContactForm } from "./_components/contact-form";
import { LenderGridSkeleton } from "@/components/shared/skeletons";
import { ClientOnly } from "@/components/shared/client-only";

const testimonials = [
  { name: "Michael Chen", role: "Senior Loan Officer", content: "Found the perfect lender for my complex jumbo loan scenario. This platform saved me hours of research!", rating: 5 },
  { name: "Sarah Williams", role: "Branch Manager", content: "The LIVE feature is a game-changer. Getting instant answers from lenders has improved my team's productivity by 40%.", rating: 5 },
  { name: "David Rodriguez", role: "Top Producer", content: "Best marketplace for comparing lender programs. The DPA section helped me close 12 first-time buyer loans last month.", rating: 5 },
];

export default async function LendersPage() {
  const [lenders, onlineCount] = await Promise.all([
    getLenders(),
    getOnlineLenderCount(),
  ]);

  return (
    <div className="min-h-screen bg-mesh-gradient">
      <LendersHero onlineCount={onlineCount} />

      <div className="max-w-7xl mx-auto px-6 py-6">
        <ClientOnly>
          <FilterBar lenders={lenders} />
        </ClientOnly>

        <Suspense fallback={<LenderGridSkeleton />}>
          <LenderGrid lenders={lenders} totalOnline={onlineCount} />
        </Suspense>

        <Testimonials testimonials={testimonials} />

        <ContactForm />
      </div>
    </div>
  );
}
