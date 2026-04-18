import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FilterChipProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  count?: number;
}

const FilterChip = ({ label, isActive, onClick, count }: FilterChipProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
        isActive
          ? 'bg-purple-600 text-white shadow-md'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      )}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
    >
      {label}
      {count !== undefined && (
        <span
          className={cn(
            'px-2 py-0.5 rounded-full text-xs',
            isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
          )}
        >
          {count}
        </span>
      )}
    </motion.button>
  );
};

export default FilterChip;
