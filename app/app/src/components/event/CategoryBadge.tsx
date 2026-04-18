import { categoryColors } from '@/data/events';
import type { EventCategory } from '@/types';
import { cn } from '@/lib/utils';

interface CategoryBadgeProps {
  category: EventCategory;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}

const CategoryBadge = ({
  category,
  className,
  onClick,
  isActive = false,
}: CategoryBadgeProps) => {
  return (
    <span
      onClick={onClick}
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all',
        categoryColors[category],
        'text-white',
        onClick && 'cursor-pointer hover:opacity-80',
        isActive && 'ring-2 ring-offset-2 ring-gray-900',
        className
      )}
    >
      {category}
    </span>
  );
};

export default CategoryBadge;
