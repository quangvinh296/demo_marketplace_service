"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Lender } from "@/mocks/data";

interface FilterBarProps {
  lenders: Lender[];
}

export function FilterBar({ lenders }: FilterBarProps) {
  return (
    <div className="bg-white dark:bg-[#16213E] border border-gray-200 dark:border-gray-700 rounded-2xl p-4 mb-6 shadow-sm">
      <div className="flex flex-wrap gap-3 items-center">
        <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white text-xs shadow-lg border-0">
          LIVE lenders
        </Button>
        <Button variant="outline" className="text-xs">Action ▼</Button>
        <button className="text-[#06B6D4] text-xs hover:underline">Reset filters</button>
        <button className="text-muted-foreground text-xs hover:underline">More</button>
        <Select defaultValue="all-channels">
          <SelectTrigger className="w-[140px] h-8 text-xs bg-gray-50 dark:bg-gray-800 border-0">
            <SelectValue placeholder="Channel" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-channels">Channel</SelectItem>
            <SelectItem value="Retail">Retail</SelectItem>
            <SelectItem value="Wholesale">Wholesale</SelectItem>
            <SelectItem value="Online">Online</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-lenders">
          <SelectTrigger className="w-[160px] h-8 text-xs bg-gray-50 dark:bg-gray-800 border-0">
            <SelectValue placeholder="Lender Name" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-lenders">Lender Name</SelectItem>
            {lenders.map((l) => (
              <SelectItem key={l.id} value={l.name}>{l.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select defaultValue="all-products">
          <SelectTrigger className="w-[140px] h-8 text-xs bg-gray-50 dark:bg-gray-800 border-0">
            <SelectValue placeholder="Product" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-products">Product Offered</SelectItem>
            <SelectItem value="Conventional">Conventional</SelectItem>
            <SelectItem value="FHA">FHA</SelectItem>
            <SelectItem value="VA">VA</SelectItem>
            <SelectItem value="Jumbo">Jumbo</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
