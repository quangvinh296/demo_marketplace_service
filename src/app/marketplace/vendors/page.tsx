import { Suspense } from "react";
import { getVendors, getOnlineVendorCount } from "@/lib/data";
import { Shield, Users, Award, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { LikeDislikeButtons } from "@/components/shared/like-dislike-buttons";
import { StarRating } from "@/components/shared/star-rating";
import { cn } from "@/lib/utils";
import type { Vendor } from "@/mocks/data";

function VendorsHero({ onlineCount }: { onlineCount: number }) {
  return (
    <div className="hero-premium py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <span className="hero-badge text-purple-600 dark:text-purple-400">Trusted Partners</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Vendors</h1>
        <p className="hero-description mb-6">
          Connect with verified vendors offering title, appraisal, and insurance services.
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-600 dark:text-green-400 font-semibold">{onlineCount} Online</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-orange-500 dark:text-orange-400" />
            <span>Approved Partners</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>4.5★ Average Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function VendorsFilters({ totalCount, onlineCount }: { totalCount: number; onlineCount: number }) {
  return (
    <div className="glass-card rounded-2xl p-4 mb-6">
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div className="flex flex-wrap gap-3 items-center">
          <Input placeholder="Name" className="w-[180px] h-8 text-xs glass border-0" />
          <Select defaultValue="all-products">
            <SelectTrigger className="w-[160px] h-8 text-xs glass border-0"><SelectValue placeholder="Products/services" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all-products">Products/services</SelectItem>
              <SelectItem value="Title Insurance">Title Insurance</SelectItem>
              <SelectItem value="Appraisal">Appraisal</SelectItem>
              <SelectItem value="Insurance">Insurance</SelectItem>
            </SelectContent>
          </Select>
          <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs cursor-pointer hover:from-green-600 hover:to-emerald-600 shadow-lg">✓ Approved</Badge>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="font-bold text-gray-800">{totalCount}</span>
          <span className="text-gray-500">vendor(s),</span>
          <span className="text-green-500 font-bold">{onlineCount}</span>
          <span className="text-gray-500">online</span>
        </div>
      </div>
    </div>
  );
}

function VendorCard({ vendor, isFeatured }: { vendor: Vendor; isFeatured: boolean }) {
  return (
    <Card className={cn("glass-card glass-card-hover overflow-hidden", isFeatured && "featured-card")}>
      <CardContent className="p-5">
        {isFeatured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold shadow-lg">
              ⭐ TOP RATED
            </Badge>
          </div>
        )}

        {vendor.isApproved && (
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-xs font-semibold text-green-600">Loan Factory Approved Partner</span>
          </div>
        )}

        <div className="flex justify-center mb-4">
          <div className="relative">
            <img src={vendor.logo} alt={vendor.name} className="w-20 h-20 rounded-2xl shadow-lg" />
            {vendor.status === "LIVE" && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-glow-pulse">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            )}
          </div>
        </div>

        <div className="text-center mb-4">
          <Button variant="link" className="text-blue-600 font-bold text-lg p-0 h-auto hover:underline">
            {vendor.name}
          </Button>
          <div className="flex flex-wrap justify-center gap-1.5 mt-2">
            {vendor.products.map((p) => (
              <Badge key={p} className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-[10px] border-0">{p}</Badge>
            ))}
          </div>
        </div>

        <Button variant="outline" className="w-full text-xs glass border-0 text-blue-600 hover:bg-blue-50 mb-4">
          Special discounts/Important information
        </Button>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <LikeDislikeButtons likes={vendor.likes} dislikes={vendor.dislikes} />
          <div className="flex items-center gap-1">
            <StarRating rating={4.5} showCount={false} />
            <span className="text-xs text-gray-500">({vendor.reviews})</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default async function VendorsPage() {
  const [vendors, onlineCount] = await Promise.all([
    getVendors(),
    getOnlineVendorCount(),
  ]);

  return (
    <div className="min-h-screen bg-mesh-gradient">
      <VendorsHero onlineCount={onlineCount} />

      <div className="max-w-7xl mx-auto px-6 py-6">
        <VendorsFilters totalCount={vendors.length} onlineCount={onlineCount} />

        <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-64 glass-card rounded-xl animate-pulse" />
          ))}
        </div>}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.map((vendor, index) => (
              <VendorCard key={vendor.id} vendor={vendor} isFeatured={index < 2} />
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
