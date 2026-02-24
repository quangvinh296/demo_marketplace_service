"use client";

import { useState, useEffect, memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Play, Share2, Pin, Video, PartyPopper, MessageCircle } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Event } from "@/mocks/data";

const typeColors: Record<string, string> = {
  Webinar: "bg-gradient-to-r from-blue-500 to-cyan-500",
  Workshop: "bg-gradient-to-r from-purple-500 to-pink-500",
  Conference: "bg-gradient-to-r from-orange-500 to-amber-500",
};

function CountdownTimer({ days, hours }: { days: number; hours: number }) {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        const newSeconds = prev.seconds + 1;
        if (newSeconds >= 60) return { minutes: prev.minutes + 1, seconds: 0 };
        return { ...prev, seconds: newSeconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-1 text-orange-500 font-mono font-bold text-xs">
      <span>{days}d</span>
      <span className="text-gray-400">:</span>
      <span>{hours}h</span>
      <span className="text-gray-400">:</span>
      <span>{String(time.minutes).padStart(2, "0")}m</span>
      <span className="text-gray-400">:</span>
      <span>{String(time.seconds).padStart(2, "0")}s</span>
    </div>
  );
}

interface EventCardProps {
  event: Event;
  isFeatured: boolean;
}

export const EventCard = memo(function EventCard({ event, isFeatured }: EventCardProps) {
  return (
    <Card className={cn("glass-card glass-card-hover overflow-hidden", isFeatured && "featured-card")}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-64 h-48 md:h-auto relative flex-shrink-0">
          <Image src={event.poster} alt={event.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute top-3 left-3">
            <div className="glass rounded-xl shadow-lg p-3 text-center">
              <div className="text-[10px] text-gray-500 uppercase font-semibold">{event.date.split(" ")[0]}</div>
              <div className="text-2xl font-bold text-gray-800">{event.date.split(" ")[1]?.replace(",", "")}</div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              {isFeatured && <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-bold">🔥 FEATURED</Badge>}
              <Pin className="h-4 w-4 text-orange-500" />
              <h3 className="font-bold text-blue-600 hover:underline cursor-pointer text-lg">{event.title}</h3>
            </div>
            <Badge className={cn("text-xs text-white shadow", typeColors[event.type])}>{event.type}</Badge>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center gap-1"><Calendar className="h-4 w-4 text-green-500" />{event.date}</div>
            <div className="flex items-center gap-1"><Clock className="h-4 w-4 text-green-500" />{event.time}</div>
            <div className="flex items-center gap-1"><MapPin className="h-4 w-4 text-green-500" />{event.location}</div>
            <div className="flex items-center gap-1"><Users className="h-4 w-4 text-green-500" />{event.registrations} registered</div>
          </div>

          {event.status === "UPCOMING" && (
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs text-gray-500">Time remaining:</span>
              <CountdownTimer days={Math.floor(Math.random() * 30) + 1} hours={Math.floor(Math.random() * 24)} />
            </div>
          )}

          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="text-xs glass"><Video className="h-3 w-3 mr-1" />Will be recorded</Badge>
            {event.type === "Workshop" && <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs">LO TRAINING</Badge>}
            {event.hasAfterParty && <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs flex items-center gap-1"><PartyPopper className="h-3 w-3" />AFTER PARTY</Badge>}
          </div>

          <div className="flex items-center gap-3">
            {event.status === "UPCOMING" ? (
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xs shadow-lg">Register for Event</Button>
            ) : (
              <Button variant="secondary" className="text-xs glass">Watch Recording</Button>
            )}
            <Button variant="outline" className="text-xs glass border-0">Add to calendar</Button>
            <div className="flex items-center gap-3 ml-auto text-xs text-gray-500">
              <span className="flex items-center gap-1"><MessageCircle className="h-4 w-4" />0</span>
              <span className="flex items-center gap-1">👍{Math.floor(Math.random() * 50)}</span>
              <span className="flex items-center gap-1">👎{Math.floor(Math.random() * 5)}</span>
              <Share2 className="h-4 w-4 cursor-pointer hover:text-cyan-500" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
});

export const EventCardGrid = memo(function EventCardGrid({ event, isFeatured }: EventCardProps) {
  return (
    <Card className={cn("glass-card glass-card-hover overflow-hidden", isFeatured && "featured-card")}>
      <div className="h-40 relative">
        <Image src={event.poster} alt={event.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-3 left-3">
          <div className="glass rounded-lg shadow-lg p-2 text-center">
            <div className="text-[9px] text-gray-500 uppercase font-semibold">{event.date.split(" ")[0]}</div>
            <div className="text-lg font-bold text-gray-800">{event.date.split(" ")[1]?.replace(",", "")}</div>
          </div>
        </div>
        {isFeatured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-bold">🔥</Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center gap-1 mb-2">
          <Pin className="h-3 w-3 text-orange-500" />
          <h3 className="font-bold text-blue-600 hover:underline cursor-pointer text-sm line-clamp-2">{event.title}</h3>
        </div>
        
        <Badge className={cn("text-[10px] text-white shadow mb-3", typeColors[event.type])}>{event.type}</Badge>

        <div className="space-y-1 text-xs text-gray-600 mb-3">
          <div className="flex items-center gap-1"><Calendar className="h-3 w-3 text-green-500" />{event.date}</div>
          <div className="flex items-center gap-1"><Clock className="h-3 w-3 text-green-500" />{event.time}</div>
          <div className="flex items-center gap-1"><MapPin className="h-3 w-3 text-green-500" />{event.location}</div>
        </div>

        {event.status === "UPCOMING" && (
          <div className="flex items-center gap-1 mb-3">
            <CountdownTimer days={Math.floor(Math.random() * 30) + 1} hours={Math.floor(Math.random() * 24)} />
          </div>
        )}

        <div className="flex items-center gap-1 mb-3">
          <Badge variant="outline" className="text-[10px] glass"><Video className="h-3 w-3" /></Badge>
          {event.hasAfterParty && <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px]"><PartyPopper className="h-2 w-2" /></Badge>}
        </div>

        <div className="flex items-center gap-2">
          {event.status === "UPCOMING" ? (
            <Button size="sm" className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-[10px] shadow">Register</Button>
          ) : (
            <Button size="sm" variant="secondary" className="flex-1 text-[10px] glass">Watch</Button>
          )}
          <div className="flex items-center gap-1 text-[10px] text-gray-500">
            <Users className="h-3 w-3" />{event.registrations}
          </div>
        </div>
      </CardContent>
    </Card>
  );
});
