import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Shield, Globe, Code } from 'lucide-react';
import Particles from './Particles';

function CountUp({ value, duration = 4200 }: { value: string; duration?: number }) {
  const [display, setDisplay] = useState('0');
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const match = /^([0-9]+)([+%]?)$/.exec(value);
    if (!match) {
      setDisplay(value);
      return;
    }

    const target = Number(match[1]);
    const suffix = match[2] || '';
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);
      const currentValue = Math.floor(progress * target);
      setDisplay(`${currentValue}${suffix}`);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(`${target}${suffix}`);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [value, duration]);

  return <>{display}</>;
}

export default function Hero() {
  const titleWords = ['Digital', 'Transformation'];
  const subtitleWords = ['on', 'Demand'];

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden animated-gradient py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={['#ffffff', '#e91e8c', '#1a0a8a']}
          particleCount={220}
          particleSpread={12}
          speed={0.12}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          particleHoverFactor={1.2}
          sizeRandomness={1}
          cameraDistance={20}
          pixelRatio={1}
        />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-magenta/10 blur-2xl float-anim" />
      <div className="absolute bottom-32 right-4 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-brand-magenta/10 to-brand-blue/10 blur-2xl float-anim-delay" />
      <div className="hidden sm:block absolute top-1/3 right-1/4 w-24 h-24 rounded-2xl bg-brand-blue/5 rotate-12 float-anim-delay-2" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex max-w-[92vw] items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-brand-blue/10 shadow-lg shadow-brand-blue/5 mb-8 sm:mb-10"
        >
          <Code size={16} className="text-brand-magenta" />
          <span className="text-xs sm:text-sm font-medium text-brand-dark">Security Experts Expanding to Web Development</span>
        </motion.div>

        {/* Main Title */}
        <div className="mb-6">
          <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-4 gap-y-1 sm:gap-y-2">
            {titleWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 80, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
                className="text-[clamp(2.7rem,12vw,6rem)] lg:text-8xl font-black tracking-tight leading-[0.92] text-brand-dark"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-4 gap-y-1 sm:gap-y-2 mt-2">
            {subtitleWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 80, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
                className="text-[clamp(2.7rem,12vw,6rem)] lg:text-8xl font-black tracking-tight leading-[0.92] gradient-text"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base sm:text-lg md:text-xl text-brand-gray max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-1"
        >
          We help businesses streamline operations, enhance security, and accelerate growth 
          with innovative technology solutions and cutting-edge web development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16"
        >
          <a
            href="#services"
            className="group w-full sm:w-auto justify-center px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-brand-blue to-brand-magenta text-white font-semibold rounded-full shadow-xl shadow-brand-blue/20 hover:shadow-2xl hover:shadow-brand-magenta/30 transition-all duration-500 hover:scale-105 flex items-center gap-3"
          >
            <Shield size={20} />
            Explore Services
          </a>
          <a
            href="#webdev"
            className="group w-full sm:w-auto justify-center px-7 sm:px-8 py-3.5 sm:py-4 bg-white text-brand-dark font-semibold rounded-full border-2 border-brand-blue/20 hover:border-brand-magenta/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 flex items-center gap-3"
          >
            <Globe size={20} />
            Web Development
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '200+', label: 'Projects Delivered' },
            { value: '50+', label: 'Security Audits' },
            { value: '99%', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + i * 0.1, type: 'spring' }}
              className="text-center p-3 sm:p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-brand-blue/5"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-black gradient-text">
                <CountUp value={stat.value} />
              </div>
              <div className="text-[11px] sm:text-xs md:text-sm text-brand-gray mt-1 leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-brand-gray"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
