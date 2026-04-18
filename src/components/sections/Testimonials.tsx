import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  university: string;
  content: string;
  rating: number;
  event: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Fatima Al-Rashid',
    role: 'Computer Science Student',
    university: 'Zayed University',
    content: 'The InnovAIte Hackathon was a game-changer for me. I met incredible mentors, built a project I am proud of, and won AED 10,000. Evently made it so easy to discover and apply for this opportunity.',
    rating: 5,
    event: 'InnovAIte Hackathon 2024',
    avatar: 'FA',
  },
  {
    id: '2',
    name: 'Mohammed Al-Farsi',
    role: 'Engineering Student',
    university: 'University of Birmingham Dubai',
    content: 'I have attended three conferences through Evently and each one opened new doors. The platform is intuitive, the events are top-tier, and the networking opportunities are unmatched in Dubai.',
    rating: 5,
    event: 'GITEX Global 2024',
    avatar: 'MA',
  },
  {
    id: '3',
    name: 'Sarah Khan',
    role: 'Data Science Major',
    university: 'American University in Dubai',
    content: 'The AI Workshop Series completely transformed my understanding of machine learning. The hands-on approach and industry mentors made all the difference. I landed an internship because of the connections I made here.',
    rating: 5,
    event: 'AI & ML Workshop Series',
    avatar: 'SK',
  },
  {
    id: '4',
    name: 'Omar Hassan',
    role: 'Software Engineering Student',
    university: 'BITS Pilani Dubai',
    content: 'Participating in the Coding Battle pushed me to levels I did not know I could reach. The competition was fierce but friendly, and the prizes were amazing. Cannot wait for the next one!',
    rating: 4,
    event: 'Coding Battle Competition',
    avatar: 'OH',
  },
  {
    id: '5',
    name: 'Aisha Patel',
    role: 'IT Student',
    university: 'University of Wollongong Dubai',
    content: 'As a woman in tech, the Women in Tech Summit gave me the confidence and network I needed. Evently connected me with this incredible event. The speakers were inspiring and the workshops were practical.',
    rating: 5,
    event: 'Women in Tech Summit',
    avatar: 'AP',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-charcoal-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-emerald-400 font-medium text-sm uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Students Say
          </h2>
          <p className="text-charcoal-400 text-lg max-w-2xl mx-auto">
            Real stories from students who transformed their careers through our events
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="overflow-hidden relative min-h-[320px] md:min-h-[280px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="testimonial-card max-w-3xl mx-auto">
                  <Quote className="w-10 h-10 text-emerald-500 mb-4" />
                  <p className="text-white text-lg md:text-xl leading-relaxed mb-6">
                    &ldquo;{current.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold">
                      {current.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold">{current.name}</p>
                      <p className="text-charcoal-400 text-sm">
                        {current.role} at {current.university}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex gap-1 mb-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < current.rating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-charcoal-600'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-emerald-400 text-sm">{current.event}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-emerald-500'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-emerald-400">4.8/5</p>
            <p className="text-charcoal-400 mt-1">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-coral-400">2,500+</p>
            <p className="text-charcoal-400 mt-1">Happy Students</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-indigo-400">95%</p>
            <p className="text-charcoal-400 mt-1">Would Recommend</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-amber-400">500+</p>
            <p className="text-charcoal-400 mt-1">Success Stories</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
