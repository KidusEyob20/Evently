import { motion } from 'framer-motion';
import { Building2, GraduationCap, Cpu, Zap, Globe, Award, Rocket, Sparkles } from 'lucide-react';

interface Partner {
  name: string;
  icon: React.ElementType;
  type: 'university' | 'company' | 'organization';
}

const partners: Partner[] = [
  { name: 'University of Birmingham Dubai', icon: GraduationCap, type: 'university' },
  { name: 'Zayed University', icon: GraduationCap, type: 'university' },
  { name: 'American University in Dubai', icon: GraduationCap, type: 'university' },
  { name: 'BITS Pilani Dubai', icon: GraduationCap, type: 'university' },
  { name: 'GITEX Global', icon: Cpu, type: 'organization' },
  { name: 'Dubai Future Foundation', icon: Rocket, type: 'organization' },
  { name: 'DEWA Innovation', icon: Zap, type: 'organization' },
  { name: 'Dubai Internet City', icon: Globe, type: 'organization' },
  { name: 'AstroLabs Dubai', icon: Sparkles, type: 'company' },
  { name: 'DIFC Innovation Hub', icon: Building2, type: 'organization' },
  { name: 'UAE AI Office', icon: Award, type: 'organization' },
  { name: 'Dubai Media City', icon: Cpu, type: 'organization' },
];

const PartnersMarquee = () => {
  const doubledPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-charcoal-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-emerald-400 font-medium text-sm uppercase tracking-widest mb-4 block">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Backed by Dubai&apos;s Best
          </h2>
          <p className="text-charcoal-400 max-w-xl mx-auto">
            Partnering with leading universities and organizations across the UAE
          </p>
        </motion.div>
      </div>

      {/* Marquee Row 1 - Left to Right */}
      <div className="marquee-container mb-6">
        <div className="marquee-content">
          {doubledPartners.map((partner, index) => (
            <div
              key={`row1-${index}`}
              className="flex items-center gap-3 px-6 py-4 mx-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all cursor-pointer flex-shrink-0"
            >
              <partner.icon className="w-6 h-6 text-emerald-400" />
              <span className="text-white font-medium whitespace-nowrap">{partner.name}</span>
              <span className="text-xs text-charcoal-500 uppercase tracking-wider ml-2">
                {partner.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Right to Left */}
      <div className="marquee-container">
        <div 
          className="marquee-content"
          style={{ animationDirection: 'reverse', animationDuration: '40s' }}
        >
          {[...doubledPartners].reverse().map((partner, index) => (
            <div
              key={`row2-${index}`}
              className="flex items-center gap-3 px-6 py-4 mx-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-coral-500/30 transition-all cursor-pointer flex-shrink-0"
            >
              <partner.icon className="w-6 h-6 text-coral-400" />
              <span className="text-white font-medium whitespace-nowrap">{partner.name}</span>
              <span className="text-xs text-charcoal-500 uppercase tracking-wider ml-2">
                {partner.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 mt-12"
      >
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">20+</p>
            <p className="text-charcoal-500 text-sm">University Partners</p>
          </div>
          <div className="w-px bg-charcoal-700 hidden md:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-white">50+</p>
            <p className="text-charcoal-500 text-sm">Corporate Sponsors</p>
          </div>
          <div className="w-px bg-charcoal-700 hidden md:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-white">AED 2M+</p>
            <p className="text-charcoal-500 text-sm">Invested in Students</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PartnersMarquee;
