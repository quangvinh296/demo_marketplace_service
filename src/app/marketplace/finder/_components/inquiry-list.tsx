"use client";

import { InquiryCard } from "./inquiry-card";
import type { Inquiry } from "@/mocks/data";

interface InquiryListProps {
  inquiries: Inquiry[];
}

export function InquiryList({ inquiries }: InquiryListProps) {
  return (
    <div className="space-y-4">
      {inquiries.map((inquiry, index) => (
        <InquiryCard key={inquiry.id} inquiry={inquiry} isLatest={index === 0} />
      ))}
    </div>
  );
}
