import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ServiceLayout from '../components/ServiceLayout';
import { Camera, Shield, Zap, Search, Eye, Map, Sliders, CheckCircle2 } from 'lucide-react';

const CCTV = () => {
  // --- Enterprise SEO ---
  useEffect(() => {
    document.title = "CCTV Installation & Surveillance Security | BugsFixer Pakistan";
    
    const setMetaTag = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', 'Expert CCTV camera installation and surveillance setup in Pakistan. IP & Analog systems, Hikvision & Dahua integrations for offices, factories, and schools.');
    setMetaTag('name', 'keywords', 'CCTV Installation Pakistan, Hikvision Installer Peshawar, Dahua IP Cameras, NVR Setup, Security System Integration, ColorVu Night Vision');
  }, []);

  // --- Animation Variants ---
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3 } }
  };

  return (
    <ServiceLayout 
      title="CCTV & Enterprise Video Surveillance"
      subtitle="Tier-1 Security Infrastructure"
      icon={<Camera className="w-6 h-6" />}
      description="BugsFixer Pakistan engineers professional, end-to-end CCTV and surveillance solutions for corporate offices, manufacturing sites, and government institutions nationwide. We integrate high-definition IP & HD-Analog architectures using leading brands like Hikvision, Dahua, and Uniview (UNV)."
      image="https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      features={[
        "Enterprise IP & HD-Analog Camera Deployments",
        "4K Ultra-HD & ColorVu Full-Color Night Vision",
        "Secure NVR/DVR Configuration & Raid Storage",
        "Encrypted Remote Mobile/Web Viewing Setup",
        "Smart AI Perimeter & Human/Vehicle Detection",
        "PTZ (Pan-Tilt-Zoom) Deployment for Large Sectors",
        "Structured Cat6 Cabling & Weatherproof Housings",
        "Complete Control Room Setup & Monitor Grids",
        "Long-term AMC (Annual Maintenance Contracts)",
        "Direct Procurement from Authorized Distributors"
      ]}
    >
      <div className="container mx-auto px-4 lg:px-8 -mt-8 relative z-20">
        
        {/* System Architectures Comparison */}
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* IP Systems Card */}
          <motion.div variants={fadeUp} className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition-colors" />
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-inner">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black mb-4 text-slate-900">Network IP Systems</h3>
            <p className="text-slate-600 mb-6 font-medium text-sm leading-relaxed">
              Designed for high-security enterprise environments. Utilizes PoE (Power over Ethernet) for streamlined, single-cable deployment with infinite scalability via network switches.
            </p>
            <ul className="space-y-3">
              {['Superior 4K+ / 8MP Image Quality', 'Infinite Scalability via Network Switches', 'Advanced Smart AI & Face Analytics', 'Secure Encrypted Digital Transmission'].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Analog Systems Card */}
          <motion.div variants={fadeUp} className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-indigo-200 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-10 group-hover:bg-indigo-100 transition-colors" />
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-inner">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black mb-4 text-slate-900">HD Analog / Coaxial</h3>
            <p className="text-slate-600 mb-6 font-medium text-sm leading-relaxed">
              A highly reliable, cost-effective solution utilizing modern HD-CVI/TVI/AHD technology. Supports up to 5MP/8MP resolutions over traditional coaxial cabling infrastructures.
            </p>
            <ul className="space-y-3">
              {['Zero Latency Live Video Feed', 'Cost-Effective Hardware Procurement', 'Long-Distance Signal Transmission', 'Robust Performance in Harsh Environments'].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Enterprise Deployment Matrix */}
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
          className="bg-[#0B1120] rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl border border-slate-800"
        >
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 filter blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 filter blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />

          <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl lg:text-5xl font-black mb-6 tracking-tight">Our Integration Matrix</h3>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              From initial blueprint to final system handover, our certified engineers execute a rigorous 4-step deployment methodology to ensure absolute security compliance.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Site Survey', desc: 'On-site risk assessment & blind-spot mapping.', icon: <Search className="w-6 h-6" />, color: 'blue' },
              { num: '02', title: 'Architecture', desc: 'Hardware BOM & cable route blueprinting.', icon: <Map className="w-6 h-6" />, color: 'indigo' },
              { num: '03', title: 'Deployment', desc: 'Professional installation & NVR/DVR setup.', icon: <Sliders className="w-6 h-6" />, color: 'purple' },
              { num: '04', title: 'Handover', desc: 'System testing, client app setup & training.', icon: <Eye className="w-6 h-6" />, color: 'emerald' }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800 transition-colors group">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 bg-${step.color}-500/20 text-${step.color}-400 rounded-xl`}>
                    {step.icon}
                  </div>
                  <span className="text-4xl font-black text-slate-700/50 group-hover:text-slate-600 transition-colors">{step.num}</span>
                </div>
                <h4 className="text-xl font-black text-white mb-2">{step.title}</h4>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </ServiceLayout>
  );
};

export default CCTV;