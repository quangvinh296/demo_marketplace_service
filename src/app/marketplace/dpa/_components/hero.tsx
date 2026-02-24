import { Home, DollarSign, Users, Shield } from "lucide-react";

export function DPAHero() {
  return (
    <div className="hero-premium py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <Home className="w-5 h-5 text-green-600 dark:text-green-400" />
          <span className="hero-badge text-green-600 dark:text-green-400">Down Payment Assistance</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">DPA Programs</h1>
        <p className="hero-description mb-6">
          Explore down payment assistance programs for first-time and low-income buyers.
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-green-600 dark:text-green-400 font-semibold">Up to $25,000 Assistance</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>First-Time Buyers</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-orange-500 dark:text-orange-400" />
            <span>Government Backed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
