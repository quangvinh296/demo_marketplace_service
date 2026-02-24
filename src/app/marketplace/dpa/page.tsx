import { Suspense } from "react";
import { getDPAPrograms } from "@/lib/data";
import { DPAHero } from "./_components/hero";
import { DPAFilters } from "./_components/filters";
import { DPAProgramCard } from "./_components/program-card";

export default async function DPAPage() {
  const programs = await getDPAPrograms();

  return (
    <div className="min-h-screen bg-mesh-gradient">
      <DPAHero />

      <div className="max-w-7xl mx-auto px-6 py-6">
        <DPAFilters />

        <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-80 glass-card rounded-xl animate-pulse" />
          ))}
        </div>}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <DPAProgramCard key={program.id} program={program} isFeatured={index < 2} />
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
