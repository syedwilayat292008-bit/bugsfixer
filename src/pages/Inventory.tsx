import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, ArrowRight, Camera, Network, Cpu, Phone, Zap, 
  CheckCircle2, Building2, Landmark, Scale, Shield, Activity, Utensils,
  Award, Layers, Server, Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Enterprise Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.5 } }
};

// --- Brand Categories Data ---
const brandCategories = [
  {
    id: 'cctv',
    title: 'CCTV & Video Surveillance',
    icon: <Camera className="w-6 h-6" />,
    color: 'blue',
    brands: [
      { name: 'Hikvision', tag: 'Gold Partner' },
      { name: 'Dahua Technology', tag: 'Certified' },
      { name: 'Uniview (UNV)', tag: 'Authorized' },
      { name: 'Western Digital Purple', tag: 'Storage' },
    ]
  },
  {
    id: 'networking',
    title: 'Enterprise Networking',
    icon: <Network className="w-6 h-6" />,
    color: 'indigo',
    brands: [
      { name: 'Cisco Systems', tag: 'Enterprise' },
      { name: 'MikroTik', tag: 'Router OS' },
      { name: 'Ubiquiti UniFi', tag: 'Wireless' },
      { name: 'TP-Link Omada', tag: 'SMB Grade' },
    ]
  },
  {
    id: 'computing',
    title: 'Workstations & Laptops',
    icon: <Cpu className="w-6 h-6" />,
    color: 'emerald',
    brands: [
      { name: 'Dell Latitude', tag: 'Business Series' },
      { name: 'HP EliteBook', tag: 'Business Series' },
      { name: 'Lenovo ThinkPad', tag: 'Business Series' },
      { name: 'Apple MacBook', tag: 'Pro Grade' },
    ]
  },
  {
    id: 'biometric',
    title: 'Biometric & Access Control',
    icon: <ShieldCheck className="w-6 h-6" />,
    color: 'purple',
    brands: [
      { name: 'ZKTeco', tag: 'Authorized' },
      { name: 'Hikvision Access', tag: 'Enterprise' },
      { name: 'Suprema', tag: 'Face AI' },
      { name: 'Honeywell Safety', tag: 'Fire Systems' },
    ]
  },
  {
    id: 'telephony',
    title: 'PABX & IP Telephony',
    icon: <Phone className="w-6 h-6" />,
    color: 'amber',
    brands: [
      { name: 'Panasonic PABX', tag: 'Digital' },
      { name: 'Grandstream', tag: 'IP-PBX' },
      { name: 'Yeastar', tag: 'VOIP' },
      { name: 'Cisco Voice', tag: 'Enterprise' },
    ]
  },
  {
    id: 'power',
    title: 'Power & Electrical',
    icon: <Zap className="w-6 h-6" />,
    color: 'rose',
    brands: [
      { name: 'Schneider Electric', tag: 'Industrial' },
      { name: 'APC UPS', tag: 'Backup Power' },
      { name: 'Pakistan Cables', tag: 'Copper Wiring' },
      { name: 'Clipsal', tag: 'Switchgear' },
    ]
  },
];

// --- Trusted Corporate Clients ---
const trustedClients = [
  { name: 'FBR Pakistan', icon: <Landmark className="w-6 h-6" />, sub: 'Federal Board of Revenue', color: 'text-blue-600' },
  { name: 'Supreme Court', icon: <Scale className="w-6 h-6" />, sub: 'Judicial Infrastructure', color: 'text-indigo-600' },
  { name: 'State Life', icon: <Shield className="w-6 h-6" />, sub: 'Insurance Corporation', color: 'text-emerald-600' },
  { name: 'Wafid Visa Centers', icon: <Activity className="w-6 h-6" />, sub: '25+ Facilities Nationwide', color: 'text-rose-600' },
  { name: 'Mr. Cod', icon: <Utensils className="w-6 h-6" />, sub: 'Multi-Branch Restaurant', color: 'text-amber-500' },
];

