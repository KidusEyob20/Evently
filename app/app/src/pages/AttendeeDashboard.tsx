import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  CheckCircle,
  Hourglass,
  XCircle,
  Heart,
  FileText,
  MapPin,
  ChevronRight,
  Bell,
  Clock,
} from 'lucide-react';
import { getUserApplications, getAttendeeStats, getSavedEvents, mockEvents, statusColors } from '@/data/events';

const AttendeeDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const applications = getUserApplications();
  const stats = getAttendeeStats();
  const savedEvents = getSavedEvents();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-teal-500" />;
      case 'pending':
        return <Hourglass className="w-5 h-5 text-amber-500" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const notifications = [
    {
      id: '1',
      title: 'Application Approved!',
      message: 'Your application for GITEX Global 2025 has been approved.',
      type: 'success',
      date: '2 hours ago',
    },
    {
      id: '2',
      title: 'Event Reminder',
      message: 'AI Workshop starts in 3 days. Don\'t forget!',
      type: 'info',
      date: '1 day ago',
    },
  ];

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
            <h1 className="text-3xl font-bold text-navy-900">My Dashboard</h1>
            <p className="text-navy-600 mt-1">
              Track your applications and discover new opportunities
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/events">
              <Button className="bg-gradient-to-r from-teal-500 to-teal-600 gap-2">
                <Calendar className="w-4 h-4" />
                Find Events
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-navy-100">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-navy-900">{stats.totalApplications}</p>
                    <p className="text-sm text-navy-500">Total Applications</p>
                  </div>
                </div>
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
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                    <Hourglass className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-navy-900">{stats.pendingApplications}</p>
                    <p className="text-sm text-navy-500">Pending</p>
                  </div>
                </div>
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
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-navy-900">{stats.approvedApplications}</p>
                    <p className="text-sm text-navy-500">Approved</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="border-navy-100">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-navy-900">{stats.savedEvents}</p>
                    <p className="text-sm text-navy-500">Saved Events</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white border border-navy-100">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="applications">My Applications</TabsTrigger>
            <TabsTrigger value="saved">Saved Events</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Recent Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-navy-900">Recent Applications</h3>
                <Button variant="ghost" size="sm" onClick={() => setActiveTab('applications')}>
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {applications.slice(0, 3).map((app) => (
                  <Card key={app.id} className="border-navy-100 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={app.eventImage}
                          alt={app.eventTitle}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-navy-900">{app.eventTitle}</h4>
                          <p className="text-sm text-navy-500">Applied on {app.appliedDate}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(app.status)}
                          <Badge className={statusColors[app.status]}>
                            {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Recommended Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-navy-900">Recommended for You</h3>
                <Link to="/events">
                  <Button variant="ghost" size="sm">
                    Browse All
                  </Button>
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {mockEvents.filter(e => !e.isSaved).slice(0, 3).map((event) => (
                  <Link key={event.id} to={`/event/${event.id}`}>
                    <Card className="border-navy-100 hover:shadow-md transition-shadow overflow-hidden">
                      <div className="h-32 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-navy-900 line-clamp-1">{event.title}</h4>
                        <p className="text-sm text-navy-500 mt-1">{event.category}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="applications">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h3 className="text-lg font-semibold text-navy-900 mb-4">All Applications</h3>
              <div className="space-y-4">
                {applications.map((app) => (
                  <Card key={app.id} className="border-navy-100">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={app.eventImage}
                          alt={app.eventTitle}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-navy-900">{app.eventTitle}</h4>
                          <div className="flex items-center gap-4 mt-2 text-sm text-navy-500">
                            <span>Applied: {app.appliedDate}</span>
                            {app.responseDate && <span>Response: {app.responseDate}</span>}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {getStatusIcon(app.status)}
                          <Badge className={statusColors[app.status]}>
                            {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                          </Badge>
                          <Link to={`/event/${app.eventId}`}>
                            <Button variant="ghost" size="icon">
                              <ChevronRight className="w-5 h-5" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="saved">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h3 className="text-lg font-semibold text-navy-900 mb-4">Saved Events</h3>
              {savedEvents.length > 0 ? (
                <div className="grid md:grid-cols-3 gap-4">
                  {savedEvents.map((event) => (
                    <Link key={event.id} to={`/event/${event.id}`}>
                      <Card className="border-navy-100 hover:shadow-md transition-shadow overflow-hidden">
                        <div className="h-40 overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-navy-900 line-clamp-1">{event.title}</h4>
                          <div className="flex items-center gap-2 mt-2 text-sm text-navy-500">
                            <MapPin className="w-4 h-4" />
                            <span className="line-clamp-1">{event.location}</span>
                          </div>
                          <div className="mt-3 flex items-center justify-between">
                            <span className="text-teal-600 font-semibold">
                              {event.price === 0 ? 'Free' : `AED ${event.price}`}
                            </span>
                            <Button size="sm" variant="outline">
                              View
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-xl border border-navy-100">
                  <Heart className="w-12 h-12 text-navy-300 mx-auto mb-4" />
                  <p className="text-navy-600">No saved events yet</p>
                  <Link to="/events">
                    <Button className="mt-4 bg-teal-500">Browse Events</Button>
                  </Link>
                </div>
              )}
            </motion.div>
          </TabsContent>

          <TabsContent value="notifications">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h3 className="text-lg font-semibold text-navy-900 mb-4">Notifications</h3>
              <div className="space-y-4">
                {notifications.map((notif) => (
                  <Card key={notif.id} className="border-navy-100">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          notif.type === 'success' ? 'bg-green-100' : 'bg-blue-100'
                        }`}>
                          <Bell className={`w-5 h-5 ${
                            notif.type === 'success' ? 'text-green-600' : 'text-blue-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-navy-900">{notif.title}</h4>
                          <p className="text-navy-600 mt-1">{notif.message}</p>
                          <p className="text-sm text-navy-400 mt-2">{notif.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AttendeeDashboard;
