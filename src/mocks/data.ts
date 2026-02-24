export interface Lender {
  id: number;
  name: string;
  logo: string;
  status: "LIVE" | "OFFLINE";
  rating: number;
  reviews: number;
  products: string[];
  channel: string;
  likes: number;
  dislikes: number;
  description: string;
  isReferral?: boolean;
  productTags?: string[];
}

export interface Employee {
  id: number;
  name: string;
  avatar: string;
  title: string;
  department: string;
  location: string;
  status: "LIVE" | "OFFLINE";
  statusMessage?: string;
  role: string;
  email: string;
  phone?: string;
  languages?: string[];
  likes: number;
  dislikes: number;
  reviews: number;
}

export interface Vendor {
  id: number;
  name: string;
  logo: string;
  status: "LIVE" | "OFFLINE";
  isApproved: boolean;
  products: string[];
  description: string;
  likes: number;
  dislikes: number;
  reviews: number;
}

export interface TradeShow {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  state: string;
  poster: string;
  type: string;
  hasAfterParty?: boolean;
}

export interface ShoutOut {
  id: number;
  author: { name: string; avatar: string; role: string };
  recipient: string;
  content: string;
  createdAt: string;
  likes: number;
  comments: number;
  isPinned?: boolean;
}

export interface Announcement {
  id: number;
  author: { name: string; avatar: string; org: string };
  content: string;
  createdAt: string;
  type: string;
  likes: number;
  comments: number;
  isActive?: boolean;
  isPinned?: boolean;
}

export interface LoginHistory {
  id: number;
  user: { name: string; avatar: string; role: string };
  type: "Login" | "Logout" | "Session expired";
  activeTime: string;
}

export interface LenderStats {
  id: number;
  name: string;
  scenariosReceived: number;
  scenariosResponded: number;
  scenariosSkipped: number;
  responseRate: number;
}

export interface Inquiry {
  id: number;
  lender: {
    name: string;
    avatar: string;
  };
  content: string;
  product: string;
  status: "OPEN" | "RESOLVED";
  createdAt: string;
  comments: number;
  likes: number;
}

export interface Event {
  id: number;
  title: string;
  type: "Webinar" | "Workshop" | "Conference";
  status: "UPCOMING" | "RECORDING";
  date: string;
  time: string;
  registrations: number;
  maxCapacity: number;
  poster: string;
  description: string;
  location: string;
  hasAfterParty?: boolean;
}

export interface DPAProgram {
  id: number;
  name: string;
  lender: string;
  logo: string;
  eligibleStates: string[];
  eligibleBorrowers: string[];
  creditScoreMin: number;
  maxAssistance: string;
  features: string[];
}

