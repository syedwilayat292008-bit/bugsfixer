import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ServiceLayout from '../components/ServiceLayout';
import { ShieldCheck, Lock, Flame, Bell, CheckCircle2, Award, Zap, Building2 } from 'lucide-react';

const Security = () => {
  // --- Enterprise SEO ---
  useEffect(() => {
    document.title = "Biometric Access Control & Smart Door Locks | BugsFixer Pakistan";

    const setMetaTag = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', 'BugsFixer Pakistan provides enterprise biometric time-attendance machines, face recognition access terminals, electromagnetic door locks, and fire safety systems nationwide.');
    setMetaTag('name', 'keywords', 'Biometric Attendance Pakistan, ZKTeco Terminal Peshawar, EM Door Lock, Hikvision Access Control, Fire Alarm System, Turnstile Gate Automation');
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

  const securityBrands = ['ZKTeco', 'Hikvision Access', 'Dahua Security', 'Suprema', 'Honeywell Safety'];

  return (
    <ServiceLayout 
      title="Biometric Access Control & Fire Safety Systems"
      subtitle="Enterprise Perimeter & Life Safety"
      icon={<ShieldCheck className="w-6 h-6" />}
      description="BugsFixer Pakistan deploys AI facial recognition terminals, biometric time-attendance systems, electromagnetic door access controls, and automated fire safety systems for corporate headquarters, healthcare centers, and industrial facilities across Pakistan."
      image="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      priceRangeLabel="Tier-1 Certified Hardware Deployments"
      features={[
        "Biometric Facial Recognition & Fingerprint Time-Attendance",
        "Electromagnetic Door Access Control (EM Locks & Exit Buttons)",
        "Automated Turnstile Barriers & Speed Gate Integration",
        "Addressable & Conventional Fire Alarm Control Panels",
        "Smoke, Heat, and Photoelectric Sensor Calibration",
        "Wireless & Wired Intrusion / Burglar Alarm Systems",
        "PIR Motion Sensors & Perimeter Infrared Beams",
        "Panic Buttons & Emergency Siren Annunciator Setup",
        "Centralized Access Control Management Software Setup",
        "Annual Maintenance Contracts (AMC) & System Audits"
      ]}
    >
      <div className="container mx-auto px-4 lg:px-8 -mt-8 relative z-20">
        
        {/* Tier-1 Security Brand Partners */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-[#0B1120] text-white rounded-[2.5rem] p-8 mb-16 shadow-2xl border border-slate-800 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-blue-400 block mb-1 flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Strategic Security Vendors
              </span>
              <h3 className="text-2xl font-black text-white">Tier-1 Access Control Hardware</h3>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              {securityBrands.map((brand, idx) => (
                <span key={idx} className="px-4 py-2 bg-slate-800/80 border border-slate-700/80 text-xs font-black text-slate-200 rounded-xl">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3-Column Security Sector Matrix */}
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Column 1: Access Control */}
          <motion.div variants={fadeUp} className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-colors group relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition-colors" />
            <div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black mb-3 text-slate-900">Access & Attendance</h3>
              <p className="text-slate-600 mb-6 font-medium text-xs leading-relaxed">
                Seamless personnel access management using AI face terminals, RFID smart cards, and heavy-duty magnetic door locks.
              </p>
              <ul className="space-y-3 mb-6">
                {['Facial Recognition & Fingerprint Terminals', 'Heavy-Duty Electromagnetic (EM) Locks', 'Time & Attendance Desktop Software'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg self-start">
              Access Division
            </span>
          </motion.div>

          {/* Column 2: Fire Safety */}
          <motion.div variants={fadeUp} className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-rose-200 transition-colors group relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-bl-full -z-10 group-hover:bg-rose-100 transition-colors" />
            <div>
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black mb-3 text-slate-900">Fire & Smoke Safety</h3>
              <p className="text-slate-600 mb-6 font-medium text-xs leading-relaxed">
                Certified fire detection systems featuring addressable panels, photoelectric smoke sensors, and manual call points.
              </p>
              <ul className="space-y-3 mb-6">
                {['Addressable Fire Alarm Main Control Panels', 'Optoelectronic Smoke & Heat Sensors', 'Emergency Strobe Light & Sounder Sirens'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-rose-600 bg-rose-50 px-3 py-1.5 rounded-lg self-start">
              Fire Safety Division
            </span>
          </motion.div>

          {/* Column 3: Intrusion Defense */}
          <motion.div variants={fadeUp} className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-amber-200 transition-colors group relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-10 group-hover:bg-amber-100 transition-colors" />
            <div>
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black mb-3 text-slate-900">Intrusion & Barriers</h3>
              <p className="text-slate-600 mb-6 font-medium text-xs leading-relaxed">
                Perimeter defense systems featuring PIR motion beams, turnstile gate barriers, and instant GSM dialer alerts.
              </p>
              <ul className="space-y-3 mb-6">
                {['Turnstile Pedestrian Speed Gate Barriers', 'PIR Infrared Motion & Glass-Break Beams', 'GSM Dialer Panic & Emergency Systems'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg self-start">
              Perimeter Division
            </span>
          </motion.div>
        </motion.div>

        {/* Security Consultation Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-[2.5rem] p-10 lg:p-14 shadow-2xl border border-slate-700 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 filter blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-black uppercase tracking-widest text-blue-400 block mb-2 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" /> On-Site Risk Assessment
            </span>
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">Vulnerability Audit & Site Planning</h3>
            <p className="text-slate-300 text-base font-medium leading-relaxed mb-8">
              Protect your infrastructure with a full vulnerability audit. Our certified security engineers evaluate perimeter access, fire risks, and time-attendance requirements to specify the exact equipment needed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <Building2 className="w-5 h-5 text-blue-400 mb-2" />
                <div className="font-bold text-white text-sm">Commercial</div>
                <div className="text-[10px] text-slate-400 font-medium">Access Control & Attendance</div>
              </div>
              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
                <div className="font-bold text-white text-sm">Healthcare & Visa</div>
                <div className="text-[10px] text-slate-400 font-medium">High-Throughput Turnstiles</div>
              </div>
              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <Flame className="w-5 h-5 text-rose-400 mb-2" />
                <div className="font-bold text-white text-sm">Industrial</div>
                <div className="text-[10px] text-slate-400 font-medium">Addressable Fire Safety</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </ServiceLayout>
  );
};

export default Security;