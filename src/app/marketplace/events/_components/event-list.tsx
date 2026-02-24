"use client";

import { useState } from "react";
import { EventsActions, EventsFilters } from "./actions";
import { EventCard, EventCardGrid } from "./event-card";
import type { Event } from "@/mocks/data";

interface EventListProps {
  events: Event[];
}

export function EventList({ events }: EventListProps) {
  const [showUpcoming, setShowUpcoming] = useState(true);
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  const filteredEvents = events.filter((e) =>
    showUpcoming ? e.status === "UPCOMING" : e.status === "RECORDING"
  );

  return (
    <>
      <EventsActions 
        showUpcoming={showUpcoming} 
        onToggle={setShowUpcoming}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <EventsFilters />
      
      {viewMode === "list" ? (
        <div className="space-y-6">
          {filteredEvents.map((event, index) => (
            <EventCard key={event.id} event={event} isFeatured={index === 0} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <EventCardGrid key={event.id} event={event} isFeatured={index === 0} />
          ))}
        </div>
      )}
    </>
  );
}
