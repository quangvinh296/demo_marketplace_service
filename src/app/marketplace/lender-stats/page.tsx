import { Suspense } from "react";
import { getLenderStats, getLoginHistory, getChartData } from "@/lib/data";
import { BarChart3, Clock, Users, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "@/components/shared/charts";
import { cn } from "@/lib/utils";
import type { LenderStats, LoginHistory } from "@/mocks/data";

function LenderStatsHero() {
  return (
    <div className="hero-premium py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="hero-badge text-blue-600 dark:text-blue-400">Analytics Dashboard</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Lender Statistics</h1>
        <p className="hero-description mb-6">
          Track lender performance, response rates, and engagement metrics.
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-green-600 dark:text-green-400 font-semibold">Real-time Data</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Lenders Tracked</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-orange-500 dark:text-orange-400" />
            <span>Performance Metrics</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LenderStatsTabs({ stats, loginHistory, chartData }: { stats: LenderStats[]; loginHistory: LoginHistory[]; chartData: Array<{ name: string; dec: number; jan: number; feb: number }> }) {
  const colors = { dec: "#2196F3", jan: "#F44336", feb: "#FF9800" };

  return (
    <Tabs defaultValue="last-live" className="w-full">
      <TabsList className="mb-6 flex flex-wrap gap-2 h-auto bg-transparent">
        <TabsTrigger value="last-live" className="text-xs data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white glass border-0">The last time GO LIVE</TabsTrigger>
        <TabsTrigger value="total-hours" className="text-xs data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white glass border-0">Total hours GO LIVE</TabsTrigger>
        <TabsTrigger value="response-rate" className="text-xs data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white glass border-0">Lender Finder - Response Rate</TabsTrigger>
        <TabsTrigger value="login-history" className="text-xs data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white glass border-0">Login history</TabsTrigger>
      </TabsList>

      <TabsContent value="last-live">
        <Card className="glass-card">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <Select defaultValue="all-lenders">
                  <SelectTrigger className="w-[180px] h-8 text-xs glass border-0"><SelectValue placeholder="Lender" /></SelectTrigger>
                  <SelectContent><SelectItem value="all-lenders">All Lenders</SelectItem></SelectContent>
                </Select>
              </div>
              <div className="flex gap-1">
                {["Last month", "Last 3 months", "Last 6 months", "Year-to-date"].map((period) => (
                  <Button key={period} variant="outline" size="sm" className="text-xs h-7 glass border-0">{period}</Button>
                ))}
              </div>
            </div>
            <div className="h-80 bg-white/50 rounded-xl p-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" tick={{ fontSize: 12 }} />
                  <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="feb" fill={colors.feb} name="Feb 2026" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="total-hours">
        <Card className="glass-card">
          <CardContent className="p-5">
            <div className="h-80 bg-white/50 rounded-xl p-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" tick={{ fontSize: 12 }} />
                  <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="dec" fill={colors.dec} name="Dec 2025" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="jan" fill={colors.jan} name="Jan 2026" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="feb" fill={colors.feb} name="Feb 2026" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="response-rate">
        <Card className="glass-card">
          <CardContent className="p-5">
            <div className="bg-white/50 rounded-xl overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50/50">
                    <TableHead className="text-xs font-semibold">Full name</TableHead>
                    <TableHead className="text-xs font-semibold">Scenarios received</TableHead>
                    <TableHead className="text-xs font-semibold">Responded</TableHead>
                    <TableHead className="text-xs font-semibold">Skipped</TableHead>
                    <TableHead className="text-xs font-semibold">Response %</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stats.map((stat) => (
                    <TableRow key={stat.id}>
                      <TableCell className="text-xs font-medium">{stat.name}</TableCell>
                      <TableCell className="text-xs">{stat.scenariosReceived}</TableCell>
                      <TableCell className="text-xs">{stat.scenariosResponded}</TableCell>
                      <TableCell className="text-xs">{stat.scenariosSkipped}</TableCell>
                      <TableCell className="text-xs">
                        <Badge className={cn(
                          "text-xs font-semibold",
                          stat.responseRate >= 95
                            ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                            : "bg-gradient-to-r from-orange-500 to-amber-500 text-white"
                        )}>
                          {stat.responseRate}%
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="login-history">
        <Card className="glass-card">
          <CardContent className="p-5">
            <div className="bg-white/50 rounded-xl overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50/50">
                    <TableHead className="text-xs font-semibold">User</TableHead>
                    <TableHead className="text-xs font-semibold">Type</TableHead>
                    <TableHead className="text-xs font-semibold">Active time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loginHistory.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="text-xs">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8 shadow">
                            <AvatarImage src={log.user.avatar} />
                            <AvatarFallback>{log.user.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{log.user.name}</div>
                            <Badge variant="outline" className="text-[10px] glass">{log.user.role}</Badge>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-xs">
                        <Badge className={cn(
                          "text-xs",
                          log.type === "Login" ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white" :
                          log.type === "Logout" ? "bg-gray-500 text-white" :
                          "bg-gradient-to-r from-orange-500 to-amber-500 text-white"
                        )}>
                          {log.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs">{log.activeTime}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

export default async function LenderStatsPage() {
  const [stats, loginHistory, chartData] = await Promise.all([
    getLenderStats(),
    getLoginHistory(),
    getChartData(),
  ]);

  return (
    <div className="min-h-screen bg-mesh-gradient">
      <LenderStatsHero />

      <div className="max-w-7xl mx-auto px-6 py-6">
        <Suspense fallback={<div className="h-80 glass-card rounded-xl animate-pulse" />}>
          <LenderStatsTabs stats={stats} loginHistory={loginHistory} chartData={chartData} />
        </Suspense>
      </div>
    </div>
  );
}
