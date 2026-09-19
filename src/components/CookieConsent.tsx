import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Shield, Check, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user is an AI agent or crawler
    const isBot = /bot|googlebot|crawler|spider|agent|lighthouse/i.test(navigator.userAgent);
    if (isBot) return; // Do not block AI crawlers

    const consent = localStorage.getItem('bugsfixer_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 6000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('bugsfixer_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('bugsfixer_cookie_consent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 sm:bottom-4 sm:left-4 sm:right-4 md:left-6 md:right-6 lg:left-auto lg:right-6 lg:max-w-md z-50"
          role="region"
          aria-label="Cookie Privacy Preferences"
        >
          <div className="bg-white border border-slate-200 shadow-2xl sm:rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-xl">
                  <Cookie className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-black text-base">Cookie Preferences</h3>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Your privacy, your choice</p>
                </div>
              </div>
              <button
                onClick={handleReject}
                className="text-slate-400 hover:text-white transition-colors p-1"
                aria-label="Close cookie preferences"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5">
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                We use cookies to enhance your browsing experience, analyze site traffic, and 
                improve our IT services.
              </p>

              <div className="flex items-center gap-3 mb-4 text-xs">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  aria-label="Toggle cookie details"
                  className="flex items-center gap-1 font-bold text-slate-500 hover:text-blue-600 transition-colors"
                >
                  <Settings className="w-3.5 h-3.5" />
                  {showDetails ? 'Hide Details' : 'Cookie Details'}
                </button>
                <span className="text-slate-300">|</span>
                <Link
                  to="/privacy"
                  onClick={() => setIsVisible(false)}
                  aria-label="Read our Privacy Policy"
                  className="flex items-center gap-1 font-bold text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  <Shield className="w-3.5 h-3.5" />
                  Privacy Policy
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={handleReject}
                  aria-label="Reject non-essential cookies"
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl text-sm transition-all border border-slate-200"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAccept}
                  aria-label="Accept all cookies"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;