export const mockLenders: Lender[] = [
  {
    id: 1,
    name: "Rocket Mortgage",
    logo: "https://ui-avatars.com/api/?name=Rocket+Mortgage&background=F97316&color=fff&size=64",
    status: "LIVE",
    rating: 4.8,
    reviews: 245,
    products: ["Conventional", "FHA", "VA"],
    channel: "Retail",
    likes: 245,
    dislikes: 12,
    description: "America's largest mortgage lender"
  },
  {
    id: 2,
    name: "Chase Home Lending",
    logo: "https://ui-avatars.com/api/?name=Chase&background=06B6D4&color=fff&size=64",
    status: "LIVE",
    rating: 4.5,
    reviews: 189,
    products: ["Conventional", "Jumbo", "FHA"],
    channel: "Retail",
    likes: 178,
    dislikes: 23,
    description: "Trusted lender for over 50 years"
  },
  {
    id: 3,
    name: "Better.com",
    logo: "https://ui-avatars.com/api/?name=Better&background=22C55E&color=fff&size=64",
    status: "LIVE",
    rating: 4.6,
    reviews: 312,
    products: ["Conventional", "FHA", "VA"],
    channel: "Online",
    likes: 289,
    dislikes: 18,
    description: "100% online mortgage experience"
  },
  {
    id: 4,
    name: "Wells Fargo",
    logo: "https://ui-avatars.com/api/?name=Wells+Fargo&background=EF4444&color=fff&size=64",
    status: "LIVE",
    rating: 4.3,
    reviews: 156,
    products: ["Conventional", "FHA", "USDA"],
    channel: "Retail",
    likes: 134,
    dislikes: 34,
    description: "Nationwide lending solutions"
  },
  {
    id: 5,
    name: "LoanDepot",
    logo: "https://ui-avatars.com/api/?name=LoanDepot&background=8B5CF6&color=fff&size=64",
    status: "OFFLINE",
    rating: 4.4,
    reviews: 98,
    products: ["Conventional", "FHA"],
    channel: "Retail",
    likes: 87,
    dislikes: 11,
    description: "Technology-driven lending"
  },
  {
    id: 6,
    name: "Caliber Home Loans",
    logo: "https://ui-avatars.com/api/?name=Caliber&background=0EA5E9&color=fff&size=64",
    status: "LIVE",
    rating: 4.7,
    reviews: 201,
    products: ["Conventional", "FHA", "VA", "USDA"],
    channel: "Wholesale",
    likes: 198,
    dislikes: 15,
    description: "Home loans made simple"
  },
  {
    id: 7,
    name: "United Wholesale Mortgage",
    logo: "https://ui-avatars.com/api/?name=UWM&background=1F2937&color=fff&size=64",
    status: "LIVE",
    rating: 4.9,
    reviews: 423,
    products: ["Conventional", "FHA", "VA"],
    channel: "Wholesale",
    likes: 412,
    dislikes: 8,
    description: "#1 wholesale lender"
  },
  {
    id: 8,
    name: "Fairway Independent",
    logo: "https://ui-avatars.com/api/?name=Fairway&background=14B8A6&color=fff&size=64",
    status: "LIVE",
    rating: 4.6,
    reviews: 178,
    products: ["Conventional", "FHA", "VA", "Jumbo"],
    channel: "Retail",
    likes: 165,
    dislikes: 19,
    description: "Customer-focused lending"
  }
];

export const mockInquiries: Inquiry[] = [
  {
    id: 1,
    lender: {
      name: "Rocket Mortgage",
      avatar: "https://ui-avatars.com/api/?name=Rocket+Mortgage&background=F97316&color=fff&size=40"
    },
    content: "Looking for best FHA rates for first-time homebuyer. Credit score 720, looking at $350K property in Texas. Any recommendations?",
    product: "FHA",
    status: "OPEN",
    createdAt: "2 hours ago",
    comments: 12,
    likes: 45
  },
  {
    id: 2,
    lender: {
      name: "Chase Home Lending",
      avatar: "https://ui-avatars.com/api/?name=Chase&background=06B6D4&color=fff&size=40"
    },
    content: "Need advice on Jumbo loan vs Conventional for $800K purchase in California. What are current rates and requirements?",
    product: "Jumbo",
    status: "OPEN",
    createdAt: "5 hours ago",
    comments: 8,
    likes: 32
  },
  {
    id: 3,
    lender: {
      name: "Better.com",
      avatar: "https://ui-avatars.com/api/?name=Better&background=22C55E&color=fff&size=40"
    },
    content: "VA loan question: Can I use VA entitlement for second property while keeping first home? Both are primary residences at different times.",
    product: "VA",
    status: "RESOLVED",
    createdAt: "1 day ago",
    comments: 23,
    likes: 67
  },
  {
    id: 4,
    lender: {
      name: "Wells Fargo",
      avatar: "https://ui-avatars.com/api/?name=Wells+Fargo&background=EF4444&color=fff&size=40"
    },
    content: "USDA loan eligibility for rural property in Montana. Property value $250K, income under limit. What documents needed?",
    product: "USDA",
    status: "OPEN",
    createdAt: "3 days ago",
    comments: 15,
    likes: 28
  },
  {
    id: 5,
    lender: {
      name: "Caliber Home Loans",
      avatar: "https://ui-avatars.com/api/?name=Caliber&background=0EA5E9&color=fff&size=40"
    },
    content: "Refinance question: Current rate 6.5%, should I wait for rates to drop or refinance now to cash out for renovations?",
    product: "Conventional",
    status: "OPEN",
    createdAt: "1 week ago",
    comments: 34,
    likes: 89
  }
];

