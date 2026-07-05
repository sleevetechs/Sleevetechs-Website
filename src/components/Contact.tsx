import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowUpRight, CheckCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'info@sleevetechs.com' },
    { icon: Phone, label: 'Phone', value: '+91 80-46472444' },
    { icon: MapPin, label: 'Location', value: 'Bangalore, India' },
  ];

  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-magenta/10 text-brand-magenta text-sm font-semibold mb-6">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-brand-dark mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Whether it's security, ERP, or a brand new web application, 
            we're here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6 sm:space-y-8"
          >
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-brand-light border border-gray-100 hover:border-brand-blue/20 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-magenta flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-brand-gray uppercase tracking-wider">{item.label}</div>
                    <div className="text-sm font-semibold text-brand-dark break-all sm:break-normal">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Large CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-brand-blue to-brand-magenta text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Have a Project?</h3>
                <p className="text-white/80 text-sm mb-6">
                  Let's discuss how we can help transform your business with our technology solutions.
                </p>
                <a 
                  href="https://calendly.com/sleevetechs" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 text-sm font-semibold bg-white text-brand-blue px-5 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Schedule a Call
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="p-5 sm:p-8 md:p-10 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-brand-blue/5">
              <form action="https://formsubmit.co/rifaz.ali@sleevetechs.com" method="POST" className="space-y-5 sm:space-y-6">
                <input type="hidden" name="_subject" value="New contact request from Sleevetechs website" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 sm:px-5 py-3.5 rounded-xl bg-brand-light border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-brand-dark placeholder:text-brand-gray/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 sm:px-5 py-3.5 rounded-xl bg-brand-light border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-brand-dark placeholder:text-brand-gray/50"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 sm:px-5 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-brand-dark appearance-none"
                    style={{ colorScheme: 'light' }}
                  >
                    <option className="bg-white text-brand-dark" value="">Select a service</option>
                    <option className="bg-white text-brand-dark" value="webdev">Web Development</option>
                    <option className="bg-white text-brand-dark" value="security">Cyber Security</option>
                    <option className="bg-white text-brand-dark" value="consulting">Technology Consulting</option>
                    <option className="bg-white text-brand-dark" value="erp">ERP Solutions</option>
                    <option className="bg-white text-brand-dark" value="vcio">vCIO Services</option>
                    <option className="bg-white text-brand-dark" value="rpa">RPA Solutions</option>
                    <option className="bg-white text-brand-dark" value="outsourcing">Outsourcing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">Your Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 sm:px-5 py-3.5 rounded-xl bg-brand-light border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-brand-dark placeholder:text-brand-gray/50 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-brand-blue to-brand-magenta text-white font-semibold rounded-xl shadow-lg shadow-brand-blue/20 hover:shadow-xl hover:shadow-brand-magenta/20 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
