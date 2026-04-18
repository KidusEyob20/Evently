import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Calendar, ArrowRight } from 'lucide-react';
import { getSavedEvents, mockEvents } from '@/data/events';
import EventCard from '@/components/event/EventCard';

const Saved = () => {
  const savedEvents = getSavedEvents();
  const [recommendedEvents] = useState(
    mockEvents.filter((e) => !e.isSaved).slice(0, 3)
  );

  return (
    <div className="min-h-screen bg-navy-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-navy-900">Saved Events</h1>
              <p className="text-navy-600">
                {savedEvents.length} event{savedEvents.length !== 1 ? 's' : ''} saved
              </p>
            </div>
          </div>
        </motion.div>

        {/* Saved Events */}
        {savedEvents.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center py-16 bg-white rounded-xl border border-navy-100"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-navy-100 flex items-center justify-center">
              <Heart className="w-12 h-12 text-navy-400" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900 mb-2">
              No saved events yet
            </h2>
            <p className="text-navy-600 mb-6 max-w-md mx-auto">
              Start exploring events and save your favorites to keep track of what
              interests you.
            </p>
            <Link to="/events">
              <Button className="bg-gradient-to-r from-teal-500 to-teal-600 gap-2">
                <Calendar className="w-4 h-4" />
                Browse Events
              </Button>
            </Link>
          </motion.div>
        )}

        {/* Recommended Events */}
        {recommendedEvents.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-navy-900">
                  You might also like
                </h2>
                <p className="text-navy-600">
                  Events based on your interests
                </p>
              </div>
              <Link to="/events">
                <Button variant="ghost" className="gap-2 text-teal-600">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {recommendedEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default Saved;
