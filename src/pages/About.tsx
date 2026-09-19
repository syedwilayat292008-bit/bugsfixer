import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, Users, Award, ShieldCheck, Zap, Globe, 
  ArrowRight, CheckCircle2, Heart, Cpu, Server, 
  MessageSquare, TrendingUp, Settings, Layers
} from 'lucide-react';

// --- Enterprise Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.35, duration: 0.8 } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.35, duration: 0.8 } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.35, duration: 0.8 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.4, duration: 1 } }
};

const About = () => {
  // --- Enterprise SEO & Meta Tags ---
  useEffect(() => {
    document.title = "About BugsFixer Pakistan | 15+ Years of IT Excellence";

    const setMetaTag = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', 'Learn about BugsFixer Pakistan – a complete IT solutions company with 15+ years experience in CCTV, networking, hardware repair, biometric systems, and Max Sale ERP software across Pakistan.');
    setMetaTag('name', 'keywords', 'About BugsFixer, IT Company Pakistan, CCTV Experts Peshawar, Hardware Networking, Max Sale ERP, IT Service Center Pakistan');
    
    setMetaTag('property', 'og:title', 'About BugsFixer Pakistan | Driving IT Excellence');
    setMetaTag('property', 'og:description', 'Discover our mission, core values, and 15+ years of delivering high-tech IT solutions to businesses nationwide.');
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:image', 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80');
    
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', 'About BugsFixer Pakistan');
    setMetaTag('name', 'twitter:description', '15+ years of professional IT infrastructure, CCTV, and ERP software excellence across Pakistan.');
  }, []);

  const stats = [
    { label: 'Trusted Experts', value: '15+', icon: <Users className="w-6 h-6" />, color: 'text-blue-500' },
    { label: 'Years Experience', value: '10+', icon: <Award className="w-6 h-6" />, color: 'text-amber-500' },
    { label: 'Success Rate', value: '99%', icon: <Zap className="w-6 h-6" />, color: 'text-emerald-500' },
    { label: 'Market Reach', value: 'Nationwide', icon: <Globe className="w-6 h-6" />, color: 'text-purple-500' },
  ];

  const principles = [
    {
      title: "Excellence",
      text: "We provide companies and individuals with high-quality products and services that consistently exceed industry standards.",
      icon: <Award className="w-10 h-10" />,
      gradient: "from-amber-500 to-orange-600"
    },
    {
      title: "Care",
      text: "We handle every business with great care, treating your infrastructure as our own to achieve heights of excellence.",
      icon: <Heart className="w-10 h-10" />,
      gradient: "from-rose-500 to-pink-600"
    },
    {
      title: "Quality",
      text: "Competitively priced and best-quality services brought directly to your doorstep with zero compromise.",
      icon: <ShieldCheck className="w-10 h-10" />,
      gradient: "from-blue-500 to-indigo-600"
    }
  ];

  const timeline = [
    { year: '2010+', title: 'Foundation', desc: 'Started as a dedicated hardware & laptop repair center in Peshawar.' },
    { year: '2015+', title: 'CCTV Expansion', desc: 'Expanded into professional surveillance, biometric & networking solutions.' },
    { year: '2020+', title: 'Software Division', desc: 'Launched Max Sale ERP – custom Python POS & multi-branch software.' },
    { year: 'Today', title: 'Nationwide Reach', desc: 'Serving businesses across Pakistan with complete IT & software packages.' },
  ];

  const divisions = [
    {
      title: 'IT Hardware Services',
      items: ['CCTV & Camera Systems', 'Networking & Cable Structure', 'Biometric & Access Control', 'Telephone / PABX Exchange', 'Laptop & PC Chip-Level Repair'],
      icon: <Cpu className="w-8 h-8" />,
      color: 'blue'
    },
    {
      title: 'Max Sale Software',
      items: ['Essential Plan (Standalone POS)', 'Plus Plan (Python Server LAN)', 'Professional (Mobile + Web Dashboard)', 'Multi-Branch Real-Time Sync', 'Annual AMC & Updates'],
      icon: <Layers className="w-8 h-8" />,
      color: 'indigo'
    },
    {
      title: 'InfraPlus Portal',
      items: ['AMC Plan Tracking', 'Device Service History', 'Support Ticket System', 'Annual Fee Management', 'Free for Paid AMC Clients'],
      icon: <Server className="w-8 h-8" />,
      color: 'emerald'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white overflow-hidden">
      
      {/* ============================================================ */}
      {/* HERO SECTION                                                 */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 relative">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.15, 1], rotate: [0, 45, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[100px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-20 -left-40 w-[600px] h-[600px] bg-indigo-100/50 rounded-full mix-blend-multiply filter blur-[100px]"
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            
            {/* Left Content */}
            <motion.div 
              className="lg:w-1/2"
              initial="hidden" animate="show" variants={staggerContainer}
            >
              <motion.div variants={fadeLeft} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-100 rounded-full mb-8 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
                </span>
                <span className="text-xs font-black text-blue-700 uppercase tracking-widest">Who We Are</span>
              </motion.div>

              <motion.h1 variants={fadeLeft} className="text-5xl lg:text-[4.5rem] font-black text-slate-900 mb-8 leading-[1.05] tracking-tighter">
                Driving Excellence <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  In IT Solutions.
                </span>
              </motion.h1>

              <motion.p variants={fadeLeft} className="text-xl text-slate-600 leading-relaxed mb-12 font-medium max-w-xl">
                BugsFixer is a complete IT solutions company providing expert services in CCTV, 
                Hardware & Networking, and custom Max Sale ERP software. We empower businesses 
                across Pakistan with high-tech, cost-effective solutions.
              </motion.p>

              {/* Stats Grid */}
              <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeUp}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`w-12 h-12 bg-slate-50 ${stat.color} rounded-xl flex items-center justify-center shadow-inner`}>
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-2xl font-black text-slate-900 leading-none mb-1">{stat.value}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              className="lg:w-1/2"
              initial="hidden" animate="show" variants={scaleIn}
            >
              <div className="relative">
                <div className="relative z-10 bg-white p-3 rounded-[2.5rem] shadow-2xl shadow-blue-900/10 border border-white/60">
                  <div className="overflow-hidden rounded-[2rem]">
                    <motion.img 
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.6 }}
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt="BugsFixer Team Collaboration" 
                      className="w-full h-[480px] object-cover"
                    />
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div 
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-6 bottom-16 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 z-20"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Growth</p>
                    <p className="text-sm font-black text-slate-900">500+ Happy Clients</p>
                  </div>
                </motion.div>

                {/* Decorative Blobs */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full z-0 animate-pulse opacity-20 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo-600 rounded-full z-0 animate-pulse opacity-10 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border-2 border-dashed border-blue-200 rounded-full -z-10 animate-spin-slow opacity-40" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MISSION / IDEOLOGY SECTION                                   */}
      {/* ============================================================ */}
      <section className="py-32 bg-[#0B1120] text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/3 w-[800px] h-[400px] bg-blue-600/20 rounded-full filter blur-[150px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-indigo-600/15 rounded-full filter blur-[120px] translate-y-1/3 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeUp} className="w-20 h-20 bg-blue-600/20 border border-blue-500/40 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-lg shadow-blue-900/30">
              <Target className="w-10 h-10 text-blue-400" />
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-6xl font-black mb-10 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
              Our Working Ideology
            </motion.h2>
            
            <motion.blockquote variants={fadeUp} className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-medium italic border-l-4 border-blue-500 pl-8 text-left max-w-3xl mx-auto">
              "Our working ideology is the dedication to providing top-quality solutions by utilizing 
              information technology as a strategic business tool, both domestically and internationally. 
              We handle every business with great care to take it to a height of excellence."
            </motion.blockquote>

            <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 px-5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Strategic IT Partner</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Domestic & International</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Excellence Driven</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CORE PRINCIPLES                                              */}
      {/* ============================================================ */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/60 rounded-full mb-6">
              <span className="text-xs font-black text-blue-600 uppercase tracking-widest">What Drives Us</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Our Core Principles
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
              We build long-term relationships through trust, quality, and exceptional service delivery.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {principles.map((v, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group bg-white p-10 lg:p-12 rounded-[2.5rem] text-center shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 border border-slate-100 relative overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${v.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${v.gradient} text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {v.icon}
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{v.title}</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">{v.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* OUR DIVISIONS                                                */}
      {/* ============================================================ */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-6">
              <Settings className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-black text-indigo-600 uppercase tracking-widest">Business Structure</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Our Complete Ecosystem
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
              Three powerful divisions working together to deliver end-to-end IT solutions.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {divisions.map((div, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-slate-50 hover:bg-white p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-${div.color}-100 text-${div.color}-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner`}>
                  {div.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">{div.title}</h3>
                <ul className="space-y-3">
                  {div.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* JOURNEY / TIMELINE                                           */}
      {/* ============================================================ */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Our Journey
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-xl mx-auto text-lg font-medium">
              From a local repair desk to Pakistan's trusted complete IT solutions partner.
            </motion.p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-300 to-purple-200 lg:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.15, type: "spring", bounce: 0.3 }}
                  className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg lg:-translate-x-1/2 z-10 mt-2" />
                  
                  {/* Content Card */}
                  <div className={`ml-20 lg:ml-0 lg:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                    <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-lg shadow-slate-200/60 border border-slate-100 hover:shadow-xl transition-shadow">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest rounded-full mb-3">
                        {item.year}
                      </span>
                      <h4 className="text-xl font-black text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA BANNER                                                   */}
      {/* ============================================================ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}
            className="relative bg-slate-900 rounded-[3rem] p-12 lg:p-20 overflow-hidden text-center"
          >
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/30 filter blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 filter blur-[100px] rounded-full" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                Ready to Partner <br />With BugsFixer?
              </h2>
              <p className="text-lg text-slate-400 mb-12 font-medium leading-relaxed">
                Whether you need CCTV installation, a full office network, Max Sale ERP software, 
                or a complete turn-key IT bundle — our team is ready to deliver excellence.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/build-bundle"
                    className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-5 rounded-full font-black text-lg shadow-xl shadow-blue-900/40 transition-all"
                  >
                    Build Your IT Bundle
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="https://wa.me/923216900448"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-5 rounded-full font-black text-lg backdrop-blur-sm transition-all"
                  >
                    <MessageSquare className="w-5 h-5 text-green-400" />
                    Chat on WhatsApp
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;