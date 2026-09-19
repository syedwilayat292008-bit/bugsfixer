import { useEffect } from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { Camera } from 'lucide-react';

const CCTV = () => {
  useEffect(() => {
    document.title = "CCTV Installation & Security Systems in Pakistan – BugsFixer";
  }, []);

  return (
    <ServiceLayout 
      title="CCTV Installation & Security Systems in Pakistan"
      subtitle="Pakistan's Best IT Center for Surveillance"
      icon={<Camera className="w-8 h-8" />}
      description="BugsFixer Pakistan provides professional, end-to-end CCTV installation and security surveillance solutions for offices, schools, and industries nationwide. We specialize in advanced IP-based and Analog systems, including 4K Hikvision and Dahua camera setups."
      image="https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      features={[
        "Professional Installation of IP & Analog Cameras",
        "HD/4K High-Definition Resolution Support",
        "Remote Mobile Viewing (Android/iOS) Setup",
        "ColorVu & Full-Color Night Vision Technology",
        "NVR/DVR Configuration & HDD Storage Management",
        "Motion Detection, AI Human Detection & Smart Alerts",
        "PTZ (Pan-Tilt-Zoom) Camera Setup for Large Areas",
        "Structured Cabling (Cat6) & Connector Management",
        "Annual Maintenance Contracts (AMC) for Businesses",
        "Remote Backup & Cloud Storage Configuration"
      ]}
    >
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <h3 className="text-xl font-bold mb-4 text-slate-900">IP Camera Systems (Modern)</h3>
          <p className="text-slate-600 mb-4">
            Best for high-security environments. Features include PoE (Power over Ethernet) for single-cable installation, 4K resolution, and advanced AI features like face recognition and perimeter protection.
          </p>
          <ul className="space-y-2 text-sm text-slate-500">
            <li>• Superior 4K+ Image Quality</li>
            <li>• Easy Scalability for Large Offices</li>
            <li>• Advanced Smart Analytics</li>
            <li>• Secure Encrypted Transmission</li>
          </ul>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <h3 className="text-xl font-bold mb-4 text-slate-900">Analog Camera Systems (Reliable)</h3>
          <p className="text-slate-600 mb-4">
            A cost-effective solution for homes and small shops. Modern HD-CVI/TVI technology now supports up to 5MP/8MP resolution over traditional coaxial cables.
          </p>
          <ul className="space-y-2 text-sm text-slate-500">
            <li>• Budget-Friendly Installation</li>
            <li>• Zero Latency Video Feed</li>
            <li>• Long-Distance Transmission</li>
            <li>• Robust Performance in Harsh Weather</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-blue-600 rounded-3xl p-8 md:p-12 text-white text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Professional Process</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
            <div className="text-2xl font-black mb-2 opacity-30">01</div>
            <div className="text-sm font-bold">Site Survey</div>
          </div>
          <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
            <div className="text-2xl font-black mb-2 opacity-30">02</div>
            <div className="text-sm font-bold">Plan & Design</div>
          </div>
          <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
            <div className="text-2xl font-black mb-2 opacity-30">03</div>
            <div className="text-sm font-bold">Installation</div>
          </div>
          <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
            <div className="text-2xl font-black mb-2 opacity-30">04</div>
            <div className="text-sm font-bold">Handover</div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default CCTV;
