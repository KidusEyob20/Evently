import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { User, Building2, ArrowRight, GraduationCap, Briefcase, Calendar, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const [selectedRole, setSelectedRole] = useState<'attendee' | 'organizer' | null>(null);

  return (
    <div className="min-h-screen bg-navy-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Choose Your Dashboard</h1>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Select your role to access the features and tools designed for you
          </p>
        </motion.div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Attendee Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link to="/attendee-dashboard">
              <Card 
                className={`h-full cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                  selectedRole === 'attendee' 
                    ? 'border-teal-500 bg-teal-50' 
                    : 'border-transparent hover:border-teal-200'
                }`}
                onMouseEnter={() => setSelectedRole('attendee')}
                onMouseLeave={() => setSelectedRole(null)}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-6">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-3">
                    I&apos;m a Student / Attendee
                  </h2>
                  <p className="text-navy-600 mb-6">
                    Discover events, track your applications, manage your saved events, 
                    and build your tech career profile.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-navy-600">
                      <Calendar className="w-5 h-5 text-teal-500" />
                      <span>Track event applications</span>
                    </div>
                    <div className="flex items-center gap-3 text-navy-600">
                      <TrendingUp className="w-5 h-5 text-teal-500" />
                      <span>View application status</span>
                    </div>
                    <div className="flex items-center gap-3 text-navy-600">
                      <Briefcase className="w-5 h-5 text-teal-500" />
                      <span>Save interesting events</span>
                    </div>
                  </div>
                  <Button className="w-full bg-teal-500 hover:bg-teal-600 gap-2">
                    Go to Attendee Dashboard
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          {/* Organizer Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/organizer-dashboard">
              <Card 
                className={`h-full cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                  selectedRole === 'organizer' 
                    ? 'border-amber-500 bg-amber-50' 
                    : 'border-transparent hover:border-amber-200'
                }`}
                onMouseEnter={() => setSelectedRole('organizer')}
                onMouseLeave={() => setSelectedRole(null)}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-3">
                    I&apos;m an Organizer / University
                  </h2>
                  <p className="text-navy-600 mb-6">
                    Create and manage events, review applications, track analytics, 
                    and connect with talented students.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-navy-600">
                      <Calendar className="w-5 h-5 text-amber-500" />
                      <span>Create and manage events</span>
                    </div>
                    <div className="flex items-center gap-3 text-navy-600">
                      <User className="w-5 h-5 text-amber-500" />
                      <span>Review applications</span>
                    </div>
                    <div className="flex items-center gap-3 text-navy-600">
                      <TrendingUp className="w-5 h-5 text-amber-500" />
                      <span>View analytics & insights</span>
                    </div>
                  </div>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 gap-2">
                    Go to Organizer Dashboard
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-white rounded-xl p-6 text-center border border-navy-100">
            <p className="text-3xl font-bold text-teal-600">50+</p>
            <p className="text-navy-600 mt-1">Active Events</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-navy-100">
            <p className="text-3xl font-bold text-amber-600">10K+</p>
            <p className="text-navy-600 mt-1">Students</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-navy-100">
            <p className="text-3xl font-bold text-blue-600">20+</p>
            <p className="text-navy-600 mt-1">Universities</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-navy-100">
            <p className="text-3xl font-bold text-pink-600">AED 500K</p>
            <p className="text-navy-600 mt-1">In Prizes</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
