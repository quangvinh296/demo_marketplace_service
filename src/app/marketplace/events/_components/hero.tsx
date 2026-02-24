import { Sparkles, Calendar, Video, Users } from "lucide-react";

export function EventsHero() {
  return (
    <div className="hero-premium py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-amber-500 dark:text-amber-400" />
          <span className="hero-badge text-amber-600 dark:text-amber-400">Professional Development</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Events & Webinars</h1>
        <p className="hero-description mb-6">
          Join upcoming events. Learn, network, and grow your mortgage career.
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-green-600 dark:text-green-400 font-semibold">Upcoming Events</span>
          </div>
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>All Recorded</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-orange-500 dark:text-orange-400" />
            <span>Free for Members</span>
          </div>
        </div>
      </div>
    </div>
  );
}