export const mockEvents: Event[] = [
  {
    id: 1,
    title: "2026 Housing Market Summit",
    type: "Webinar",
    status: "UPCOMING",
    date: "Mar 15, 2026",
    time: "10:00 AM PST",
    registrations: 156,
    maxCapacity: 500,
    poster: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    description: "Join industry experts to discuss 2026 housing market trends and predictions.",
    location: "Virtual Event"
  },
  {
    id: 2,
    title: "First-Time Homebuyer Workshop",
    type: "Workshop",
    status: "UPCOMING",
    date: "Feb 28, 2026",
    time: "2:00 PM EST",
    registrations: 89,
    maxCapacity: 100,
    poster: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop",
    description: "Learn everything you need to know about buying your first home.",
    location: "Virtual Event"
  },
  {
    id: 3,
    title: "VA Loan Masterclass",
    type: "Webinar",
    status: "UPCOMING",
    date: "Mar 5, 2026",
    time: "11:00 AM CST",
    registrations: 67,
    maxCapacity: 200,
    poster: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    description: "Deep dive into VA loan benefits, eligibility, and how to maximize your entitlement.",
    location: "Virtual Event"
  },
  {
    id: 4,
    title: "Mortgage Industry Conference 2026",
    type: "Conference",
    status: "UPCOMING",
    date: "Apr 20, 2026",
    time: "9:00 AM - 5:00 PM",
    registrations: 342,
    maxCapacity: 1000,
    poster: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    description: "Annual conference bringing together mortgage professionals nationwide.",
    location: "Las Vegas, NV"
  },
  {
    id: 5,
    title: "DPA Programs Overview",
    type: "Webinar",
    status: "RECORDING",
    date: "Feb 10, 2026",
    time: "1:00 PM PST",
    registrations: 234,
    maxCapacity: 300,
    poster: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
    description: "Comprehensive overview of down payment assistance programs available.",
    location: "Virtual Event"
  }
];

export const mockDPAPrograms: DPAProgram[] = [
  {
    id: 1,
    name: "California Housing Finance Agency (CalHFA)",
    lender: "CalHFA",
    logo: "https://ui-avatars.com/api/?name=CalHFA&background=F97316&color=fff&size=48",
    eligibleStates: ["CA"],
    eligibleBorrowers: ["First-Time Buyer", "Low Income"],
    creditScoreMin: 640,
    maxAssistance: "$15,000",
    features: ["0% Interest", "Deferred Payment", "Can Combine with Other Programs"]
  },
  {
    id: 2,
    name: "FHA Down Payment Assistance",
    lender: "FHA Approved Lenders",
    logo: "https://ui-avatars.com/api/?name=FHA&background=06B6D4&color=fff&size=48",
    eligibleStates: ["ALL"],
    eligibleBorrowers: ["First-Time Buyer", "Repeat Buyer"],
    creditScoreMin: 580,
    maxAssistance: "3.5% of Loan",
    features: ["Gift Funds Allowed", "Flexible Credit", "Low Down Payment"]
  },
  {
    id: 3,
    name: "Texas State Affordable Housing",
    lender: "TSAHC",
    logo: "https://ui-avatars.com/api/?name=TSAHC&background=22C55E&color=fff&size=48",
    eligibleStates: ["TX"],
    eligibleBorrowers: ["First-Time Buyer", "Veterans", "Heroes"],
    creditScoreMin: 620,
    maxAssistance: "5% of Loan",
    features: ["Grant (No Repayment)", "Tax Credit", "Lower Interest Rate"]
  },
  {
    id: 4,
    name: "Florida HFA Down Payment",
    lender: "Florida Housing",
    logo: "https://ui-avatars.com/api/?name=FL+HFA&background=EF4444&color=fff&size=48",
    eligibleStates: ["FL"],
    eligibleBorrowers: ["First-Time Buyer", "Moderate Income"],
    creditScoreMin: 640,
    maxAssistance: "$10,000",
    features: ["0% Interest", "Forgivable After 5 Years", "Multiple Programs"]
  },
  {
    id: 5,
    name: "NYC HomeFirst Down Payment",
    lender: "NYC HPD",
    logo: "https://ui-avatars.com/api/?name=NYC+HPD&background=8B5CF6&color=fff&size=48",
    eligibleStates: ["NY"],
    eligibleBorrowers: ["First-Time Buyer", "Low-Moderate Income"],
    creditScoreMin: 660,
    maxAssistance: "$40,000",
    features: ["0% Interest", "Forgivable", "Homebuyer Education Required"]
  },
  {
    id: 6,
    name: "Chenoa Fund DPA",
    lender: "CBC Mortgage Agency",
    logo: "https://ui-avatars.com/api/?name=Chenoa&background=0EA5E9&color=fff&size=48",
    eligibleStates: ["ALL"],
    eligibleBorrowers: ["First-Time Buyer", "Repeat Buyer"],
    creditScoreMin: 600,
    maxAssistance: "3.5% - 5%",
    features: ["Nationwide", "FHA Compatible", "Second Mortgage Option"]
  }
];

