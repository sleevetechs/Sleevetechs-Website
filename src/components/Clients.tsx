import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import compassLogo from '../assets/compass.png';
import whatsappImage from '../assets/whatsapp.jpeg';
import screenshot1 from '../assets/screenshot-1.png';
import screenshot2 from '../assets/screenshot-2.png';
import screenshot3 from '../assets/screenshot-3.png';
import screenshot4 from '../assets/screenshot-4.png';
import screenshot5 from '../assets/screenshot-5.png';
import clearTaxLogo from '../assets/cleartax.jpg';
import kuhaisLogo from '../assets/Kuhais-logo.png';
import libasLogo from '../assets/libas logo.jpeg';
import asifLogo from "../assets/Asif's Melting Pot.png";
import clipart1 from '../assets/clipart-1.png';
import clipart2 from '../assets/clipart-2.png';

const customers = [
  {
    name: 'CompassLog',
    image: compassLogo,
  },
  {
    name: "Asif's Melting Pot",
    image: asifLogo,
  },
  {
    name: 'WhatsApp',
    image: whatsappImage,
  },
  {
    name: 'Kuhais',
    image: kuhaisLogo,
  },
  {
    name: 'Libas',
    image: libasLogo,
  },
  {
    name: 'Ark3000',
    image: screenshot1,
  },
  {
    name: 'StoreNDeliver',
    image: screenshot2,
  },
];

const solutionVendors = [
  {
    name: 'ClearTax',
    image: screenshot3,
  },
  {
    name: 'ClearTax',
    image: clearTaxLogo,
  },
  {
    name: 'TechPartner',
    image: clipart1,
  },
  {
    name: 'CloudSoft',
    image: clipart2,
  },
  {
    name: 'DataBridge',
    image: screenshot4,
  },
  {
    name: 'SecureNet',
    image: screenshot5,
  },
];

type LogoItem = {
  name: string;
  image: string;
};

function LogoMarquee({
  title,
  logos,
  reverse = false,
}: {
  title: string;
  logos: LogoItem[];
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden">
      <p className="text-center text-xs sm:text-sm font-semibold text-brand-gray uppercase tracking-widest mb-6 sm:mb-8">
        {title}
      </p>
      <div className="relative">
        <div
          className="flex gap-4 sm:gap-8"
          style={{
            width: 'max-content',
            animation: `marquee 30s linear infinite${reverse ? ' reverse' : ''}`,
          }}
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex h-20 w-40 sm:h-24 sm:w-52 items-center justify-center rounded-3xl border border-gray-100 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:border-brand-blue/20 hover:shadow-lg"
            >
              <img
                src={logo.image}
                alt={logo.name}
                loading="lazy"
                className="max-h-12 sm:max-h-14 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="clients" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-brand-light">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-6">
            Trusted By
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-brand-dark mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Our <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed">
            We collaborate with leading technology providers, cybersecurity vendors, and trusted organizations to deliver secure, innovative, and future-ready digital solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-14 sm:space-y-20"
        >
          <LogoMarquee title="Customers Whom We Have Worked With" logos={customers} />
          <LogoMarquee title="Solution Vendors Whom We Have Worked With" logos={solutionVendors} reverse />
        </motion.div>
      </div>
    </section>
  );
}