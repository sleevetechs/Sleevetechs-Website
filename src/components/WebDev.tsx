import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2, Palette, Rocket, Smartphone,
  Database, Cloud, Gauge, Lock, ArrowRight, Check,
  BarChart2, Search
} from 'lucide-react';

// Inner orbit - 3 items
const innerOrbit = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#68A063' },
  { name: 'TypeScript', color: '#3178C6' },
];

// Outer orbit - 5 items
const outerOrbit = [
  { name: 'Next.js', color: '#ffffff' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Python', color: '#FFD43B' },
];

// Keep for mobile grid fallback
const techStack = [
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Next.js', icon: '▲', category: 'Framework' },
  { name: 'TypeScript', icon: '◈', category: 'Language' },
  { name: 'Node.js', icon: '●', category: 'Backend' },
  { name: 'Python', icon: '🐍', category: 'Backend' },
  { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
  { name: 'AWS', icon: '☁️', category: 'Cloud' },
  { name: 'Docker', icon: '🐳', category: 'DevOps' },
];

const offerings = [
  {
    icon: Code2,
    title: 'Custom Web Applications',
    desc: 'Tailor-made web apps built with modern frameworks like React, Next.js, and Node.js.',
    features: ['Scalable Architecture', 'API Integration', 'Real-time Features'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Stunning, intuitive interfaces that delight users and drive conversions.',
    features: ['User Research', 'Prototyping', 'Design Systems'],
  },
  {
    icon: Smartphone,
    title: 'Responsive Development',
    desc: 'Pixel-perfect websites that look amazing on every device and screen size.',
    features: ['Mobile-first', 'Cross-browser', 'Performance'],
  },
  {
    icon: Database,
    title: 'Full-Stack Solutions',
    desc: 'End-to-end development from database design to frontend implementation.',
    features: ['REST/GraphQL APIs', 'Database Design', 'Authentication'],
  },
  {
    icon: Cloud,
    title: 'Cloud Deployment',
    desc: 'Secure, scalable deployment on AWS, Vercel, and other cloud platforms.',
    features: ['CI/CD Pipelines', 'Auto-scaling', 'Monitoring'],
  },
  {
    icon: Lock,
    title: 'Security-First Dev',
    desc: 'Built with our cybersecurity DNA. Every line of code is security-hardened.',
    features: ['Penetration Testing', 'Secure Coding', 'Compliance'],
  },
  {
    icon: BarChart2,
    title: 'Heatmap Implementation',
    desc: 'We integrate Microsoft Clarity to show you exactly where users click, scroll, and drop off — with session recordings and behavioural heatmaps.',
    features: ['Microsoft Clarity Setup', 'Click & Scroll Heatmaps', 'Session Recordings'],
  },
  {
    icon: Search,
    title: 'SEO Optimisation',
    desc: 'Get found. We build sites that rank — from on-page structure to technical SEO and Core Web Vitals.',
    features: ['On-page SEO', 'Technical SEO Audit', 'Core Web Vitals'],
  },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'Understanding your vision, goals, and requirements.' },
  { step: '02', title: 'Design', desc: 'Crafting beautiful, user-centric interfaces and experiences.' },
  { step: '03', title: 'Develop', desc: 'Building with clean, scalable, and secure code.' },
  { step: '04', title: 'Deploy', desc: 'Launching with confidence and continuous monitoring.' },
];

export default function WebDev() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const orbitRef = useRef<HTMLDivElement>(null);

  return (
    <section id="webdev" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-blue/10 to-brand-magenta/10 text-brand-blue text-xs sm:text-sm font-semibold mb-6">
            <Rocket size={14} />
            New Service Launch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-brand-dark mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Web <span className="gradient-text">Development</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed">
            Leveraging our deep security expertise to build web applications that are 
            not just beautiful and fast, but fortress-secure from the ground up.
          </p>
        </motion.div>

        {/* Tech Stack Orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center mb-16 sm:mb-20 lg:mb-24"
        >
          {/* ── Mobile: simple grid ── */}
          <div className="grid grid-cols-2 gap-3 sm:hidden w-full max-w-sm">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.06, type: 'spring' }}
                className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-brand-blue/5 border border-gray-100"
              >
                <span className="text-base">{tech.icon}</span>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-brand-dark truncate">{tech.name}</div>
                  <div className="text-[11px] text-brand-gray truncate">{tech.category}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Desktop: electron orbit ── */}
          <div
            ref={orbitRef}
            className="relative hidden sm:flex items-center justify-center"
            style={{
              width: 480,
              height: 480,
            }}
          >
            {/* ── Nucleus glow ── */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="rounded-full"
                style={{
                  width: 180,
                  height: 180,
                  background: 'radial-gradient(circle, rgba(26,10,138,0.12) 0%, transparent 70%)',
                }}
              />
            </div>

            {/* ── Nucleus ── */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="absolute z-20 flex items-center justify-center"
              style={{ width: 96, height: 96 }}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #1a0a8a 0%, #e91e8c 100%)',
                  boxShadow: '0 0 40px rgba(26,10,138,0.4), 0 0 80px rgba(233,30,140,0.2)',
                }}
              >
                <Code2 size={38} className="text-white" />
              </div>
            </motion.div>

            {/* ── Inner orbit ring (r=130), 3 electrons, clockwise ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute rounded-full"
              style={{
                width: 260,
                height: 260,
                border: '1.5px dashed rgba(26,10,138,0.25)',
                animation: 'orbit-cw 8s linear infinite',
              }}
            >
              {innerOrbit.map((tech, i) => {
                const angle = (i / innerOrbit.length) * 360;
                return (
                  <div
                    key={tech.name}
                    className="absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${angle}deg) translateX(130px) rotate(-${angle}deg)`,
                      marginTop: -20,
                      marginLeft: -20,
                    }}
                  >
                    {/* counter-rotate so label stays upright */}
                    <div
                      style={{ animation: 'orbit-ccw 8s linear infinite' }}
                    >
                      <div
                        className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-lg cursor-default select-none transition-all duration-300 hover:shadow-xl hover:scale-110"
                        style={{ boxShadow: `0 4px 20px ${tech.color}33` }}
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ background: tech.color }}
                        />
                        <span className="text-xs font-bold text-brand-dark whitespace-nowrap">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* ── Outer orbit ring (r=210), 5 electrons, counter-clockwise ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute rounded-full"
              style={{
                width: 420,
                height: 420,
                border: '1.5px dashed rgba(233,30,140,0.2)',
                animation: 'orbit-ccw 14s linear infinite',
              }}
            >
              {outerOrbit.map((tech, i) => {
                const angle = (i / outerOrbit.length) * 360;
                return (
                  <div
                    key={tech.name}
                    className="absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${angle}deg) translateX(210px) rotate(-${angle}deg)`,
                      marginTop: -20,
                      marginLeft: -20,
                    }}
                  >
                    {/* counter-rotate to keep label upright */}
                    <div
                      style={{ animation: 'orbit-cw 14s linear infinite' }}
                    >
                      <div
                        className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-lg cursor-default select-none transition-all duration-300 hover:shadow-xl hover:scale-110"
                        style={{ boxShadow: `0 4px 20px ${tech.color}33` }}
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ background: tech.color }}
                        />
                        <span className="text-xs font-bold text-brand-dark whitespace-nowrap">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Offerings Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20 lg:mb-24">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
              className="group relative p-5 sm:p-6 rounded-3xl bg-brand-light border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-500 card-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-magenta flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">{item.title}</h3>
              <p className="text-sm text-brand-gray mb-4 leading-relaxed">{item.desc}</p>
              <div className="space-y-2">
                {item.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-brand-gray">
                    <Check size={12} className="text-brand-magenta" />
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-brand-dark text-center mb-10 sm:mb-12">Our Development Process</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                className="relative group"
              >
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand-blue/20 transition-all duration-300 hover:shadow-lg">
                  <span className="text-4xl font-black gradient-text opacity-30 group-hover:opacity-60 transition-opacity">
                    {p.step}
                  </span>
                  <h4 className="text-lg font-bold text-brand-dark mt-2 mb-2">{p.title}</h4>
                  <p className="text-sm text-brand-gray">{p.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight size={20} className="text-brand-blue/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12 sm:mt-16"
        >
          <a
            href="#contact"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-brand-blue to-brand-magenta text-white font-semibold rounded-full shadow-xl shadow-brand-blue/20 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Gauge size={20} />
            Start Your Web Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
