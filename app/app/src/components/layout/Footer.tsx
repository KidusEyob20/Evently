import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    students: [
      { name: 'Browse Events', href: '/events' },
      { name: 'My Applications', href: '/attendee-dashboard' },
      { name: 'Saved Events', href: '/saved' },
      { name: 'Student Resources', href: '#' },
    ],
    organizers: [
      { name: 'Post an Event', href: '/post-event' },
      { name: 'Organizer Dashboard', href: '/organizer-dashboard' },
      { name: 'Pricing', href: '#' },
      { name: 'Success Stories', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-charcoal-950 text-charcoal-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Evently
            </h3>
            <p className="text-charcoal-500 mb-6 max-w-sm">
              Connecting university students with the best tech events in Dubai. 
              From hackathons to conferences, find your next opportunity.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>hello@evently.ae</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>+971 4 123 4567</span>
              </div>
            </div>
          </div>

          {/* Students Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Students</h3>
            <ul className="space-y-3">
              {footerLinks.students.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm hover:text-emerald-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organizers Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Organizers</h3>
            <ul className="space-y-3">
              {footerLinks.organizers.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm hover:text-emerald-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm hover:text-emerald-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-charcoal-600">
            {currentYear} Evently. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center hover:bg-emerald-500 transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
