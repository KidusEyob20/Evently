import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { categories, getCategoryCounts } from '@/data/events';
import type { EventCategory } from '@/types';
import FilterChip from './FilterChip';

interface FilterBarProps {
  onSearchChange?: (search: string) => void;
  onCategoryChange?: (category: EventCategory | 'all') => void;
  onPriceChange?: (priceRange: string) => void;
  onDateChange?: (dateRange: string) => void;
  selectedCategory?: EventCategory | 'all';
  searchQuery?: string;
}

const FilterBar = ({
  onSearchChange,
  onCategoryChange,
  onPriceChange,
  onDateChange,
  selectedCategory = 'all',
  searchQuery = '',
}: FilterBarProps) => {
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const categoryCounts = getCategoryCounts();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange?.(localSearch);
  };

  const clearFilters = () => {
    setLocalSearch('');
    onSearchChange?.('');
    onCategoryChange?.('all');
    onPriceChange?.('all');
    onDateChange?.('all');
  };

  const hasActiveFilters =
    localSearch || selectedCategory !== 'all';

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Search and Main Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <form onSubmit={handleSearchSubmit} className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search events..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="pl-10 pr-10"
              />
              {localSearch && (
                <button
                  type="button"
                  onClick={() => {
                    setLocalSearch('');
                    onSearchChange?.('');
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
          </form>

          {/* Desktop Filters */}
          <div className="hidden md:flex items-center gap-3">
            <Select onValueChange={onPriceChange} defaultValue="all">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="0-500">Under 500 AED</SelectItem>
                <SelectItem value="500-1000">500 - 1000 AED</SelectItem>
                <SelectItem value="1000+">1000+ AED</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={onDateChange} defaultValue="all">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Date</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="next-month">Next Month</SelectItem>
              </SelectContent>
            </Select>

            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-gray-500"
              >
                Clear
              </Button>
            )}
          </div>

          {/* Mobile Filter Toggle */}
          <Button
            variant="outline"
            className="md:hidden"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Category Chips */}
        <motion.div
          className="mt-4 flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <FilterChip
            label="All Events"
            isActive={selectedCategory === 'all'}
            onClick={() => onCategoryChange?.('all')}
          />
          {categories.map((category) => {
            const count = categoryCounts.find((c) => c.category === category)?.count || 0;
            return (
              <FilterChip
                key={category}
                label={category}
                isActive={selectedCategory === category}
                onClick={() => onCategoryChange?.(category as EventCategory)}
                count={count}
              />
            );
          })}
        </motion.div>

        {/* Mobile Filters */}
        {showMobileFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-gray-200 space-y-4"
          >
            <Select onValueChange={onPriceChange} defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="0-500">Under 500 AED</SelectItem>
                <SelectItem value="500-1000">500 - 1000 AED</SelectItem>
                <SelectItem value="1000+">1000+ AED</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={onDateChange} defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Date</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="next-month">Next Month</SelectItem>
              </SelectContent>
            </Select>

            {hasActiveFilters && (
              <Button variant="outline" onClick={clearFilters} className="w-full">
                Clear Filters
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
