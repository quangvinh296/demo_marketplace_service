"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function LenderCardSkeleton() {
  return (
    <Card className="glass-card overflow-hidden">
      <CardContent className="p-5">
        <div className="flex justify-between mb-4">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
        <div className="flex justify-center mb-4">
          <Skeleton className="w-24 h-24 rounded-2xl" />
        </div>
        <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
        <Skeleton className="h-4 w-1/2 mx-auto mb-4" />
        <div className="flex gap-2 justify-center mb-4">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
        <Skeleton className="h-10 w-full rounded-xl mb-4" />
        <div className="flex justify-center gap-4">
          <Skeleton className="h-8 w-16 rounded" />
          <Skeleton className="h-8 w-16 rounded" />
        </div>
      </CardContent>
    </Card>
  );
}

export function LenderGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <Skeleton className="h-8 w-48" />
        <div className="flex gap-4">
          <Skeleton className="h-8 w-40 rounded-lg" />
          <Skeleton className="h-8 w-32 rounded-lg" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className={`card-enter stagger-${Math.min(i + 1, 12)}`}>
            <LenderCardSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
}

export function EventCardSkeleton() {
  return (
    <Card className="glass-card overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <Skeleton className="md:w-64 h-48 md:h-auto rounded-none" />
        <div className="flex-1 p-5">
          <div className="flex gap-2 mb-3">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
          <Skeleton className="h-6 w-3/4 mb-3" />
          <div className="flex gap-4 mb-3">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-28" />
          </div>
          <Skeleton className="h-10 w-32 rounded-lg" />
        </div>
      </div>
    </Card>
  );
}

export function InquiryCardSkeleton() {
  return (
    <Card className="glass-card overflow-hidden">
      <CardContent className="p-5">
        <div className="flex gap-4">
          <Skeleton className="w-12 h-12 rounded-full" />
          <div className="flex-1 space-y-3">
            <div className="flex justify-between">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-20" />
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function EmployeeCardSkeleton() {
  return (
    <Card className="glass-card overflow-hidden">
      <CardContent className="p-5">
        <div className="flex justify-between mb-4">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-28 rounded-full" />
        </div>
        <div className="flex justify-center mb-4">
          <Skeleton className="w-20 h-20 rounded-full" />
        </div>
        <Skeleton className="h-5 w-24 mx-auto mb-2" />
        <Skeleton className="h-4 w-16 mx-auto mb-4" />
        <div className="flex justify-center gap-4 mb-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
        <div className="flex justify-center gap-4 pt-4 border-t border-border">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-16" />
        </div>
      </CardContent>
    </Card>
  );
}

export function DPAProgramSkeleton() {
  return (
    <Card className="glass-card overflow-hidden">
      <CardContent className="p-5">
        <div className="flex justify-between mb-4">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <div className="space-y-2 mb-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <Skeleton className="h-10 w-full rounded-xl" />
      </CardContent>
    </Card>
  );
}

export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i} className="glass-card p-4">
          <Skeleton className="h-8 w-16 mb-2" />
          <Skeleton className="h-4 w-24" />
        </Card>
      ))}
    </div>
  );
}

export function TableRowSkeleton({ columns = 5 }: { columns?: number }) {
  return (
    <tr className="border-b border-border">
      {Array.from({ length: columns }).map((_, i) => (
        <td key={i} className="p-4">
          <Skeleton className="h-4 w-full" />
        </td>
      ))}
    </tr>
  );
}

export function SidebarSkeleton() {
  return (
    <div className="w-64 bg-background border-r border-border p-4 space-y-2">
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-border">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-6 w-6 rounded" />
      </div>
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-10 w-full rounded-md" />
      ))}
    </div>
  );
}

export function LayoutSkeleton() {
  return (
    <div className="flex-1 p-6 space-y-6">
      <Skeleton className="h-12 w-full rounded-2xl" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={`card-enter stagger-${Math.min(i + 1, 12)}`}>
            <Card className="glass-card h-64" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <Card className="glass-card h-80 p-4">
      <div className="space-y-4 w-full h-full flex flex-col">
        <Skeleton className="h-8 w-32" />
        <div className="flex-1">
          <Skeleton className="h-full w-full" />
        </div>
      </div>
    </Card>
  );
}

export function InquiryListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`card-enter stagger-${Math.min(i + 1, 12)}`}>
          <InquiryCardSkeleton />
        </div>
      ))}
    </div>
  );
}

export function EventListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`card-enter stagger-${Math.min(i + 1, 12)}`}>
          <EventCardSkeleton />
        </div>
      ))}
    </div>
  );
}
