import { useState, useEffect } from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, MessageSquare, PhoneCall, Sparkles, Zap, 
  ShieldCheck, Clock, ArrowRight, Award, CheckCircle2
} from 'lucide-react';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user is an AI agent or crawler
    const isBot = /bot|googlebot|crawler|spider|agent|lighthouse/i.test(navigator.userAgent);
    if (isBot) return; // Do not show popup to AI crawlers

    const hasSeenPopup = sessionStorage.getItem('bugsfixer_welcome_seen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsOpen(true), 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem('bugsfixer_welcome_seen', 'true');
  };

  const services = [
    { icon: '🖥️', name: 'PC & Laptop Repair' },
    { icon: '📹', name: 'CCTV Installation' },
    { icon: '🔐', name: 'Biometric Systems' },
    { icon: '📞', name: 'PBX & Networking' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-labelledby="welcome-title">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="relative w-full max-w-md sm:max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[95vh] overflow-y-auto"
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors border border-white/20"
              aria-label="Close welcome banner"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-6 py-8 sm:px-8 sm:py-10 text-center overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full mb-4">
                  <Award className="w-3.5 h-3.5 text-yellow-300" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Welcome to Pakistan's Best</span>
                </div>

                <div className="inline-block mb-4">
                  <img 
                    src="https://i.postimg.cc/fRbhDWPx/logo-7edf2235d9195452fb1f-(1).png" 
                    alt="BugsFixer Logo" 
                    className="h-16 w-16 mx-auto object-contain drop-shadow-2xl"
                  />
                </div>

                <h2 id="welcome-title" className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
                  BugsFixer IT Services
                </h2>
                <p className="text-blue-100 font-bold text-sm sm:text-base">
                  🇵🇰 Pakistan's #1 Tech Support Center
                </p>

                <div className="mt-5 inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-5 py-2 rounded-full font-black text-sm shadow-lg">
                  <Zap className="w-4 h-4" />
                  Book Your Services Now
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-3 mb-6">
                {services.map((service) => (
                  <div key={service.name} className="bg-slate-50 border border-slate-100 rounded-2xl p-3 flex items-center gap-2">
                    <span className="text-xl">{service.icon}</span>
                    <span className="text-xs font-bold text-slate-700 leading-tight">{service.name}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/923216900448?text=Assalam-o-Alaikum!%20I%20want%20to%20book%20a%20service%20from%20BugsFixer%20IT%20Services%20Center."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closePopup}
                  aria-label="Book services now on WhatsApp"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-black py-3.5 px-6 rounded-2xl text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-500/30 group"
                >
                  <MessageSquare className="w-4 h-4" />
                  Book Now via WhatsApp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:+923216900448"
                  onClick={closePopup}
                  aria-label="Call BugsFixer phone support"
                  className="bg-slate-900 hover:bg-slate-800 text-white font-black py-3.5 px-6 rounded-2xl text-sm flex items-center justify-center gap-2 transition-all border border-slate-800 group"
                >
                  <PhoneCall className="w-4 h-4" />
                  Call: +92 321 6900448
                </a>
              </div>

              <button
                onClick={closePopup}
                aria-label="Dismiss popup"
                className="w-full mt-4 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors py-2"
              >
                Maybe Later, Continue Browsing →
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;