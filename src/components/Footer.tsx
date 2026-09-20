import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, PhoneCall, Mail, Globe, Share2, ExternalLink, 
  MessageSquare, ShieldCheck, Layers, ArrowUpRight, Lock, User
} from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.35, duration: 0.8 } }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'CCTV & Security', path: '/cctv' },
    { name: 'Laptop & PC Repair', path: '/laptopservices' },
    { name: 'Consumer Electronics', path: '/electronics' },
    { name: 'Biometric & Door Locks', path: '/security' },
    { name: 'Networking & PBX', path: '/telephone-networking' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Build Bundle', path: '/build-bundle' },
    { name: 'Hardware Vault', path: '/inventory' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/faq' }, 
  ];

  const softwarePortals = [
    { name: 'Max Sale ERP Web Dashboard', url: 'https://bugsfixer.pp.ua', status: 'Live', isExternal: true },
    { name: 'InfraPlus AMC Portal', url: '/contact', status: 'Pre-Production', isExternal: false },
    { name: 'Max Sale Mobile App Access', url: '/build-bundle?software=professional', status: 'Professional Plan', isExternal: false },
  ];

  const socialLinks = [
    { icon: <Globe className="w-4 h-4" />, label: 'Website', path: '#' },
    { icon: <MessageSquare className="w-4 h-4" />, label: 'WhatsApp', path: 'https://wa.me/923216900448' },
    { icon: <Share2 className="w-4 h-4 text-blue-400" />, label: 'Share', path: '#' },
    { icon: <ExternalLink className="w-4 h-4" />, label: 'Portal', path: 'https://bugsfixer.pp.ua' },
  ];

  return (
    <footer className="bg-[#0B1120] text-white pt-28 pb-12 overflow-hidden relative border-t border-slate-800">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full filter blur-[140px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full filter blur-[140px] pointer-events-none translate-y-1/2 -translate-x-1/2" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20"
        >
          {/* Column 1: Brand + Logo */}
          <motion.div variants={fadeUp} className="lg:col-span-2 space-y-8 pr-0 lg:pr-8">
            
            {/* LOGO + TEXT (kept together) */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="https://i.postimg.cc/mtzVdTxN/logo-7edf2235d9195452fb1f-(1).png"
                alt="BugsFixer Pakistan Logo"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter text-white leading-none">
                  Bugs<span className="text-blue-500">Fixer</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-1">
                  Pakistan's Best IT Service Center
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-md">
              Pakistan's leading IT solutions company. Delivering expert CCTV installation, 
              hardware networking, used laptop sales, biometric security, and custom Python Max Sale ERP software nationwide.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs font-bold text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified IT Services</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs font-bold text-slate-300">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span>Max Sale ERP Division</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.path}
                  target={social.path.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl flex items-center justify-center transition-all border border-slate-700/80 shadow-md"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={fadeUp} className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-white flex items-center gap-2">
              <div className="w-1.5 h-4 bg-blue-500 rounded-full" />
              Company
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-slate-400 text-sm font-semibold hover:text-blue-400 hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-blue-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Core IT Services */}
          <motion.div variants={fadeUp} className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-white flex items-center gap-2">
              <div className="w-1.5 h-4 bg-indigo-500 rounded-full" />
              IT Services
            </h4>
            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path} 
                    className="text-slate-400 text-sm font-semibold hover:text-blue-400 hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-blue-400 transition-colors" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Client Portals & Software */}
          <motion.div variants={fadeUp} className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-white flex items-center gap-2">
              <div className="w-1.5 h-4 bg-emerald-500 rounded-full" />
              Software & Portals
            </h4>
            <ul className="space-y-3.5">
              {softwarePortals.map((portal) => (
                <li key={portal.name}>
                  {portal.isExternal ? (
                    <a
                      href={portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-1.5 text-slate-400 hover:text-blue-400 transition-colors text-sm font-semibold"
                    >
                      <span className="mt-1">
                        <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                      </span>
                      <div>
                        <p className="leading-snug">{portal.name}</p>
                        <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20 inline-block mt-1">
                          {portal.status}
                        </span>
                      </div>
                    </a>
                  ) : (
                    <Link
                      to={portal.url}
                      className="group flex items-start gap-1.5 text-slate-400 hover:text-blue-400 transition-colors text-sm font-semibold"
                    >
                      <span className="mt-1"><Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" /></span>
                      <div>
                        <p className="leading-snug">{portal.name}</p>
                        <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/20 inline-block mt-1">
                          {portal.status}
                        </span>
                      </div>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Banner Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 lg:p-8 mb-16 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center shrink-0 border border-blue-500/30">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Head Office</p>
              <p className="text-xs font-bold text-slate-200 mt-0.5">Shop No.26, 3rd Floor, Shaid Plaza, Peshawar</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-600/20 text-emerald-400 rounded-2xl flex items-center justify-center shrink-0 border border-emerald-500/30">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Phone / WhatsApp</p>
              <a href="https://wa.me/923216900448" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-200 hover:text-emerald-400 transition-colors mt-0.5 block">
                +92 321-6900448
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-600/20 text-purple-400 rounded-2xl flex items-center justify-center shrink-0 border border-purple-500/30">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Email Support</p>
              <a href="mailto:jeekhurram@yahoo.com" className="text-xs font-bold text-slate-200 hover:text-purple-400 transition-colors mt-0.5 block">
                jeekhurram@yahoo.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
            <p className="text-slate-500 font-medium text-xs">
              © {currentYear} <strong className="text-slate-300">BugsFixer Pakistan</strong>. All Rights Reserved.
            </p>
            <span className="text-slate-700">•</span>
            <p className="text-slate-500 text-xs font-medium">Software Division by <strong className="text-blue-400">Max Sale</strong></p>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-slate-500 hover:text-slate-300 text-xs font-semibold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-500 hover:text-slate-300 text-xs font-semibold transition-colors">
              Terms & Conditions
            </Link>
            <a 
              href="https://bugsfixer.pp.ua" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 bg-blue-950/60 px-3 py-1 rounded-lg border border-blue-500/30"
            >
              <User className="w-3 h-3" /> Client Login
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;