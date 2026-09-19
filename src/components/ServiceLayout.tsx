import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, ArrowRight, MessageSquare, ShieldCheck, 
  Zap, Clock, Sparkles, Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Enterprise Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.35, duration: 0.8 } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.35, duration: 0.8 } }
};

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  priceRangeLabel?: string;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({ 
  title, 
  subtitle, 
  description, 
  features, 
  image, 
  icon, 
  children, 
  priceRangeLabel 
}) => {
  // Pre-filled WhatsApp Consultation Link with Context
  const whatsappMessage = encodeURIComponent(
    `Assalam-o-Alaikum BugsFixer!\n\nI am interested in your *${title}* service.\n\nPlease share details and available quotation timelines.`
  );
  const whatsappUrl = `https://wa.me/923216900448?text=${whatsappMessage}`;

  return (
    <div className="pt-28 pb-20 bg-slate-50/70 min-h-screen relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Main Hero Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
          className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Content Side */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-between">
              <div>
                {/* Subtitle Badge Row */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
                    <div className="text-blue-600">
                      {icon}
                    </div>
                    <span className="text-xs font-black text-blue-700 uppercase tracking-widest">{subtitle}</span>
                  </div>

                  {priceRangeLabel && (
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-black border border-emerald-100/80 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      {priceRangeLabel}
                    </div>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-[1.1]">
                  {title}
                </h1>
                
                {/* Description */}
                <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                  {description}
                </p>

                {/* Staggered Features List */}
                <motion.div 
                  initial="hidden" 
                  animate="show" 
                  variants={staggerContainer}
                  className="space-y-4 mb-12"
                >
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeLeft}
                      className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                    >
                      <div className="p-1 bg-emerald-100 text-emerald-600 rounded-full shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-slate-800 font-bold text-base leading-snug">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                <motion.a 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4.5 rounded-full font-black text-base transition-all shadow-xl shadow-blue-600/30 flex items-center gap-2.5 group"
                >
                  <MessageSquare className="w-5 h-5 text-blue-200 group-hover:scale-110 transition-transform" />
                  <span>Get Expert Consultation</span>
                </motion.a>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link 
                    to="/build-bundle" 
                    className="border-2 border-slate-200 hover:border-slate-900 text-slate-700 hover:text-slate-900 px-8 py-4.5 rounded-full font-black text-base transition-all flex items-center gap-2 bg-white shadow-sm"
                  >
                    <span>Build Your Bundle</span>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Right Image Side with Floating Elements */}
            <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full overflow-hidden bg-slate-900">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                src={image} 
                alt={title} 
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              
              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Floating Notification 1 (Top Right) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/40 hidden sm:flex"
              >
                <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Quality Standard</p>
                  <p className="text-xs font-black text-slate-900">100% Tested & Verified</p>
                </div>
              </motion.div>

              {/* Floating Notification 2 (Bottom Left) */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-24 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/40 hidden sm:flex"
              >
                <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-xl">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Fast Execution</p>
                  <p className="text-xs font-black text-slate-900">Prompt On-Site Setup</p>
                </div>
              </motion.div>

              {/* Bottom Caption Box */}
              <div className="absolute bottom-0 inset-x-0 p-8 lg:p-12 text-white z-10 bg-gradient-to-t from-slate-950 to-transparent">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-300 mb-2">
                  <Sparkles className="w-3 h-3 text-amber-400" /> Professional Excellence
                </div>
                <p className="text-2xl font-black text-white tracking-tight">Trusted Nationwide Across Pakistan</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Dynamic Service Specific Children Content */}
        {children && (
          <div className="mb-20">
            {children}
          </div>
        )}

        {/* Bottom Section - Workflow & Ideology Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 text-white rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl border border-slate-800"
        >
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 filter blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 filter blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Settings className="w-8 h-8 text-blue-400" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
              Our Working Ideology
            </h2>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-10 font-medium max-w-2xl mx-auto">
              BugsFixer is dedicated to providing top-quality solutions by utilizing information technology 
              as a strategic business tool. We handle your business with great care to take it to a height of excellence.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-black uppercase tracking-widest text-slate-300">Expert Field Engineers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-black uppercase tracking-widest text-slate-300">Genuine Dealer Parts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-black uppercase tracking-widest text-slate-300">InfraPlus & AMC Support</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ServiceLayout;