export const mockEmployees: Employee[] = [
  {
    id: 1,
    name: "John Smith",
    avatar: "https://ui-avatars.com/api/?name=John+Smith&background=00BCD4&color=fff&size=64",
    title: "Senior Loan Officer",
    department: "Loan Officer Support",
    location: "California",
    status: "LIVE",
    statusMessage: "Available for questions",
    role: "Production Partner",
    email: "john.smith@chauchau.com",
    phone: "+1 (555) 123-4567",
    languages: ["Spanish", "Vietnamese"],
    likes: 89,
    dislikes: 3,
    reviews: 25
  },
  {
    id: 2,
    name: "Sarah Johnson",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=F97316&color=fff&size=64",
    title: "Team Lead",
    department: "Underwriting",
    location: "Texas",
    status: "LIVE",
    statusMessage: "People who think they know everything",
    role: "Team Leader / Production Partner",
    email: "sarah.j@chauchau.com",
    phone: "+1 (555) 234-5678",
    languages: ["French"],
    likes: 156,
    dislikes: 5,
    reviews: 42
  },
  {
    id: 3,
    name: "Mike Chen",
    avatar: "https://ui-avatars.com/api/?name=Mike+Chen&background=22C55E&color=fff&size=64",
    title: "Processor",
    department: "Support for Processors",
    location: "Vietnam",
    status: "OFFLINE",
    role: "Production Partner",
    email: "mike.chen@chauchau.com",
    languages: ["Vietnamese", "Chinese"],
    likes: 67,
    dislikes: 2,
    reviews: 18
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: "https://ui-avatars.com/api/?name=Emily+Davis&background=8B5CF6&color=fff&size=64",
    title: "LOA Support",
    department: "LOA Support Team",
    location: "California",
    status: "LIVE",
    role: "Team Leader",
    email: "emily.d@chauchau.com",
    likes: 134,
    dislikes: 4,
    reviews: 38
  },
  {
    id: 5,
    name: "David Wilson",
    avatar: "https://ui-avatars.com/api/?name=David+Wilson&background=EF4444&color=fff&size=64",
    title: "IT Manager",
    department: "IT",
    location: "California",
    status: "OFFLINE",
    role: "Department Head",
    email: "david.w@chauchau.com",
    likes: 78,
    dislikes: 1,
    reviews: 22
  },
  {
    id: 6,
    name: "Lisa Brown",
    avatar: "https://ui-avatars.com/api/?name=Lisa+Brown&background=0EA5E9&color=fff&size=64",
    title: "HR Manager",
    department: "HR",
    location: "California",
    status: "LIVE",
    role: "Department Head",
    email: "lisa.b@chauchau.com",
    likes: 112,
    dislikes: 3,
    reviews: 31
  }
];

