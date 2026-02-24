import { Suspense } from "react";
import { getAnnouncements } from "@/lib/data";
import { Bell, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Bookmark, ChevronDown, ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Announcement } from "@/mocks/data";

function AnnouncementHero() {
  return (
    <div className="hero-premium py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <Bell className="w-5 h-5 text-orange-500 dark:text-orange-400" />
          <span className="hero-badge text-orange-600 dark:text-orange-400">Latest Updates</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Announcements</h1>
        <p className="hero-description mb-6">
          Stay updated with lender announcements, rate sheets, and promotional programs.
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-600 dark:text-green-400 font-semibold">Active</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Pinned</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500 dark:text-amber-400" />
            <span>Instant Updates</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnnouncementActions() {
  return (
    <div className="glass-card rounded-2xl p-4 mb-6">
      <div className="flex flex-wrap gap-3 items-center">
        <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-xs gap-1 shadow-lg">
          <Plus className="h-3.5 w-3.5" /> POST AN ANNOUNCEMENT
        </Button>
        <Button variant="outline" className="text-xs gap-1 glass border-0 text-orange-600 hover:bg-orange-50">
          <Bookmark className="h-3.5 w-3.5" /> SAVED ANNOUNCEMENT
        </Button>
        <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xs gap-1 shadow-lg">
          Most Recent <ChevronDown className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
}

function AnnouncementFilters() {
  return (
    <div className="glass-card rounded-2xl p-4 mb-6">
      <div className="flex flex-wrap gap-3 items-center">
        <Input placeholder="Announcement id, #hashtag" className="w-[200px] h-8 text-xs glass border-0" />
        <Select defaultValue="all-lenders">
          <SelectTrigger className="w-[140px] h-8 text-xs glass border-0"><SelectValue placeholder="Lender" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all-lenders">Lender</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-vendors">
          <SelectTrigger className="w-[140px] h-8 text-xs glass border-0"><SelectValue placeholder="Vendor" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all-vendors">Vendor</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-types">
          <SelectTrigger className="w-[160px] h-8 text-xs glass border-0"><SelectValue placeholder="Type announcement" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all-types">Type announcement</SelectItem>
            <SelectItem value="Rate Sheet">Rate Sheet</SelectItem>
            <SelectItem value="Promotion">Promotion</SelectItem>
            <SelectItem value="Guideline Update">Guideline Update</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

function AnnouncementCard({ announcement, isLatest }: { announcement: Announcement; isLatest: boolean }) {
  return (
    <Card className={cn("glass-card glass-card-hover overflow-hidden", isLatest && "featured-card")}>
      <CardContent className="p-5">
        {isLatest && (
          <div className="flex items-center gap-2 mb-3">
            <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-bold shadow-lg">
              🔥 LATEST
            </Badge>
          </div>
        )}
        <div className="flex items-start gap-4">
          <Avatar className="w-12 h-12 shadow-lg">
            <AvatarImage src={announcement.author.avatar} alt={announcement.author.name} />
            <AvatarFallback>{announcement.author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-800 text-lg">{announcement.author.name}</span>
                <a href="#" className="text-xs text-orange-500 hover:underline font-medium">({announcement.author.org})</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">{announcement.createdAt}</span>
                {announcement.isActive && <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs shadow">Active</Badge>}
                {announcement.isPinned && <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs shadow">📌 Pinned</Badge>}
              </div>
            </div>

            <p className="text-gray-700 mb-4 whitespace-pre-wrap leading-relaxed">{announcement.content}</p>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-cyan-500 h-8 text-xs gap-1">
                <ThumbsUp className="h-4 w-4" /> {announcement.likes}
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-cyan-500 h-8 text-xs gap-1">
                <MessageCircle className="h-4 w-4" /> {announcement.comments} Comment(s)
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-cyan-500 h-8 text-xs gap-1">
                <Share2 className="h-4 w-4" /> Share
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default async function AnnouncementPage() {
  const announcements = await getAnnouncements();

  return (
    <div className="min-h-screen bg-mesh-gradient">
      <AnnouncementHero />

      <div className="max-w-7xl mx-auto px-6 py-6">
        <AnnouncementActions />
        <AnnouncementFilters />

        <Suspense fallback={<div className="space-y-4">{Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-48 glass-card rounded-xl animate-pulse" />
        ))}</div>}>
          <div className="space-y-4">
            {announcements.map((announcement, index) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} isLatest={index === 0} />
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
