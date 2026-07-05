import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, ShieldCheck, Layers, UserCog, 
  Bot, Building2, ChevronRight, X
} from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Technology Consulting',
    shortDesc: 'Strategic tech guidance for your business growth.',
    fullDesc: 'Be it Strategy, Execution, or Audit. We can help you excel in all phases of your Technology Program. Our passionate team carries Tech on our Sleeves.',
    color: 'from-blue-500 to-indigo-600',
    features: ['IT Strategy', 'Digital Roadmap', 'Tech Audit', 'Architecture Review'],
  },
  {
    icon: ShieldCheck,
    title: 'Cyber Security',
    shortDesc: 'End-to-end security solutions for enterprises.',
    fullDesc: 'Be it Strategy, Execution, or Audit. We can help you excel in all phases of your Cyber Security Program. From threat assessment to incident response.',
    color: 'from-red-500 to-rose-600',
    features: ['Threat Assessment', 'Security Audit', 'Compliance', 'Incident Response'],
  },
  {
    icon: Layers,
    title: 'ERP Solutions',
    shortDesc: 'Complete ERP lifecycle support and implementation.',
    fullDesc: 'From solution selection, through go-live, to ongoing support. We can support your entire ERP lifecycle with expertise across major platforms.',
    color: 'from-emerald-500 to-teal-600',
    features: ['Solution Selection', 'Implementation', 'Go-Live Support', 'Training'],
  },
  {
    icon: UserCog,
    title: 'vCIO Services',
    shortDesc: 'Expert technocrats as your management advisors.',
    fullDesc: 'Need Experienced Technocrats as Management Board Advisors? We can help on all levels! Get C-level technology expertise without the full-time cost.',
    color: 'from-violet-500 to-purple-600',
    features: ['Board Advisory', 'IT Governance', 'Risk Management', 'Budget Planning'],
  },
  {
    icon: Bot,
    title: 'RPA Solutions',
    shortDesc: 'Smart automation with ROI-focused approach.',
    fullDesc: 'What to automate, whilst keeping ROI in mind. We bring transparency to this thought. Identify, implement, and scale robotic process automation.',
    color: 'from-amber-500 to-orange-600',
    features: ['Process Analysis', 'Bot Development', 'ROI Tracking', 'Scaling'],
  },
  {
    icon: Building2,
    title: 'Outsourcing & Backoffice',
    shortDesc: 'Decades of offshoring experience for cost savings.',
    fullDesc: 'Bank on us to utilise our decades of experience in offshoring processes for cost savings. We manage operations so you can focus on growth.',
    color: 'from-cyan-500 to-sky-600',
    features: ['Process Offshoring', 'Backoffice Ops', 'Cost Optimization', 'Quality Control'],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-brand-light">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-magenta/10 text-brand-magenta text-sm font-semibold mb-6">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-brand-dark mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed">
            Comprehensive technology solutions tailored to transform your business 
            operations and drive sustainable growth.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setSelectedService(i)}
              className={`group relative p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 hover:border-transparent cursor-pointer overflow-hidden card-lift ${
                i === 0 || i === 3 ? 'md:col-span-1' : ''
              }`}
            >
              {/* Hover gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <service.icon size={26} className="text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Corner accent */}
              <div className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4 bg-brand-dark/40 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg max-h-[88svh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${services[selectedService].color} flex items-center justify-center mb-6`}>
                {(() => {
                  const Icon = services[selectedService].icon;
                  return <Icon size={30} className="text-white" />;
                })()}
              </div>

              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                {services[selectedService].title}
              </h3>
              <p className="text-brand-gray leading-relaxed mb-6">
                {services[selectedService].fullDesc}
              </p>

              <div className="space-y-3">
                <span className="text-sm font-semibold text-brand-dark uppercase tracking-wider">Key Features</span>
                {services[selectedService].features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-magenta" />
                    <span className="text-sm text-brand-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
