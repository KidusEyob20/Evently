import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import {
  Heart,
  MapPin,
  Calendar,
  Clock,
  Users,
  Share2,
  ArrowLeft,
  Mail,
  CheckCircle,
  Trophy,
  UserPlus,
  AlertCircle,
} from 'lucide-react';
import { getEventById, mockEvents, categoryColors } from '@/data/events';
import EventCard from '@/components/event/EventCard';

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = getEventById(id || '');
  const [isSaved, setIsSaved] = useState(event?.isSaved || false);
  const [showApplicationSuccess, setShowApplicationSuccess] = useState(false);

  if (!event) {
    return (
      <div className="min-h-screen bg-navy-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-navy-900 mb-4">
            Event Not Found
          </h1>
          <p className="text-navy-600 mb-8">
            The event you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link to="/events">
            <Button className="bg-teal-500">Browse Events</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedEvents = mockEvents
    .filter((e) => e.category === event.category && e.id !== event.id)
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleApply = () => {
    setShowApplicationSuccess(true);
    setTimeout(() => setShowApplicationSuccess(false), 3000);
  };

  const occupancyRate = (event.attendees / event.maxAttendees) * 100;
  const isFull = occupancyRate >= 100;

  return (
    <div className="min-h-screen bg-navy-50 pt-16">
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px]">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-navy-900" />
        </button>

        {/* Action Buttons */}
        <div className="absolute top-6 right-6 flex gap-3">
          <button
            onClick={toggleSave}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${
                isSaved ? 'fill-red-500 text-red-500' : 'text-navy-600'
              }`}
            />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors">
            <Share2 className="w-5 h-5 text-navy-600" />
          </button>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium text-white mb-4 ${categoryColors[event.category]}`}>
                {event.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-shadow-lg">
                {event.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{event.location}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                About This Event
              </h2>
              <p className="text-navy-600 leading-relaxed whitespace-pre-line">
                {event.description}
              </p>
            </motion.section>

            {/* Requirements */}
            {event.requirements && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  Requirements
                </h2>
                <ul className="space-y-2">
                  {event.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span className="text-navy-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* Prizes */}
            {event.prizes && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  Prizes
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {event.prizes.map((prize, index) => (
                    <Card key={index} className="border-navy-100 bg-gradient-to-br from-amber-50 to-orange-50">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Trophy className="w-6 h-6 text-amber-500" />
                          <span className="font-semibold text-navy-900">{prize.position}</span>
                        </div>
                        <p className="text-navy-600">{prize.reward}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Organizer */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-white rounded-xl p-6 border border-navy-100"
            >
              <h3 className="text-lg font-semibold text-navy-900 mb-4">
                Organizer
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white text-xl font-bold">
                  {event.organizer.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-navy-900">
                    {event.organizer.name}
                  </p>
                  <p className="text-sm text-navy-500 capitalize">{event.organizer.type}</p>
                  <div className="flex items-center gap-4 mt-1">
                    <a
                      href={`mailto:${event.organizer.email}`}
                      className="text-sm text-teal-600 hover:text-teal-700 flex items-center gap-1"
                    >
                      <Mail className="w-4 h-4" />
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Location */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-navy-900 mb-4">
                Location
              </h3>
              <div className="h-64 bg-navy-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-navy-400 mx-auto mb-2" />
                  <p className="text-navy-600">{event.location}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(event.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700 text-sm mt-2 inline-block"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sticky top-24"
            >
              <Card className="border-navy-100">
                <CardContent className="p-6">
                  {/* Price */}
                  <div className="mb-6">
                    <p className="text-sm text-navy-500 mb-1">Registration Fee</p>
                    <p className="text-3xl font-bold text-navy-900">
                      {event.price === 0 ? 'Free' : `AED ${event.price}`}
                    </p>
                  </div>

                  {/* Team Size */}
                  {event.teamSize && (
                    <div className="mb-6">
                      <p className="text-sm text-navy-500 mb-1">Team Size</p>
                      <div className="flex items-center gap-2">
                        <UserPlus className="w-5 h-5 text-teal-500" />
                        <p className="font-medium text-navy-900">
                          {event.teamSize.min} - {event.teamSize.max} members
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Deadline */}
                  {event.deadline && (
                    <div className="mb-6">
                      <p className="text-sm text-navy-500 mb-1">Registration Deadline</p>
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-500" />
                        <p className="font-medium text-navy-900">{formatDate(event.deadline)}</p>
                      </div>
                    </div>
                  )}

                  {/* Attendance */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-navy-600">Spots Filled</span>
                      <span className="font-medium text-navy-900">
                        {occupancyRate.toFixed(0)}%
                      </span>
                    </div>
                    <div className="h-2 bg-navy-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          occupancyRate >= 90
                            ? 'bg-red-500'
                            : occupancyRate >= 70
                            ? 'bg-amber-500'
                            : 'bg-teal-500'
                        }`}
                        style={{ width: `${Math.min(occupancyRate, 100)}%` }}
                      />
                    </div>
                    <p className="text-sm text-navy-500 mt-2">
                      {event.attendees.toLocaleString()} /{' '}
                      {event.maxAttendees.toLocaleString()} registered
                    </p>
                  </div>

                  {/* Apply Button */}
                  <Button
                    onClick={handleApply}
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700"
                    size="lg"
                    disabled={isFull}
                  >
                    {isFull ? 'Event Full' : 'Apply Now'}
                  </Button>

                  {/* Success Message */}
                  {showApplicationSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-green-700">
                        Application submitted successfully!
                      </span>
                    </motion.div>
                  )}

                  {/* Event Details */}
                  <div className="mt-6 pt-6 border-t border-navy-100 space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-navy-400" />
                      <div>
                        <p className="text-sm text-navy-500">Date</p>
                        <p className="font-medium text-navy-900">{formatDate(event.date)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-navy-400" />
                      <div>
                        <p className="text-sm text-navy-500">Time</p>
                        <p className="font-medium text-navy-900">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-navy-400" />
                      <div>
                        <p className="text-sm text-navy-500">Location</p>
                        <p className="font-medium text-navy-900">{event.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-navy-400" />
                      <div>
                        <p className="text-sm text-navy-500">Capacity</p>
                        <p className="font-medium text-navy-900">
                          {event.maxAttendees.toLocaleString()} people
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <section className="py-16 bg-white border-t border-navy-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-8">
              Similar Events
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default EventDetail;
