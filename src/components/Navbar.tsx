import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  MessageSquare, 
  PhoneCall, 
  User, 
  LayoutDashboard, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  ExternalLink,
  ChevronLeft,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  
  // Client Portal Modal States
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const [portalStep, setPortalStep] = useState<'select' | 'infraplus_notice'>('select');
  
  // InfraPlus Early Access Form State
  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactNo, setContactNo] = useState('');

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowServices(false);
  }, [location]);

  const closePortalModal = () => {
    setIsPortalModalOpen(false);
    setTimeout(() => setPortalStep('select'), 300);
  };

  const handleInfraPlusWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Assalam-o-Alaikum BugsFixer!\n\nI am requesting Early Access / Support for the *InfraPlus AMC Portal*.\n\n*Client Name:* ${clientName}\n*Company:* ${companyName || 'N/A'}\n*Contact:* ${contactNo}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/923216900448?text=${encodedText}`, '_blank');
    closePortalModal();
  };

  const services = [
    { name: 'CCTV & Security', path: '/cctv' },
    { name: 'Laptop & PC Repair', path: '/laptopservices' },
    { name: 'Electronics Repair', path: '/electronics' },
    { name: 'Biometric & Door Locks', path: '/security' },
    { name: 'Networking & PBX', path: '/telephone-networking' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Hardware Vault', path: '/inventory' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-colors duration-300 py-3.5 h-[72px] ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md' 
            : 'bg-white/80 sm:bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-3 group shrink-0">
              <div className="relative flex-shrink-0">
                <img 
                  src="https://i.postimg.cc/fRbhDWPx/logo-7edf2235d9195452fb1f-(1).png" 
                  alt="BugsFixer Logo" 
                  className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
                  width="36"
                  height="36"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-black tracking-tighter leading-none ${scrolled ? 'text-blue-900' : 'text-slate-900'}`}>
                  Bugs<span className="text-blue-600">Fixer</span>
                </span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500 mt-0.5">
                  Pakistan's Best IT Service Center
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-full font-bold transition-all text-xs uppercase tracking-wide ${
                    location.pathname === link.path 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link
                to="/build-bundle"
                className={`px-3.5 py-2 rounded-full font-bold transition-all text-xs uppercase tracking-wide ${
                  location.pathname === '/build-bundle' 
                    ? 'text-indigo-600 bg-indigo-50' 
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50'
                }`}
              >
                Build Bundle
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  onMouseEnter={() => setShowServices(true)}
                  aria-label="Toggle Services menu"
                  className={`px-3.5 py-2 rounded-full font-bold transition-all text-xs uppercase tracking-wide flex items-center space-x-1 ${
                    services.some(s => location.pathname === s.path)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showServices ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {showServices && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      onMouseLeave={() => setShowServices(false)}
                      className="absolute top-full right-0 w-64 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden py-2"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="block px-6 py-3 text-xs font-bold text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Action Buttons */}
              <div className="ml-3 flex items-center gap-2">
                <button
                  onClick={() => setIsPortalModalOpen(true)}
                  aria-label="Open client login portals"
                  className="bg-slate-900 text-white px-4 py-2 rounded-full font-bold text-xs hover:bg-blue-600 transition-all shadow-md flex items-center gap-1.5 border border-slate-800"
                >
                  <User className="w-3.5 h-3.5 text-blue-400" />
                  Client Login
                </button>

                <a 
                  href="https://wa.me/923216900448" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact BugsFixer on WhatsApp"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-xs hover:bg-blue-700 transition-all shadow-md flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile navigation menu"
              className="lg:hidden p-2 text-slate-600 hover:text-blue-600"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-base font-bold text-slate-900 py-2 border-b border-slate-50"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/build-bundle"
                  className="text-base font-bold text-indigo-600 py-2 border-b border-slate-50"
                >
                  Build Bundle
                </Link>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsPortalModalOpen(true);
                  }}
                  className="text-base font-black text-blue-600 py-3 border-b border-slate-100 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Client Login Portals
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="py-2 border-b border-slate-50">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Our Services</span>
                  <div className="grid grid-cols-1 gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="text-sm font-semibold text-slate-700 hover:text-blue-600"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-3">
                  <a 
                    href="https://wa.me/923216900448" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white text-center py-3 rounded-2xl font-bold flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                  <a 
                    href="tel:+923216900448" 
                    className="bg-blue-600 text-white text-center py-3 rounded-2xl font-bold flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-5 h-5" />
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* CLIENT LOGIN MODAL PORTAL */}
      <AnimatePresence>
        {isPortalModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePortalModal}
              className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 z-10"
            >
              <div className="bg-slate-900 p-6 text-white relative">
                <button
                  onClick={closePortalModal}
                  aria-label="Close portal modal"
                  className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 p-3 rounded-2xl">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">BugsFixer Client Access</h3>
                    <p className="text-xs text-slate-400 font-medium">Select the portal dashboard you wish to access</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {portalStep === 'select' ? (
                  <div className="space-y-4">
                    <a
                      href="https://bugsfixer.pp.ua"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-5 rounded-2xl border-2 border-slate-100 hover:border-blue-500 bg-slate-50/50 hover:bg-blue-50/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-blue-100 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <LayoutDashboard className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                                Max Sale ERP Dashboard
                              </h4>
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-green-100 text-green-700 uppercase tracking-wider">
                                Live
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 font-medium mt-1">
                              For Professional Plan clients. View branch sales & track annual fee.
                            </p>
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </a>

                    <button
                      onClick={() => setPortalStep('infraplus_notice')}
                      className="w-full text-left group block p-5 rounded-2xl border-2 border-slate-100 hover:border-indigo-500 bg-slate-50/50 hover:bg-indigo-50/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <ShieldCheck className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                InfraPlus AMC Portal
                              </h4>
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-100 text-amber-700 uppercase tracking-wider">
                                Pre-Production
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 font-medium mt-1">
                              For Hardware AMC clients. Track AMC devices, plan fee & ticket system.
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <button
                      onClick={() => setPortalStep('select')}
                      className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors mb-2"
                    >
                      <ChevronLeft className="w-4 h-4" /> Back to choices
                    </button>

                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
                      <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-bold text-amber-900">InfraPlus is in Pre-Production Stage</h5>
                        <p className="text-xs text-amber-700 mt-1">
                          We are completing final testing! Active AMC clients can request early access or support right now.
                        </p>
                      </div>
                    </div>

                    <form 
                      onSubmit={handleInfraPlusWhatsApp} 
                      className="space-y-3 pt-2"
                      data-webmcp-tool="request_infraplus_access"
                      data-webmcp-description="Request early access or support for InfraPlus AMC Portal via WhatsApp"
                    >
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Request Early Access / Support</h5>
                      
                      <div>
                        <label htmlFor="portal-client-name" className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                        <input
                          id="portal-client-name"
                          name="client_name"
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="e.g. Syed Wail"
                          data-webmcp-param="client_name"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 bg-slate-50"
                        />
                      </div>

                      <div>
                        <label htmlFor="portal-company-name" className="block text-xs font-bold text-slate-700 mb-1">Company / Business Name</label>
                        <input
                          id="portal-company-name"
                          name="company_name"
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="e.g. BugsFixer Tech"
                          data-webmcp-param="company_name"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 bg-slate-50"
                        />
                      </div>

                      <div>
                        <label htmlFor="portal-contact-no" className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Phone Number *</label>
                        <input
                          id="portal-contact-no"
                          name="contact_no"
                          type="text"
                          required
                          value={contactNo}
                          onChange={(e) => setContactNo(e.target.value)}
                          placeholder="e.g. +92 321 6900448"
                          data-webmcp-param="contact_no"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 bg-slate-50"
                        />
                      </div>

                      <button
                        type="submit"
                        aria-label="Request InfraPlus Access via WhatsApp"
                        data-webmcp-action="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 mt-4"
                      >
                        <Send className="w-4 h-4" />
                        Request InfraPlus Access via WhatsApp
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