import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ServiceLayout from '../components/ServiceLayout';
import { PhoneCall, Network, Server, Wifi, CheckCircle2, Award, Zap, ShieldCheck, Layers, Globe } from 'lucide-react';

const TelephoneNetworking = () => {
  // --- Animation Variants ---
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3 } }
  };

  const networkingVendors = ['Cisco', 'MikroTik', 'Ubiquiti UniFi', 'Panasonic PABX', 'Grandstream', 'Yeastar IP-PBX'];

  return (
    <>
      {/* Dynamic SEO Meta Tags via React Helmet Async */}
      <Helmet>
        <title>Enterprise Networking, Structured Cabling & PABX | BugsFixer Pakistan</title>
        <meta name="description" content="BugsFixer Pakistan provides enterprise Cat6/Fiber optic structured cabling, Cisco & MikroTik switch routing, and Panasonic & Grandstream PABX intercom systems nationwide." />
        <meta name="keywords" content="Structured Cabling Pakistan, Cisco Network Installer, PABX Exchange Peshawar, Fiber Optic Splicing, IP-PBX Setup, MikroTik Routerboard, Ubiquiti UniFi Access Points, Peshawar networking" />
        <link rel="canonical" href="https://bugsfixerweb.pp.ua/telephone-networking" />

        {/* Open Graph Tags (Facebook & WhatsApp Previews) */}
        <meta property="og:title" content="Enterprise Networking, Structured Cabling & PABX | BugsFixer Pakistan" />
        <meta property="og:description" content="High-speed Gigabit network architectures, fiber optic backbones, server rack management, and digital/IP-PBX telephony." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bugsfixerweb.pp.ua/telephone-networking" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Networking & PABX Telephony Systems | BugsFixer" />
        <meta name="twitter:description" content="Cat6 cabling, server rack dressing, VoIP SIP trunks, and enterprise mesh Wi-Fi deployments." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" />
      </Helmet>

      <ServiceLayout 
        title="Enterprise Networking & PABX Telephony"
        subtitle="Structured Cabling & Unified Communications"
        icon={<Network className="w-6 h-6" />}
        description="BugsFixer Pakistan designs and deploys high-speed Gigabit network architectures, fiber optic backbones, server rack management, and digital/IP-PBX telephone exchanges for corporate headquarters, financial institutions, and multi-branch facilities nationwide."
        image="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        priceRangeLabel="Certified Network Engineers & Tier-1 Hardware"
        features={[
          "Structured LAN/WAN Cat6/Cat6A & Fiber Optic Cabling",
          "PABX / Intercom Exchange Installation & Extensions Setup",
          "Gigabit Switch Routing, VLAN Segmentation & Rack Dressing",
          "Enterprise Wireless Mesh & Access Point Site Surveys",
          "Site-to-Site VPN & Encrypted Remote Office Connectivity",
          "VOIP / IP-PBX Telephony System Integration (SIP Trunks)",
          "Hardware Firewall & Router Gateway Security Policy Setup",
          "Fiber Optic Fusion Splicing, OTDR Testing & Termination",
          "Data Center Rack Management & Cable Labeling Standards",
          "Annual Maintenance Contracts (AMC) & Network Diagnostics"
        ]}
      >
        <div className="container mx-auto px-4 lg:px-8 -mt-8 relative z-20">
          
          {/* Vendor Partner Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-[#0B1120] text-white rounded-[2.5rem] p-8 mb-16 shadow-2xl border border-slate-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-blue-400 mb-1 flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> Strategic Technology Vendors
                </span>
                <h3 className="text-2xl font-black text-white">Tier-1 Networking & Telephony Vendors</h3>
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                {networkingVendors.map((brand, idx) => (
                  <span key={idx} className="px-4 py-2 bg-slate-800/80 border border-slate-700/80 text-xs font-black text-slate-200 rounded-xl">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3-Column Specialization Matrix */}
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {/* Card 1: Structured Cabling */}
            <motion.div variants={fadeUp} className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-colors group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition-colors" />
              <div>
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-slate-900">Structured Cabling & Fiber</h3>
                <p className="text-slate-600 mb-6 font-medium text-xs leading-relaxed">
                  Precision Cat6/Cat6A & Single/Multi-mode Fiber cabling. We ensure zero crosstalk, labeled patch panels, and organized rack cable dressing for instant troubleshooting.
                </p>
                <ul className="space-y-3 mb-6">
                  {['High-Density Patch Panel Termination', 'Fiber Optic Fusion Splicing & OTDR Test', 'Server Rack Cable Dressing & Labeling'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs font-bold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg self-start">
                Cabling Division
              </span>
            </motion.div>

            {/* Card 2: PABX & Telephony */}
            <motion.div variants={fadeUp} className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-indigo-200 transition-colors group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-10 group-hover:bg-indigo-100 transition-colors" />
              <div>
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-slate-900">PABX & IP Telephony</h3>
                <p className="text-slate-600 mb-6 font-medium text-xs leading-relaxed">
                  Seamless internal intercom and IP-PBX communication systems. Featuring automated attendant IVR, call recording, SIP trunking, and extension routing.
                </p>
                <ul className="space-y-3 mb-6">
                  {['Digital & Analog PABX Mainframe Setup', 'Grandstream & Yeastar IP-PBX Integration', 'SIP Trunks & IVR Auto-Attendant Config'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs font-bold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg self-start">
                Telephony Division
              </span>
            </motion.div>

            {/* Card 3: Core Routing & Wireless */}
            <motion.div variants={fadeUp} className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-emerald-200 transition-colors group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 group-hover:bg-emerald-100 transition-colors" />
              <div>
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <Wifi className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-slate-900">Routing & Wi-Fi Mesh</h3>
                <p className="text-slate-600 mb-6 font-medium text-xs leading-relaxed">
                  Enterprise RouterBoard management, VLAN bandwidth management, firewall security, and seamless roaming Ubiquiti UniFi Wi-Fi access point networks.
                </p>
                <ul className="space-y-3 mb-6">
                  {['MikroTik Core Router Bandwidth Control', 'Ubiquiti UniFi Seamless Roaming Wi-Fi', 'Site-to-Site Encrypted Hardware VPN'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs font-bold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg self-start">
                Wireless & Routing Division
              </span>
            </motion.div>
          </motion.div>

          {/* Rack & Data Center Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-[2.5rem] p-10 lg:p-14 shadow-2xl border border-slate-700 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 filter blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-black uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" /> Data Center Standard
              </span>
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">Zero Downtime Rack Architecture</h3>
              <p className="text-slate-300 text-base font-medium leading-relaxed mb-8">
                Messy cabling causes network latency and thermal throttling. Our network engineers construct organized server racks with labeled patch cords, managed switches, and backup UPS power distribution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                  <Globe className="w-5 h-5 text-blue-400 mb-2" />
                  <div className="font-bold text-white text-sm">Multi-Branch</div>
                  <div className="text-[10px] text-slate-400 font-medium">Hardware VPN Interconnect</div>
                </div>
                <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
                  <div className="font-bold text-white text-sm">Gigabit Speed</div>
                  <div className="text-[10px] text-slate-400 font-medium">Zero Bottleneck Cabling</div>
                </div>
                <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                  <Layers className="w-5 h-5 text-indigo-400 mb-2" />
                  <div className="font-bold text-white text-sm">Rack Management</div>
                  <div className="text-[10px] text-slate-400 font-medium">Labeled Patch Termination</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </ServiceLayout>
    </>
  );
};

export default TelephoneNetworking;