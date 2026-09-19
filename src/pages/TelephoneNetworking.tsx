import { useEffect } from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { PhoneCall } from 'lucide-react';

const TelephoneNetworking = () => {
  useEffect(() => {
    document.title = "Office Networking & PABX Systems in Pakistan – BugsFixer";
  }, []);

  return (
    <ServiceLayout 
      title="Office Networking & PABX Systems in Pakistan"
      subtitle="Pakistan's Best IT Center for Communication"
      icon={<PhoneCall className="w-8 h-8" />}
      description="BugsFixer Pakistan provides complete office networking, PABX telephone exchange setups, and structured cabling solutions nationwide. We are experts in Cisco, Hikvision, and Dahua networking hardware for businesses of all sizes."
      image="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      features={[
        "Structured LAN/WAN Network Cabling (Cat6/Cat6A/Fiber)",
        "PABX/Intercom Exchange Installation & Programming",
        "Router, Switch & Server Rack Management",
        "Wireless Site Survey & Access Point Deployment",
        "VPN Configuration for Remote Office Connectivity",
        "VOIP (Voice Over IP) System Integration",
        "Network Security & Firewall Implementation",
        "Fiber Optic Splicing & Termination Services",
        "Data Center Infrastructure & Cable Management",
        "IP Telephony & Unified Communications"
      ]}
    >
      <div className="mt-12 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 md:p-12">
          <h3 className="text-2xl font-black text-slate-900 mb-6">Our Technical Specializations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="flex items-center gap-2 font-bold text-blue-600 mb-4 uppercase text-sm tracking-widest">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                Structured Cabling
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Expert installation of network cables following global standards. We ensure zero crosstalk, labeled ports, and organized racks for easy troubleshooting.
              </p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-bold text-blue-600 mb-4 uppercase text-sm tracking-widest">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                PABX Systems
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Seamless internal communication systems for offices and large commercial properties. From traditional analog to modern IP-PBX solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default TelephoneNetworking;
