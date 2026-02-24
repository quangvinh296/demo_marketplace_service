import { Search, Zap, Clock } from "lucide-react";

export function FinderHero() {
  return (
    <div className="hero-premium py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <Search className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          <span className="hero-badge text-cyan-600 dark:text-cyan-400">Smart Lender Matching</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Lender Finder</h1>
        <p className="hero-description mb-6">
          Post an inquiry to find the best lender for your specific loan scenario. Lenders receive instant notifications.
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-600 dark:text-green-400 font-semibold">Active Inquiries</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500 dark:text-amber-400" />
            <span>Instant Notifications</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-orange-500 dark:text-orange-400" />
            <span>24hr Response</span>
          </div>
        </div>
      </div>
    </div>
  );
}
