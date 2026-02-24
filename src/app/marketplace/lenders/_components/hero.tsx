import { Shield, Award, TrendingUp } from "lucide-react";

interface LendersHeroProps {
  onlineCount: number;
}

export function LendersHero({ onlineCount }: LendersHeroProps) {
  return (
    <div className="hero-premium py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
          <span className="hero-badge text-green-600 dark:text-green-400">
            Trusted by 2,500+ Loan Officers
          </span>
        </div>
        
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">Find Your Perfect Lender</h1>
        <p className="hero-description mb-8">
          Connect with 139+ verified wholesale lenders. Compare rates, programs, and get instant support.
        </p>

        <div className="flex flex-wrap items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <div>
              <div className="hero-stat-value">{onlineCount}</div>
              <div className="hero-stat-label">Online Now</div>
            </div>
          </div>

          <div>
            <div className="hero-stat-value">139+</div>
            <div className="hero-stat-label">Total Lenders</div>
          </div>

          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500 dark:text-amber-400" />
            <div>
              <div className="hero-stat-value">4.8★</div>
              <div className="hero-stat-label">Avg Rating</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <div>
              <div className="hero-stat-value">100%</div>
              <div className="hero-stat-label">Verified</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
