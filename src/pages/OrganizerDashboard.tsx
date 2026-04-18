import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Plus,
  Eye,
  Edit,
  Trash2,
  Search,
  Filter,
  CheckCircle,
  XCircle,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import { mockEvents, getOrganizerStats, statusColors } from '@/data/events';
import BarChart from '@/components/dashboard/BarChart';
import DonutChart from '@/components/dashboard/DonutChart';

const OrganizerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const stats = getOrganizerStats();

  const myEvents = mockEvents.slice(0, 6);
  const filteredEvents = myEvents.filter(e => 
    e.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Mock applications for organizer view
  const applications = [
    { id: '1', applicant: 'Ahmed Hassan', event: 'InnovAIte Hackathon 2025', status: 'pending', date: '2025-02-15' },
    { id: '2', applicant: 'Sarah Al-Rashid', event: 'InnovAIte Hackathon 2025', status: 'approved', date: '2025-02-14' },
    { id: '3', applicant: 'Mohammed Khan', event: 'AI Workshop Series', status: 'pending', date: '2025-02-13' },
    { id: '4', applicant: 'Fatima Al-Zahra', event: 'CleanTech Hackathon', status: 'approved', date: '2025-02-12' },
    { id: '5', applicant: 'Omar Farooq', event: 'InnovAIte Hackathon 2025', status: 'rejected', date: '2025-02-11' },
  ];

  const revenueData = [
    { label: 'Jan', value: 15000 },
    { label: 'Feb', value: 22000 },
    { label: 'Mar', value: 18000 },
    { label: 'Apr', value: 28000 },
    { label: 'May', value: 25000 },
    { label: 'Jun', value: 32000 },
  ];

  const categoryData = [
    { label: 'Hackathon', value: 3, color: '#14b8a6' },
    { label: 'Workshop', value: 2, color: '#f59e0b' },
    { label: 'Conference', value: 2, color: '#3b82f6' },
    { label: 'Competition', value: 1, color: '#ec4899' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-teal-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-amber-500" />;
      case 'rejected':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-navy-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-navy-900">Organizer Dashboard</h1>
            <p className="text-navy-600 mt-1">
              Manage your events and track applications
            </p>
          </div>
          <Link to="/post-event">
            <Button className="bg-gradient-to-r from-teal-500 to-teal-600 gap-2">
              <Plus className="w-4 h-4" />
              Create Event
            </Button>
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-navy-100">
              <CardContent className="p-4">
                <p className="text-2xl font-bold text-navy-900">{stats.totalEvents}</p>
                <p className="text-sm text-navy-500">Total Events</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <Card className="border-navy-100">
              <CardContent className="p-4">
                <p className="text-2xl font-bold text-teal-600">{stats.activeEvents}</p>
                <p className="text-sm text-navy-500">Active</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-navy-100">
              <CardContent className="p-4">
                <p className="text-2xl font-bold text-navy-900">{stats.totalApplications}</p>
                <p className="text-sm text-navy-500">Applications</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Card className="border-navy-100">
              <CardContent className="p-4">
                <p className="text-2xl font-bold text-amber-600">{stats.pendingApplications}</p>
                <p className="text-sm text-navy-500">Pending</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-navy-100">
              <CardContent className="p-4">
                <p className="text-2xl font-bold text-green-600">{stats.acceptedApplications}</p>
                <p className="text-sm text-navy-500">Accepted</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <Card className="border-navy-100">
              <CardContent className="p-4">
                <p className="text-2xl font-bold text-navy-900">AED {stats.totalRevenue.toLocaleString()}</p>
                <p className="text-sm text-navy-500">Revenue</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white border border-navy-100">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="events">My Events</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Charts Row */}
            <div className="grid lg:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-6 border border-navy-100 shadow-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-navy-900">Revenue Overview</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-600 flex items-center gap-1">
                      <ArrowUpRight className="w-4 h-4" />
                      23%
                    </span>
                    <span className="text-navy-400">vs last month</span>
                  </div>
                </div>
                <BarChart data={revenueData} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-6 border border-navy-100 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-navy-900 mb-6">Events by Category</h3>
                <DonutChart data={categoryData} />
              </motion.div>
            </div>

            {/* Recent Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-navy-900">Recent Events</h3>
                <Button variant="ghost" size="sm" onClick={() => setActiveTab('events')}>
                  View All
                </Button>
              </div>
              <div className="bg-white rounded-xl border border-navy-100 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-navy-50">
                    <tr>
                      <th className="text-left p-4 text-sm font-medium text-navy-700">Event</th>
                      <th className="text-left p-4 text-sm font-medium text-navy-700">Date</th>
                      <th className="text-left p-4 text-sm font-medium text-navy-700">Status</th>
                      <th className="text-left p-4 text-sm font-medium text-navy-700">Applications</th>
                      <th className="text-right p-4 text-sm font-medium text-navy-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myEvents.slice(0, 5).map((event) => (
                      <tr key={event.id} className="border-t border-navy-100 hover:bg-navy-50/50">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-10 h-10 rounded-lg object-cover"
                            />
                            <span className="font-medium text-navy-900">{event.title}</span>
                          </div>
                        </td>
                        <td className="p-4 text-navy-600">{event.date}</td>
                        <td className="p-4">
                          <Badge className="bg-green-100 text-green-700">Active</Badge>
                        </td>
                        <td className="p-4 text-navy-600">
                          {event.attendees} / {event.maxAttendees}
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Link to={`/event/${event.id}`}>
                              <Button variant="ghost" size="icon">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </Link>
                            <Button variant="ghost" size="icon">
                              <Edit className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Recent Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-navy-900">Recent Applications</h3>
                <Button variant="ghost" size="sm" onClick={() => setActiveTab('applications')}>
                  View All
                </Button>
              </div>
              <div className="space-y-3">
                {applications.slice(0, 3).map((app) => (
                  <Card key={app.id} className="border-navy-100">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-navy-900">{app.applicant}</p>
                          <p className="text-sm text-navy-500">{app.event}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          {getStatusIcon(app.status)}
                          <Badge className={statusColors[app.status]}>
                            {app.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="events">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
                  <Input
                    placeholder="Search events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
              </div>
              <div className="bg-white rounded-xl border border-navy-100 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-navy-50">
                    <tr>
                      <th className="text-left p-4 text-sm font-medium text-navy-700">Event</th>
                      <th className="text-left p-4 text-sm font-medium text-navy-700">Category</th>
                      <th className="text-left p-4 text-sm font-medium text-navy-700">Date</th>
                      <th className="text-left p-4 text-sm font-medium text-navy-700">Price</th>
                      <th className="text-left p-4 text-sm font-medium text-navy-700">Status</th>
                      <th className="text-right p-4 text-sm font-medium text-navy-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEvents.map((event) => (
                      <tr key={event.id} className="border-t border-navy-100 hover:bg-navy-50/50">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-10 h-10 rounded-lg object-cover"
                            />
                            <span className="font-medium text-navy-900">{event.title}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge variant="outline">{event.category}</Badge>
                        </td>
                        <td className="p-4 text-navy-600">{event.date}</td>
                        <td className="p-4 text-navy-600">
                          {event.price === 0 ? 'Free' : `AED ${event.price}`}
                        </td>
                        <td className="p-4">
                          <Badge className="bg-green-100 text-green-700">Active</Badge>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Link to={`/event/${event.id}`}>
                              <Button variant="ghost" size="icon">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </Link>
                            <Button variant="ghost" size="icon">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-red-500">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="applications">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h3 className="text-lg font-semibold text-navy-900 mb-4">All Applications</h3>
              <div className="space-y-3">
                {applications.map((app) => (
                  <Card key={app.id} className="border-navy-100">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-navy-900">{app.applicant}</p>
                          <p className="text-sm text-navy-500">{app.event}</p>
                          <p className="text-xs text-navy-400 mt-1">Applied: {app.date}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          {getStatusIcon(app.status)}
                          <Badge className={statusColors[app.status]}>
                            {app.status}
                          </Badge>
                          {app.status === 'pending' && (
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-teal-500 hover:bg-teal-600">
                                Approve
                              </Button>
                              <Button size="sm" variant="outline" className="text-red-500">
                                Reject
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-6 border border-navy-100 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-navy-900 mb-6">Monthly Revenue</h3>
                <BarChart data={revenueData} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-6 border border-navy-100 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-navy-900 mb-6">Event Categories</h3>
                <DonutChart data={categoryData} />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 border border-navy-100 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-navy-900 mb-6">Performance Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-navy-50 rounded-lg">
                  <p className="text-sm text-navy-500 mb-1">Average Attendance</p>
                  <p className="text-3xl font-bold text-navy-900">78%</p>
                  <p className="text-sm text-green-600 flex items-center justify-center gap-1 mt-1">
                    <ArrowUpRight className="w-4 h-4" />
                    5%
                  </p>
                </div>
                <div className="text-center p-4 bg-navy-50 rounded-lg">
                  <p className="text-sm text-navy-500 mb-1">Application Rate</p>
                  <p className="text-3xl font-bold text-navy-900">64%</p>
                  <p className="text-sm text-green-600 flex items-center justify-center gap-1 mt-1">
                    <ArrowUpRight className="w-4 h-4" />
                    8%
                  </p>
                </div>
                <div className="text-center p-4 bg-navy-50 rounded-lg">
                  <p className="text-sm text-navy-500 mb-1">Acceptance Rate</p>
                  <p className="text-3xl font-bold text-navy-900">72%</p>
                  <p className="text-sm text-red-500 flex items-center justify-center gap-1 mt-1">
                    <ArrowDownRight className="w-4 h-4" />
                    3%
                  </p>
                </div>
                <div className="text-center p-4 bg-navy-50 rounded-lg">
                  <p className="text-sm text-navy-500 mb-1">Revenue Growth</p>
                  <p className="text-3xl font-bold text-navy-900">23%</p>
                  <p className="text-sm text-green-600 flex items-center justify-center gap-1 mt-1">
                    <ArrowUpRight className="w-4 h-4" />
                    12%
                  </p>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default OrganizerDashboard;
