import type { Event, DashboardStats, CategoryCount, AttendeeStats, OrganizerStats, Application, Organizer } from '@/types';

export const organizers: Organizer[] = [
  {
    id: 'org1',
    name: 'University of Birmingham Dubai',
    email: 'events@birmingham.ac.ae',
    type: 'university',
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=200&q=80',
  },
  {
    id: 'org2',
    name: 'Zayed University',
    email: 'innovation@zu.ac.ae',
    type: 'university',
    logo: 'https://images.unsplash.com/photo-1592280771883-1cfae86b4321?w=200&q=80',
  },
  {
    id: 'org3',
    name: 'GITEX Global',
    email: 'info@gitex.com',
    type: 'organization',
    logo: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&q=80',
  },
  {
    id: 'org4',
    name: 'American University in Dubai',
    email: 'cs@aud.edu',
    type: 'university',
    logo: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=200&q=80',
  },
  {
    id: 'org5',
    name: 'Dubai Future Foundation',
    email: 'events@dubaifuture.ae',
    type: 'organization',
    logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&q=80',
  },
  {
    id: 'org6',
    name: 'BITS Pilani Dubai',
    email: 'events@dubai.bits-pilani.ac.in',
    type: 'university',
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&q=80',
  },
  {
    id: 'org7',
    name: 'UAE AI Office',
    email: 'hackathon@ai.gov.ae',
    type: 'organization',
    logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&q=80',
  },
  {
    id: 'org8',
    name: 'Dubai Electricity & Water Authority',
    email: 'innovation@dewa.gov.ae',
    type: 'organization',
    logo: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=200&q=80',
  },
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'InnovAIte Hackathon 2025',
    description: 'The UAE\'s largest student-led national AI Hackathon is back! High school students will gather at the University of Birmingham Dubai to compete in an exciting AI competition. Teams of 4-5 students will work on projects centered around a theme revealed at the start of the event. Over Dh40,000 in prizes including cash awards and exclusive university admissions counseling sessions.',
    date: '2025-03-14',
    time: '09:00',
    location: 'University of Birmingham Dubai',
    category: 'Hackathon',
    price: 0,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    organizer: organizers[0],
    attendees: 240,
    maxAttendees: 300,
    isFeatured: true,
    isSaved: false,
    deadline: '2025-03-10',
    teamSize: { min: 4, max: 5 },
    requirements: ['High school students (Years 10-13)', 'Basic programming knowledge', 'Laptop required'],
    prizes: [
      { position: '1st Place', reward: 'AED 15,000 + University Counseling' },
      { position: '2nd Place', reward: 'AED 10,000 + Cloud Credits' },
      { position: '3rd Place', reward: 'AED 5,000 + Tech Gadgets' },
    ],
  },
  {
    id: '2',
    title: 'GITEX Global 2025',
    description: 'The world\'s largest tech exhibition returns to Dubai World Trade Centre. Join 6,500+ exhibitors, 1,800 startups, and 1,200 investors from 180+ countries. Featuring AI Everything, Cyber Valley, Fintech Surge, and Future Blockchain Summit. Student passes available with exclusive workshops and networking sessions.',
    date: '2025-10-14',
    time: '10:00',
    location: 'Dubai World Trade Centre',
    category: 'Conference',
    price: 100,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    organizer: organizers[2],
    attendees: 4500,
    maxAttendees: 10000,
    isFeatured: true,
    isSaved: true,
    deadline: '2025-10-10',
  },
  {
    id: '3',
    title: 'Digital Transformation Hackathon',
    description: 'Zayed University\'s CTI NextGen Center invites students from various universities across the UAE to solve sustainability challenges. Collaborate with Mohammed Bin Rashid Space Center, DEWA, and Huawei. Teams of 2-4 will undergo design thinking training before competing for prizes and implementation opportunities.',
    date: '2025-02-21',
    time: '09:00',
    location: 'Zayed University Dubai Campus',
    category: 'Hackathon',
    price: 0,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
    organizer: organizers[1],
    attendees: 180,
    maxAttendees: 200,
    isFeatured: false,
    isSaved: false,
    deadline: '2025-02-09',
    teamSize: { min: 2, max: 4 },
    requirements: ['University students in UAE', 'Valid student ID', 'Team of 2-4 members'],
    prizes: [
      { position: 'Winner', reward: 'AED 20,000 + Implementation with Government Partners' },
      { position: 'Runner-up', reward: 'AED 10,000 + Internship Opportunities' },
    ],
  },
  {
    id: '4',
    title: 'CleanTech Hackathon at DEWA',
    description: 'Part of UAE Innovates 2025, DEWA\'s Innovation Centre hosts the CleanTech Hackathon. Develop solutions for renewable energy, sustainable water management, and smart grid technologies. The winning team will receive AED 20,000 and the opportunity to pilot their solution with DEWA.',
    date: '2025-02-19',
    time: '08:00',
    location: 'DEWA Innovation Centre, Mohammed bin Rashid Al Maktoum Solar Park',
    category: 'Hackathon',
    price: 0,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    organizer: organizers[7],
    attendees: 120,
    maxAttendees: 150,
    isFeatured: true,
    isSaved: false,
    deadline: '2025-02-10',
    teamSize: { min: 3, max: 5 },
    prizes: [
      { position: '1st Place', reward: 'AED 20,000 + Pilot Program' },
      { position: '2nd Place', reward: 'AED 10,000' },
      { position: '3rd Place', reward: 'AED 5,000' },
    ],
  },
  {
    id: '5',
    title: 'AI & Machine Learning Workshop Series',
    description: 'A comprehensive 3-day workshop series covering Python for AI, neural networks, computer vision, and NLP. Hands-on sessions with industry experts from leading tech companies. Perfect for beginners and intermediate learners looking to build practical AI skills.',
    date: '2025-04-15',
    time: '14:00',
    location: 'American University in Dubai',
    category: 'Workshop',
    price: 150,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    organizer: organizers[3],
    attendees: 85,
    maxAttendees: 100,
    isFeatured: false,
    isSaved: true,
    deadline: '2025-04-10',
    requirements: ['Basic Python knowledge', 'Laptop with 8GB+ RAM'],
  },
  {
    id: '6',
    title: 'Dubai Lynx Creative Student Hackathon',
    description: 'Join 20 talented students from universities across the region to showcase your creative prowess in crafting 360-degree campaigns. Work with industry professionals from Saatchi & Saatchi, Jumeirah Group, and Wunderman Thompson. Winning team gets internship opportunities.',
    date: '2025-03-28',
    time: '09:00',
    location: 'Dubai Media City',
    category: 'Competition',
    price: 0,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    organizer: organizers[4],
    attendees: 60,
    maxAttendees: 80,
    isFeatured: false,
    isSaved: false,
    deadline: '2025-03-20',
    teamSize: { min: 4, max: 5 },
    prizes: [
      { position: 'Winner', reward: 'Internship at Top Agency + AED 10,000' },
      { position: 'Best Creative', reward: 'Portfolio Review with Creative Directors' },
    ],
  },
  {
    id: '7',
    title: 'Global Tech Innovation Summit',
    description: 'A premier gathering of tech leaders, entrepreneurs, and investors. Topics include Blockchain, AI, Cybersecurity, and the Metaverse. Student tickets include access to keynote sessions, panel discussions, and exclusive networking events with industry leaders.',
    date: '2025-05-20',
    time: '09:00',
    location: 'Grand Hyatt Dubai',
    category: 'Conference',
    price: 200,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
    organizer: organizers[4],
    attendees: 800,
    maxAttendees: 1000,
    isFeatured: true,
    isSaved: false,
    deadline: '2025-05-15',
  },
  {
    id: '8',
    title: 'Coding Battle Competition',
    description: 'Test your coding skills against the best programmers in the UAE. Solve algorithmic challenges in real-time and climb the leaderboard. Open to all university students. Prizes include gaming laptops, mechanical keyboards, and internship opportunities.',
    date: '2025-04-05',
    time: '10:00',
    location: 'BITS Pilani Dubai Campus',
    category: 'Competition',
    price: 50,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    organizer: organizers[5],
    attendees: 200,
    maxAttendees: 250,
    isFeatured: false,
    isSaved: false,
    deadline: '2025-03-30',
    requirements: ['University student', 'Knowledge of C++, Java, or Python'],
    prizes: [
      { position: '1st Place', reward: 'Gaming Laptop + AED 5,000' },
      { position: '2nd Place', reward: 'Mechanical Keyboard + AED 3,000' },
      { position: '3rd Place', reward: 'Gaming Mouse + AED 2,000' },
    ],
  },
  {
    id: '9',
    title: 'Tech Career Fair Dubai 2025',
    description: 'Connect with 50+ tech companies hiring interns and fresh graduates. Companies include Google, Microsoft, Amazon, Careem, and local startups. Bring your resume and get ready for on-the-spot interviews. Free entry for all students and recent graduates.',
    date: '2025-05-10',
    time: '10:00',
    location: 'Dubai World Trade Centre',
    category: 'Career Fair',
    price: 0,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    organizer: organizers[4],
    attendees: 1500,
    maxAttendees: 2000,
    isFeatured: true,
    isSaved: true,
    deadline: '2025-05-09',
    requirements: ['Student or recent graduate (2024-2025)', 'Updated CV', 'Professional attire'],
  },
  {
    id: '10',
    title: 'Women in Tech Summit',
    description: 'An inspiring day of talks, workshops, and networking for women in technology. Hear from female leaders at top tech companies, participate in mentorship sessions, and connect with like-minded individuals. Open to all genders who support women in tech.',
    date: '2025-03-08',
    time: '09:00',
    location: 'DIFC Innovation Hub',
    category: 'Conference',
    price: 0,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
    organizer: organizers[2],
    attendees: 400,
    maxAttendees: 500,
    isFeatured: false,
    isSaved: false,
    deadline: '2025-03-05',
  },
  {
    id: '11',
    title: 'Blockchain & Web3 Workshop',
    description: 'Learn the fundamentals of blockchain technology, smart contracts, and Web3 development. Build your first dApp and understand DeFi protocols. Led by industry experts from the blockchain space. Certificate of completion provided.',
    date: '2025-04-22',
    time: '14:00',
    location: 'Dubai Internet City',
    category: 'Workshop',
    price: 200,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    organizer: organizers[3],
    attendees: 75,
    maxAttendees: 100,
    isFeatured: false,
    isSaved: false,
    deadline: '2025-04-18',
    requirements: ['Basic programming knowledge', 'Laptop required'],
  },
  {
    id: '12',
    title: 'Startup Pitch Night',
    description: 'Watch innovative startups pitch their ideas to investors and compete for funding. Network with entrepreneurs, VCs, and industry experts. Students can attend for free and learn what it takes to build a successful startup.',
    date: '2025-03-25',
    time: '18:00',
    location: 'AstroLabs Dubai',
    category: 'Networking',
    price: 0,
    currency: 'AED',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    organizer: organizers[4],
    attendees: 180,
    maxAttendees: 200,
    isFeatured: false,
    isSaved: false,
    deadline: '2025-03-24',
  },
];

