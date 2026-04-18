import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Event } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MapPin, Calendar, Clock, Users } from 'lucide-react';
import { categoryColors } from '@/data/events';

interface EventCardProps {
  event: Event;
  index?: number;
}

const EventCard = ({ event, index = 0 }: EventCardProps) => {
  const [isSaved, setIsSaved] = useState(event.isSaved || false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link to={`/event/${event.id}`}>
        <Card
          className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl border-charcoal-100"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-3 left-3">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${categoryColors[event.category]}`}>
                {event.category}
              </span>
            </div>

            {/* Save Button */}
            <motion.button
              onClick={toggleSave}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              <Heart
                className={`w-4 h-4 transition-colors ${
                  isSaved ? 'fill-red-500 text-red-500' : 'text-charcoal-600'
                }`}
              />
            </motion.button>

            {/* Price Badge */}
            <div className="absolute bottom-3 left-3">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-charcoal-900">
                {event.price === 0 ? 'Free' : `AED ${event.price}`}
              </span>
            </div>
          </div>

          {/* Content */}
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg text-charcoal-900 mb-2 line-clamp-1 group-hover:text-emerald-600 transition-colors">
              {event.title}
            </h3>

            <p className="text-charcoal-600 text-sm mb-4 line-clamp-2">
              {event.description}
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-charcoal-500">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-charcoal-500">
                <Clock className="w-4 h-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-charcoal-500">
                <MapPin className="w-4 h-4" />
                <span className="line-clamp-1">{event.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-charcoal-500">
                <Users className="w-4 h-4" />
                <span>
                  {event.attendees.toLocaleString()} /{' '}
                  {event.maxAttendees.toLocaleString()} registered
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full mt-4 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all"
            >
              View Details
            </Button>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default EventCard;