const Inventory = () => {
  return (
    <>
      {/* Dynamic SEO Meta Tags via React Helmet Async */}
      <Helmet>
        <title>Hardware Vault: Trusted Brands & Clients | BugsFixer Pakistan</title>
        <meta name="description" content="BugsFixer Hardware Vault - Our portfolio of trusted vendor brands (Hikvision, Cisco, ZKTeco, Dell) and corporate clients including FBR, Supreme Court, State Life, and Wafid Visa Centers." />
        <meta name="keywords" content="Hardware Vault, Trusted IT Brands Pakistan, Hikvision Partner, Cisco Networking, Enterprise IT Vendors, FBR IT Partner, Peshawar IT supplier" />
        <link rel="canonical" href="https://bugsfixerweb.pp.ua/inventory" />

        {/* Open Graph Tags (Facebook & WhatsApp Previews) */}
        <meta property="og:title" content="Hardware Vault: Trusted Brands & Clients | BugsFixer Pakistan" />
        <meta property="og:description" content="Explore our hardware vault containing tier-1 vendor partnerships and leading institutional client case deployments." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bugsfixerweb.pp.ua/inventory" />
        <meta property="og:image" content="https://i.postimg.cc/fRbhDWPx/logo-7edf2235d9195452fb1f-(1).png" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Hardware Vault: Brands & Clients | BugsFixer" />
        <meta name="twitter:description" content="Certified field-tested IT equipment sourced directly from official distribution partners." />
        <meta name="twitter:image" content="https://i.postimg.cc/fRbhDWPx/logo-7edf2235d9195452fb1f-(1).png" />
      </Helmet>

      <div className="min-h-screen bg-slate-50/70 pt-28 pb-24 relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          
          {/* ============================================================ */}
          {/* HEADER SECTION - HARDWARE VAULT                              */}
          {/* ============================================================ */}
          <motion.div 
            initial="hidden" animate="show" variants={staggerContainer}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 border border-blue-200 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-black text-blue-600 uppercase tracking-widest">15+ Years Field-Proven Deployments</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight uppercase">
              HARDWARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">VAULT</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-slate-600 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              Our trusted vendor brand portfolio and enterprise client showcase. Every deployment is backed by Tier-1 authorized vendors and 15+ years of field-proven system integration.
            </motion.p>
          </motion.div>

          {/* ============================================================ */}
          {/* ENTERPRISE METRICS BAR                                        */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {[
              { value: '15+', label: 'Years Experience', icon: <Award className="w-5 h-5" />, color: 'blue' },
              { value: '500+', label: 'Enterprise Clients', icon: <Building2 className="w-5 h-5" />, color: 'indigo' },
              { value: '25+', label: 'Wafid Health Centers', icon: <Activity className="w-5 h-5" />, color: 'emerald' },
              { value: '3', label: 'Cities: PEW, ISB, CKD', icon: <Server className="w-5 h-5" />, color: 'rose' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 bg-${stat.color}-100 text-${stat.color}-600 rounded-xl flex items-center justify-center mb-4`}>
                  {stat.icon}
                </div>
                <p className="text-3xl font-black text-slate-900 leading-none mb-1">{stat.value}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* ============================================================ */}
          {/* TRUSTED CORPORATE PARTNERS SECTION                           */}
          {/* ============================================================ */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="p-8 lg:p-12 mb-16 bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative"
          >
            <div className="mx-auto mb-10 text-center max-w-2xl">
              <span className="block mb-2 text-xs font-black uppercase tracking-widest text-blue-600">Institutional Clients</span>
              <h2 className="mb-3 text-3xl font-black md:text-4xl text-slate-900">Trusted By Leading Organizations</h2>
              <p className="text-sm font-medium text-slate-500">
                Government institutions, financial corporations, and healthcare networks trust BugsFixer for critical IT infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {trustedClients.map((client, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                  className="flex flex-col items-center gap-3 p-5 text-center transition-all border bg-slate-50 rounded-2xl border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-md"
                >
                  <div className={`p-3 bg-white rounded-xl shadow-sm ${client.color}`}>
                    {client.icon}
                  </div>
                  <div>
                    <p className="font-black text-sm leading-tight tracking-tight text-slate-900">{client.name}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{client.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <p className="flex gap-2 items-center justify-center mt-8 text-xs font-bold text-center text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Also empowering 100+ SME & Mid-Large Enterprises Nationwide
            </p>
          </motion.div>

          {/* ============================================================ */}
          {/* TRUSTED VENDOR BRANDS SECTION                                 */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="mx-auto mb-12 text-center max-w-3xl">
              <span className="block mb-2 text-xs font-black uppercase tracking-widest text-indigo-600">Authorized Brand Portfolio</span>
              <h2 className="mb-3 text-3xl font-black md:text-4xl text-slate-900">Tier-1 Vendor Partnerships</h2>
              <p className="text-sm font-medium text-slate-500">
                We deploy only certified, genuine equipment sourced through our established procurement channels with leading global manufacturers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {brandCategories.map((cat, idx) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}
                  className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-lg shadow-slate-200/40 border border-slate-100 hover:border-blue-200 transition-all"
                >
                  <div className="flex gap-4 items-center mb-6 pb-4 border-b border-slate-100">
                    <div className={`w-12 h-12 bg-${cat.color}-100 text-${cat.color}-600 rounded-xl flex items-center justify-center shadow-inner`}>
                      {cat.icon}
                    </div>
                    <h3 className="text-lg font-black leading-tight text-slate-900">{cat.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {cat.brands.map((brand, bIdx) => (
                      <div key={bIdx} className="flex items-center justify-between p-3 transition-colors border bg-slate-50 rounded-xl border-slate-100 hover:border-blue-100">
                        <span className="text-sm font-black text-slate-800">{brand.name}</span>
                        <span className={`text-[9px] font-black uppercase tracking-widest bg-${cat.color}-100 text-${cat.color}-700 px-2 py-1 rounded-md`}>
                          {brand.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* PROCUREMENT STATEMENT BANNER                                  */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="p-8 lg:p-12 mb-16 text-white rounded-[2.5rem] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col gap-8 justify-between items-center relative z-10 md:flex-row">
              <div className="flex gap-5 items-start">
                <div className="p-4 rounded-2xl border shrink-0 bg-blue-600/20 text-blue-400 border-blue-500/30">
                  <Building2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="flex gap-2 items-center text-xl font-black text-white mb-2">
                    Direct Vendor Procurement
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Official Guarantee
                    </span>
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-slate-300 max-w-3xl">
                    Through our established procurement connections with Pakistan's Tier-1 authorized distributors, we deliver 100% genuine, factory-sealed equipment with full manufacturer warranty coverage on every deployment.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 sm:flex-row shrink-0">
                <div className="px-5 py-3 text-center border rounded-2xl bg-slate-800/80 border-slate-700">
                  <p className="text-xs font-black uppercase tracking-wider text-blue-400">100% Genuine</p>
                  <p className="text-xs font-bold mt-0.5 text-slate-300">Distributor Backed</p>
                </div>
                <div className="px-5 py-3 text-center border rounded-2xl bg-slate-800/80 border-slate-700">
                  <p className="text-xs font-black uppercase tracking-wider text-emerald-400">Official Warranty</p>
                  <p className="text-xs font-bold mt-0.5 text-slate-300">Vendor Backed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* CTA SECTION                                                   */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="p-10 lg:p-14 text-center bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Layers className="w-8 h-8" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-4">
              Ready to Deploy?
            </h3>
            <p className="mx-auto mb-8 text-sm font-medium leading-relaxed text-slate-500 max-w-2xl">
              Build your custom IT bundle with certified equipment from our trusted vendor portfolio. Get an official requisition quote and deployment blueprint from our engineering team.
            </p>
            
            <div className="flex flex-col gap-4 items-center justify-center sm:flex-row">
              <Link
                to="/build-bundle"
                className="flex gap-2 items-center px-8 py-4 text-sm font-black uppercase tracking-wider text-white bg-blue-600 rounded-2xl shadow-xl hover:bg-blue-500 shadow-blue-900/20 transition-all"
              >
                Build IT Bundle <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="flex gap-2 items-center px-8 py-4 text-sm font-black uppercase tracking-wider text-slate-900 bg-slate-100 rounded-2xl border border-slate-200 hover:bg-slate-200 transition-all"
              >
                <Lock className="w-4 h-4 text-blue-600" />
                Request Consultation
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default Inventory;