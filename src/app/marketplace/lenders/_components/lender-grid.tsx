"use client";

import { useState } from "react";
import { ExternalLink, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/shared/star-rating";
import { LenderCard } from "./lender-card";
import { cn } from "@/lib/utils";
import { Phone, Shield } from "lucide-react";
import type { Lender } from "@/mocks/data";

interface LenderGridProps {
  lenders: Lender[];
  totalOnline: number;
}

export function LenderGrid({ lenders, totalOnline }: LenderGridProps) {
  const [selectedLender, setSelectedLender] = useState<Lender | null>(null);

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <p className="text-gray-700 text-sm">
            <span className="font-bold text-lg">{lenders.length}</span> lenders found
          </p>
          <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-700 text-sm font-medium">{totalOnline} online now</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2 text-sm text-orange-600 hover:text-orange-700 bg-orange-50 px-3 py-1.5 rounded-lg transition">
            <FileText className="h-4 w-4" />
            Non-QM Brief Handbook
          </a>
          <a href="#" className="flex items-center gap-2 text-sm text-cyan-600 hover:text-cyan-700 bg-cyan-50 px-3 py-1.5 rounded-lg transition">
            <ExternalLink className="h-4 w-4" />
            HELOC Lenders
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {lenders.map((lender, index) => (
          <LenderCard
            key={lender.id}
            id={lender.id}
            name={lender.name}
            logo={lender.logo}
            status={lender.status}
            rating={lender.rating}
            reviews={lender.reviews}
            products={lender.products}
            channel={lender.channel}
            likes={lender.likes}
            dislikes={lender.dislikes}
            isReferral={lender.isReferral}
            productTags={lender.productTags}
            isFeatured={index < 3}
            onClick={() => setSelectedLender(lender)}
          />
        ))}
      </div>

      <Dialog open={!!selectedLender} onOpenChange={() => setSelectedLender(null)}>
        <DialogContent className="max-w-2xl glass-card">
          {selectedLender && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  <img src={selectedLender.logo} alt={selectedLender.name} className="w-12 h-12 rounded-xl" />
                  <div>
                    <div className="text-xl">{selectedLender.name}</div>
                    <div className="text-sm font-normal text-gray-500">{selectedLender.channel} Channel</div>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="flex items-center gap-2">
                  <Badge className={cn("flex items-center gap-1", selectedLender.status === "LIVE" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600")}>
                    <span className={cn("w-1.5 h-1.5 rounded-full", selectedLender.status === "LIVE" ? "bg-green-500 animate-pulse" : "bg-gray-400")} />
                    {selectedLender.status}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Shield className="w-3 h-3 text-green-600" />
                    Verified
                  </Badge>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <StarRating rating={selectedLender.rating} />
                    <span className="font-bold">{selectedLender.rating}</span>
                    <span className="text-sm text-gray-500">({selectedLender.reviews} reviews)</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">Products Offered</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedLender.products.map((p) => (
                      <Badge key={p} variant="secondary">{p}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t">
                  <Button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Lender
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <FileText className="w-4 h-4 mr-2" />
                    View Rate Sheet
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
