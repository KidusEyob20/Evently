import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Event } from '@/types';
import { Button } from '@/components/ui/button';
import { Heart, MapPin, Calendar, Clock, Users, ArrowRight } from 'lucide-react';
import CategoryBadge from './CategoryBadge';

interface FeaturedCardProps {
  event: Event;
  index?: number;
}

const FeaturedCard = ({ event, index = 0 }: FeaturedCardProps) => {
  const [isSaved, setIsSaved] = useState(event.isSaved || false);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link to={`/event/${event.id}`}>
        <div className="relative group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
              <motion.img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <CategoryBadge category={event.category} />
              </div>

              {/* Save Button */}
              <motion.button
                onClick={toggleSave}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    isSaved ? 'fill-red-500 text-red-500' : 'text-gray-600'
                  }`}
                />
              </motion.button>

              {/* Featured Badge */}
              <div className="absolute bottom-4 left-4">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-semibold">
                  Featured Event
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                {event.title}
              </h3>

              <p className="text-gray-600 mb-6 line-clamp-3">
                {event.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{formatDate(event.date)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-medium">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium line-clamp-1">{event.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Attendees</p>
                    <p className="font-medium">
                      {event.attendees.toLocaleString()} /{' '}
                      {event.maxAttendees.toLocaleString()} registered
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {event.price === 0
                      ? 'Free'
                      : `${event.currency} ${event.price}`}
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 gap-2"
                >
                  Get Tickets
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default FeaturedCard;
