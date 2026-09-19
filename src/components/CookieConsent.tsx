import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Shield, Check, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('bugsfixer_cookie_consent');
    if (!consent) {
      // Show after 1.5 seconds delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('bugsfixer_cookie_consent', 'accepted');
    localStorage.setItem('bugsfixer_cookie_date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('bugsfixer_cookie_consent', 'rejected');
    localStorage.setItem('bugsfixer_cookie_date', new Date().toISOString());
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Optional Dark Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 pointer-events-none"
          />

          {/* Cookie Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="fixed bottom-0 left-0 right-0 sm:bottom-4 sm:left-4 sm:right-4 md:left-6 md:right-6 lg:left-auto lg:right-6 lg:max-w-md z-50"
          >
            <div className="bg-white border border-slate-200 shadow-2xl sm:rounded-3xl overflow-hidden">
              {/* Header */}
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
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  We use cookies to enhance your browsing experience, analyze site traffic, and 
                  improve our IT services. Your data is 100% secure with us.
                </p>

                {/* Details (Expandable) */}
                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 mb-4 bg-slate-50 rounded-xl p-4 border border-slate-100">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-black text-slate-900">Essential Cookies</p>
                            <p className="text-xs text-slate-500 mt-0.5">Required for site functionality (Always active)</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-black text-slate-900">Analytics Cookies</p>
                            <p className="text-xs text-slate-500 mt-0.5">Help us understand site usage</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-black text-slate-900">Functional Cookies</p>
                            <p className="text-xs text-slate-500 mt-0.5">Remember your preferences</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Learn More Link */}
                <div className="flex items-center gap-3 mb-4 text-xs">
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center gap-1 font-bold text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    <Settings className="w-3.5 h-3.5" />
                    {showDetails ? 'Hide Details' : 'Cookie Details'}
                  </button>
                  <span className="text-slate-300">|</span>
                  <Link
                    to="/privacy"
                    onClick={() => setIsVisible(false)}
                    className="flex items-center gap-1 font-bold text-slate-500 hover:text-indigo-600 transition-colors"
                  >
                    <Shield className="w-3.5 h-3.5" />
                    Privacy Policy
                  </Link>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleReject}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl text-sm transition-all border border-slate-200"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={handleAccept}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;