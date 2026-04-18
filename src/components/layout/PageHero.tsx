import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const PageHero = ({
  title,
  subtitle,
  backgroundImage,
  children,
  size = 'medium',
}: PageHeroProps) => {
  const heightClasses = {
    small: 'py-16',
    medium: 'py-24',
    large: 'py-32',
  };

  return (
    <div
      className={`relative ${heightClasses[size]} flex items-center justify-center overflow-hidden`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`font-bold ${
            backgroundImage ? 'text-white' : 'text-gray-900'
          } ${size === 'small' ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl lg:text-6xl'}`}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`mt-4 text-lg md:text-xl max-w-2xl mx-auto ${
              backgroundImage ? 'text-gray-200' : 'text-gray-600'
            }`}
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PageHero;
