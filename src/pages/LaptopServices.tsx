import { useEffect } from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { Smartphone } from 'lucide-react';

const LaptopServices = () => {
  useEffect(() => {
    document.title = "Used Business Laptops & Laptop Repair in Pakistan – BugsFixer";
  }, []);

  return (
    <ServiceLayout 
      title="Used Business Laptops & Laptop Repair in Pakistan"
      subtitle="Pakistan's Best IT Center for Laptop Services"
      icon={<Smartphone className="w-8 h-8" />}
      description="BugsFixer Pakistan is the leading service center for used business laptops and professional PC repairs. We supply high-quality Dell, HP, and Lenovo business series laptops and provide expert chip-level motherboard repairs across Pakistan."
      image="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      features={[
        "Advanced Chip-Level Motherboard Repairing",
        "BGA Rework & Graphics Chip (GPU) Repair",
        "LCD/LED Screen & Keyboard Replacement",
        "Deep Data Recovery from Failed Hard Drives",
        "Genuine Windows & Software Installation",
        "SSD & RAM Upgrades for Maximum Speed",
        "Professional Cleaning & Thermal Paste Service",
        "BIOS Programming & Password Removal",
        "Battery & Power Adapter Diagnostics",
        "Used Laptop Buying & Selling Consultation"
      ]}
    >
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-lg mb-3">Software Services</h3>
          <p className="text-slate-500 text-sm mb-4">Complete OS optimization, virus removal, and specialized software installation for professionals.</p>
          <ul className="text-xs space-y-2 text-blue-600 font-bold">
            <li>• Windows 10/11 Professional Setup</li>
            <li>• Malware & Ransomware Cleanup</li>
            <li>• Driver Optimization</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-lg mb-3">Hardware Repair</h3>
          <p className="text-slate-500 text-sm mb-4">Expert diagnostics and repair for physical components using high-end soldering stations.</p>
          <ul className="text-xs space-y-2 text-blue-600 font-bold">
            <li>• Charging Port (DC Jack) Fix</li>
            <li>• Hinge & Body Restoration</li>
            <li>• Liquid Damage Cleanup</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-lg mb-3">Performance Boost</h3>
          <p className="text-slate-500 text-sm mb-4">Make your old laptop feel like new with our specialized performance upgrade bundles.</p>
          <ul className="text-xs space-y-2 text-blue-600 font-bold">
            <li>• NVMe/SATA SSD Migration</li>
            <li>• Dual Channel RAM Upgrades</li>
            <li>• Performance Benchmarking</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default LaptopServices;
