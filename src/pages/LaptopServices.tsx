import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ServiceLayout from '../components/ServiceLayout';
import { Laptop, Cpu, Zap, ShieldCheck, CheckCircle2, HardDrive, Wrench, Settings } from 'lucide-react';

const LaptopServices = () => {
  // --- Enterprise SEO ---
  useEffect(() => {
    document.title = "Used Business Laptops & Chip-Level Repair | BugsFixer Pakistan";

    const setMetaTag = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', 'BugsFixer Pakistan offers certified used business laptops (Dell, HP, Lenovo) and expert chip-level motherboard, GPU, and BGA reballing repairs in Peshawar and nationwide.');
    setMetaTag('name', 'keywords', 'Used Business Laptops Peshawar, Laptop Repair Pakistan, Chip Level Motherboard Fix, NVMe SSD Upgrade, Dell Latitude, HP EliteBook, ThinkPad');
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

  const certifiedSeries = ['Dell Latitude', 'HP EliteBook', 'Lenovo ThinkPad', 'Apple MacBook'];

  return (
    <ServiceLayout 
      title="Workstation Computing & Chip-Level Repair"
      subtitle="Certified Pre-Owned & Advanced Repair Division"
      icon={<Laptop className="w-6 h-6" />}
      description="BugsFixer Pakistan is the premier service hub for certified enterprise business laptops and precision logic-board diagnostics. We supply thoroughly inspected Dell, HP, Lenovo, and Apple laptops while providing advanced IC & GPU chip-level repairs using industrial-grade rework stations."
      image="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      features={[
        "Precision Chip-Level Logic Board Diagnostics",
        "BGA Rework, GPU Reballing & Power IC Replacement",
        "OEM LCD/LED Display & Precision Hinge Restoration",
        "Deep Data Recovery from Damaged Storage Media",
        "Genuine Windows Pro & Enterprise Software Setup",
        "High-Speed NVMe SSD & Dual-Channel RAM Upgrades",
        "Ultrasonic Cleaning & Arctic Thermal Compound Refresh",
        "EPROM/BIOS Flashing & Password Removal Services",
        "Battery & Power Delivery Diagnostics",
        "Certified Pre-Owned Laptop Procurement & Trade-Ins"
      ]}
    >
      <div className="container mx-auto px-4 lg:px-8 -mt-8 relative z-20">
        
        {/* Certified Vendor Series Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-[#0B1120] text-white rounded-[2.5rem] p-8 mb-16 shadow-2xl border border-slate-800 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-blue-400 block mb-1">
                Authorized Hardware Standards
              </span>
              <h3 className="text-2xl font-black text-white">Enterprise Business Series Procurement</h3>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              {certifiedSeries.map((brand, idx) => (
                <span key={idx} className="px-4 py-2 bg-slate-800/80 border border-slate-700/80 text-xs font-black text-slate-200 rounded-xl">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3-Column Diagnostic & Repair Matrix */}
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Card 1: Software & Diagnostics */}
          <motion.div variants={fadeUp} className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-colors group relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition-colors" />
            <div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black mb-3 text-slate-900">Software & OS Tuning</h3>
              <p className="text-slate-600 mb-6 font-medium text-xs leading-relaxed">
                Complete enterprise OS installation, driver optimization, firmware updates, and comprehensive malware/ransomware remediation.
              </p>
              <ul className="space-y-3 mb-6">
                {['Windows 11 / 10 Pro Licensed Setup', 'Ransomware & Deep Virus Cleanup', 'Firmware & Driver Optimization'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg self-start">
              Software Division
            </span>
          </motion.div>

          {/* Card 2: Chip-Level Hardware */}
          <motion.div variants={fadeUp} className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-indigo-200 transition-colors group relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-10 group-hover:bg-indigo-100 transition-colors" />
            <div>
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black mb-3 text-slate-900">Logic Board Diagnostics</h3>
              <p className="text-slate-600 mb-6 font-medium text-xs leading-relaxed">
                Micro-soldering, power delivery IC replacement, and liquid damage cleanup using high-precision digital microscopy.
              </p>
              <ul className="space-y-3 mb-6">
                {['DC Jack Power Delivery Repair', 'Liquid Damage De-Corrosion', 'Hinge & Structural Body Reconstruction'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg self-start">
              Chip Repair Division
            </span>
          </motion.div>

          {/* Card 3: Performance Boost */}
          <motion.div variants={fadeUp} className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-emerald-200 transition-colors group relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 group-hover:bg-emerald-100 transition-colors" />
            <div>
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black mb-3 text-slate-900">Speed & Memory Upgrades</h3>
              <p className="text-slate-600 mb-6 font-medium text-xs leading-relaxed">
                Transform system response times with high-throughput NVMe SSD storage and dual-channel RAM configurations.
              </p>
              <ul className="space-y-3 mb-6">
                {['PCIe NVMe / SATA SSD Migration', 'Dual-Channel DDR4 / DDR5 RAM Upgrade', 'Thermal Paste Refresh & Clean'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg self-start">
              Performance Division
            </span>
          </motion.div>
        </motion.div>

      </div>
    </ServiceLayout>
  );
};

export default LaptopServices;