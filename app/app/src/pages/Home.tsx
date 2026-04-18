import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowDown, ChevronRight, Trophy, MapPin } from 'lucide-react';
import { mockEvents, getFeaturedEvents, categories, categoryColors } from '@/data/events';
import type { EventCategory } from '@/types';
import EventCard from '@/components/event/EventCard';
import CountdownTimer from '@/components/event/CountdownTimer';
import Testimonials from '@/components/sections/Testimonials';
import PartnersMarquee from '@/components/sections/PartnersMarquee';

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'all'>('all');
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const featuredEvents = getFeaturedEvents();
  const filteredEvents = selectedCategory === 'all' 
    ? mockEvents 
    : mockEvents.filter(e => e.category === selectedCategory);

  const sections = [
    { id: 'hero', name: 'Home' },
    { id: 'featured', name: 'Featured' },
    { id: 'events', name: 'Events' },
    { id: 'categories', name: 'Categories' },
  ];

  const scrollToSection = (index: number) => {
    if (index < 0 || index >= sections.length || isScrolling.current) return;
    isScrolling.current = true;
    setCurrentSection(index);
    
    const section = document.getElementById(sections[index].id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    
    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling.current) return;
      
      if (e.deltaY > 0) {
        scrollToSection(currentSection + 1);
      } else {
        scrollToSection(currentSection - 1);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentSection]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection]);

  return (
    <div ref={containerRef} className="relative">
      {/* Section Navigation Dots */}
      <div className="section-dots hidden lg:flex">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className={`section-dot ${currentSection === index ? 'active' : ''}`}
            aria-label={`Go to ${section.name}`}
          />
        ))}
      </div>

      {/* Section 1: Hero */}
      <section id="hero" className="fullscreen-section">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
          alt="GITEX Dubai"
          className="bg-image"
        />
        <div className="overlay gradient-overlay-dark" />
        <div className="content">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-emerald-500/20 backdrop-blur-sm text-emerald-300 rounded-full text-sm font-medium mb-6"
            >
              Discover. Compete. Connect.
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow-lg"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Your Gateway to
              <span className="block text-emerald-400">Tech Excellence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-charcoal-300 mb-8 max-w-xl"
            >
              Discover hackathons, competitions, and conferences across Dubai&apos;s universities. 
              Connect with innovators, showcase your skills, and build your future.
            </motion.p>

            {/* Countdown to next major event */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-8"
            >
              <CountdownTimer 
                targetDate="2025-03-14T09:00:00" 
                eventTitle="InnovAIte Hackathon starts in"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/events">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 gap-2 btn-hover-lift"
                >
                  Explore Events
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 gap-2"
                >
                  Join as Student
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Partners Marquee */}
      <PartnersMarquee />

      {/* Section 2: Featured Events */}
      <section id="featured" className="fullscreen-section">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80"
          alt="University students"
          className="bg-image"
        />
        <div className="overlay gradient-overlay-dark" />
        <div className="content">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-emerald-400 font-medium mb-4 block">Featured</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Events You Can&apos;t Miss
              </h2>
              <p className="text-charcoal-300 text-lg max-w-2xl mx-auto">
                Handpicked opportunities to learn, compete, and grow
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredEvents.slice(0, 3).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/event/${event.id}`}>
                    <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-emerald-500/50 transition-all duration-300">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-3 ${categoryColors[event.category]}`}>
                          {event.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-2 text-charcoal-400 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-emerald-400 font-semibold">
                            {event.price === 0 ? 'Free' : `AED ${event.price}`}
                          </span>
                          <ChevronRight className="w-5 h-5 text-charcoal-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Section 3: All Events */}
      <section id="events" className="min-h-screen bg-charcoal-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-emerald-600 font-medium mb-4 block">Browse</span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-4">
              All Events
            </h2>
            <p className="text-charcoal-600 text-lg max-w-2xl mx-auto">
              Find the perfect opportunity for your growth
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white text-charcoal-700 hover:bg-emerald-50'
              }`}
            >
              All Events
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as EventCategory)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white text-charcoal-700 hover:bg-emerald-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.slice(0, 6).map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>

          {filteredEvents.length > 6 && (
            <div className="text-center mt-12">
              <Link to="/events">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-charcoal-300 text-charcoal-700 hover:bg-charcoal-100"
                >
                  View All Events
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Section 4: Categories */}
      <section id="categories" className="fullscreen-section">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80"
          alt="Students learning"
          className="bg-image"
        />
        <div className="overlay gradient-overlay-emerald" />
        <div className="content">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-emerald-300 font-medium mb-4 block">Categories</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                Find Your Perfect Event Type
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link to={`/events?category=${category}`}>
                    <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-300 cursor-pointer">
                      <div className={`w-12 h-12 rounded-lg ${categoryColors[category]} flex items-center justify-center mx-auto mb-4`}>
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-semibold group-hover:text-emerald-300 transition-colors">
                        {category}
                      </h3>
                      <p className="text-charcoal-400 text-sm mt-2">
                        {mockEvents.filter(e => e.category === category).length} events
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Start Your
              <span className="block text-emerald-400">Journey?</span>
            </h2>
            <p className="text-xl text-charcoal-400 mb-10 max-w-2xl mx-auto">
              Join thousands of students discovering opportunities, competing in events, 
              and building their careers in tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 gap-2 btn-hover-lift"
                >
                  Create Account
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/post-event">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 gap-2"
                >
                  Post an Event
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
