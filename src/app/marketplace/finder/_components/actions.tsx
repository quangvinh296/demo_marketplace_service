"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Bookmark, ChevronDown } from "lucide-react";

export function FinderActions() {
  return (
    <div className="glass-card rounded-2xl p-4 mb-6">
      <div className="flex flex-wrap gap-3 items-center">
        <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-xs gap-1 shadow-lg">
          <Plus className="h-3.5 w-3.5" /> POST A LENDER INQUIRY
        </Button>
        <Button variant="outline" className="text-xs gap-1 glass border-0 text-orange-600 hover:bg-orange-50">
          <Bookmark className="h-3.5 w-3.5" /> SAVED INQUIRY
        </Button>
        <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xs gap-1 shadow-lg">
          Most Recent <ChevronDown className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
}

export function FinderFilters() {
  return (
    <div className="glass-card rounded-2xl p-4 mb-6">
      <div className="flex flex-wrap gap-3 items-center">
        <Input placeholder="Inquiry id, Author, #hashtag" className="w-[200px] h-8 text-xs glass border-0" />
        <Select defaultValue="all-lenders">
          <SelectTrigger className="w-[140px] h-8 text-xs glass border-0">
            <SelectValue placeholder="Lenders" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-lenders">Lenders</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-responses">
          <SelectTrigger className="w-[160px] h-8 text-xs glass border-0">
            <SelectValue placeholder="Lenders response" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-responses">Lenders response</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-products">
          <SelectTrigger className="w-[140px] h-8 text-xs glass border-0">
            <SelectValue placeholder="Product Offered" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-products">Product Offered</SelectItem>
          </SelectContent>
        </Select>
        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs shadow-lg">Active</Badge>
      </div>
    </div>
  );
}
