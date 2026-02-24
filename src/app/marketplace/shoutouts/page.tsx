import { Suspense } from "react";
import { getShoutOuts } from "@/lib/data";
import { Heart, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Clock, ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ShoutOut } from "@/mocks/data";

function ShoutoutsHero() {
  return (
    <div className="hero-premium py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-pink-600 dark:text-pink-400" />
          <span className="hero-badge text-pink-600 dark:text-pink-400">Recognition Board</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Shout-outs</h1>
        <p className="hero-description mb-6">
          Celebrate achievements and recognize team members who go above and beyond.
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-pink-500 dark:text-pink-400" />
            <span className="text-pink-600 dark:text-pink-400 font-semibold">Shout-outs</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-orange-500 dark:text-orange-400" />
            <span>Pinned</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Team Recognition</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShoutoutsActions() {
  return (
    <div className="glass-card rounded-2xl p-4 mb-6">
      <div className="flex flex-wrap gap-3 items-center">
        <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-xs gap-1 shadow-lg">
          <Plus className="h-3.5 w-3.5" /> POST SHOUT-OUT
        </Button>
        <Button variant="outline" className="text-xs gap-1 glass border-0 text-orange-600 hover:bg-orange-50">
          <Clock className="h-3.5 w-3.5" /> PENDING APPROVALS
        </Button>
        <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xs shadow-lg">
          Most Recent
        </Button>
      </div>
    </div>
  );
}

function ShoutoutsFilters() {
  return (
    <div className="glass-card rounded-2xl p-4 mb-6">
      <div className="flex flex-wrap gap-3 items-center">
        <Input placeholder="Shout-out id, #hashtag, created by" className="w-[250px] h-8 text-xs glass border-0" />
      </div>
    </div>
  );
}

function ShoutoutCard({ shoutout, isLatest }: { shoutout: ShoutOut; isLatest: boolean }) {
  return (
    <Card className={cn("glass-card glass-card-hover overflow-hidden", isLatest && "featured-card")}>
      <CardContent className="p-5">
        {isLatest && (
          <div className="flex items-center gap-2 mb-3">
            <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[10px] font-bold shadow-lg">
              💖 LATEST SHOUT-OUT
            </Badge>
          </div>
        )}
        <div className="flex items-start gap-4">
          <Avatar className="w-12 h-12 shadow-lg">
            <AvatarImage src={shoutout.author.avatar} alt={shoutout.author.name} />
            <AvatarFallback>{shoutout.author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-800 text-lg">{shoutout.author.name}</span>
                <Badge variant="outline" className="text-xs glass">{shoutout.author.role}</Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">{shoutout.createdAt}</span>
                {shoutout.isPinned && <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs shadow">📌 Pinned</Badge>}
              </div>
            </div>

            <div className="mb-3">
              <span className="text-sm">Shout-out to: </span>
              <a href="#" className="text-sm text-green-500 font-semibold hover:underline">{shoutout.recipient}</a>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">{shoutout.content}</p>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-pink-500 h-8 text-xs gap-1">
                <ThumbsUp className="h-4 w-4" /> {shoutout.likes}
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-pink-500 h-8 text-xs gap-1">
                <MessageCircle className="h-4 w-4" /> {shoutout.comments} Comment(s)
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-pink-500 h-8 text-xs gap-1">
                <Share2 className="h-4 w-4" /> Share
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default async function ShoutoutsPage() {
  const shoutouts = await getShoutOuts();

  return (
    <div className="min-h-screen bg-mesh-gradient">
      <ShoutoutsHero />

      <div className="max-w-7xl mx-auto px-6 py-6">
        <ShoutoutsActions />
        <ShoutoutsFilters />

        <Suspense fallback={<div className="space-y-4">{Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-48 glass-card rounded-xl animate-pulse" />
        ))}</div>}>
          <div className="space-y-4">
            {shoutouts.map((shoutout, index) => (
              <ShoutoutCard key={shoutout.id} shoutout={shoutout} isLatest={index === 0} />
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