export const mockApplications: Application[] = [
  {
    id: 'app1',
    eventId: '2',
    eventTitle: 'GITEX Global 2025',
    eventImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    status: 'approved',
    appliedDate: '2025-09-15',
    responseDate: '2025-09-20',
  },
  {
    id: 'app2',
    eventId: '1',
    eventTitle: 'InnovAIte Hackathon 2025',
    eventImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    status: 'pending',
    appliedDate: '2025-02-20',
  },
  {
    id: 'app3',
    eventId: '5',
    eventTitle: 'AI & Machine Learning Workshop Series',
    eventImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    status: 'completed',
    appliedDate: '2025-03-01',
    responseDate: '2025-03-05',
  },
  {
    id: 'app4',
    eventId: '9',
    eventTitle: 'Tech Career Fair Dubai 2025',
    eventImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    status: 'in-progress',
    appliedDate: '2025-04-01',
    responseDate: '2025-04-02',
  },
];

export const getFeaturedEvents = (): Event[] => {
  return mockEvents.filter(event => event.isFeatured);
};

export const getEventById = (id: string): Event | undefined => {
  return mockEvents.find(event => event.id === id);
};

export const getEventsByCategory = (category: string): Event[] => {
  return mockEvents.filter(event => event.category === category);
};

