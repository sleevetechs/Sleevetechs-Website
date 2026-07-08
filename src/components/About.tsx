import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Target, Zap, Users } from 'lucide-react';
import sampleImage from '../assets/Mobin Photo.png';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    { icon: Heart, title: 'Passion', desc: 'Technology is our passion. We carry Tech on our Sleeves.' },
    { icon: Target, title: 'Precision', desc: 'Every solution is crafted with meticulous attention to detail.' },
    { icon: Zap, title: 'Innovation', desc: 'We push boundaries to deliver cutting-edge solutions.' },
    { icon: Users, title: 'Partnership', desc: 'Your success is our success. We grow together.' },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/5 text-brand-blue text-sm font-semibold mb-6">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-brand-dark mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            We Carry <span className="gradient-text">Tech</span> on Our Sleeves
          </h2>
          <p className="text-base sm:text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed">
            At Sleevetechs, technology isn't just what we do, it's who we are. We carry tech on our sleeves, bringing a security-first mindset to everything we build. From modern websites to custom digital solutions, we help businesses create experiences that are secure, scalable, and impactful.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-20 lg:mb-24">
          {/* Left - Large Statement */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-brand-blue/10 to-brand-magenta/10 rounded-full blur-2xl" />
            <div className="relative">
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-brand-dark leading-relaxed mb-6 sm:mb-8">
                From <span className="font-bold text-brand-blue">securing digital assets</span> to 
                <span className="font-bold text-brand-magenta"> crafting exceptional web experiences</span>, 
                we have evolved to meet the ever-changing demands of the digital landscape.
                Our services now include <span className="font-semibold text-brand-blue">Outsourcing &amp; Backoffice</span>, <span className="font-semibold text-brand-blue">vCIO Services</span>, and <span className="font-semibold text-brand-blue">Technology Consulting</span>.
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 sm:w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-magenta rounded-full shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-brand-gray uppercase tracking-widest">Our Evolution</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -2 : 2 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="group p-5 sm:p-6 rounded-3xl bg-brand-light border border-brand-blue/5 hover:border-brand-magenta/20 transition-all duration-500 hover:shadow-xl hover:shadow-brand-blue/5 card-lift"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-magenta flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">{value.title}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CEO Profile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-[0_30px_90px_-60px_rgba(26,10,138,0.2)] border border-brand-blue/10 mb-16"
        >
          <div className="grid gap-8 xl:grid-cols-[440px_minmax(0,1fr)] items-start">
            <div className="overflow-hidden rounded-[2.5rem] border border-brand-blue/10 shadow-xl shadow-brand-blue/5 bg-brand-light">
              <img
                src={sampleImage}
                alt="Mobin Muhammed"
                className="h-[520px] w-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/10 bg-brand-blue/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-blue">
                  Leadership
                </span>
                <h3 className="mt-5 text-3xl sm:text-4xl font-black text-brand-dark">Mobin Muhammed</h3>
                <p className="text-base sm:text-lg font-semibold text-brand-magenta mt-2">Chief Executive Officer</p>
              </div>

              <div className="rounded-[2rem] border border-brand-blue/10 bg-brand-blue/5 p-6 text-brand-dark shadow-sm">
                <p className="text-sm sm:text-base leading-relaxed">
                  Over 25 years leading IT, Enterprise Cybersecurity, and digital transformation across the Middle East, Europe, Asia and North America. He holds senior cybersecurity leadership roles, oversees global IT and cybersecurity operations, and advises on overall technology transformation strategies across multiple domains.
                </p>
                <p className="mt-4 text-sm sm:text-base leading-relaxed">
                  His experience spans CIO/CISO advisory, cybersecurity strategy and risk management, OT/ICS/SCADA security, SOC advisory, AI-driven security operations, cloud security and zero trust architecture, digital transformation and IT modernization, and business continuity.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Enterprise Cybersecurity',
                  'Cloud Security & Zero Trust',
                  'OT/ICS/SCADA Security',
                  'AI-Driven Security Ops',
                ].map((item) => (
                  <div key={item} className="rounded-[1.75rem] border border-brand-blue/10 bg-white px-4 py-3 text-sm font-semibold text-brand-dark">
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {['CISSP (ISC2)', 'ITIL Certified', 'Six Sigma Certified', 'ISO 9001 Lead Auditor'].map((cert) => (
                  <span key={cert} className="rounded-full border border-brand-blue/10 bg-brand-light px-4 py-2 text-sm font-semibold text-brand-dark">
                    {cert}
                  </span>
                ))}
              </div>

              <div className="flex justify-start">
                <a
                  href="https://www.linkedin.com/in/mobinmuhammed/"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-magenta px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-brand-blue/20 hover:scale-[1.02] transition-transform duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>View on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Journey Timeline */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative"
        >
          <h3 className="text-2xl font-bold text-brand-dark text-center mb-10 sm:mb-12">Our Journey</h3>
          <div className="relative">
            {/* Line */}
            {/* <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue/20 via-brand-magenta/20 to-brand-blue/20 hidden md:block" />
            
            <div className="grid md:grid-cols-3 gap-10 md:gap-8">
              {[
                { year: '2015', title: 'Founded', desc: 'Started as a cybersecurity consultancy firm' },
                { year: '2019', title: 'Expanded', desc: 'Added ERP, RPA, and vCIO services' },
                { year: '2025', title: 'Web Dev Era', desc: 'Launching cutting-edge web development services' },
              ].map((item, i) => (
                <motion.div */}
                  {/* key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + i * 0.15 }}
                  className="relative text-center"
                > */}
                  {/* <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-brand-blue to-brand-magenta flex items-center justify-center text-white font-bold text-lg mb-4 shadow-lg shadow-brand-blue/20 z-10 relative">
                    {item.year}
                  </div>
                  <h4 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h4>
                  <p className="text-sm text-brand-gray">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