export const mockVendors: Vendor[] = [
  {
    id: 1,
    name: "TitlePro Services",
    logo: "https://ui-avatars.com/api/?name=TitlePro&background=00BCD4&color=fff&size=64",
    status: "LIVE",
    isApproved: true,
    products: ["Title Insurance", "Escrow Services", "Closing Services"],
    description: "Full-service title and escrow company",
    likes: 156,
    dislikes: 8,
    reviews: 45
  },
  {
    id: 2,
    name: "QuickAppraisal Co",
    logo: "https://ui-avatars.com/api/?name=QuickAppraisal&background=F97316&color=fff&size=64",
    status: "OFFLINE",
    isApproved: true,
    products: ["Home Appraisal", "Property Inspection"],
    description: "Fast turnaround appraisals nationwide",
    likes: 89,
    dislikes: 4,
    reviews: 28
  },
  {
    id: 3,
    name: "SecureInsurance Inc",
    logo: "https://ui-avatars.com/api/?name=SecureInsurance&background=22C55E&color=fff&size=64",
    status: "LIVE",
    isApproved: true,
    products: ["Homeowners Insurance", "Flood Insurance", "PMI"],
    description: "Comprehensive property insurance solutions",
    likes: 134,
    dislikes: 6,
    reviews: 39
  }
];

export const mockTradeShows: TradeShow[] = [
  {
    id: 1,
    title: "MBA Annual Convention 2026",
    date: "Oct 25, 2026",
    time: "9:00 AM PST",
    location: "Las Vegas Convention Center",
    state: "NV",
    poster: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    type: "Conference",
    hasAfterParty: true
  },
  {
    id: 2,
    title: "California Realtors Expo",
    date: "Feb 21, 2026",
    time: "10:00 AM PST",
    location: "Anaheim Convention Center",
    state: "CA",
    poster: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop",
    type: "Expo"
  },
  {
    id: 3,
    title: "Texas Housing Summit",
    date: "Feb 25, 2026",
    time: "8:00 AM CST",
    location: "Houston Convention Center",
    state: "TX",
    poster: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    type: "Summit",
    hasAfterParty: true
  }
];

export const mockShoutOuts: ShoutOut[] = [
  {
    id: 1,
    author: { name: "John Smith", avatar: "https://ui-avatars.com/api/?name=John+Smith&background=00BCD4&color=fff&size=40", role: "Senior LO" },
    recipient: "Sarah Johnson",
    content: "Big shout-out to @Sarah Johnson for helping me close that difficult Jumbo loan! Your underwriting expertise saved the day. 🎉",
    createdAt: "2 hours ago",
    likes: 45,
    comments: 8,
    isPinned: true
  },
  {
    id: 2,
    author: { name: "Emily Davis", avatar: "https://ui-avatars.com/api/?name=Emily+Davis&background=8B5CF6&color=fff&size=40", role: "Team Lead" },
    recipient: "Processing Team",
    content: "Amazing work this month team! We processed 150+ loans with 99% on-time rate. @Mike Chen @Lisa Brown you guys rock! 🚀",
    createdAt: "5 hours ago",
    likes: 89,
    comments: 15
  },
  {
    id: 3,
    author: { name: "HR Department", avatar: "https://ui-avatars.com/api/?name=HR&background=EF4444&color=fff&size=40", role: "HR" },
    recipient: "All Employees",
    content: "Reminder: Company-wide meeting this Friday at 3 PM PST. Attendance is mandatory. Please check your calendars for the Google Meet link.",
    createdAt: "1 day ago",
    likes: 23,
    comments: 5
  }
];

export const mockAnnouncements: Announcement[] = [
  {
    id: 1,
    author: { name: "Rocket Mortgage", avatar: "https://ui-avatars.com/api/?name=Rocket&background=F97316&color=fff&size=40", org: "Rocket Mortgage" },
    content: "📢 NEW RATE SHEET ALERT! We've updated our Conventional rates effective immediately. Check out our new 30-year fixed at 5.875%! Special pricing for purchases over $500K.",
    createdAt: "1 hour ago",
    type: "Rate Sheet",
    likes: 67,
    comments: 12,
    isActive: true,
    isPinned: true
  },
  {
    id: 2,
    author: { name: "UWM", avatar: "https://ui-avatars.com/api/?name=UWM&background=1F2937&color=fff&size=40", org: "United Wholesale Mortgage" },
    content: "🎉 PROMOTION: Get $500 bonus on all FHA loans closed this month! Plus, we're waiving the appraisal fee for refinances. Contact your AE for details.",
    createdAt: "3 hours ago",
    type: "Promotion",
    likes: 134,
    comments: 28,
    isActive: true
  },
  {
    id: 3,
    author: { name: "Caliber Home Loans", avatar: "https://ui-avatars.com/api/?name=Caliber&background=0EA5E9&color=fff&size=40", org: "Caliber" },
    content: "📘 NEW GUIDELINE: Updated Non-QM guidelines now allow for higher DTI ratios (up to 50%) for self-employed borrowers. Bank statement programs available!",
    createdAt: "1 day ago",
    type: "Guideline Update",
    likes: 89,
    comments: 15,
    isActive: true
  }
];

