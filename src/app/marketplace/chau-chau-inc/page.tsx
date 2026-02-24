import { Suspense } from "react";
import { getEmployees, getDepartments, getLiveSchedule, getOnlineEmployeeCount } from "@/lib/data";
import { Building2, Users, Shield, Clock, Video, Mail, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { Employee } from "@/mocks/data";

const subButtons = ["Departments", "Teams", "Corporate Coaches", "Production Partners", "Company Organization Chart", "Associate Reviews", "Live Schedule"];

function ChauChauIncHero({ onlineCount }: { onlineCount: number }) {
  return (
    <div className="hero-premium py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <Building2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          <span className="hero-badge text-cyan-600 dark:text-cyan-400">Company Directory</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Loan Factory Inc</h1>
        <p className="hero-description mb-6">
          Connect with team members across all departments.
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-600 dark:text-green-400 font-semibold">{onlineCount} Online</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>8 Departments</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-orange-500 dark:text-orange-400" />
            <span>Verified Employees</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmployeeCard({ employee, isFeatured }: { employee: Employee; isFeatured: boolean }) {
  return (
    <Card className={cn("glass-card glass-card-hover overflow-hidden", isFeatured && "featured-card")}>
      <CardContent className="p-5">
        {isFeatured && (
           <div className="absolute top-3 right-3">
             <Badge className="bg-[#06B6D4] text-white text-[10px] font-bold shadow-lg">
               ⭐ TOP PERFORMER
             </Badge>
           </div>
         )}

        <div className="flex justify-between items-start mb-4">
          {employee.status === "LIVE" && (
            <Badge className="badge-live text-xs flex items-center gap-1 px-3 py-1">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              LIVE
            </Badge>
          )}
          <Badge className={cn(
            "text-xs text-white",
            employee.role.includes("Team Leader") ? "bg-[#F36F20]" : "bg-[#06B6D4]"
          )}>
            {employee.role}
          </Badge>
        </div>

        <div className="flex justify-center mb-4">
          <div className="relative">
            <Avatar className="w-20 h-20 shadow-lg">
              <AvatarImage src={employee.avatar} alt={employee.name} />
              <AvatarFallback>{employee.name[0]}</AvatarFallback>
            </Avatar>
            {employee.status === "LIVE" && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-glow-pulse">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            )}
          </div>
        </div>

        <div className="text-center mb-3">
          <div className="font-bold text-gray-800 text-lg">{employee.name}</div>
          <div className="text-xs text-gray-500">{employee.location}</div>
        </div>

        {employee.statusMessage && (
          <div className="glass-success rounded-xl text-green-700 text-xs p-3 mb-3 text-center">
            "{employee.statusMessage}"
          </div>
        )}

        <div className="flex justify-center gap-4 mb-3">
          <div className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blue-100 transition cursor-pointer">
            <Mail className="h-4 w-4 text-gray-500 hover:text-cyan-500" />
          </div>
          {employee.phone && (
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-green-100 transition cursor-pointer">
              <Phone className="h-4 w-4 text-gray-500 hover:text-green-500" />
            </div>
          )}
        </div>

        {employee.languages && (
          <div className="text-xs text-gray-500 text-center mb-3">
            🌐 {employee.languages.join(", ")}
          </div>
        )}

        <div className="flex items-center justify-center gap-4 pt-3 border-t border-gray-100">
          <span className="flex items-center gap-1 text-xs text-gray-600">👍 {employee.likes}</span>
          <span className="flex items-center gap-1 text-xs text-gray-600">👎 {employee.dislikes}</span>
          <span className="text-xs text-gray-500">{employee.reviews} reviews</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default async function ChauChauIncPage() {
  const [employees, departments, liveSchedule, onlineCount] = await Promise.all([
    getEmployees(),
    getDepartments(),
    getLiveSchedule(),
    getOnlineEmployeeCount(),
  ]);

  return (
    <div className="min-h-screen bg-mesh-gradient">
      <ChauChauIncHero onlineCount={onlineCount} />

        <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-white dark:bg-[#16213E] border border-gray-200 dark:border-gray-700 rounded-2xl p-4 mb-6 shadow-sm">
          <div className="flex flex-wrap gap-2 mb-4">
            {subButtons.map((btn) => (
              <Button key={btn} variant="outline" className="text-xs">
                {btn}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <Input placeholder="Name, Email, Address, Phone" className="w-[200px] h-8 text-xs bg-gray-50 dark:bg-gray-800 border-0" />
            <Select defaultValue="all-depts">
              <SelectTrigger className="w-[160px] h-8 text-xs bg-gray-50 dark:bg-gray-800 border-0"><SelectValue placeholder="Department" /></SelectTrigger>
              <SelectContent><SelectItem value="all-depts">Department</SelectItem></SelectContent>
            </Select>
            <Select defaultValue="all-roles">
              <SelectTrigger className="w-[140px] h-8 text-xs bg-gray-50 dark:bg-gray-800 border-0"><SelectValue placeholder="Special Role" /></SelectTrigger>
              <SelectContent><SelectItem value="all-roles">Special Role</SelectItem></SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white gap-2 shadow-lg">
            <Video className="h-4 w-4" /> I want to GO LIVE now
          </Button>
        </div>

        <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-64 glass-card rounded-xl animate-pulse" />
          ))}
        </div>}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {employees.map((employee, index) => (
              <EmployeeCard key={employee.id} employee={employee} isFeatured={index < 3} />
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
