import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, MessageSquare, PhoneCall, User,
  LayoutDashboard, ShieldCheck, ArrowRight, Clock, ExternalLink,
  ChevronLeft, Send, Camera, Laptop, Cpu, Network, Lock,
  Settings, Package, Building2, HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const [portalStep, setPortalStep] = useState<'select' | 'infraplus_notice'>('select');
  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactNo, setContactNo] = useState('');

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowServices(false);
    setMobileServicesOpen(false);
  }, [location]);

  const closePortalModal = () => {
    setIsPortalModalOpen(false);
    setTimeout(() => setPortalStep('select'), 300);
  };

  const handleInfraPlusWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Assalam-o-Alaikum BugsFixer!\n\nI am requesting Early Access / Support for the *InfraPlus AMC Portal*.\n\n*Client Name:* ${clientName}\n*Company:* ${companyName || 'N/A'}\n*Contact:* ${contactNo}`;
    window.open(`https://wa.me/923216900448?text=${encodeURIComponent(text)}`, '_blank');
    closePortalModal();
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Hardware Vault', path: '/inventory' },
    { name: 'Build Bundle', path: '/build-bundle' },
    { name: 'Contact', path: '/contact' },
  ];

  const megaServices = [
    {
      name: 'CCTV & Surveillance',
      path: '/cctv',
      desc: 'IP & Analog camera systems, NVR/DVR setup, and 24/7 monitoring architecture.',
      icon: <Camera className="w-5 h-5" />,
      color: 'text-blue-600 bg-blue-50',
    },
    {
      name: 'Laptop & PC Repair',
      path: '/laptopservices',
      desc: 'Chip-level motherboard repair, SSD upgrades, and certified business laptops.',
      icon: <Laptop className="w-5 h-5" />,
      color: 'text-indigo-600 bg-indigo-50',
    },
    {
      name: 'Electronics Repair',
      path: '/electronics',
      desc: 'Professional repair for printers, scanners, and consumer hardware devices.',
      icon: <Cpu className="w-5 h-5" />,
      color: 'text-emerald-600 bg-emerald-50',
    },
    {
      name: 'Biometric & Access',
      path: '/security',
      desc: 'ZKTeco terminals, EM locks, fire alarms, and turnstile access control.',
      icon: <Lock className="w-5 h-5" />,
      color: 'text-rose-600 bg-rose-50',
    },
    {
      name: 'Networking & PABX',
      path: '/telephone-networking',
      desc: 'Structured cabling, Cisco/MikroTik routing, and IP-PBX telephone systems.',
      icon: <Network className="w-5 h-5" />,
      color: 'text-amber-600 bg-amber-50',
    },
  ];

  const nextSteps = [
    { name: 'Build IT Bundle', path: '/build-bundle', icon: <Settings className="w-4 h-4" /> },
    { name: 'Hardware Vault', path: '/inventory', icon: <Package className="w-4 h-4" /> },
    { name: 'Max Sale ERP Demo', path: '/#', action: 'demo', icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: 'Contact Support', path: '/contact', icon: <MessageSquare className="w-4 h-4" /> },
    { name: 'FAQ', path: '/faq', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-slate-100'
            : 'bg-white/90 backdrop-blur-sm py-3 border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center gap-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group shrink-0">
              <div className="relative">
                <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white text-sm font-black tracking-tighter">BF</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tighter leading-none text-slate-900">
                  Bugs<span className="text-blue-600">Fixer</span>
                </span>
                <span className="text-[8px] uppercase font-bold tracking-widest text-slate-500">Pakistan IT Center</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-full font-bold text-[11px] uppercase tracking-wider whitespace-nowrap transition-all ${
                    location.pathname === link.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/60'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* SERVICES MEGA MENU TRIGGER */}
              <div
                className="relative"
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
              >
                <button
                  className={`px-3 py-1.5 rounded-full font-bold text-[11px] uppercase tracking-wider flex items-center gap-1 whitespace-nowrap transition-all ${
                    megaServices.some((s) => location.pathname === s.path) || showServices
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/60'
                  }`}
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showServices ? 'rotate-180' : ''}`} />
                </button>

                {/* GRAYLOG-STYLE MEGA DROPDOWN */}
                <AnimatePresence>
                  {showServices && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[860px] max-w-[92vw] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
                    >
                      <div className="grid grid-cols-12 min-h-[340px]">
                        {/* LEFT PROMO PANEL */}
                        <div className="col-span-4 bg-slate-50 p-7 border-r border-slate-100 flex flex-col justify-between">
                          <div>
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-5 shadow-lg shadow-blue-600/20">
                              <Building2 className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-black text-blue-600 mb-3 leading-tight">
                              The BugsFixer Platform
                            </h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                              Complete IT infrastructure — CCTV, networking, biometrics, hardware repair, and Max Sale ERP for businesses nationwide.
                            </p>
                          </div>
                          <Link
                            to="/about"
                            className="inline-flex items-center justify-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-700 font-black text-xs uppercase tracking-wider px-5 py-3 rounded-full transition-colors"
                          >
                            Learn More <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        {/* MIDDLE SERVICES LIST */}
                        <div className="col-span-5 p-7 border-r border-slate-100">
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                            Our Services
                          </p>
                          <div className="space-y-1">
                            {megaServices.map((service) => (
                              <Link
                                key={service.path}
                                to={service.path}
                                className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors"
                              >
                                <div className={`p-2 rounded-xl shrink-0 ${service.color}`}>
                                  {service.icon}
                                </div>
                                <div>
                                  <p className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                                    {service.name}
                                  </p>
                                  <p className="text-[11px] text-slate-500 font-medium leading-snug mt-0.5">
                                    {service.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* RIGHT NEXT STEPS */}
                        <div className="col-span-3 p-7 bg-white">
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-1">
                            Next Steps <ArrowRight className="w-3 h-3" />
                          </p>
                          <div className="space-y-1">
                            {nextSteps.map((step) => (
                              <Link
                                key={step.name}
                                to={step.path === '/#' ? '/' : step.path}
                                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-bold text-indigo-600 hover:bg-indigo-50 transition-colors"
                              >
                                <span className="text-indigo-400">{step.icon}</span>
                                {step.name}
                              </Link>
                            ))}
                          </div>

                          <div className="mt-6 pt-5 border-t border-slate-100">
                            <button
                              onClick={() => {
                                setShowServices(false);
                                setIsPortalModalOpen(true);
                              }}
                              className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-black hover:bg-blue-600 transition-colors"
                            >
                              <User className="w-3.5 h-3.5 text-blue-400" />
                              Client Login
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Buttons */}
              <div className="ml-2 flex items-center gap-1.5">
                <button
                  onClick={() => setIsPortalModalOpen(true)}
                  className="bg-slate-900 text-white px-3.5 py-2 rounded-full font-bold text-[11px] hover:bg-blue-600 transition-all flex items-center gap-1.5"
                >
                  <User className="w-3.5 h-3.5 text-blue-400" />
                  Login
                </button>
                <a
                  href="https://wa.me/923216900448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-[11px] hover:bg-blue-700 transition-all flex items-center gap-1.5 shadow-md shadow-blue-600/20"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-blue-600"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
            >
              <div className="container mx-auto px-4 py-5 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-base font-bold text-slate-900 py-2.5 border-b border-slate-50"
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile Services Accordion */}
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="text-base font-bold text-slate-900 py-2.5 border-b border-slate-50 flex items-center justify-between"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden bg-slate-50 rounded-2xl mb-2"
                    >
                      {megaServices.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-700 hover:text-blue-600 border-b border-slate-100 last:border-0"
                        >
                          <span className={`p-1.5 rounded-lg ${s.color}`}>{s.icon}</span>
                          {s.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsPortalModalOpen(true);
                  }}
                  className="text-base font-black text-blue-600 py-3 border-b border-slate-100 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <User className="w-5 h-5" /> Client Login
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="pt-3 flex flex-col gap-2">
                  <a
                    href="https://wa.me/923216900448"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-500 text-white text-center py-3 rounded-2xl font-bold flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
                  </a>
                  <a
                    href="tel:+923216900448"
                    className="bg-blue-600 text-white text-center py-3 rounded-2xl font-bold flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-5 h-5" /> Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* CLIENT LOGIN MODAL */}
      <AnimatePresence>
        {isPortalModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={closePortalModal}
              className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
            >
              <div className="bg-slate-900 p-6 text-white relative">
                <button onClick={closePortalModal} className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 p-3 rounded-2xl"><User className="w-6 h-6" /></div>
                  <div>
                    <h3 className="text-xl font-black">BugsFixer Client Access</h3>
                    <p className="text-xs text-slate-400 font-medium">Select the portal you wish to access</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {portalStep === 'select' ? (
                  <div className="space-y-3">
                    <a
                      href="https://bugsfixer.pp.ua"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-4 rounded-2xl border-2 border-slate-100 hover:border-blue-500 bg-slate-50/50 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <LayoutDashboard className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-extrabold text-slate-900 text-sm">Max Sale ERP Dashboard</h4>
                            <span className="px-1.5 py-0.5 rounded-full text-[9px] font-black bg-emerald-100 text-emerald-700 uppercase">Live</span>
                          </div>
                          <p className="text-[11px] text-slate-500 font-medium mt-0.5">Branch sales & annual fee tracking</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-400" />
                      </div>
                    </a>

                    <button
                      onClick={() => setPortalStep('infraplus_notice')}
                      className="w-full text-left group block p-4 rounded-2xl border-2 border-slate-100 hover:border-indigo-500 bg-slate-50/50 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-indigo-100 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-extrabold text-slate-900 text-sm">InfraPlus AMC Portal</h4>
                            <span className="px-1.5 py-0.5 rounded-full text-[9px] font-black bg-amber-100 text-amber-700 uppercase">Pre-Prod</span>
                          </div>
                          <p className="text-[11px] text-slate-500 font-medium mt-0.5">AMC devices, fees & tickets</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <button onClick={() => setPortalStep('select')} className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-blue-600 mb-1">
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 flex items-start gap-2">
                      <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-amber-800 font-medium">InfraPlus is in pre-production. Request early access below.</p>
                    </div>
                    <form onSubmit={handleInfraPlusWhatsApp} className="space-y-2.5">
                      <input required value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Your Name *" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 bg-slate-50" />
                      <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Company Name" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 bg-slate-50" />
                      <input required value={contactNo} onChange={(e) => setContactNo(e.target.value)} placeholder="WhatsApp Number *" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 bg-slate-50" />
                      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" /> Request via WhatsApp
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;