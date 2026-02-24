"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { LayoutList, LayoutGrid } from "lucide-react";

interface EventsActionsProps {
  showUpcoming: boolean;
  onToggle: (value: boolean) => void;
  viewMode: "list" | "grid";
  onViewModeChange: (value: "list" | "grid") => void;
}

export function EventsActions({ showUpcoming, onToggle, viewMode,
  onViewModeChange }: EventsActionsProps) {
  return (
    <div className="glass-card rounded-2xl p-4 mb-6">
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div className="flex flex-wrap gap-3 items-center">
          <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-xs shadow-lg">Add new event</Button>
          <Button variant="outline" className="text-xs glass border-0 text-orange-600 hover:bg-orange-50">My events</Button>
          <Button variant="outline" className="text-xs glass border-0">All events</Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={showUpcoming ? "default" : "outline"}
            size="sm"
            className={cn("text-xs", showUpcoming ? "bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg" : "glass border-0")}
            onClick={() => onToggle(true)}
          >
            UPCOMING
          </Button>
          <Button
            variant={!showUpcoming ? "default" : "outline"}
            size="sm"
            className={cn("text-xs", !showUpcoming ? "bg-gray-600 shadow-lg" : "glass border-0")}
            onClick={() => onToggle(false)}
          >
            COMPLETED
          </Button>
          <div className="flex items-center gap-1 ml-2 border-l border-gray-200 pl-2">
            <Button 
              variant={viewMode === "list" ? "default" : "ghost"} 
              size="icon" 
              className={cn("h-8 w-8", viewMode === "list" && "bg-[#F36F20] text-white")}
              onClick={() => onViewModeChange("list")}
            >
              <LayoutList className="h-4 w-4" />
            </Button>
            <Button 
              variant={viewMode === "grid" ? "default" : "ghost"} 
              size="icon" 
              className={cn("h-8 w-8", viewMode === "grid" && "bg-[#F36F20] text-white")}
              onClick={() => onViewModeChange("grid")}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EventsFilters() {
  return (
    <div className="glass-card rounded-2xl p-4 mb-6">
      <div className="flex flex-wrap gap-3 items-center">
        <Input placeholder="Event title, Host name, #hashtag" className="w-[220px] h-8 text-xs glass border-0" />
        <Select defaultValue="all-types">
          <SelectTrigger className="w-[140px] h-8 text-xs glass border-0"><SelectValue placeholder="Event type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all-types">Event type</SelectItem>
            <SelectItem value="Webinar">Webinar</SelectItem>
            <SelectItem value="Workshop">Workshop</SelectItem>
            <SelectItem value="Conference">Conference</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-sources">
          <SelectTrigger className="w-[140px] h-8 text-xs glass border-0"><SelectValue placeholder="Event source" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all-sources">Event source</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
