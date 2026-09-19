import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, MessageSquare, PhoneCall, Sparkles, Zap, 
  ShieldCheck, Clock, ArrowRight, Award, CheckCircle2
} from 'lucide-react';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
  const hasSeenPopup = sessionStorage.getItem('bugsfixer_welcome_seen');
  if (!hasSeenPopup) {
    // Show after 8 seconds delay (lets PageSpeed measurement complete smoothly)
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
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
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
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors border border-white/20"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header with Gradient */}
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-6 py-8 sm:px-8 sm:py-10 text-center overflow-hidden">
              {/* Decorative Blobs */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl" />
              
              {/* Sparkle Icons */}
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 left-6 text-yellow-300"
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, -6, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-10 right-10 text-yellow-300"
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>

              <div className="relative z-10">
                {/* Welcome Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full mb-4"
                >
                  <Award className="w-3.5 h-3.5 text-yellow-300" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Welcome to Pakistan's Best</span>
                </motion.div>

                {/* Logo */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                  className="inline-block mb-4"
                >
                  <img 
                    src="https://i.postimg.cc/fRbhDWPx/logo-7edf2235d9195452fb1f-(1).png" 
                    alt="BugsFixer Logo" 
                    className="h-16 w-16 mx-auto object-contain drop-shadow-2xl"
                  />
                </motion.div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
                  BugsFixer IT Services
                </h2>
                <p className="text-blue-100 font-bold text-sm sm:text-base">
                  🇵🇰 Pakistan's #1 Tech Support Center
                </p>

                {/* CTA Line */}
                <div className="mt-5 inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-5 py-2 rounded-full font-black text-sm shadow-lg">
                  <Zap className="w-4 h-4" />
                  Book Your Services Now
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8">
              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.08 }}
                    className="bg-slate-50 border border-slate-100 rounded-2xl p-3 flex items-center gap-2 hover:border-blue-300 hover:bg-blue-50/50 transition-all"
                  >
                    <span className="text-xl">{service.icon}</span>
                    <span className="text-xs font-bold text-slate-700 leading-tight">{service.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Trust Points */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6 text-xs">
                <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full font-bold border border-emerald-200">
                  <ShieldCheck className="w-3 h-3" />
                  15 Days Warranty
                </span>
                <span className="flex items-center gap-1 text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full font-bold border border-blue-200">
                  <Clock className="w-3 h-3" />
                  24/7 Support
                </span>
                <span className="flex items-center gap-1 text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full font-bold border border-amber-200">
                  <CheckCircle2 className="w-3 h-3" />
                  Free Diagnosis
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/923216900448?text=Assalam-o-Alaikum!%20I%20want%20to%20book%20a%20service%20from%20BugsFixer%20IT%20Services%20Center."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closePopup}
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-black py-3.5 px-6 rounded-2xl text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-500/30 group"
                >
                  <MessageSquare className="w-4 h-4" />
                  Book Now via WhatsApp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:+923216900448"
                  onClick={closePopup}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-black py-3.5 px-6 rounded-2xl text-sm flex items-center justify-center gap-2 transition-all border border-slate-800 group"
                >
                  <PhoneCall className="w-4 h-4" />
                  Call: +92 321 6900448
                </a>
              </div>

              {/* Skip Link */}
              <button
                onClick={closePopup}
                className="w-full mt-4 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors py-2"
              >
                Maybe Later, Continue Browsing →
              </button>
            </div>

            {/* Footer Strip */}
            <div className="bg-slate-50 border-t border-slate-100 px-6 py-3 text-center">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                ⭐ Trusted by 1000+ Clients Across Pakistan
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;