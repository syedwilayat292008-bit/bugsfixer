import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, Network, Smartphone, Laptop, Zap, Phone, ShieldCheck, 
  Download, MessageSquare, Info, ShoppingCart, User, Trash2, 
  Package, Lock, Layers, Server, CheckCircle2, Plus, Minus, Monitor, ArrowRight
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Link, useSearchParams } from 'react-router-dom';
import { InventoryItem } from '../data/initialInventory';

// --- Enterprise Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.8 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
};

// --- Types ---
interface Item {
  id: string;
  name: string;
  marketPrice: number;
}

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  subServices: {
    id: string;
    name: string;
    serviceRate: number; 
    unitLabel: string;
    options?: number[];
  }[];
  optionalItems: Item[];
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

// --- Data & Pricing ---
const SERVICES: ServiceCategory[] = [
  {
    id: 'cctv', title: 'CCTV / Camera Systems', icon: <Camera className="w-6 h-6" />, description: 'Professional surveillance services and configuration.',
    subServices: [
      { id: 'ip-camera', name: 'IP Camera Service', serviceRate: 2500, unitLabel: 'Cameras', options: [4, 8, 16, 32] },
      { id: 'analog-camera', name: 'Analog Camera Service', serviceRate: 1500, unitLabel: 'Cameras', options: [4, 8, 16, 32] },
    ],
    optionalItems: [
      { id: 'cat6-cable', name: 'Cat6 Network Cable (per meter)', marketPrice: 120 },
      { id: 'hdd-1tb', name: '1TB Surveillance Hard Disk', marketPrice: 8500 },
      { id: 'power-supply', name: 'Centralized Power Supply', marketPrice: 3500 },
      { id: 'bnc-connectors', name: 'BNC/DC Connectors (Full Set)', marketPrice: 1500 },
    ]
  },
  {
    id: 'networking', title: 'Networking Setup', icon: <Network className="w-6 h-6" />, description: 'Enterprise-grade network infrastructure and optimization.',
    subServices: [
      { id: 'net-setup', name: 'Network Device Configuration', serviceRate: 1500, unitLabel: 'Devices', options: [5, 10, 15, 20] },
    ],
    optionalItems: [
      { id: 'gigabit-switch', name: '8-Port Gigabit Switch', marketPrice: 4500 },
      { id: 'router-dual', name: 'Dual-Band Wi-Fi 6 Router', marketPrice: 12500 },
      { id: 'patch-cord', name: 'Patch Cords (Set of 10)', marketPrice: 2000 },
    ]
  },
  {
    id: 'biometric', title: 'Biometric Systems', icon: <Smartphone className="w-6 h-6" />, description: 'Advanced time, attendance, and access control.',
    subServices: [
      { id: 'bio-install', name: 'Biometric Device Service', serviceRate: 6000, unitLabel: 'Devices', options: [1, 2, 4] },
    ],
    optionalItems: [
      { id: 'bio-device', name: 'ZKTeco/Hikvision Terminal', marketPrice: 18500 },
      { id: 'em-lock', name: 'Magnetic Lock + Exit Button', marketPrice: 7500 },
    ]
  },
  {
    id: 'laptop', title: 'Laptop & PC Services', icon: <Laptop className="w-6 h-6" />, description: 'Expert repair, optimization, and hardware upgrades.',
    subServices: [
      { id: 'software-fix', name: 'Software/OS Optimization', serviceRate: 2500, unitLabel: 'Units' },
      { id: 'hardware-repair', name: 'Chip-Level Hardware Repair', serviceRate: 4500, unitLabel: 'Units' },
      { id: 'virus-removal', name: 'Advanced Virus/Malware Removal', serviceRate: 2000, unitLabel: 'Units' },
    ],
    optionalItems: [
      { id: 'ssd-upgrade', name: '512GB NVMe SSD Upgrade', marketPrice: 9500 },
      { id: 'ram-8gb', name: '8GB DDR4 RAM Module', marketPrice: 5500 },
    ]
  },
  {
    id: 'electrical', title: 'Electrical Repairs', icon: <Zap className="w-6 h-6" />, description: 'Professional electrical maintenance and repairs.',
    subServices: [
      { id: 'elec-repair', name: 'Standard Socket/Switch Repair', serviceRate: 1500, unitLabel: 'Points' },
      { id: 'elec-urgent', name: 'Urgent Electrical Fault Fixing', serviceRate: 3500, unitLabel: 'Visits' },
    ],
    optionalItems: [
      { id: 'elec-socket', name: 'Premium Electrical Sockets/Switches', marketPrice: 850 },
      { id: 'elec-wire', name: 'High-Quality Wiring (per meter)', marketPrice: 250 },
    ]
  },
  {
    id: 'telephone', title: 'Telephone Systems', icon: <Phone className="w-6 h-6" />, description: 'PABX, Intercom, and telephone networking.',
    subServices: [
      { id: 'tel-setup', name: 'Telephone Exchange Configuration', serviceRate: 4500, unitLabel: 'Sets', options: [5, 10, 20] },
      { id: 'tel-repair', name: 'PABX Fault Repair Service', serviceRate: 2500, unitLabel: 'Visits' },
    ],
    optionalItems: [
      { id: 'tel-set', name: 'Digital Telephone Set', marketPrice: 4500 },
      { id: 'tel-cable', name: '4-Core Telephone Cable (per meter)', marketPrice: 85 },
    ]
  },
  {
    id: 'consultancy', title: 'IT Consultancy', icon: <ShieldCheck className="w-6 h-6" />, description: 'Expert guidance for business IT infrastructure.',
    subServices: [
      { id: 'cons-audit', name: 'Business Network & Security Audit', serviceRate: 10000, unitLabel: 'Audits' },
      { id: 'cons-bundle', name: 'Custom IT Project Planning', serviceRate: 15000, unitLabel: 'Projects' },
    ],
    optionalItems: []
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

  // --- Enterprise SEO & Meta Tags ---
  useEffect(() => {
    document.title = "Build Your Custom IT Bundle | BugsFixer Pakistan";
    const setMetaTag = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    setMetaTag('name', 'description', 'Build a custom IT bundle combining CCTV, networking, used laptops, and Max Sale ERP. Get an instant PDF quotation or WhatsApp estimate from BugsFixer Pakistan.');
    setMetaTag('name', 'keywords', 'Custom IT Quote, BugsFixer Bundle, CCTV Price Calculator Pakistan, Network Installation Quote, ERP Software Price');
    
    // Software Query check
    const softwareParam = searchParams.get('software');
    if (softwareParam === 'essential' || softwareParam === 'plus' || softwareParam === 'professional') {
      setSoftwareSelection({
        enabled: true,
        plan: softwareParam,
        nodes: softwareParam === 'professional' ? 1 : 2
      });
    }

    const savedCart = localStorage.getItem('bugsfixer_cart');
    if (savedCart) setHardwareCart(JSON.parse(savedCart));
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
    setSelections(prev => prev.map(s => s.subServiceId === subServiceId ? { ...s, quantity } : s));
  };

  const toggleSupply = (subServiceId: string) => {
    setSelections(prev => prev.map(s => s.subServiceId === subServiceId ? { ...s, supplyItems: !s.supplyItems } : s));
  };

  const removeHardware = (id: string) => {
    const updated = hardwareCart.filter(item => item.id !== id);
    setHardwareCart(updated);
    localStorage.setItem('bugsfixer_cart', JSON.stringify(updated));
  };

  const parsePrice = (price: string | number) => {
    if (typeof price === 'number') return price;
    const cleaned = price.replace(/,/g, '');
    const matches = cleaned.match(/\d+/);
    return matches ? parseInt(matches[0]) : 0;
  };

  const calculateTotal = () => {
    let serviceTotal = 0;
    let optionalItemTotal = 0;
    let hardwareTotal = 0;

    selections.forEach(sel => {
      const category = SERVICES.find(c => c.id === sel.categoryId);
      const sub = category?.subServices.find(s => s.id === sel.subServiceId);
      if (sub && category) {
        serviceTotal += sub.serviceRate * sel.quantity;
        if (sel.supplyItems && category.optionalItems && category.optionalItems.length > 0) {
          optionalItemTotal += category.optionalItems[0].marketPrice * sel.quantity;
        }
      }
    });

    hardwareCart.forEach(item => {
      const quantity = (item as any).quantity || 1;
      hardwareTotal += parsePrice(item.price) * quantity;
    });

    return { serviceTotal, optionalItemTotal, hardwareTotal, grandTotal: serviceTotal + optionalItemTotal + hardwareTotal };
  };

  const { serviceTotal, optionalItemTotal, hardwareTotal, grandTotal } = calculateTotal();

  const getSoftwarePlanTitle = () => {
    if (softwareSelection.plan === 'essential') return 'Essential Plan (Standalone POS)';
    if (softwareSelection.plan === 'plus') return `Plus Plan (Python Server • ${softwareSelection.nodes} Terminal PCs)`;
    return `Professional Plan (Mobile App & Dashboard • ${softwareSelection.nodes} Branch/es)`;
  };

  // --- PDF GENERATORS (LOGIC UNTOUCHED) ---
  const generateServicePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.setFillColor(37, 99, 235);
    doc.rect(0, 0, pageWidth, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text('BUGS FIXER', 15, 20);
    doc.setFontSize(10);
    doc.text('Consumer Electronics & IT Service Center', 15, 28);
    doc.text('Reliable IT & Technical Services, Fair Pricing Guaranteed', 15, 34);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text('PROFESSIONAL SERVICE QUOTATION', 15, 55);
    doc.setFontSize(10);
    doc.text(`Quotation No: BF-SRV-${Date.now().toString().slice(-6)}`, pageWidth - 60, 55);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, pageWidth - 60, 62);
    doc.text('CLIENT DETAILS:', 15, 75);
    doc.text(`Name: ${clientInfo.name || 'Valued Client'}`, 15, 82);
    doc.text(`Contact: ${clientInfo.contact || 'N/A'}`, 15, 89);

    const tableData: any[] = selections.map((sel, idx) => {
      const category = SERVICES.find(c => c.id === sel.categoryId);
      const sub = category?.subServices.find(s => s.id === sel.subServiceId);
      return [
        (idx + 1).toString(), category?.title || '', sub?.name || '', sel.quantity.toString(),
        sel.supplyItems ? 'BugsFixer Supplying' : 'Client Providing',
        `PKR ${sub?.serviceRate.toLocaleString()}`, `PKR ${(sub?.serviceRate! * sel.quantity).toLocaleString()}`
      ];
    });

    if (softwareSelection.enabled) {
      tableData.push([
        (tableData.length + 1).toString(), 'Max Sale ERP Software', getSoftwarePlanTitle(),
        softwareSelection.nodes.toString(), 'Software License & Setup', 'Custom Quote', 'Custom Quote'
      ]);
    }

    autoTable(doc, {
      startY: 100,
      head: [['#', 'Service Type', 'Details', 'Qty/Nodes', 'Optional Items', 'Unit Rate', 'Total']],
      body: tableData,
      theme: 'striped',
      headStyles: { fillColor: [37, 99, 235] },
      styles: { fontSize: 8 },
    });

    const finalY = (doc as any).lastAutoTable.finalY + 10;
    doc.setFontSize(12);
    doc.text(`Subtotal (Services Labor): PKR ${serviceTotal.toLocaleString()}`, pageWidth - 90, finalY);
    if (softwareSelection.enabled) {
      doc.setFontSize(10);
      doc.setTextColor(37, 99, 235);
      doc.text(`* ERP Software Quote will be finalized upon consultation.`, pageWidth - 100, finalY + 7);
      doc.setTextColor(0, 0, 0);
    }
    
    doc.setFontSize(10);
    doc.text('NOTES / TERMS:', 15, finalY + 20);
    doc.text('1. Prices are for technical services and expert labor only.', 15, finalY + 27);
    doc.text('2. Hardware/Optional items are billed separately if supplied by us.', 15, finalY + 34);
    doc.text('3. Software licenses include installation and initial configuration.', 15, finalY + 41);
    doc.text('4. Quotation valid for 15 days.', 15, finalY + 48);

    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text('Thank you for choosing BUGS Fixer. Pakistan\'s Best IT Service Center.', pageWidth / 2, pageWidth + 60, { align: 'center' });
    doc.save(`BugsFixer_Service_Quote_${clientInfo.name || 'Client'}.pdf`);
  };

  const generateHardwarePDF = () => {
    if (hardwareCart.length === 0) return;
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    doc.setFillColor(31, 41, 55);
    doc.rect(0, 0, pageWidth, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text('BUGS FIXER', 15, 20);
    doc.setFontSize(10);
    doc.text('Hardware & IT Inventory Division', 15, 28);
    doc.text('Genuine Dealer Sourced Devices & Equipment', 15, 34);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text('HARDWARE & DEVICE QUOTATION', 15, 55);
    doc.setFontSize(10);
    doc.text(`Quotation No: BF-HW-${Date.now().toString().slice(-6)}`, pageWidth - 60, 55);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, pageWidth - 60, 62);
    doc.text('CLIENT DETAILS:', 15, 75);
    doc.text(`Name: ${clientInfo.name || 'Valued Client'}`, 15, 82);
    doc.text(`Contact: ${clientInfo.contact || 'N/A'}`, 15, 89);

    const tableData = hardwareCart.map((item, idx) => {
      const quantity = (item as any).quantity || 1;
      const unitPrice = parsePrice(item.price);
      return [
        idx + 1, item.category, item.name, `${item.specs} (${item.condition})`,
        quantity.toString(), `PKR ${unitPrice.toLocaleString()}`, `PKR ${(unitPrice * quantity).toLocaleString()}`
      ];
    });

    autoTable(doc, {
      startY: 100,
      head: [['#', 'Category', 'Device Name & Specs', 'Condition/Specs', 'Qty', 'Unit Rate', 'Total']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [31, 41, 55] },
      styles: { fontSize: 7 },
    });

    const finalY = (doc as any).lastAutoTable.finalY + 10;
    doc.setFontSize(12);
    doc.text(`Total Hardware Investment: PKR ${hardwareTotal.toLocaleString()} (Est.)`, pageWidth - 90, finalY);
    doc.setFontSize(10);
    doc.text('HARDWARE TERMS:', 15, finalY + 20);
    doc.text('1. We provide genuine, high-quality devices sourced via trusted dealers.', 15, finalY + 27);
    doc.text('2. Warranty coverage is as per the specific device listing.', 15, finalY + 34);
    doc.text('3. Prices are fair and reflect current market value.', 15, finalY + 41);
    doc.save(`BugsFixer_Hardware_Quote_${clientInfo.name || 'Client'}.pdf`);
  };

  const sendWhatsApp = () => {
    const serviceList = selections.map(sel => {
      const category = SERVICES.find(c => c.id === sel.categoryId);
      const sub = category?.subServices.find(s => s.id === sel.subServiceId);
      return `• ${sub?.name} (${sel.quantity} ${sub?.unitLabel})`;
    }).join('%0A');

    const softwareText = softwareSelection.enabled 
      ? `%0A%0A*Max Sale ERP Software:*%0A• ${getSoftwarePlanTitle()} (Custom Quote Requested)` 
      : '';

    const hardwareList = hardwareCart.map(h => {
      const quantity = (h as any).quantity || 1;
      return `• ${h.name} x${quantity} (${h.price} PKR)`;
    }).join('%0A');

    const message = `Assalam-o-Alaikum BugsFixer!%0A%0A` +
      `I have built a custom IT bundle on your website.%0A%0A` +
      `*Client Details:*%0A` +
      `Name: ${clientInfo.name || 'Valued Client'}%0A` +
      `Contact: ${clientInfo.contact || 'N/A'}%0A%0A` +
      `*Technical Services:*%0A${serviceList || 'None selected'}` +
      `${softwareText}%0A%0A` +
      `*Hardware Devices:*%0A${hardwareList || 'None selected'}%0A%0A` +
      `*Estimated Totals:*%0A` +
      `Services Labor: PKR ${serviceTotal.toLocaleString()}%0A` +
      `Hardware: PKR ${hardwareTotal.toLocaleString()}%0A` +
      `*Grand Total: PKR ${grandTotal.toLocaleString()}* (Hardware + Labor)%0A%0A` +
      `I have generated my PDF quotations. Please let me know the timeline and custom software quote.`;

    window.open(`https://wa.me/923216900448?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 px-4 relative overflow-hidden">
      {/* Animated Background Effects */}
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
            <span className="text-xs font-black text-blue-600 uppercase tracking-widest">Custom Calculator</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">IT Bundle</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Transparent pricing for CCTV, networking, Max Sale ERP, and hardware repairs. Build your complete turn-key package to generate instant quotations.
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
                  <p className="text-sm font-medium text-slate-500">Personalize your professional quotation document.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 absolute top-3 left-6">Full Name / Company</label>
                  <input 
                    type="text" 
                    className="w-full px-6 pt-8 pb-3 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-slate-900 shadow-sm"
                    value={clientInfo.name}
                    onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                  />
                </div>
                <div className="relative">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 absolute top-3 left-6">WhatsApp / Email</label>
                  <input 
                    type="text" 
                    className="w-full px-6 pt-8 pb-3 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-slate-900 shadow-sm"
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
                      <span><strong>Custom Software Quote:</strong> A tailored quote will be provided by our team based on your exact node count and setup requirements in your final invoice summary.</span>
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
                      <p className="text-sm font-medium text-slate-500">Items added from our trusted inventory network.</p>
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
                          <p className="font-black text-slate-900 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">PKR {item.price}</p>
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
                            
                            <p className="text-sm font-bold text-slate-500 mb-6 bg-white inline-block px-3 py-1.5 rounded-lg shadow-sm">
                              Rate: <span className="text-slate-900">PKR {sub.serviceRate.toLocaleString()}</span> / {sub.unitLabel.toLowerCase().slice(0, -1)}
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
                                    <span className="text-sm font-bold text-slate-700 leading-tight">Include Optional Hardware/Cables by BugsFixer</span>
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
                
                <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                  <div className="w-2 h-6 bg-blue-500 rounded-full" />
                  Quotation Summary
                </h3>
                
                <div className="space-y-5 mb-8">
                  <div className="flex justify-between items-center text-slate-400 font-medium">
                    <span>Service Labor:</span>
                    <span className="text-white font-black">PKR {serviceTotal.toLocaleString()}</span>
                  </div>

                  <AnimatePresence>
                    {softwareSelection.enabled && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="flex justify-between items-start text-blue-300 bg-blue-900/30 p-4 rounded-2xl border border-blue-500/20">
                        <div>
                          <span className="block font-black text-sm text-blue-100 mb-0.5">ERP Software</span>
                          <span className="text-[10px] font-bold tracking-widest uppercase">{softwareSelection.plan} Plan</span>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest bg-blue-600 text-white px-3 py-1.5 rounded-lg shadow-sm">Custom Quote</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-between items-center text-slate-400 font-medium">
                    <span>Hardware Cart:</span>
                    <span className="text-white font-black">PKR {hardwareTotal.toLocaleString()}</span>
                  </div>

                  <AnimatePresence>
                    {optionalItemTotal > 0 && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="flex justify-between items-center text-slate-400 font-medium">
                        <span>Est. Optional Items:</span>
                        <span className="text-white font-black">PKR {optionalItemTotal.toLocaleString()}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="pt-6 border-t border-slate-800">
                    <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-2">Total Estimated Investment</p>
                    <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                      PKR {grandTotal.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 relative z-10">
                  <motion.button 
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={generateServicePDF} disabled={selections.length === 0 && !softwareSelection.enabled}
                    className={`w-full py-4.5 rounded-2xl font-black text-sm flex items-center justify-center gap-3 transition-all ${
                      selections.length === 0 && !softwareSelection.enabled ? 'bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-700' : 'bg-blue-600 text-white hover:bg-blue-500 shadow-xl shadow-blue-900/40'
                    }`}
                  >
                    <Download size={18} /> Download Service PDF
                  </motion.button>

                  <motion.button 
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={generateHardwarePDF} disabled={hardwareCart.length === 0}
                    className={`w-full py-4.5 rounded-2xl font-black text-sm flex items-center justify-center gap-3 transition-all ${
                      hardwareCart.length === 0 ? 'bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-700' : 'bg-white text-slate-900 hover:bg-slate-100 shadow-xl'
                    }`}
                  >
                    <Package size={18} /> Download Hardware PDF
                  </motion.button>

                  <motion.button 
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={sendWhatsApp}
                    className="w-full py-4.5 mt-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-xl shadow-emerald-900/40"
                  >
                    <MessageSquare size={18} /> Send Quote to WhatsApp
                  </motion.button>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-start gap-4 text-xs font-medium text-slate-400 leading-relaxed">
                  <Info size={20} className="text-slate-500 shrink-0 mt-0.5" />
                  <p>Prices are fair estimates. Software customizations & genuine dealer hardware availability will be discussed prior to project commencement.</p>
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