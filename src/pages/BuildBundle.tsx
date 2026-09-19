import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, Network, Smartphone, Laptop, Zap, Phone, ShieldCheck, 
  Download, MessageSquare, Info, ShoppingCart, User, Trash2, 
  Package, Lock, Layers, CheckCircle2, Plus, Minus, Monitor, ArrowRight, Settings, FileText
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Link, useSearchParams } from 'react-router-dom';

// --- Types ---
export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  specs: string;
  price?: string | number;
  condition: string;
  image?: string;
  quantity?: number;
}

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  subServices: {
    id: string;
    name: string;
    unitLabel: string;
    options?: number[];
  }[];
}

interface Selection {
  categoryId: string;
  subServiceId: string;
  quantity: number;
  supplyItems: boolean; 
}

interface SoftwareSelection {
  enabled: boolean;
  plan: 'essential' | 'plus' | 'professional';
  nodes: number; 
}

// --- Enterprise Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.6 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.3, duration: 0.6 } }
};

// --- Services Data (Without Fixed Prices) ---
const SERVICES: ServiceCategory[] = [
  {
    id: 'cctv', title: 'CCTV / Camera Systems', icon: <Camera className="w-6 h-6" />, description: 'Professional surveillance installation, cabling & DVR/NVR configuration.',
    subServices: [
      { id: 'ip-camera', name: 'IP Camera System Service', unitLabel: 'Cameras', options: [4, 8, 16, 32] },
      { id: 'analog-camera', name: 'Analog Camera System Service', unitLabel: 'Cameras', options: [4, 8, 16, 32] },
    ]
  },
  {
    id: 'networking', title: 'Networking Setup', icon: <Network className="w-6 h-6" />, description: 'Enterprise network cabling, switch routing & Wi-Fi optimization.',
    subServices: [
      { id: 'net-setup', name: 'Network Device & Structure Setup', unitLabel: 'Devices/Nodes', options: [5, 10, 15, 20] },
    ]
  },
  {
    id: 'biometric', title: 'Biometric Systems', icon: <Smartphone className="w-6 h-6" />, description: 'Time attendance terminal installation & electronic door access control.',
    subServices: [
      { id: 'bio-install', name: 'Biometric & Door Lock Service', unitLabel: 'Devices', options: [1, 2, 4] },
    ]
  },
  {
    id: 'laptop', title: 'Laptop & PC Services', icon: <Laptop className="w-6 h-6" />, description: 'Expert chip-level repair, OS optimization, and virus removal.',
    subServices: [
      { id: 'software-fix', name: 'Software / OS Optimization', unitLabel: 'Units' },
      { id: 'hardware-repair', name: 'Chip-Level Hardware Repair', unitLabel: 'Units' },
      { id: 'virus-removal', name: 'Advanced Virus/Malware Cleaning', unitLabel: 'Units' },
    ]
  },
  {
    id: 'electrical', title: 'Electrical Repairs', icon: <Zap className="w-6 h-6" />, description: 'Professional power cabling, switchboard repair, and fault fixing.',
    subServices: [
      { id: 'elec-repair', name: 'Socket & Switch Point Service', unitLabel: 'Points' },
      { id: 'elec-urgent', name: 'Urgent Electrical Fault Visit', unitLabel: 'Visits' },
    ]
  },
  {
    id: 'telephone', title: 'Telephone Systems', icon: <Phone className="w-6 h-6" />, description: 'PABX exchange configuration, intercom cabling, and line fault repairs.',
    subServices: [
      { id: 'tel-setup', name: 'PABX Exchange Configuration', unitLabel: 'Sets', options: [5, 10, 20] },
      { id: 'tel-repair', name: 'Intercom Fault Repair Service', unitLabel: 'Visits' },
    ]
  },
  {
    id: 'consultancy', title: 'IT Consultancy', icon: <ShieldCheck className="w-6 h-6" />, description: 'Expert network security audits and turn-key infrastructure planning.',
    subServices: [
      { id: 'cons-audit', name: 'Business Network & Security Audit', unitLabel: 'Audits' },
      { id: 'cons-bundle', name: 'Turn-key IT Project Planning', unitLabel: 'Projects' },
    ]
  },
];

