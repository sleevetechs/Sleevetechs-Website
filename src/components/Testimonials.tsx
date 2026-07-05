import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ArrowRight, X } from 'lucide-react';
import defaultAvatar from '../assets/Mobin Photo.png';
import kabeerAvatar from '../assets/Kabeer Karnad.png';
import andreaAvatar from '../assets/andrea.png';
import mayAvatar from '../assets/may.png';
import aslihanAvatar from '../assets/Aslihan.png';

const testimonials = [
  {
    quote: 'SleeveTechs has been providing excellent Virtual CIO Services to Compass, to supplement in-house management of IT operations, with the best possible ROI and cost to benefit ratio.',
    name: 'Andrea Mandara',
    title: 'Finance Manager, CompassLog.com',
    image: andreaAvatar,
  },
  {
    quote: 'Sleevetechs is our go-to partner for all things tech. By delegating our IT workloads to their skilled team, we are able to focus more on our core business.',
    name: 'Mai Lakkis',
    title: 'Public Relations Manager, ark3000.com',
    image: mayAvatar,
  },
  {
    quote: 'While StoreNDeliver.com was being formed, it established its strong foundations utilizing the best of technology thanks to excellent consultancy services received from SleeveTechs.',
    name: 'Aslihan Oztopcu',
    title: 'Head of E-Commerce, StoreNDeliver',
    image: aslihanAvatar,
  },
  {
    quote: 'We would like to express our appreciation for the excellent service your company has consistently provided. From the start, the engagement has been professional, responsive, and well-managed, with high-quality solutions delivered on time and strong support throughout. We are impressed by your team’s expertise, customer focus, and commitment to delivering reliable IT services. We look forward to establishing a continued service contract and would gladly recommend your company to others seeking a trusted IT partner. Thank you for your exceptional service, and we look forward to continuing our partnership.',
    name: 'Kabeer Karnad',
    title: 'General Manager, Kohis Logistics',
    image: kabeerAvatar,
  },
  
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="testimonials" ref={ref} className="relative py-20 sm:py-24 lg:py-28 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.12),_transparent_35%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 xl:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark leading-tight">
            What clients say about <span className="gradient-text">Sleevetechs</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed">
            Trusted by businesses for delivering secure, scalable, and innovative technology solutions that drive measurable business growth.
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 py-6"
            style={{ width: 'max-content', animation: 'marquee 30s linear infinite' }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * (index % testimonials.length) }}
                className="flex-none w-[420px] flex-col justify-between rounded-3xl bg-white p-8 shadow-sm border border-brand-blue/5"
              >
                <div className="flex items-center gap-1 mb-4 text-brand-magenta">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} size={18} className="text-brand-magenta" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-brand-dark leading-relaxed mb-6 line-clamp-4 max-h-[144px] overflow-hidden">
                  “{testimonial.quote}”
                </p>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 overflow-hidden rounded-full border border-brand-blue/10 bg-brand-light">
                      <img src={testimonial.image ?? defaultAvatar} alt={testimonial.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-brand-dark">{testimonial.name}</div>
                      <div className="text-sm text-brand-gray">{testimonial.title}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveIndex(index % testimonials.length)}
                    className="inline-flex aspect-square h-12 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg shadow-brand-blue/10 transition hover:scale-105"
                    aria-label="View full testimonial"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-8"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-2xl rounded-[2rem] bg-white p-8 shadow-2xl"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-black text-brand-dark">{testimonials[activeIndex].name}</div>
                    <div className="text-sm text-brand-gray">{testimonials[activeIndex].title}</div>
                  </div>
                  <button
                    onClick={() => setActiveIndex(null)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-light text-brand-dark transition hover:bg-brand-blue/10"
                    aria-label="Close testimonial"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-base sm:text-lg text-brand-dark leading-relaxed">
                  “{testimonials[activeIndex].quote}”
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
