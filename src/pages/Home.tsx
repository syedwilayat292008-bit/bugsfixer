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

// --- Stable Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -15 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 15 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } }
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
      name: 'Dr.Naveed Khan',
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
        <section className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[100px]" />
            <div className="absolute -bottom-40 -left-40 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] bg-indigo-100/50 rounded-full mix-blend-multiply filter blur-[100px]" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              
              {/* Hero Left Content */}
              <motion.div 
                className="lg:w-1/2 w-full text-left"
                initial="hidden" animate="show" variants={staggerContainer}
              >
                <motion.div variants={fadeLeft} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-100 rounded-full mb-6 shadow-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                  </span>
                  <span className="text-xs font-black text-blue-700 uppercase tracking-widest">Complete IT & Software Solutions</span>
                </motion.div>
                
                <motion.h1 variants={fadeLeft} className="text-4xl sm:text-5xl lg:text-[5rem] xl:text-[5.5rem] font-black text-slate-900 leading-[1.05] mb-6 tracking-tighter">
                  BugsFixer <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 block pb-2">
                    IT Excellence.
                  </span>
                </motion.h1>
                
                <motion.p variants={fadeLeft} className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl font-medium">
                  As Pakistan's Best IT Service Center, we deploy enterprise CCTV, 
                  Max Sale ERP software, biometric security, and high-performance networking nationwide.
                </motion.p>

                <motion.div variants={fadeLeft} className="flex flex-wrap gap-4">
                  <Link 
                    to="/build-bundle"
                    className="group bg-blue-600 text-white px-7 py-4 rounded-full font-black text-base hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 flex items-center gap-3"
                  >
                    <Settings className="w-5 h-5 animate-spin-slow" />
                    <span>Build Your Bundle</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a 
                    href="https://wa.me/923216900448"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border-2 border-slate-200 text-slate-900 px-7 py-4 rounded-full font-black text-base hover:border-slate-900 transition-all shadow-md flex items-center gap-3"
                  >
                    <MessageSquare className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                    Chat Now
                  </a>
                </motion.div>

                <motion.div variants={staggerContainer} className="mt-12 flex items-center gap-8 pt-6 border-t border-slate-100">
                  {stats.map((stat, i) => (
                    <div key={i} className="group">
                      <div className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2 mb-1">
                        {stat.value}
                        <div className="p-1 bg-slate-50 rounded-lg">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Hero Right Image (Crisp HD on PC & Fast on Mobile) */}
              <motion.div 
                className="lg:w-1/2 w-full relative"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
              >
                <div className="relative z-10 bg-white p-3 sm:p-4 rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl shadow-blue-900/10 border border-white/50 w-full">
                  <div className="overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] w-full h-[350px] sm:h-[450px] lg:h-[520px] bg-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80&fm=webp" 
                      alt="BugsFixer IT Professional Setup" 
                      className="w-full h-full object-cover object-center"
                      fetchPriority="high"
                      decoding="async"
                      width="1200"
                      height="520"
                    />
                  </div>
                  
                  {/* Floating Badge 1 */}
                  <div className="absolute right-2 sm:-right-4 lg:-right-6 top-1/4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 z-20">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                      <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Active Security</p>
                      <p className="text-xs sm:text-sm font-black text-slate-900">24/7 Monitoring</p>
                    </div>
                  </div>

                  {/* Floating Badge 2 */}
                  <div className="absolute left-2 sm:-left-4 lg:-left-6 bottom-1/4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 z-20">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Fast Support</p>
                      <p className="text-xs sm:text-sm font-black text-slate-900">Under 30 Mins</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- SERVICES GRID SECTION --- */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="max-w-3xl mb-16"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 rounded-full mb-4">
                <span className="text-xs font-black text-blue-600 uppercase tracking-widest">Our Expertise</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Enterprise IT Solutions <br/> For Every Scale.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-base sm:text-xl text-slate-600 leading-relaxed">
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
                    className="group block bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 border border-slate-100 hover:border-blue-100 h-full relative overflow-hidden"
                  >
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mb-6 flex items-center justify-center bg-slate-50 text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                        {service.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-blue-700 transition-colors">{service.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm font-medium mb-6">
                        {service.description}
                      </p>
                      <div className="mt-auto flex items-center gap-2 font-black text-blue-600 uppercase tracking-widest text-xs">
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
        <section className="py-24 bg-[#0B1120] text-white relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2 bg-blue-900/40 border border-blue-500/30 rounded-full mb-4">
                <Layers className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-black text-blue-300 uppercase tracking-widest">
                  Software Division • Max Sale ERP
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl sm:text-6xl font-black tracking-tighter mb-4 text-white">
                Control Your Business.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium">
                Empower your retail store, wholesale business, or multi-branch enterprise with our highly customized Python-powered ERP system.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
            >
              {erpPlans.map((plan) => (
                <motion.div
                  key={plan.name}
                  variants={fadeUp}
                  className={`relative bg-slate-900/60 backdrop-blur-2xl rounded-[2.5rem] p-8 border transition-all flex flex-col h-full ${
                    plan.isPopular 
                      ? 'border-blue-500 shadow-2xl bg-slate-800/80' 
                      : 'border-slate-800'
                  }`}
                >
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-6">
                      <span className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest border ${plan.badgeColor}`}>
                        {plan.badge}
                      </span>
                      {plan.isPopular && <Sparkles className="w-5 h-5 text-blue-400" />}
                    </div>

                    <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                    <p className="text-xs font-bold text-blue-400 mb-4">{plan.tagline}</p>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6 border-b border-slate-800 pb-6">
                      {plan.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">Included Capabilities</p>
                      {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-xs font-medium text-slate-300">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-800 mt-auto">
                    <button
                      onClick={() => openDemoModal(plan.name)}
                      className={`w-full font-black py-3.5 rounded-2xl text-xs transition-all shadow-lg flex items-center justify-center gap-2 ${
                        plan.isPopular ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-white text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <span>Request Free Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => navigate(`/build-bundle?software=${plan.bundleQuery}`)}
                      className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-3 rounded-2xl text-[11px] transition-all flex items-center justify-center gap-1.5 border border-slate-700"
                    >
                      <Plus className="w-3.5 h-3.5 text-blue-400" />
                      <span>Add to Hardware Bundle</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- REVIEWS SECTION --- */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-amber-100 rounded-full mb-4">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-xs font-black text-amber-700 uppercase tracking-widest">Client Testimonials</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-black text-slate-900 mb-3 tracking-tight">
                Trusted by Leading Organizations
              </motion.h2>
              <motion.p variants={fadeUp} className="text-base text-slate-500 font-medium">
                Feedback from finance managers, IT heads, and operations leaders across Pakistan.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-white rounded-[2rem] p-6 shadow-md border border-slate-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-600 font-medium text-xs leading-relaxed mb-6">
                      "{item.review}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-xs shrink-0">
                      {item.initials}
                    </div>
                    <div>
                      <p className="font-black text-slate-900 text-xs">{item.name}</p>
                      <p className="text-[11px] font-bold text-blue-600">{item.role}</p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{item.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- CONTACT CTA --- */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100"
            >
              <div className="lg:w-5/12 bg-blue-600 p-10 sm:p-14 text-white relative">
                <h3 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">Let's Fix Your Bugs Together.</h3>
                <p className="text-blue-100 text-sm mb-12 font-medium">Ready to level up your IT infrastructure or ERP software? We are one message away.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black opacity-70 uppercase tracking-widest">Email Us</p>
                      <a href="mailto:jeekhurram@yahoo.com" className="text-base font-bold hover:text-blue-200">jeekhurram@yahoo.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black opacity-70 uppercase tracking-widest">Call / WhatsApp</p>
                      <a href="tel:+923216900448" className="text-base font-bold hover:text-blue-200">+92 321 6900448</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-7/12 p-10 sm:p-14">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                      <input type="text" className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-100 focus:border-blue-600 focus:bg-white rounded-2xl outline-none text-sm font-semibold" placeholder="Your Name" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Email Address</label>
                      <input type="email" className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-100 focus:border-blue-600 focus:bg-white rounded-2xl outline-none text-sm font-semibold" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Message</label>
                    <textarea rows={3} className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-100 focus:border-blue-600 focus:bg-white rounded-2xl outline-none text-sm font-semibold resize-none" placeholder="Tell us about your IT setup or software needs..." />
                  </div>
                  <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-base hover:bg-blue-600 transition-all shadow-lg">
                    Send Message
                  </button>
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
                initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden z-10"
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white relative">
                  <button onClick={closeDemoModal} className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                      <Layers className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white">Schedule ERP Demo</h3>
                      <p className="text-xs text-blue-100 font-medium">Selected: {selectedPlan}</p>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleDemoSubmit} className="p-6 space-y-4 bg-slate-50">
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-widest text-slate-500 mb-1 flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-blue-500" /> Full Name *</label>
                    <input type="text" required value={demoName} onChange={(e) => setDemoName(e.target.value)} placeholder="e.g. Syed Wail" className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-600 bg-white text-sm font-semibold outline-none" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-widest text-slate-500 mb-1 flex items-center gap-1.5"><Building className="w-3.5 h-3.5 text-blue-500" /> Company / Shop Name</label>
                    <input type="text" value={demoBusiness} onChange={(e) => setDemoBusiness(e.target.value)} placeholder="e.g. BugsFixer Tech" className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-600 bg-white text-sm font-semibold outline-none" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-widest text-slate-500 mb-1 flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-blue-500" /> WhatsApp Number *</label>
                    <input type="text" required value={demoPhone} onChange={(e) => setDemoPhone(e.target.value)} placeholder="e.g. +92 321 6900448" className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-600 bg-white text-sm font-semibold outline-none" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-widest text-slate-500 mb-1 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-blue-500" /> Preferred Demo Time</label>
                    <select value={demoTime} onChange={(e) => setDemoTime(e.target.value)} className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-600 bg-white text-sm font-semibold outline-none appearance-none">
                      <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                      <option value="Afternoon (2 PM - 5 PM)">Afternoon (2 PM - 5 PM)</option>
                      <option value="Evening (6 PM - 9 PM)">Evening (6 PM - 9 PM)</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-slate-900 hover:bg-blue-600 text-white font-black py-4 rounded-2xl text-sm transition-all shadow-xl flex items-center justify-center gap-2 mt-3">
                    <Send className="w-4 h-4 text-blue-400" /> Send via WhatsApp
                  </button>
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