import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, Settings, Cpu, Smartphone, Monitor, Zap, 
  MessageSquare, ArrowRight, TrendingUp, Heart, 
  Globe, Server, Layers, Sparkles, X, Send, Calendar, Phone, 
  Building, User, ExternalLink, Plus, Star, Quote, CheckCircle2
} from 'lucide-react';

// --- Enterprise Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
};

const Home = () => {
  const navigate = useNavigate();

  // Demo Form Modal States
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('Plus Plan');
  const [demoName, setDemoName] = useState('');
  const [demoBusiness, setDemoBusiness] = useState('');
  const [demoPhone, setDemoPhone] = useState('');
  const [demoTime, setDemoTime] = useState('Morning (10 AM - 1 PM)');

  const openDemoModal = (planName: string) => {
    setSelectedPlan(planName);
    setIsDemoModalOpen(true);
  };

  const closeDemoModal = () => setIsDemoModalOpen(false);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Assalam-o-Alaikum BugsFixer Software Team!\n\nI would like to request a *FREE DEMO* for *Max Sale ERP*.\n\n*Selected Plan:* ${selectedPlan}\n*Name:* ${demoName}\n*Business Name:* ${demoBusiness || 'N/A'}\n*Phone / WhatsApp:* ${demoPhone}\n*Preferred Demo Time:* ${demoTime}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/923216900448?text=${encodedText}`, '_blank');
    closeDemoModal();
  };

  const services = [
    { title: 'CCTV Services', description: 'Expert surveillance & security camera systems setup with advanced monitoring capabilities.', icon: <ShieldCheck className="w-8 h-8" />, color: 'blue', path: '/cctv' },
    { title: 'Used Laptops', description: 'Buy or sell quality used laptops & PCs at the best prices in Pakistan with full inspection.', icon: <Smartphone className="w-8 h-8" />, color: 'indigo', path: '/laptopservices' },
    { title: 'Consumer Electronics', description: 'Professional repair for all your household electronics, printers, and computer hardware.', icon: <Cpu className="w-8 h-8" />, color: 'emerald', path: '/electronics' },
    { title: 'Security & Surveillance', description: 'Fire security alarm systems, burglar alarms, and integrated security solutions for business.', icon: <Zap className="w-8 h-8" />, color: 'red', path: '/security' },
    { title: 'Networking & PBX', description: 'Complete telephone exchange setup, hardware networking, and communication solutions.', icon: <Globe className="w-8 h-8" />, color: 'amber', path: '/telephone-networking' },
    { title: 'Office Computing', description: 'Total IT solutions for your office including desktops, LCDs, printers, and scanners.', icon: <Monitor className="w-8 h-8" />, color: 'purple', path: '/laptopservices' }
  ];

  const erpPlans = [
    { name: 'Essential Plan', tagline: 'Ideal for Single Store / Counter Setup', badge: 'One-Time Payment', badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', description: 'Standalone setup designed for quick offline-first billing, stock management, and essential business operations.', features: ['Standalone PC Installation', 'Sales & POS Billing', 'Stock & Inventory Control', 'Local Data Backup & Reports', 'Lifetime Perpetual License'], isPopular: false, bundleQuery: 'essential' },
    { name: 'Plus Plan', tagline: 'Multi-PC Office & Real-Time Sync', badge: 'Most Popular • One-Time', badgeColor: 'bg-blue-500 text-white font-black border-blue-400', description: 'Includes custom Python Server connecting 1 Master PC with up to 10 Terminal PCs via local network and email sharing.', features: ['Everything in Essential Plan', 'Python Server Integration', '1 Master PC + 1 to 10 Terminal PCs', 'LAN & Real-Time Data Sharing', 'Automated Email Sales Reports'], isPopular: true, bundleQuery: 'plus' },
    { name: 'Professional Plan', tagline: 'Multi-Branch Control & Field App', badge: 'Annual Subscription', badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30', description: 'Full enterprise plan with Mobile Field App and Web Dashboard access to track multi-branch sales anytime, anywhere.', features: ['Everything in Plus Plan', 'Mobile Field App (Android / iOS)', 'Live Web Dashboard Access', 'Multi-Branch Consolidated Data', 'Annual Maintenance & Updates'], isPopular: false, bundleQuery: 'professional' }
  ];

  const stats = [
    { label: 'Happy Clients', value: '500+', icon: <Heart className="w-5 h-5 text-rose-500" /> },
    { label: 'Projects Done', value: '1,200+', icon: <Settings className="w-5 h-5 text-blue-500" /> },
    { label: 'Years Active', value: '15+', icon: <TrendingUp className="w-5 h-5 text-emerald-500" /> },
  ];

  const testimonials = [
    {
      name: 'Syed Jawad Shah',
      role: 'Finance Manager',
      company: 'Pakistan Oxygen',
      rating: 5,
      review: 'BugsFixer has provided us excellent IT services across almost all areas — CCTV, networking, hardware support, and system maintenance. Their response time and technical quality are outstanding. Highly recommended for corporate environments.',
      initials: 'SJ'
    },
    {
      name: 'Engr. Kamran Ali',
      role: 'IT Manager',
      company: 'Wafid Visa Medical Centers',
      rating: 5,
      review: 'We trust BugsFixer for multi-center deployments across Peshawar, Islamabad, and Chakdara. From biometric access to structured networking, their team delivers reliable enterprise-grade solutions with full accountability.',
      initials: 'KA'
    },
    {
      name: 'Ayesha Rahman',
      role: 'Operations Head',
      company: 'Mr. Cod Restaurant',
      rating: 5,
      review: 'Max Sale ERP transformed our multi-branch billing and inventory control. Real-time sync between counters and head office is smooth. BugsFixer support team is always available when we need them.',
      initials: 'AR'
    },
    {
      name: 'Muhammad Farooq',
      role: 'Branch Manager',
      company: 'State Life',
      rating: 5,
      review: 'Professional CCTV and access control installation with clean cabling and proper documentation. BugsFixer handled our office infrastructure with great care and completed everything on schedule.',
      initials: 'MF'
    },
    {
      name: 'Dr. Naveed Khan',
      role: 'Admin Officer',
      company: 'Supreme Court Support Wing',
      rating: 5,
      review: 'Secure networking, biometric attendance, and hardware support from BugsFixer have been consistent and dependable. Their engineers understand institutional requirements and work with full professionalism.',
      initials: 'NK'
    }
  ];

  return (
    <>
      {/* Dynamic SEO Meta Tags via React Helmet Async */}
      <Helmet>
        <title>BugsFixer Pakistan | Complete IT & Max Sale ERP Solutions</title>
        <meta name="description" content="Pakistan's Best IT Service Center providing CCTV installation, professional networking, business laptops, biometric systems, and Max Sale ERP software solutions nationwide." />
        <meta name="keywords" content="IT Services Pakistan, CCTV installation Peshawar, Used Laptops Peshawar, Network Setup KPK, Max Sale ERP, POS Software Pakistan, Hardware Repair" />
        <link rel="canonical" href="https://bugsfixerweb.pp.ua/" />

        {/* Open Graph Tags (Facebook & WhatsApp Previews) */}
        <meta property="og:title" content="BugsFixer Pakistan | Complete IT & Max Sale ERP Solutions" />
        <meta property="og:description" content="Expert CCTV, Networking, Laptops, and Custom Python ERP Software. Build your custom IT bundle today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bugsfixerweb.pp.ua/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BugsFixer Pakistan | Complete IT & Max Sale ERP Solutions" />
        <meta name="twitter:description" content="Professional IT infrastructure and Max Sale ERP software for businesses across Pakistan." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" />
      </Helmet>

      <div className="overflow-x-hidden bg-white">
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <motion.div 
              animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[100px]"
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-indigo-100/50 rounded-full mix-blend-multiply filter blur-[100px]"
            />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              {/* Hero Left Content */}
              <motion.div 
                className="lg:w-1/2"
                initial="hidden" animate="show" variants={staggerContainer}
              >
                <motion.div variants={fadeLeft} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-100 rounded-full mb-8 shadow-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                  </span>
                  <span className="text-xs font-black text-blue-700 uppercase tracking-widest">Complete IT & Software Solutions</span>
                </motion.div>
                
                <motion.h1 variants={fadeLeft} className="text-5xl lg:text-[5.5rem] font-black text-slate-900 leading-[1.05] mb-8 tracking-tighter">
                  BugsFixer <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x block pb-2">
                    IT Excellence.
                  </span>
                </motion.h1>
                
                <motion.p variants={fadeLeft} className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
                  As Pakistan's Best IT Service Center, we deploy enterprise CCTV, 
                  Max Sale ERP software, biometric security, and high-performance networking nationwide.
                </motion.p>

                <motion.div variants={fadeLeft} className="flex flex-wrap gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      to="/build-bundle"
                      className="group relative bg-blue-600 text-white px-8 py-5 rounded-full font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 flex items-center gap-3 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                      <Settings className="w-6 h-6 animate-spin-slow relative z-10" />
                      <span className="relative z-10">Build Your Bundle</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a 
                      href="https://wa.me/923216900448"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white border-2 border-slate-200 text-slate-900 px-8 py-5 rounded-full font-black text-lg hover:border-slate-900 transition-all shadow-md flex items-center gap-3"
                    >
                      <MessageSquare className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
                      Chat Now
                    </a>
                  </motion.div>
                </motion.div>

                <motion.div variants={staggerContainer} className="mt-16 flex items-center gap-8 pt-8 border-t border-slate-100">
                  {stats.map((stat, i) => (
                    <motion.div key={i} variants={fadeUp} className="group">
                      <div className="text-3xl font-black text-slate-900 flex items-center gap-2 mb-1">
                        {stat.value}
                        <motion.div whileHover={{ rotate: 15 }} className="p-1.5 bg-slate-50 rounded-lg">
                          {stat.icon}
                        </motion.div>
                      </div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Hero Right Image */}
              <motion.div 
                className="lg:w-1/2 relative"
                initial={{ opacity: 0, scale: 0.8, rotate: 2 }} 
                animate={{ opacity: 1, scale: 1, rotate: 0 }} 
                transition={{ type: "spring", bounce: 0.4, duration: 1.2 }}
              >
                <div className="relative z-10 bg-white p-4 rounded-[3rem] shadow-2xl shadow-blue-900/10 border border-white/50 backdrop-blur-sm group">
                  <div className="overflow-hidden rounded-[2.5rem]">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                     src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=650&q=70&fm=webp"
                      alt="BugsFixer IT Professional Setup" 
                      className="w-full h-[550px] object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-8 top-1/4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shadow-inner">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Security</p>
                      <p className="text-sm font-black text-slate-900">24/7 Monitoring</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -left-10 bottom-1/4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-inner">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fast Support</p>
                      <p className="text-sm font-black text-slate-900">Under 30 Mins</p>
                    </div>
                  </motion.div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-[2px] border-dashed border-blue-200 rounded-full -z-10 animate-spin-slow opacity-60" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- SERVICES GRID SECTION --- */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-3xl mb-20"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 rounded-full mb-4">
                <span className="text-xs font-black text-blue-600 uppercase tracking-widest">Our Expertise</span>
              </motion.div>
              <motion.h3 variants={fadeUp} className="text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Enterprise IT Solutions <br/> For Every Scale.
              </motion.h3>
              <motion.p variants={fadeUp} className="text-xl text-slate-600 leading-relaxed">
                From robust hardware repairs to nationwide networking structures, BugsFixer empowers your operations with zero downtime.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div key={index} variants={fadeUp}>
                  <Link
                    to={service.path}
                    className="group block bg-white p-10 rounded-[2.5rem] shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 border border-slate-100 hover:border-blue-100 h-full relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-slate-50 text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner group-hover:scale-110 transform">
                        {service.icon}
                      </div>
                      <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-700 transition-colors">{service.title}</h4>
                      <p className="text-slate-600 leading-relaxed font-medium mb-8">
                        {service.description}
                      </p>
                      <div className="mt-auto flex items-center gap-2 font-black text-blue-600 uppercase tracking-widest text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        Explore Service <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- MAX SALE ERP SOFTWARE SECTION --- */}
        <section className="py-32 bg-[#0B1120] text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[1000px] h-[500px] bg-blue-600/20 rounded-full filter blur-[150px] -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[800px] h-[600px] bg-purple-600/20 rounded-full filter blur-[150px] translate-y-1/3 pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
              className="text-center max-w-4xl mx-auto mb-20"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-900/40 border border-blue-500/30 rounded-full mb-6 backdrop-blur-md shadow-lg">
                <Layers className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-black text-blue-300 uppercase tracking-widest shadow-sm">
                  Software Division • Max Sale ERP
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-5xl lg:text-7xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
                Control Your Business.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium">
                Empower your retail store, wholesale business, or multi-branch enterprise with our highly customized Python-powered ERP system.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
            >
              {erpPlans.map((plan) => (
                <motion.div
                  key={plan.name}
                  variants={fadeUp}
                  whileHover={{ y: -10 }}
                  className={`relative bg-slate-900/60 backdrop-blur-2xl rounded-[2.5rem] p-8 lg:p-10 border transition-all duration-300 flex flex-col h-full ${
                    plan.isPopular 
                      ? 'border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.15)] lg:scale-105 z-10 bg-slate-800/80' 
                      : 'border-slate-800 hover:border-slate-600'
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -inset-[1px] bg-gradient-to-b from-blue-500 to-purple-600 rounded-[2.5rem] -z-10 opacity-50 blur-[2px]" />
                  )}

                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-6">
                      <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border ${plan.badgeColor}`}>
                        {plan.badge}
                      </span>
                      {plan.isPopular && <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />}
                    </div>

                    <h3 className="text-3xl font-black text-white mb-2">{plan.name}</h3>
                    <p className="text-sm font-bold text-blue-400 mb-6">{plan.tagline}</p>
                    <p className="text-sm text-slate-400 leading-relaxed mb-8 border-b border-slate-800 pb-8">
                      {plan.description}
                    </p>

                    <div className="space-y-4 mb-8">
                      <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Included Capabilities</p>
                      {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                          <span className="text-sm font-medium text-slate-300">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-slate-800 mt-auto">
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openDemoModal(plan.name)}
                      className={`w-full font-black py-4 rounded-2xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 group ${
                        plan.isPopular ? 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-blue-500/25' : 'bg-white text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <span>Request Free Demo</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate(`/build-bundle?software=${plan.bundleQuery}`)}
                      className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-3.5 rounded-2xl text-xs transition-all flex items-center justify-center gap-2 border border-slate-700"
                    >
                      <Plus className="w-3.5 h-3.5 text-blue-400" />
                      <span>Add to Hardware Bundle</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="mt-16 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 backdrop-blur-md border border-blue-500/30 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
            >
              <div className="flex items-center gap-5">
                <div className="p-4 bg-blue-500/20 text-blue-400 rounded-2xl border border-blue-500/30 shadow-inner">
                  <Server className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-white mb-1">Max Sale Professional Web Dashboard</h4>
                  <p className="text-sm text-slate-300 font-medium">Clients access live branch analytics at <code className="bg-slate-900/50 px-2 py-1 rounded text-blue-300 font-mono border border-slate-800">bugsfixer.pp.ua</code></p>
                </div>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                href="https://bugsfixer.pp.ua"
                target="_blank" rel="noopener noreferrer"
                className="bg-blue-600 text-white hover:bg-blue-500 px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-wider flex items-center gap-2 shrink-0 transition-all shadow-lg shadow-blue-900/50"
              >
                <span>Open Live Portal</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* --- FEATURED SECTIONS --- */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 space-y-40">
            
            {/* Section 1: Laptops */}
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <motion.div 
                initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                className="lg:w-1/2 order-2 lg:order-1"
              >
                <motion.span variants={fadeRight} className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-6 text-xs font-black text-indigo-600 uppercase tracking-widest">
                  Market Leaders
                </motion.span>
                <motion.h3 variants={fadeRight} className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight">Used Laptops In Pakistan</motion.h3>
                <motion.p variants={fadeRight} className="text-lg text-slate-600 leading-relaxed mb-10 font-medium">
                  Want to purchase or sell used laptops? We offer the best market value 
                  with full chip-level inspection. From Karachi to Lahore, our supply chain ensures fair pricing nationwide.
                </motion.p>
                
                <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-6 mb-12">
                  {['Best Resale Value', 'Full Inspection', 'Instant Cash', 'Trusted Warranty'].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex items-center gap-3">
                      <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 className="text-green-600 w-5 h-5" /></div>
                      <span className="font-bold text-slate-800">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div variants={fadeRight} whileHover={{ x: 10 }}>
                  <Link to="/inventory" className="inline-flex items-center gap-3 font-black text-indigo-600 uppercase tracking-widest text-sm hover:text-indigo-800 transition-colors">
                    Browse Hardware Vault <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 100, rotate: 2 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }} transition={{ type: "spring", duration: 1.5 }} viewport={{ once: true }}
                className="lg:w-1/2 order-1 lg:order-2"
              >
                <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-900/10 border border-slate-100">
                  <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="Laptops" className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
              </motion.div>
            </div>

            {/* Section 2: Why Choose Us */}
            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
              className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 filter blur-[120px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/30 filter blur-[120px] rounded-full" />
              
              <div className="flex flex-col lg:flex-row gap-20 relative z-10">
                <div className="lg:w-1/2">
                  <motion.h3 variants={fadeUp} className="text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight">Why Choose <br/> BugsFixer?</motion.h3>
                  <motion.p variants={fadeUp} className="text-xl text-slate-400 leading-relaxed mb-12 font-medium">
                    Our ideology is dedicated to providing top-quality infrastructure solutions, utilizing IT as a strategic tool for growth rather than just a utility.
                  </motion.p>
                  <div className="space-y-10">
                    <motion.div variants={fadeUp} className="flex gap-6 group">
                      <div className="w-16 h-16 bg-blue-600/20 border border-blue-500/50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                        <Zap className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-black mb-2 text-white">High-Tech Solutions</h4>
                        <p className="text-slate-400 leading-relaxed">Cost-effective smart solutions brought to your doorstep with guaranteed zero-compromise on quality.</p>
                      </div>
                    </motion.div>
                    <motion.div variants={fadeUp} className="flex gap-6 group">
                      <div className="w-16 h-16 bg-indigo-600/20 border border-indigo-500/50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors duration-300">
                        <ShieldCheck className="w-8 h-8 text-indigo-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-black mb-2 text-white">Dedicated Care</h4>
                        <p className="text-slate-400 leading-relaxed">Our technical support treats your business infrastructure like our own, ensuring absolute excellence.</p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <motion.div variants={fadeUp} className="lg:w-1/2 grid grid-cols-2 gap-4 h-full">
                  <div className="space-y-4 pt-12">
                    <div className="overflow-hidden rounded-3xl h-64"><img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Tech" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" /></div>
                    <div className="overflow-hidden rounded-3xl h-48"><img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Tech" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" /></div>
                  </div>
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-3xl h-48"><img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Tech" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" /></div>
                    <div className="overflow-hidden rounded-3xl h-64"><img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Tech" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" /></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- CLIENT TESTIMONIALS / REVIEWS SECTION --- */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-100 rounded-full mb-6">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-xs font-black text-amber-700 uppercase tracking-widest">Client Testimonials</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Trusted by Leading Organizations
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-slate-500 font-medium leading-relaxed">
                Real feedback from finance managers, IT heads, and operations leaders who rely on BugsFixer for enterprise IT infrastructure and Max Sale ERP.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className={`bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/40 border border-slate-100 hover:border-blue-200 transition-all relative overflow-hidden flex flex-col ${
                    index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote className="w-12 h-12 text-blue-600" />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 font-medium leading-relaxed text-sm mb-8 flex-grow relative z-10">
                    "{item.review}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-5 border-t border-slate-100">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-sm shadow-lg shadow-blue-600/20">
                      {item.initials}
                    </div>
                    <div>
                      <p className="font-black text-slate-900 text-sm leading-tight">{item.name}</p>
                      <p className="text-xs font-bold text-blue-600 mt-0.5">{item.role}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{item.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- CONTACT CTA --- */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", duration: 1 }}
              className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row border border-slate-100"
            >
              <div className="lg:w-5/12 bg-blue-600 p-12 lg:p-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <h3 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight relative z-10">Let's Fix Your Bugs Together.</h3>
                <p className="text-blue-100 text-lg mb-16 font-medium relative z-10">Ready to level up your IT infrastructure or ERP software? We are one message away.</p>
                
                <div className="space-y-10 relative z-10">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black opacity-70 uppercase tracking-widest mb-1">Email Us</p>
                      <a href="mailto:jeekhurram@yahoo.com" className="text-xl font-bold hover:text-blue-200 transition-colors">jeekhurram@yahoo.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black opacity-70 uppercase tracking-widest mb-1">Call / WhatsApp</p>
                      <a href="tel:+923216900448" className="text-xl font-bold hover:text-blue-200 transition-colors">+92 321 6900448</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-7/12 p-12 lg:p-16">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                      <input type="text" className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 focus:border-blue-600 focus:bg-white rounded-2xl outline-none transition-all font-semibold" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Email Address</label>
                      <input type="email" className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 focus:border-blue-600 focus:bg-white rounded-2xl outline-none transition-all font-semibold" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Message</label>
                    <textarea rows={4} className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 focus:border-blue-600 focus:bg-white rounded-2xl outline-none transition-all font-semibold resize-none" placeholder="Tell us about your IT setup or software needs..." />
                  </div>
                  <motion.button whileTap={{ scale: 0.98 }} className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/20">
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- MAX SALE ERP DEMO REQUEST MODAL --- */}
        <AnimatePresence>
          {isDemoModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeDemoModal}
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 30 }} transition={{ type: "spring", duration: 0.6 }}
                className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden z-10"
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white relative">
                  <button onClick={closeDemoModal} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md shadow-inner border border-white/10">
                      <Layers className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">Schedule ERP Demo</h3>
                      <p className="text-sm text-blue-100 font-medium">Selected: {selectedPlan}</p>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleDemoSubmit} className="p-8 space-y-5 bg-slate-50">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2 flex items-center gap-2"><User className="w-4 h-4 text-blue-500" /> Full Name *</label>
                    <input type="text" required value={demoName} onChange={(e) => setDemoName(e.target.value)} placeholder="e.g. Syed Wail" className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-600 bg-white font-semibold outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2 flex items-center gap-2"><Building className="w-4 h-4 text-blue-500" /> Company / Shop Name</label>
                    <input type="text" value={demoBusiness} onChange={(e) => setDemoBusiness(e.target.value)} placeholder="e.g. BugsFixer Tech" className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-600 bg-white font-semibold outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2 flex items-center gap-2"><Phone className="w-4 h-4 text-blue-500" /> WhatsApp Number *</label>
                    <input type="text" required value={demoPhone} onChange={(e) => setDemoPhone(e.target.value)} placeholder="e.g. +92 321 6900448" className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-600 bg-white font-semibold outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2 flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-500" /> Preferred Demo Time</label>
                    <select value={demoTime} onChange={(e) => setDemoTime(e.target.value)} className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-600 bg-white font-semibold outline-none transition-colors appearance-none">
                      <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                      <option value="Afternoon (2 PM - 5 PM)">Afternoon (2 PM - 5 PM)</option>
                      <option value="Evening (6 PM - 9 PM)">Evening (6 PM - 9 PM)</option>
                    </select>
                  </div>
                  <motion.button whileTap={{ scale: 0.98 }} type="submit" className="w-full bg-slate-900 hover:bg-blue-600 text-white font-black py-5 rounded-2xl text-lg transition-all shadow-xl flex items-center justify-center gap-3 mt-4">
                    <Send className="w-5 h-5 text-blue-400" /> Send via WhatsApp
                  </motion.button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Home;