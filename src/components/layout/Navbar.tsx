import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X, User, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Saved', href: '/saved' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isHomePage = location.pathname === '/';
  const shouldBeTransparent = isHomePage && !isScrolled;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldBeTransparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-md shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Empty left spacer for balance */}
          <div className="w-24 hidden md:block" />

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                  isActive(link.href)
                    ? 'text-emerald-500'
                    : shouldBeTransparent
                    ? 'text-white/90'
                    : 'text-charcoal-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/saved">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`relative ${shouldBeTransparent ? 'text-white hover:text-white hover:bg-white/10' : 'text-charcoal-700'}`}
              >
                <Heart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-coral-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
            <Link to="/login">
              <Button 
                variant={shouldBeTransparent ? 'outline' : 'ghost'} 
                className={`gap-2 ${shouldBeTransparent ? 'border-white/50 text-white bg-white/5 hover:bg-white/20 hover:border-white/70' : ''}`}
              >
                <User className="w-4 h-4" />
                Sign In
              </Button>
            </Link>
            <Link to="/post-event">
              <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 gap-2">
                <LayoutDashboard className="w-4 h-4" />
                Post Event
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${shouldBeTransparent ? 'text-white' : 'text-charcoal-900'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-charcoal-100"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block text-sm font-medium ${
                    isActive(link.href) ? 'text-emerald-500' : 'text-charcoal-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-charcoal-100 space-y-2">
                <Link to="/saved" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-start gap-2 border-charcoal-200">
                    <Heart className="w-4 h-4" />
                    Saved Events
                  </Button>
                </Link>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-start gap-2 border-charcoal-200">
                    <User className="w-4 h-4" />
                    Sign In
                  </Button>
                </Link>
                <Link to="/post-event" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600">
                    Post Event
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
