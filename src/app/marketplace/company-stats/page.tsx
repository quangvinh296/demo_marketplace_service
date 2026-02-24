import { Suspense } from "react";
import { BarChart3, Clock, Users, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "@/components/shared/charts";

const loData = [
  { name: "John Smith", hours: 45 },
  { name: "Sarah Johnson", hours: 52 },
  { name: "Emily Davis", hours: 38 },
  { name: "Mike Chen", hours: 29 },
  { name: "Lisa Brown", hours: 41 },
];

const nonLoData = [
  { name: "David Wilson", hours: 35 },
  { name: "Robert Taylor", hours: 42 },
  { name: "Anna Lee", hours: 28 },
  { name: "Tom Harris", hours: 31 },
  { name: "Karen White", hours: 39 },
];

function CompanyStatsHero() {
  const totalLoHours = loData.reduce((acc, d) => acc + d.hours, 0);
  const totalNonLoHours = nonLoData.reduce((acc, d) => acc + d.hours, 0);

  return (
    <div className="hero-premium py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5 text-green-600 dark:text-green-400" />
          <span className="hero-badge text-green-600 dark:text-green-400">Company Analytics</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Company Statistics</h1>
        <p className="hero-description mb-6">
          Track team performance, GO LIVE hours, and productivity metrics across the organization.
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-green-600 dark:text-green-400 font-semibold">{totalLoHours + totalNonLoHours} Total Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>{loData.length + nonLoData.length} Team Members</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-orange-500 dark:text-orange-400" />
            <span>Productivity Insights</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanyStatsTabs() {
  const totalLoHours = loData.reduce((acc, d) => acc + d.hours, 0);
  const totalNonLoHours = nonLoData.reduce((acc, d) => acc + d.hours, 0);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="glass-card p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-500">LO Total Hours</div>
              <div className="text-2xl font-bold text-gray-800">{totalLoHours}h</div>
            </div>
          </div>
        </Card>
        <Card className="glass-card p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Non-LO Total Hours</div>
              <div className="text-2xl font-bold text-gray-800">{totalNonLoHours}h</div>
            </div>
          </div>
        </Card>
      </div>

      <Tabs defaultValue="lo-hours" className="w-full">
        <TabsList className="mb-6 flex gap-2 h-auto bg-transparent">
          <TabsTrigger value="lo-hours" className="text-xs data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white glass border-0">LO Total Hours GO LIVE</TabsTrigger>
          <TabsTrigger value="non-lo-hours" className="text-xs data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white glass border-0">Non-LO Total Hours GO LIVE</TabsTrigger>
        </TabsList>

        <TabsContent value="lo-hours">
          <Card className="glass-card">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-4">
                <Select defaultValue="all-users">
                  <SelectTrigger className="w-[180px] h-8 text-xs glass border-0"><SelectValue placeholder="User" /></SelectTrigger>
                  <SelectContent><SelectItem value="all-users">All Users</SelectItem></SelectContent>
                </Select>
                <div className="flex gap-1">
                  {["Last month", "Last 3 months", "Last 6 months", "Year-to-date"].map((period) => (
                    <Button key={period} variant="outline" size="sm" className="text-xs h-7 glass border-0">{period}</Button>
                  ))}
                </div>
              </div>
              <div className="h-80 bg-white/50 rounded-xl p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={loData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis type="number" tick={{ fontSize: 12 }} />
                    <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="hours" fill="#22C55E" name="Hours" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="non-lo-hours">
          <Card className="glass-card">
            <CardContent className="p-5">
              <div className="h-80 bg-white/50 rounded-xl p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={nonLoData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis type="number" tick={{ fontSize: 12 }} />
                    <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="hours" fill="#2196F3" name="Hours" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}

export default function CompanyStatsPage() {
  return (
    <div className="min-h-screen bg-mesh-gradient">
      <CompanyStatsHero />

      <div className="max-w-7xl mx-auto px-6 py-6">
        <Suspense fallback={<div className="h-80 glass-card rounded-xl animate-pulse" />}>
          <CompanyStatsTabs />
        </Suspense>
      </div>
    </div>
  );
}
