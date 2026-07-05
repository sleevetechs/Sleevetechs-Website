import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sleevetechs-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('sleevetechs-cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('sleevetechs-cookie-consent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[70]"
        >
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 shadow-2xl shadow-brand-blue/10">
            <button
              onClick={decline}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X size={14} />
            </button>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-magenta flex items-center justify-center shrink-0">
                <Cookie size={20} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-brand-dark mb-1">Cookie Notice</h4>
                <p className="text-xs text-brand-gray leading-relaxed mb-4">
                  We use cookies to enhance your browsing experience and analyze site traffic. 
                  By clicking "Accept", you consent to our use of cookies.{' '}
                  <a href="/privacy-policy" className="underline hover:text-brand-blue">Learn more</a>
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={accept}
                    className="flex-1 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-magenta rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Accept
                  </button>
                  <button
                    onClick={decline}
                    className="flex-1 px-4 py-2 text-xs font-semibold text-brand-dark bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}