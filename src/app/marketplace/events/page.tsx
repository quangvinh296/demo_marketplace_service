import { Suspense } from "react";
import { getEvents } from "@/lib/data";
import { EventsHero } from "./_components/hero";
import { EventList } from "./_components/event-list";

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="min-h-screen bg-mesh-gradient">
      <EventsHero />

      <div className="max-w-7xl mx-auto px-6 py-6">
        <Suspense fallback={<div className="space-y-6">{Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-64 glass-card rounded-xl animate-pulse" />
        ))}</div>}>
          <EventList events={events} />
        </Suspense>
      </div>
    </div>
  );
}