export const mockLoginHistory: LoginHistory[] = [
  { id: 1, user: { name: "John Smith", avatar: "https://ui-avatars.com/api/?name=John+Smith&background=00BCD4&color=fff&size=32", role: "LenderUser" }, type: "Login", activeTime: "2 hours ago" },
  { id: 2, user: { name: "Sarah Johnson", avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=F97316&color=fff&size=32", role: "Team Lead" }, type: "Login", activeTime: "3 hours ago" },
  { id: 3, user: { name: "Mike Chen", avatar: "https://ui-avatars.com/api/?name=Mike+Chen&background=22C55E&color=fff&size=32", role: "Processor" }, type: "Session expired", activeTime: "5 hours ago" },
  { id: 4, user: { name: "Emily Davis", avatar: "https://ui-avatars.com/api/?name=Emily+Davis&background=8B5CF6&color=fff&size=32", role: "LOA Support" }, type: "Logout", activeTime: "6 hours ago" },
  { id: 5, user: { name: "David Wilson", avatar: "https://ui-avatars.com/api/?name=David+Wilson&background=EF4444&color=fff&size=32", role: "IT" }, type: "Login", activeTime: "1 day ago" },
];

export const mockLenderStats: LenderStats[] = [
  { id: 1, name: "Rocket Mortgage", scenariosReceived: 245, scenariosResponded: 234, scenariosSkipped: 11, responseRate: 95.5 },
  { id: 2, name: "UWM", scenariosReceived: 312, scenariosResponded: 298, scenariosSkipped: 14, responseRate: 95.5 },
  { id: 3, name: "Caliber", scenariosReceived: 189, scenariosResponded: 178, scenariosSkipped: 11, responseRate: 94.2 },
  { id: 4, name: "Chase", scenariosReceived: 156, scenariosResponded: 142, scenariosSkipped: 14, responseRate: 91.0 },
  { id: 5, name: "Wells Fargo", scenariosReceived: 134, scenariosResponded: 128, scenariosSkipped: 6, responseRate: 95.5 },
];

export const mockGoLiveStats = [
  { name: "Rocket Mortgage", hours: { dec: 45, jan: 52, feb: 38 } },
  { name: "UWM", hours: { dec: 67, jan: 72, feb: 58 } },
  { name: "Caliber", hours: { dec: 34, jan: 41, feb: 29 } },
  { name: "Chase", hours: { dec: 28, jan: 35, feb: 42 } },
  { name: "Wells Fargo", hours: { dec: 19, jan: 24, feb: 31 } },
];

export const mockDepartments = [
  { name: "LOA Support Team", lead: "Emily Davis" },
  { name: "Licensing", lead: "Lisa Brown" },
  { name: "IT", lead: "David Wilson" },
  { name: "Accounting", lead: "Robert Taylor" },
  { name: "HR", lead: "Lisa Brown" },
  { name: "Loan Officer Support", lead: "John Smith" },
  { name: "Underwriting", lead: "Sarah Johnson" },
  { name: "Support for Processors", lead: "Mike Chen" },
];

export const mockLiveSchedule = [
  { department: "Loan Officer Support", monFri: "8:00 AM - 6:00 PM", saturday: "9:00 AM - 2:00 PM", sunday: "Closed" },
  { department: "Underwriting", monFri: "7:00 AM - 5:00 PM", saturday: "By appointment", sunday: "Closed" },
  { department: "Support for Processors", monFri: "8:00 AM - 5:00 PM", saturday: "Closed", sunday: "Closed" },
];