const BuildBundle = () => {
  const [searchParams] = useSearchParams();
  const [selections, setSelections] = useState<Selection[]>([]);
  const [hardwareCart, setHardwareCart] = useState<InventoryItem[]>([]);
  const [clientInfo, setClientInfo] = useState({ name: '', contact: '' });

  const [softwareSelection, setSoftwareSelection] = useState<SoftwareSelection>({
    enabled: false,
    plan: 'plus',
    nodes: 2 
  });

  // --- Enterprise SEO & Init ---
  useEffect(() => {
    document.title = "Build Your Custom IT Bundle | BugsFixer Pakistan";
    
    const softwareParam = searchParams.get('software');
    if (softwareParam === 'essential' || softwareParam === 'plus' || softwareParam === 'professional') {
      setSoftwareSelection({
        enabled: true,
        plan: softwareParam,
        nodes: softwareParam === 'professional' ? 1 : 2
      });
    }

    try {
      const savedCart = localStorage.getItem('bugsfixer_cart');
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) setHardwareCart(parsed);
      }
    } catch (e) {
      console.warn("Could not load cart from localStorage", e);
    }
  }, [searchParams]);

  const toggleService = (categoryId: string, subServiceId: string) => {
    setSelections(prev => {
      const exists = prev.find(s => s.subServiceId === subServiceId);
      if (exists) return prev.filter(s => s.subServiceId !== subServiceId);
      
      const category = SERVICES.find(c => c.id === categoryId);
      const sub = category?.subServices.find(s => s.id === subServiceId);
      const quantity = sub?.options ? sub.options[0] : 1;
      
      return [...prev, { categoryId, subServiceId, quantity, supplyItems: false }];
    });
  };

  const updateQuantity = (subServiceId: string, quantity: number) => {
    setSelections(prev => prev.map(s => s.subServiceId === subServiceId ? { ...s, quantity: Math.max(1, quantity) } : s));
  };

  const toggleSupply = (subServiceId: string) => {
    setSelections(prev => prev.map(s => s.subServiceId === subServiceId ? { ...s, supplyItems: !s.supplyItems } : s));
  };

  const removeHardware = (id: string) => {
    const updated = hardwareCart.filter(item => item.id !== id);
    setHardwareCart(updated);
    try {
      localStorage.setItem('bugsfixer_cart', JSON.stringify(updated));
    } catch (e) {
      console.warn("Could not save cart", e);
    }
  };

  const getSoftwarePlanTitle = () => {
    if (softwareSelection.plan === 'essential') return 'Essential Plan (Standalone POS)';
    if (softwareSelection.plan === 'plus') return `Plus Plan (Python Server • ${softwareSelection.nodes} Terminal PCs)`;
    return `Professional Plan (Mobile App & Dashboard • ${softwareSelection.nodes} Branch/es)`;
  };

  // --- PDF Generator for Technical Services ---
  const generateServicePDF = () => {
    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      doc.setFillColor(37, 99, 235);
      doc.rect(0, 0, pageWidth, 40, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(22);
      doc.text('BUGS FIXER', 15, 20);
      doc.setFontSize(10);
      doc.text('Consumer Electronics & IT Service Center', 15, 28);
      doc.text('Reliable IT & Technical Services Nationwide', 15, 34);

      doc.setTextColor(0, 0, 0);
      doc.setFontSize(13);
      doc.text('CUSTOM SERVICE & IT BUNDLE REQUISITION', 15, 55);
      doc.setFontSize(9);
      doc.text(`Quotation No: BF-SRV-${Date.now().toString().slice(-6)}`, pageWidth - 65, 55);
      doc.text(`Date: ${new Date().toLocaleDateString()}`, pageWidth - 65, 62);
      doc.text('CLIENT DETAILS:', 15, 75);
      doc.text(`Name: ${clientInfo.name || 'Valued Client'}`, 15, 82);
      doc.text(`Contact: ${clientInfo.contact || 'N/A'}`, 15, 89);

      const tableData: any[] = selections.map((sel, idx) => {
        const category = SERVICES.find(c => c.id === sel.categoryId);
        const sub = category?.subServices.find(s => s.id === sel.subServiceId);
        return [
          (idx + 1).toString(), 
          category?.title || '', 
          sub?.name || '', 
          `${sel.quantity || 1} ${sub?.unitLabel || 'Units'}`,
          sel.supplyItems ? 'BugsFixer Supplying Materials' : 'Client Providing Materials',
          'Market Rate (On Confirmation)'
        ];
      });

      if (softwareSelection.enabled) {
        tableData.push([
          (tableData.length + 1).toString(), 
          'Max Sale ERP Software', 
          getSoftwarePlanTitle(),
          `${softwareSelection.nodes} Node/Branch(es)`, 
          'Software License & Setup', 
          'Custom Software Quote'
        ]);
      }

      autoTable(doc, {
        startY: 95,
        head: [['#', 'Service Category', 'Service / Software Details', 'Quantity / Nodes', 'Hardware / Cables', 'Pricing Status']],
        body: tableData,
        theme: 'striped',
        headStyles: { fillColor: [37, 99, 235] },
        styles: { fontSize: 8 },
      });

      const finalY = (doc as any).lastAutoTable?.finalY ? (doc as any).lastAutoTable.finalY + 12 : 160;
      
      doc.setFontSize(9);
      doc.setTextColor(37, 99, 235);
      doc.text('* Official quotation and current market rates will be provided upon review by our engineering team.', 15, finalY);
      
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(9);
      doc.text('NOTES / TERMS:', 15, finalY + 12);
      doc.text('1. Due to market inflation, exact prices are calculated on current daily market rates.', 15, finalY + 18);
      doc.text('2. Hardware, cables, and accessory items are billed as per live market rates.', 15, finalY + 24);
      doc.text('3. Software plans include installation, setup, and initial configuration.', 15, finalY + 30);
      doc.text('4. Quotation valid for 7 days from the date of issue.', 15, finalY + 36);

      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.text('Thank you for choosing BUGS Fixer. Pakistan\'s Best IT Service Center.', pageWidth / 2, 280, { align: 'center' });
      doc.save(`BugsFixer_Service_Requisition_${clientInfo.name || 'Client'}.pdf`);
    } catch (err) {
      console.error("Error generating Service PDF:", err);
      alert("Could not generate PDF. Please try again.");
    }
  };

  // --- PDF Generator for Hardware Items ---
  const generateHardwarePDF = () => {
    if (hardwareCart.length === 0) return;
    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      
      doc.setFillColor(31, 41, 55);
      doc.rect(0, 0, pageWidth, 40, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(22);
      doc.text('BUGS FIXER', 15, 20);
      doc.setFontSize(10);
      doc.text('Hardware & IT Inventory Division', 15, 28);
      doc.text('Genuine Dealer Sourced Devices & Equipment', 15, 34);

      doc.setTextColor(0, 0, 0);
      doc.setFontSize(13);
      doc.text('HARDWARE DEVICE REQUISITION', 15, 55);
      doc.setFontSize(9);
      doc.text(`Quotation No: BF-HW-${Date.now().toString().slice(-6)}`, pageWidth - 65, 55);
      doc.text(`Date: ${new Date().toLocaleDateString()}`, pageWidth - 65, 62);
      doc.text('CLIENT DETAILS:', 15, 75);
      doc.text(`Name: ${clientInfo.name || 'Valued Client'}`, 15, 82);
      doc.text(`Contact: ${clientInfo.contact || 'N/A'}`, 15, 89);

      const tableData = hardwareCart.map((item, idx) => {
        const quantity = item.quantity || 1;
        return [
          idx + 1, 
          item.category || 'Hardware', 
          item.name || 'Item', 
          `${item.specs || ''} (${item.condition || 'Tested'})`,
          quantity.toString(), 
          'Live Market Rate'
        ];
      });

      autoTable(doc, {
        startY: 95,
        head: [['#', 'Category', 'Device Name & Specs', 'Condition', 'Qty', 'Price Status']],
        body: tableData,
        theme: 'grid',
        headStyles: { fillColor: [31, 41, 55] },
        styles: { fontSize: 8 },
      });

      const finalY = (doc as any).lastAutoTable?.finalY ? (doc as any).lastAutoTable.finalY + 12 : 160;
      doc.setFontSize(9);
      doc.text('HARDWARE TERMS:', 15, finalY + 10);
      doc.text('1. All devices are genuine dealer-sourced items with quality inspection.', 15, finalY + 16);
      doc.text('2. Final pricing is confirmed based on current market availability.', 15, finalY + 22);
      doc.text('3. Warranty coverage applies as per specific device listing.', 15, finalY + 28);
      doc.save(`BugsFixer_Hardware_Requisition_${clientInfo.name || 'Client'}.pdf`);
    } catch (err) {
      console.error("Error generating Hardware PDF:", err);
      alert("Could not generate Hardware PDF. Please try again.");
    }
  };

  const sendWhatsApp = () => {
    const serviceList = selections.map(sel => {
      const category = SERVICES.find(c => c.id === sel.categoryId);
      const sub = category?.subServices.find(s => s.id === sel.subServiceId);
      const materialText = sel.supplyItems ? ' [Including Materials/Cables]' : '';
      return `• ${sub?.name || 'Service'} (${sel.quantity || 1} ${sub?.unitLabel || 'Units'})${materialText}`;
    }).join('%0A');

    const softwareText = softwareSelection.enabled 
      ? `%0A%0A*Max Sale ERP Software:*%0A• ${getSoftwarePlanTitle()}` 
      : '';

    const hardwareList = hardwareCart.map(h => {
      const quantity = h.quantity || 1;
      return `• ${h.name} x${quantity} (${h.category})`;
    }).join('%0A');

    const message = `Assalam-o-Alaikum BugsFixer!%0A%0A` +
      `I have built a custom IT bundle on your website and would like the latest market rate quotation.%0A%0A` +
      `*Client Details:*%0A` +
      `Name: ${clientInfo.name || 'Valued Client'}%0A` +
      `Contact: ${clientInfo.contact || 'N/A'}%0A%0A` +
      `*Technical Services Requested:*%0A${serviceList || 'None selected'}` +
      `${softwareText}%0A%0A` +
      `*Hardware Devices:*%0A${hardwareList || 'None selected'}%0A%0A` +
      `Please confirm current live market pricing and setup timeline for this requisition.`;

    window.open(`https://wa.me/923216900448?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const totalItemCount = selections.length + (softwareSelection.enabled ? 1 : 0) + hardwareCart.length;

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial="hidden" animate="show" variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 border border-blue-200 rounded-full mb-6">
            <Settings className="w-4 h-4 text-blue-600 animate-spin-slow" />
            <span className="text-xs font-black text-blue-600 uppercase tracking-widest">Custom Bundle Builder</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">IT Bundle</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Select your CCTV, networking, Max Sale ERP software, and hardware requirements. Generate an instant custom requisition PDF or request live market rates on WhatsApp.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: SELECTIONS                                      */}
          {/* ============================================================ */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Client Info Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10" />
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-blue-600 rounded-2xl text-white shadow-inner">
                  <User size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Client Details</h2>
                  <p className="text-sm font-medium text-slate-500">Personalize your custom quotation requisition document.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 absolute top-3 left-6">Full Name / Company Name</label>
                  <input 
                    type="text" 
                    className="w-full px-6 pt-8 pb-3 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-slate-900 shadow-sm"
                    placeholder="e.g. Valued Business Client"
                    value={clientInfo.name}
                    onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                  />
                </div>
                <div className="relative">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 absolute top-3 left-6">WhatsApp / Contact Number</label>
                  <input 
                    type="text" 
                    className="w-full px-6 pt-8 pb-3 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-slate-900 shadow-sm"
                    placeholder="e.g. +92 321 6900448"
                    value={clientInfo.contact}
                    onChange={(e) => setClientInfo({ ...clientInfo, contact: e.target.value })}
                  />
                </div>
              </div>
            </motion.div>

            {/* 2. MAX SALE ERP CUSTOM SOFTWARE BUILDER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className={`rounded-[2.5rem] p-8 lg:p-10 transition-all duration-500 border-2 relative overflow-hidden ${
                softwareSelection.enabled 
                  ? 'bg-slate-900 text-white border-blue-500 shadow-2xl shadow-blue-900/20' 
                  : 'bg-white/80 backdrop-blur-md text-slate-900 border-slate-100 hover:border-blue-200 shadow-xl shadow-slate-200/50'
              }`}
            >
              {softwareSelection.enabled && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 filter blur-[80px] rounded-full -z-10" />
              )}
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div className="flex items-center gap-5">
                  <div className={`p-4 rounded-2xl shadow-inner ${softwareSelection.enabled ? 'bg-blue-600 text-white' : 'bg-indigo-50 text-indigo-600'}`}>
                    <Layers size={28} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-black">Max Sale ERP Software</h3>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${softwareSelection.enabled ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : 'bg-slate-100 text-slate-500 border-slate-200'}`}>
                        Software Division
                      </span>
                    </div>
                    <p className={`text-sm font-medium ${softwareSelection.enabled ? 'text-slate-300' : 'text-slate-500'}`}>
                      Custom Python ERP, POS Billing, Master-Terminal LAN & Web Dashboard.
                    </p>
                  </div>
                </div>

                <label className="flex items-center gap-3 cursor-pointer shrink-0 bg-black/5 p-2 rounded-xl border border-black/5">
                  <span className={`text-sm font-black uppercase tracking-widest ${softwareSelection.enabled ? 'text-blue-400' : 'text-slate-400'}`}>
                    {softwareSelection.enabled ? 'Included' : 'Add Software'}
                  </span>
                  <div className={`w-12 h-6 rounded-full p-1 transition-colors ${softwareSelection.enabled ? 'bg-blue-600' : 'bg-slate-300'}`}>
                    <motion.div 
                      layout 
                      className="w-4 h-4 bg-white rounded-full shadow-sm"
                      animate={{ x: softwareSelection.enabled ? 24 : 0 }}
                    />
                  </div>
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={softwareSelection.enabled}
                    onChange={(e) => setSoftwareSelection(prev => ({ ...prev, enabled: e.target.checked }))}
                  />
                </label>
              </div>

              <AnimatePresence>
                {softwareSelection.enabled && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                    className="space-y-8 pt-6 border-t border-slate-700/50"
                  >
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">Select Software Plan</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { id: 'essential', title: 'Essential Plan', sub: 'Standalone POS' },
                          { id: 'plus', title: 'Plus Plan', sub: 'Python Server (1-10 PCs)' },
                          { id: 'professional', title: 'Professional Plan', sub: 'Mobile + Web Dashboard' },
                        ].map(plan => (
                          <motion.button
                            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                            key={plan.id} type="button"
                            onClick={() => setSoftwareSelection(prev => ({ ...prev, plan: plan.id as any }))}
                            className={`p-5 rounded-2xl text-left border-2 transition-all ${
                              softwareSelection.plan === plan.id
                                ? 'bg-blue-600/20 border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                                : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-800'
                            }`}
                          >
                            <p className="font-black text-base">{plan.title}</p>
                            <p className="text-xs mt-1 font-medium">{plan.sub}</p>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {softwareSelection.plan !== 'essential' && (
                      <div className="p-5 bg-slate-800 rounded-2xl border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 shadow-inner">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-slate-700 rounded-xl"><Monitor className="w-5 h-5 text-blue-400" /></div>
                          <div>
                            <p className="font-black text-sm text-white">
                              {softwareSelection.plan === 'plus' ? 'Terminal PCs Count' : 'Business Branches Count'}
                            </p>
                            <p className="text-xs text-slate-400 mt-1 font-medium">
                              {softwareSelection.plan === 'plus' ? 'Up to 10 Terminal PCs connected to 1 Master' : 'Live multi-branch dashboard synchronization'}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 bg-slate-900 p-2 rounded-xl border border-slate-700 shadow-sm">
                          <button type="button" disabled={softwareSelection.nodes <= 1} onClick={() => setSoftwareSelection(prev => ({ ...prev, nodes: Math.max(1, prev.nodes - 1) }))} className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-30 transition-colors"><Minus className="w-4 h-4" /></button>
                          <span className="font-mono font-black text-2xl text-white px-4 w-16 text-center">{softwareSelection.nodes}</span>
                          <button type="button" disabled={softwareSelection.nodes >= 10} onClick={() => setSoftwareSelection(prev => ({ ...prev, nodes: Math.min(10, prev.nodes + 1) }))} className="p-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-30 transition-colors"><Plus className="w-4 h-4" /></button>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-4 text-xs font-medium text-blue-200 bg-blue-900/30 p-5 rounded-2xl border border-blue-500/20">
                      <div className="p-2 bg-blue-500/20 rounded-lg shrink-0"><Info className="w-5 h-5 text-blue-400" /></div>
                      <span><strong>Software Quotation:</strong> Customized software pricing will be quoted based on your exact node count and setup requirements in your final WhatsApp summary.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* 3. Hardware Cart */}
            <AnimatePresence>
              {hardwareCart.length > 0 && (
                <motion.div 
                  initial="hidden" animate="show" exit={{ opacity: 0, height: 0 }} variants={scaleIn}
                  className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative"
                >
                  <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-50 rounded-br-full -z-10" />
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-emerald-500 rounded-2xl text-white shadow-inner">
                      <ShoppingCart size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-slate-900">Hardware Selection</h2>
                      <p className="text-sm font-medium text-slate-500">Selected devices from our inventory network.</p>
                    </div>
                  </div>
                  <motion.div variants={staggerContainer} className="space-y-4">
                    {hardwareCart.map(item => (
                      <motion.div key={item.id} variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-slate-50 rounded-2xl group transition-all hover:bg-white hover:shadow-lg border border-transparent hover:border-emerald-200 gap-4">
                        <div className="flex items-center gap-5">
                          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center overflow-hidden border border-slate-100 shadow-sm shrink-0">
                            {item.image ? <img src={item.image} alt={item.name} className="w-full h-full object-cover" /> : <Package className="text-emerald-300 w-8 h-8" />}
                          </div>
                          <div>
                            <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-md mb-2 inline-block">{item.category}</span>
                            <h4 className="font-black text-slate-900 text-lg leading-tight">{item.name}</h4>
                            <p className="text-xs font-medium text-slate-500 mt-1 line-clamp-1">{item.specs}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                          <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">Live Market Rate</span>
                          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => removeHardware(item.id)} className="p-3 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors">
                            <Trash2 size={20} />
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 4. Technical Services Grid */}
            <div className="space-y-8 pt-4">
              <div className="flex items-center gap-4 ml-2">
                <div className="w-2 h-8 bg-blue-600 rounded-full" />
                <h3 className="text-3xl font-black text-slate-900">Available Technical Services</h3>
              </div>
              
              <div className="space-y-6">
                {SERVICES.map((cat, idx) => (
                  <motion.div 
                    key={cat.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: idx * 0.1, type: 'spring' }}
                    className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-xl shadow-slate-200/40 border border-slate-100 relative overflow-hidden"
                  >
                    <div className="flex items-center gap-5 mb-8 border-b border-slate-100 pb-8">
                      <div className="p-4 bg-slate-50 text-blue-600 rounded-2xl shadow-inner border border-slate-100">
                        {cat.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-900">{cat.title}</h3>
                        <p className="text-sm font-medium text-slate-500 mt-1">{cat.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {cat.subServices.map(sub => {
                        const isSelected = selections.find(s => s.subServiceId === sub.id);
                        return (
                          <motion.div 
                            key={sub.id} layout
                            onClick={() => toggleService(cat.id, sub.id)}
                            className={`p-6 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                              isSelected 
                                ? 'bg-blue-50/50 border-blue-500 shadow-[0_8px_30px_rgba(59,130,246,0.12)]' 
                                : 'bg-slate-50 border-slate-100 hover:border-blue-200 hover:shadow-md'
                            }`}
                          >
                            {isSelected && <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-bl-full -z-10" />}
                            
                            <div className="flex justify-between items-start mb-4">
                              <h4 className={`font-black text-lg pr-8 ${isSelected ? 'text-blue-900' : 'text-slate-900'}`}>{sub.name}</h4>
                              <div className={`absolute top-6 right-6 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                isSelected ? 'bg-blue-600 border-blue-600' : 'border-slate-300 bg-white'
                              }`}>
                                {isSelected && <Zap size={14} className="text-white" />}
                              </div>
                            </div>
                            
                            <p className="text-xs font-bold text-slate-500 mb-6 bg-white inline-block px-3 py-1.5 rounded-lg shadow-sm border border-slate-100">
                              Billing: <span className="text-blue-600 font-black">Market Rate</span> / {sub.unitLabel.toLowerCase().slice(0, -1)}
                            </p>
                            
                            <AnimatePresence>
                              {isSelected && (
                                <motion.div 
                                  initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                                  onClick={(e) => e.stopPropagation()} className="pt-5 border-t border-blue-200/50"
                                >
                                  <div className="flex flex-wrap gap-2 mb-5">
                                    {sub.options ? (
                                      sub.options.map(opt => (
                                        <button
                                          key={opt} onClick={() => updateQuantity(sub.id, opt)}
                                          className={`px-5 py-2.5 rounded-xl text-sm font-black transition-all ${
                                            isSelected.quantity === opt ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-blue-100 border border-slate-200'
                                          }`}
                                        >
                                          {opt} {sub.unitLabel}
                                        </button>
                                      ))
                                    ) : (
                                      <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-slate-200 shadow-sm w-full">
                                        <span className="text-xs font-black uppercase tracking-widest text-slate-400 pl-2">Qty:</span>
                                        <input 
                                          type="number" min="1"
                                          className="w-full px-4 py-2 rounded-lg bg-slate-50 border-none outline-none font-black text-lg text-blue-900 text-right"
                                          value={isSelected.quantity}
                                          onChange={(e) => updateQuantity(sub.id, parseInt(e.target.value) || 1)}
                                        />
                                      </div>
                                    )}
                                  </div>
                                  <label className="flex items-center gap-3 cursor-pointer bg-white p-4 rounded-xl border border-blue-100 hover:border-blue-300 transition-colors">
                                    <input 
                                      type="checkbox" className="w-5 h-5 rounded-md border-slate-300 text-blue-600 focus:ring-blue-500"
                                      checked={isSelected.supplyItems} onChange={() => toggleSupply(sub.id)}
                                    />
                                    <span className="text-sm font-bold text-slate-700 leading-tight">Include Cable Structure & Optional Materials</span>
                                  </label>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: STICKY SUMMARY                                 */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-28 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
                className="bg-[#0B1120] text-white rounded-[2.5rem] p-8 shadow-2xl border border-slate-800 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
                
                <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <div className="w-2 h-6 bg-blue-500 rounded-full" />
                  Bundle Overview
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-slate-400 font-medium">
                    <span>Selected Services:</span>
                    <span className="text-white font-black">{selections.length} Items</span>
                  </div>

                  <AnimatePresence>
                    {softwareSelection.enabled && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="flex justify-between items-start text-blue-300 bg-blue-900/30 p-4 rounded-2xl border border-blue-500/20">
                        <div>
                          <span className="block font-black text-sm text-blue-100 mb-0.5">Max Sale ERP</span>
                          <span className="text-[10px] font-bold tracking-widest uppercase">{softwareSelection.plan} Plan</span>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest bg-blue-600 text-white px-2.5 py-1 rounded-md">Configured</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-between items-center text-slate-400 font-medium">
                    <span>Hardware Devices:</span>
                    <span className="text-white font-black">{hardwareCart.length} Items</span>
                  </div>

                  <div className="pt-6 border-t border-slate-800">
                    <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-2">Total Package Scope</p>
                    <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                      {totalItemCount} Total Component{totalItemCount === 1 ? '' : 's'}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 relative z-10">
                  <motion.button 
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={generateServicePDF} disabled={selections.length === 0 && !softwareSelection.enabled}
                    className={`w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 transition-all ${
                      selections.length === 0 && !softwareSelection.enabled ? 'bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-700' : 'bg-blue-600 text-white hover:bg-blue-500 shadow-xl shadow-blue-900/40'
                    }`}
                  >
                    <FileText size={18} /> Download Requisition PDF
                  </motion.button>

                  <motion.button 
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={generateHardwarePDF} disabled={hardwareCart.length === 0}
                    className={`w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 transition-all ${
                      hardwareCart.length === 0 ? 'bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-700' : 'bg-white text-slate-900 hover:bg-slate-100 shadow-xl'
                    }`}
                  >
                    <Package size={18} /> Download Hardware List
                  </motion.button>

                  <motion.button 
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={sendWhatsApp}
                    className="w-full py-4 mt-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-xl shadow-emerald-900/40"
                  >
                    <MessageSquare size={18} /> Request Live Market Rates
                  </motion.button>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-start gap-3 text-xs font-medium text-slate-400 leading-relaxed">
                  <Info size={18} className="text-blue-400 shrink-0 mt-0.5" />
                  <p>Due to current market rate inflation, official quotations are calculated on real-time market rates upon order confirmation.</p>
                </div>
              </motion.div>

              <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-slate-100 text-center shadow-lg shadow-slate-200/50 group">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100 group-hover:bg-blue-50 transition-colors">
                  <Lock className="text-slate-400 group-hover:text-blue-500 transition-colors" size={20} />
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black mb-2">Business Management</p>
                <Link to="/inventory" className="text-sm font-black text-slate-900 hover:text-blue-600 transition-colors inline-flex items-center gap-1">
                  Access Hardware Inventory <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildBundle;