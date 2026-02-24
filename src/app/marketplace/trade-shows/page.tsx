import { Suspense } from "react";
import { getTradeShows } from "@/lib/data";
import { Building2, Calendar, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { MapPin, PartyPopper } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TradeShow } from "@/mocks/data";

function TradeShowsHero() {
  return (
    <div className="hero-premium py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <Building2 className="w-5 h-5 text-orange-500 dark:text-orange-400" />
          <span className="hero-badge text-orange-600 dark:text-orange-400">Industry Events</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Trade Shows</h1>
        <p className="hero-description mb-6">
          Discover upcoming trade shows and conferences across the nation.
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-green-600 dark:text-green-400 font-semibold">Upcoming</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Network with Peers</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-orange-500 dark:text-orange-400" />
            <span>Learn from Experts</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TradeShowsActions() {
  return (
    <div className="glass-card rounded-2xl p-4 mb-6">
      <div className="flex flex-wrap gap-3 items-center">
        <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-xs shadow-lg">Add new Trade Show</Button>
        <Button variant="outline" className="text-xs glass border-0 text-orange-600 hover:bg-orange-50">My Trade Shows</Button>
        <Button variant="outline" className="text-xs glass border-0">Company Trade Shows</Button>
      </div>
    </div>
  );
}

function TradeShowsFilters() {
  return (
    <div className="glass-card rounded-2xl p-4 mb-6">
      <div className="flex flex-wrap gap-3 items-center">
        <Input placeholder="Trade Show name, Speakers" className="w-[200px] h-8 text-xs glass border-0" />
        <Select defaultValue="all-types">
          <SelectTrigger className="w-[140px] h-8 text-xs glass border-0"><SelectValue placeholder="Trade Show type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all-types">Trade Show type</SelectItem>
            <SelectItem value="Conference">Conference</SelectItem>
            <SelectItem value="Expo">Expo</SelectItem>
            <SelectItem value="Summit">Summit</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-states">
          <SelectTrigger className="w-[120px] h-8 text-xs glass border-0"><SelectValue placeholder="State" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all-states">State</SelectItem>
            <SelectItem value="CA">California</SelectItem>
            <SelectItem value="TX">Texas</SelectItem>
            <SelectItem value="NV">Nevada</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

function TradeShowCard({ show, isFeatured }: { show: TradeShow; isFeatured: boolean }) {
  return (
    <Card className={cn("glass-card glass-card-hover overflow-hidden", isFeatured && "featured-card")}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-48 h-32 md:h-auto relative flex-shrink-0">
          <Image src={show.poster} alt={show.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          <div className="absolute top-3 left-3">
            <div className="glass rounded-xl shadow-lg p-3 text-center">
              <div className="text-[10px] text-gray-500 uppercase font-semibold">{show.date.split(" ")[0]}</div>
              <div className="text-2xl font-bold text-gray-800">{show.date.split(" ")[1]?.replace(",", "")}</div>
            </div>
          </div>
        </div>

        <div className="flex-1 p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              {isFeatured && <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-bold">🔥 FEATURED</Badge>}
              <h3 className="font-bold text-gray-800 text-lg">{show.title}</h3>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4 text-green-500" />{show.date}</span>
            <span className="flex items-center gap-1"><MapPin className="h-4 w-4 text-green-500" />{show.location}, {show.state}</span>
          </div>

          {show.hasAfterParty && (
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs flex items-center gap-1 w-fit mb-4 shadow-lg">
              <PartyPopper className="h-3 w-3" /> AFTER PARTY AVAILABLE
            </Badge>
          )}

          <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xs shadow-lg">Register Now</Button>
        </div>
      </div>
    </Card>
  );
}

export default async function TradeShowsPage() {
  const tradeShows = await getTradeShows();

  return (
    <div className="min-h-screen bg-mesh-gradient">
      <TradeShowsHero />

      <div className="max-w-7xl mx-auto px-6 py-6">
        <TradeShowsActions />

        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-4 rounded-t-2xl mb-0">
          <h2 className="font-bold flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            UPCOMING TRADE SHOWS
          </h2>
        </div>

        <TradeShowsFilters />

        <Suspense fallback={<div className="space-y-6">{Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-48 glass-card rounded-xl animate-pulse" />
        ))}</div>}>
          <div className="space-y-6">
            {tradeShows.map((show, index) => (
              <TradeShowCard key={show.id} show={show} isFeatured={index === 0} />
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
