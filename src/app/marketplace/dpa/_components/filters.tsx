"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink, FileText } from "lucide-react";

export function DPAFilters() {
  return (
    <div className="glass-card rounded-2xl p-4 mb-6">
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div className="flex flex-wrap gap-3 items-center">
          <Select defaultValue="all-lenders">
            <SelectTrigger className="w-[180px] h-8 text-xs glass border-0"><SelectValue placeholder="Lender Name" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all-lenders">Lender Name</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-states">
            <SelectTrigger className="w-[160px] h-8 text-xs glass border-0"><SelectValue placeholder="Eligible States" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all-states">Eligible States</SelectItem>
              <SelectItem value="CA">California</SelectItem>
              <SelectItem value="TX">Texas</SelectItem>
              <SelectItem value="FL">Florida</SelectItem>
              <SelectItem value="NY">New York</SelectItem>
              <SelectItem value="ALL">Nationwide</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-borrowers">
            <SelectTrigger className="w-[180px] h-8 text-xs glass border-0"><SelectValue placeholder="Eligible Borrower" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all-borrowers">Eligible Borrower</SelectItem>
              <SelectItem value="first-time">First-Time Buyer</SelectItem>
              <SelectItem value="low-income">Low Income</SelectItem>
              <SelectItem value="veterans">Veterans</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-1 text-xs text-orange-500 hover:underline glass px-3 py-1.5 rounded-lg">
            <FileText className="h-3.5 w-3.5" />
            Non-QM Brief Handbook
          </a>
          <a href="#" className="flex items-center gap-1 text-xs text-cyan-500 hover:underline glass px-3 py-1.5 rounded-lg">
            <ExternalLink className="h-3.5 w-3.5" />
            HELOC Lenders
          </a>
        </div>
      </div>
    </div>
  );
}
