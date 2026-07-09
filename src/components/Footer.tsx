import { ArrowUp, Heart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import { FaLinkedinIn } from "react-icons/fa";

const socials = [
  { name: 'LinkedIn', link: 'https://www.linkedin.com/company/sleevetechs', icon: <FaLinkedinIn /> },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-brand-light text-brand-dark overflow-hidden">
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-brand-blue via-brand-magenta to-brand-blue" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src={logoImage}
                alt="Sleevetechs"
                className="h-11 w-auto object-contain"
              />
            </div>
            <p className="text-sm sm:text-base text-brand-dark leading-relaxed max-w-md mb-6">
              Digital transformation on demand. We help businesses streamline operations, 
              enhance security, and accelerate growth with innovative technology solutions.
            </p>
            <div className="flex">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-magenta px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-blue">
                    {social.icon}
                  </span>
                  <span>View on LinkedIn</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-dark mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Cyber Security',
                'Technology Consulting',
                'ERP Solutions',
                'vCIO Services',
                'RPA',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }}
                    className="text-brand-dark hover:text-brand-blue transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-dark mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Web Development', href: '#webdev' },
                { name: 'Clients', href: '#clients' },
                { name: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    className="text-brand-dark hover:text-brand-blue transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-dark mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#/privacy-policy" className="text-brand-dark hover:text-brand-blue transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#/terms" className="text-brand-dark hover:text-brand-blue transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-brand-dark/10 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <p className="text-sm text-brand-dark flex flex-wrap justify-center sm:justify-start items-center gap-1">
            Copyright 2015-{new Date().getFullYear()} Sleeve Techs.  All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-magenta flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-brand-blue/30"
          >
            <ArrowUp size={20} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}