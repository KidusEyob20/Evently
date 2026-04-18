import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Event } from '@/types';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Edit, Eye, Trash2 } from 'lucide-react';
import CategoryBadge from '@/components/event/CategoryBadge';

interface ListingsTableProps {
  events: Event[];
  onDelete?: (id: string) => void;
}

const ListingsTable = ({ events, onDelete }: ListingsTableProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getStatusBadge = (event: Event) => {
    const eventDate = new Date(event.date);
    const now = new Date();
    
    if (eventDate < now) {
      return <Badge variant="secondary">Past</Badge>;
    }
    
    const occupancyRate = event.attendees / event.maxAttendees;
    if (occupancyRate >= 0.9) {
      return <Badge variant="destructive">Sold Out</Badge>;
    }
    if (occupancyRate >= 0.7) {
      return <Badge className="bg-orange-500">Almost Full</Badge>;
    }
    
    return <Badge className="bg-green-500">Active</Badge>;
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Attendees</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8">
                  <p className="text-gray-500">No events found</p>
                </TableCell>
              </TableRow>
            ) : (
              events.map((event, index) => (
                <motion.tr
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group hover:bg-gray-50 transition-colors"
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900 line-clamp-1">
                          {event.title}
                        </p>
                        <p className="text-sm text-gray-500 line-clamp-1">
                          {event.location}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <CategoryBadge category={event.category} />
                  </TableCell>
                  <TableCell>{formatDate(event.date)}</TableCell>
                  <TableCell>
                    {event.price === 0
                      ? 'Free'
                      : `${event.currency} ${event.price}`}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{event.attendees}</span>
                      <span className="text-gray-400">/</span>
                      <span className="text-gray-500">{event.maxAttendees}</span>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(event)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link to={`/event/${event.id}`}>
                        <Button variant="ghost" size="icon">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Link to={`/post-event?edit=${event.id}`}>
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:text-red-600 hover:bg-red-50"
                        onClick={() => onDelete?.(event.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </motion.tr>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ListingsTable;
