import { cache } from "react";
import {
  mockLenders,
  mockEmployees,
  mockVendors,
  mockTradeShows,
  mockShoutOuts,
  mockAnnouncements,
  mockLoginHistory,
  mockLenderStats,
  mockInquiries,
  mockEvents,
  mockDPAPrograms,
  mockGoLiveStats,
  mockDepartments,
  mockLiveSchedule,
  type Lender,
  type Employee,
  type Vendor,
  type TradeShow,
  type ShoutOut,
  type Announcement,
  type LoginHistory,
  type LenderStats,
  type Inquiry,
  type Event,
  type DPAProgram,
} from "@/mocks/data";

export const getLenders = cache(async (): Promise<Lender[]> => mockLenders);
export const getEmployees = cache(async (): Promise<Employee[]> => mockEmployees);
export const getVendors = cache(async (): Promise<Vendor[]> => mockVendors);
export const getTradeShows = cache(async (): Promise<TradeShow[]> => mockTradeShows);
export const getShoutOuts = cache(async (): Promise<ShoutOut[]> => mockShoutOuts);
export const getAnnouncements = cache(async (): Promise<Announcement[]> => mockAnnouncements);
export const getLoginHistory = cache(async (): Promise<LoginHistory[]> => mockLoginHistory);
export const getLenderStats = cache(async (): Promise<LenderStats[]> => mockLenderStats);
export const getInquiries = cache(async (): Promise<Inquiry[]> => mockInquiries);
export const getEvents = cache(async (): Promise<Event[]> => mockEvents);
export const getDPAPrograms = cache(async (): Promise<DPAProgram[]> => mockDPAPrograms);
export const getGoLiveStats = cache(async () => mockGoLiveStats);
export const getDepartments = cache(async () => mockDepartments);
export const getLiveSchedule = cache(async () => mockLiveSchedule);

export const getOnlineLenderCount = cache(async (): Promise<number> => {
  const lenders = await getLenders();
  return lenders.filter((l) => l.status === "LIVE").length;
});

export const getOnlineVendorCount = cache(async (): Promise<number> => {
  const vendors = await getVendors();
  return vendors.filter((v) => v.status === "LIVE").length;
});

export const getOnlineEmployeeCount = cache(async (): Promise<number> => {
  const employees = await getEmployees();
  return employees.filter((e) => e.status === "LIVE").length;
});

export const getActiveInquiries = cache(async (): Promise<Inquiry[]> => {
  const inquiries = await getInquiries();
  return inquiries.filter((i) => i.status === "OPEN");
});

export const getUpcomingEvents = cache(async (): Promise<Event[]> => {
  const events = await getEvents();
  return events.filter((e) => e.status === "UPCOMING");
});

export const getActiveAnnouncements = cache(async (): Promise<Announcement[]> => {
  const announcements = await getAnnouncements();
  return announcements.filter((a) => a.isActive);
});

export const getPinnedShoutOuts = cache(async (): Promise<ShoutOut[]> => {
  const shoutouts = await getShoutOuts();
  return shoutouts.filter((s) => s.isPinned);
});

export async function getDashboardData() {
  const [lenders, events, programs, inquiries] = await Promise.all([
    getLenders(),
    getEvents(),
    getDPAPrograms(),
    getInquiries(),
  ]);
  return { lenders, events, programs, inquiries };
}

export const getChartData = cache(async () => {
  const stats = await getGoLiveStats();
  return stats.map((s) => ({
    name: s.name,
    dec: s.hours.dec,
    jan: s.hours.jan,
    feb: s.hours.feb,
  }));
});