export const getSavedEvents = (): Event[] => {
  return mockEvents.filter(event => event.isSaved);
};

export const getDashboardStats = (): DashboardStats => {
  return {
    totalEvents: mockEvents.length,
    totalAttendees: mockEvents.reduce((sum, event) => sum + event.attendees, 0),
    totalRevenue: mockEvents.reduce((sum, event) => sum + (event.price * event.attendees), 0),
    upcomingEvents: mockEvents.filter(event => new Date(event.date) > new Date()).length,
  };
};

export const getAttendeeStats = (): AttendeeStats => {
  return {
    totalApplications: mockApplications.length,
    pendingApplications: mockApplications.filter(a => a.status === 'pending').length,
    approvedApplications: mockApplications.filter(a => a.status === 'approved').length,
    completedEvents: mockApplications.filter(a => a.status === 'completed').length,
    savedEvents: getSavedEvents().length,
  };
};

export const getOrganizerStats = (): OrganizerStats => {
  return {
    totalEvents: 8,
    activeEvents: 5,
    totalApplications: 450,
    pendingApplications: 78,
    acceptedApplications: 320,
    totalRevenue: 125000,
  };
};

export const getCategoryCounts = (): CategoryCount[] => {
  const categories: string[] = ['Hackathon', 'Competition', 'Conference', 'Workshop', 'Seminar', 'Career Fair', 'Networking', 'Tech Talk'];
  return categories.map(category => ({
    category: category as any,
    count: mockEvents.filter(event => event.category === category).length,
  }));
};

export const getUserApplications = (): Application[] => {
  return mockApplications;
};

export const categories: string[] = [
  'Hackathon',
  'Competition',
  'Conference',
  'Workshop',
  'Seminar',
  'Career Fair',
  'Networking',
  'Tech Talk',
];

export const categoryColors: Record<string, string> = {
  Hackathon: 'bg-emerald-500',
  Competition: 'bg-coral-500',
  Conference: 'bg-indigo-500',
  Workshop: 'bg-amber-500',
  Seminar: 'bg-purple-500',
  'Career Fair': 'bg-pink-500',
  Networking: 'bg-orange-500',
  'Tech Talk': 'bg-cyan-500',
};

export const statusColors: Record<string, string> = {
  pending: 'bg-amber-100 text-amber-800',
  approved: 'bg-teal-100 text-teal-800',
  rejected: 'bg-red-100 text-red-800',
  'in-progress': 'bg-blue-100 text-blue-800',
  completed: 'bg-green-100 text-green-800',
};
