import { useEffect } from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { ShieldAlert } from 'lucide-react';

const Security = () => {
  useEffect(() => {
    document.title = "Biometric Machines & Smart Door Locks in Pakistan – BugsFixer";
  }, []);

  return (
    <ServiceLayout 
      title="Biometric Machines & Smart Door Locks in Pakistan"
      subtitle="Pakistan's Best IT Center for Security Systems"
      icon={<ShieldAlert className="w-8 h-8" />}
      description="BugsFixer Pakistan provides advanced biometric attendance machines, facial recognition terminals, and smart biometric door lock systems for offices and industries nationwide. We are experts in ZKTeco, Hikvision, and Dahua security solutions."
      image="/images/biometric-locks.jpg"
      priceRangeLabel="Dynamic Market Service Rates"
      features={[
        "Biometric Fingerprint & Face Recognition Attendance",
        "Access Control Systems (EM Lock/Magnetic Lock)",
        "Burglar & Intrusion Alarm Systems (Wireless/Wired)",
        "Fire Alarm Control Panels (Conventional & Addressable)",
        "Smoke, Heat, and Motion Sensors Calibration",
        "PIR (Passive Infrared) Sensor Installation",
        "Panic Buttons & Emergency Sounders Integration",
        "Centralized Security Monitoring Station Setup",
        "Gate Automation & Turnstile Barriers",
        "Time & Attendance Software Management"
      ]}
    >
      <div className="mt-12 border-2 border-slate-100 rounded-3xl p-8 bg-white shadow-sm overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 -mr-16 -mt-16 rounded-full opacity-50"></div>
        <h3 className="text-2xl font-black text-slate-900 mb-6">Security Consultation</h3>
        <p className="text-slate-600 mb-8 max-w-2xl">
          Don't leave your property's safety to chance. Our security experts conduct a full site vulnerability audit to determine exactly what systems you need.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-slate-50 rounded-xl">
            <div className="font-bold text-blue-600 mb-1">Residential</div>
            <div className="text-xs text-slate-500 italic">Smart Home Security Bundles</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl">
            <div className="font-bold text-blue-600 mb-1">Commercial</div>
            <div className="text-xs text-slate-500 italic">Office Access Control & Attendance</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl">
            <div className="font-bold text-blue-600 mb-1">Industrial</div>
            <div className="text-xs text-slate-500 italic">Fire Safety & Large Scale Surveillance</div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Security;
