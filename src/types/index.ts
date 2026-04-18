export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: EventCategory;
  price: number;
  currency: string;
  image: string;
  organizer: Organizer;
  attendees: number;
  maxAttendees: number;
  isFeatured?: boolean;
  isSaved?: boolean;
  requirements?: string[];
  prizes?: Prize[];
  deadline?: string;
  teamSize?: { min: number; max: number };
}

export type EventCategory = 
  | 'Hackathon' 
  | 'Competition' 
  | 'Conference' 
  | 'Workshop' 
  | 'Seminar' 
  | 'Career Fair' 
  | 'Networking' 
  | 'Tech Talk';

export interface Prize {
  position: string;
  reward: string;
}

export interface Organizer {
  id: string;
  name: string;
  avatar?: string;
  email: string;
  type: 'university' | 'company' | 'organization';
  logo?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'attendee' | 'organizer' | 'admin';
  university?: string;
  major?: string;
  graduationYear?: number;
}

export interface Application {
  id: string;
  eventId: string;
  eventTitle: string;
  eventImage: string;
  status: 'pending' | 'approved' | 'rejected' | 'in-progress' | 'completed';
  appliedDate: string;
  responseDate?: string;
  teamMembers?: string[];
  notes?: string;
}

export interface DashboardStats {
  totalEvents: number;
  totalAttendees: number;
  totalRevenue: number;
  upcomingEvents: number;
}

export interface AttendeeStats {
  totalApplications: number;
  pendingApplications: number;
  approvedApplications: number;
  completedEvents: number;
  savedEvents: number;
}

export interface OrganizerStats {
  totalEvents: number;
  activeEvents: number;
  totalApplications: number;
  pendingApplications: number;
  acceptedApplications: number;
  totalRevenue: number;
}

export interface CategoryCount {
  category: EventCategory;
  count: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning';
  date: string;
  read: boolean;
}
