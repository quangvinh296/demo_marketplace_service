"use client";

import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Share2, Check } from "lucide-react";
import type { DPAProgram } from "@/mocks/data";

interface DPAProgramCardProps {
  program: DPAProgram;
  isFeatured: boolean;
}

export const DPAProgramCard = memo(function DPAProgramCard({ program, isFeatured }: DPAProgramCardProps) {
  return (
    <Card className={cn("glass-card glass-card-hover overflow-hidden", isFeatured && "featured-card")}>
      <CardContent className="p-5">
        {isFeatured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-[10px] font-bold shadow-lg">
              ⭐ TOP PROGRAM
            </Badge>
          </div>
        )}

        <div className="flex items-center gap-3 mb-4">
          <img src={program.logo} alt={program.lender} className="w-14 h-14 rounded-xl shadow-lg" />
          <div>
            <Button variant="link" className="text-blue-600 text-base font-bold p-0 h-auto hover:underline">
              {program.name}
            </Button>
            <p className="text-xs text-gray-500">{program.lender}</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Down payment assistance program for eligible borrowers.
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {program.eligibleBorrowers.map((borrower) => (
            <Badge key={borrower} className="glass-success text-green-700 text-[10px] border-0">
              {borrower}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          <Badge className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-[10px] border-0">
            📍 {program.eligibleStates.includes("ALL") ? "Nationwide" : program.eligibleStates.join(", ")}
          </Badge>
        </div>

        <div className="glass rounded-xl p-3 mb-4 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">Credit Score Min:</span>
            <span className="font-bold text-gray-800">{program.creditScoreMin}+</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">Max Assistance:</span>
            <span className="font-bold text-purple-600">{program.maxAssistance}</span>
          </div>
        </div>

        <div className="space-y-1.5 mb-4">
          {program.features.slice(0, 2).map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-xs text-gray-600">
              <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <Button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-xs shadow-lg">View Details</Button>
          <Button variant="outline" size="icon" className="h-9 w-9 glass border-0"><Share2 className="h-4 w-4" /></Button>
        </div>
      </CardContent>
    </Card>
  );
});
