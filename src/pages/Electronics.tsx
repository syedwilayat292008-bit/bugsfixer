import { useEffect } from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { Cpu } from 'lucide-react';

const Electronics = () => {
  useEffect(() => {
    document.title = "Professional Electronics Repair Services – BugsFixer Pakistan";
  }, []);

  return (
    <ServiceLayout 
      title="Professional Electronics Repair Services"
      subtitle="The Master Technicians"
      icon={<Cpu className="w-8 h-8" />}
      description="BugsFixer provides high-end electronic repair services for a vast range of consumer and industrial products across Pakistan. Our lab is equipped with the latest diagnostic tools for component-level troubleshooting."
      image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      features={[
        "SMD & Component-Level PCB Repair",
        "Industrial Controller Board Troubleshooting",
        "Medical Equipment Electronics Maintenance",
        "Power Supply (SMPS) & Inverter Repair",
        "LED/LCD TV Panel Bonding & Backlight Fix",
        "Printer & Office Equipment System Overhaul",
        "Genuine Replacement of Electronic Modules",
        "Calibration & Performance Tuning",
        "Microwave & Kitchen Appliance Logic Boards",
        "Professional Cleaning & Oxidation Removal"
      ]}
    >
      <div className="mt-12 bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
        <h3 className="text-2xl font-bold mb-6 text-center">Expertise Across Industries</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-l-4 border-blue-500 pl-6">
            <h4 className="text-blue-400 font-bold mb-2 uppercase tracking-wide">Consumer</h4>
            <p className="text-sm text-slate-400">TVs, Home Audio, Gaming Consoles, and Kitchen Appliances. We fix the boards other shops throw away.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-6">
            <h4 className="text-blue-400 font-bold mb-2 uppercase tracking-wide">Office</h4>
            <p className="text-sm text-slate-400">Printers, Scanners, UPS Systems, and Photocopier Mainboards. Keep your business running smoothly.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-6">
            <h4 className="text-blue-400 font-bold mb-2 uppercase tracking-wide">Industrial</h4>
            <p className="text-sm text-slate-400">PLC Boards, CNC Controller Repair, and Industrial Power Supplies for Pakistani factories.</p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Electronics;
