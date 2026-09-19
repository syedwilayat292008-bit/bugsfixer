import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, Search, ArrowRight, ShieldCheck, Zap, Laptop, 
  Monitor, Computer, Briefcase, Lock, Package, Camera, HardDrive, 
  CheckCircle2, Building2, Filter, Landmark, Scale, Shield, Activity, Utensils, Plus, Minus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { initialInventory, InventoryItem } from '../data/initialInventory';

// --- Enterprise Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.6 } }
};

const Inventory = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<InventoryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(0);
  const [selectionTray, setSelectionTray] = useState<Record<string, number>>({});
  const [categories, setCategories] = useState(['All']);

  // --- Enterprise SEO & Init ---
  useEffect(() => {
    document.title = "Hardware Vault & Enterprise Procurement | BugsFixer Pakistan";

    const setMetaTag = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', 'Explore the BugsFixer Hardware Vault. Certified IT equipment backed by 15+ years of deployments for FBR, Supreme Court, State Life, and Wafid Visa Centers.');
    setMetaTag('name', 'keywords', 'Hardware Vault, IT Equipment Pakistan, Certified Laptops Peshawar, CCTV Cameras Wholesale, Enterprise Network Switches');

    // Load Local Inventory
    try {
      const savedInventory = localStorage.getItem('bugsfixer_inventory');
      const currentProducts = savedInventory ? JSON.parse(savedInventory) : initialInventory;
      setProducts(currentProducts);
      if (!savedInventory) localStorage.setItem('bugsfixer_inventory', JSON.stringify(initialInventory));
      
      const savedCategories = localStorage.getItem('bugsfixer_categories');
      if (savedCategories) {
        const customCats = JSON.parse(savedCategories);
        setCategories(['All', ...customCats]);
      } else {
        const uniqueCategories = Array.from(new Set(initialInventory.map(item => item.category)));
        setCategories(['All', ...uniqueCategories]);
        localStorage.setItem('bugsfixer_categories', JSON.stringify(uniqueCategories));
      }

      // Check current cart
      const savedCart = localStorage.getItem('bugsfixer_cart');
      if (savedCart) {
        setCartCount(JSON.parse(savedCart).length);
      }
    } catch (e) {
      console.warn("Could not parse inventory from localStorage", e);
      setProducts(initialInventory);
    }
  }, []);

  const filteredProducts = products.filter(p => {
    const matchesSearch = (p.name + ' ' + p.specs + ' ' + p.category).toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleSelection = (id: string) => {
    setSelectionTray(prev => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = 1;
      return next;
    });
  };

  const updateSelectionQuantity = (id: string, delta: number) => {
    setSelectionTray(prev => {
      const next = { ...prev };
      if (next[id]) {
        next[id] = Math.max(1, next[id] + delta);
      }
      return next;
    });
  };

  const addSelectionToCart = () => {
    try {
      const savedCart = localStorage.getItem('bugsfixer_cart');
      const cart = savedCart ? JSON.parse(savedCart) : [];
      
      const newCart = [...cart];

      Object.entries(selectionTray).forEach(([id, qty]) => {
        const product = products.find(p => p.id === id);
        if (product) {
          const existingIdx = newCart.findIndex(item => item.id === id);
          if (existingIdx > -1) {
            newCart[existingIdx].quantity = (newCart[existingIdx].quantity || 1) + qty;
          } else {
            newCart.push({ ...product, quantity: qty });
          }
        }
      });

      localStorage.setItem('bugsfixer_cart', JSON.stringify(newCart));
      setCartCount(newCart.length);
      setSelectionTray({});
      
      // Navigate cleanly to Build Bundle
      navigate('/build-bundle');
    } catch (e) {
      console.error("Cart addition failed", e);
    }
  };

  const getCategoryIcon = (category: string) => {
    const lowerCat = category.toLowerCase();
    if (lowerCat.includes('laptop')) return <Laptop className="text-blue-600" size={24} />;
    if (lowerCat.includes('monitor') || lowerCat.includes('led')) return <Monitor className="text-purple-600" size={24} />;
    if (lowerCat.includes('computer') || lowerCat.includes('pc')) return <Computer className="text-emerald-600" size={24} />;
    if (lowerCat.includes('office')) return <Briefcase className="text-amber-600" size={24} />;
    if (lowerCat.includes('camera') || lowerCat.includes('cctv')) return <Camera className="text-rose-600" size={24} />;
    if (lowerCat.includes('dvr') || lowerCat.includes('nvr') || lowerCat.includes('recorder')) return <HardDrive className="text-slate-600" size={24} />;
    if (lowerCat.includes('biometric') || lowerCat.includes('fingerprint') || lowerCat.includes('face')) return <ShieldCheck className="text-blue-600" size={24} />;
    if (lowerCat.includes('lock')) return <Lock className="text-amber-600" size={24} />;
    if (lowerCat.includes('cable')) return <Zap className="text-amber-500" size={24} />;
    if (lowerCat.includes('power') || lowerCat.includes('adapter') || lowerCat.includes('ups')) return <Zap className="text-orange-600" size={24} />;
    
    return <Package className="text-blue-600" size={24} />;
  };

  const totalTrayUnits = Object.values(selectionTray).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-slate-50/70 pt-28 pb-24 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
        
        {/* ============================================================ */}
        {/* HEADER SECTION - HARDWARE VAULT                              */}
        {/* ============================================================ */}
        <motion.div 
          initial="hidden" animate="show" variants={staggerContainer}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 border border-blue-200 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-black text-blue-600 uppercase tracking-widest">15+ Years Field-Proven Deployments</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight uppercase">
            HARDWARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">VAULT</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-slate-600 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Explore our exclusive equipment vault. Certified hardware backed by 15+ years of high-security IT deployments for enterprise and government clients nationwide.
          </motion.p>
        </motion.div>

        {/* ============================================================ */}
        {/* TRUSTED CORPORATE PARTNERS SECTION                           */}
        {/* ============================================================ */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 border-y border-slate-200/60 py-8 lg:py-10 relative bg-white/40 backdrop-blur-sm rounded-[2.5rem] px-4 shadow-sm"
        >
          <p className="text-center text-xs font-black uppercase tracking-widest text-slate-400 mb-8">
            Trusted IT Infrastructure Partner For:
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8 max-w-5xl mx-auto">
            <div className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-2xl shadow-sm border border-slate-100 grayscale hover:grayscale-0 transition-all duration-300">
              <Landmark className="w-6 h-6 text-blue-600" />
              <span className="font-black text-slate-800 text-sm tracking-tight">FBR Pakistan</span>
            </div>
            
            <div className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-2xl shadow-sm border border-slate-100 grayscale hover:grayscale-0 transition-all duration-300">
              <Scale className="w-6 h-6 text-indigo-600" />
              <span className="font-black text-slate-800 text-sm tracking-tight">Supreme Court</span>
            </div>
            
            <div className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-2xl shadow-sm border border-slate-100 grayscale hover:grayscale-0 transition-all duration-300">
              <Shield className="w-6 h-6 text-emerald-600" />
              <span className="font-black text-slate-800 text-sm tracking-tight">State Life</span>
            </div>
            
            <div className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-2xl shadow-sm border border-slate-100 grayscale hover:grayscale-0 transition-all duration-300">
              <Activity className="w-6 h-6 text-rose-600" />
              <div className="flex flex-col">
                <span className="font-black text-slate-800 text-sm tracking-tight leading-none">Wafid Visa Centers</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">25+ Facilities (PEW, ISB, CKD)</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-2xl shadow-sm border border-slate-100 grayscale hover:grayscale-0 transition-all duration-300">
              <Utensils className="w-6 h-6 text-amber-500" />
              <span className="font-black text-slate-800 text-sm tracking-tight">Mr. Cod</span>
            </div>
          </div>
          
          <p className="text-center text-xs font-bold text-slate-400 mt-8 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            Empowering SME & Mid-Large Enterprises Nationwide
          </p>
        </motion.div>

        {/* Strategic Supply Network Statement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-[2.5rem] p-8 lg:p-10 border border-slate-700/80 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/10 rounded-full filter blur-[80px] pointer-events-none" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex items-start gap-5">
              <div className="p-4 bg-blue-600/20 text-blue-400 rounded-2xl border border-blue-500/30 shrink-0">
                <Building2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                  Direct Vendor Procurement
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Official Guarantee
                  </span>
                </h3>
                <p className="text-sm text-slate-300 font-medium leading-relaxed max-w-3xl">
                  Through our established procurement connections with Pakistan's leading Tier-1 hardware distributors and local suppliers, we deliver genuine, thoroughly inspected equipment with transparent procurement quotes.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <div className="px-5 py-3 rounded-2xl bg-slate-800/80 border border-slate-700 text-center">
                <p className="text-xs font-black uppercase tracking-wider text-blue-400">100% Genuine</p>
                <p className="text-xs text-slate-300 font-bold mt-0.5">Distributor Backed</p>
              </div>
              <div className="px-5 py-3 rounded-2xl bg-slate-800/80 border border-slate-700 text-center">
                <p className="text-xs font-black uppercase tracking-wider text-emerald-400">Inspected Units</p>
                <p className="text-xs text-slate-300 font-bold mt-0.5">Quality Assured</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Search & Category Filter Controls */}
        <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-6 lg:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative w-full group">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
              <input
                type="text"
                placeholder="Search vault for brand, model, or hardware component..."
                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-slate-900 shadow-inner"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-end">
              <button 
                onClick={() => {
                  const newSelection = { ...selectionTray };
                  filteredProducts.forEach(p => {
                    if (p.status === 'In Stock') newSelection[p.id] = 1;
                  });
                  setSelectionTray(newSelection);
                }}
                className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs transition-colors uppercase tracking-wider shadow-sm"
              >
                Select Visible
              </button>
              {Object.keys(selectionTray).length > 0 && (
                <button 
                  onClick={() => setSelectionTray({})}
                  className="px-5 py-3.5 rounded-xl bg-rose-50 text-rose-600 border border-rose-100 font-extrabold text-xs hover:bg-rose-100 transition-colors uppercase tracking-wider"
                >
                  Clear Selection
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-2 scrollbar-none border-t border-slate-100">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 mr-2 shrink-0 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-blue-500" /> Filter Vault:
            </span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl whitespace-nowrap text-xs font-black transition-all ${
                  selectedCategory === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Catalog Grid */}
        {filteredProducts.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-white rounded-[2.5rem] border border-dashed border-slate-200 shadow-sm"
          >
            <Zap size={56} className="mx-auto text-slate-300 mb-4" />
            <h2 className="text-2xl font-black text-slate-900 mb-2">No Matching Hardware Found</h2>
            <p className="text-slate-500 font-medium">Try broadening your search term or select "All" categories.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-6 text-blue-600 font-black hover:underline text-sm uppercase tracking-wider"
            >
              Reset All Filters
            </button>
          </motion.div>
        ) : (
          <motion.div 
            initial="hidden" animate="show" variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map(p => {
              const isSelected = !!selectionTray[p.id];
              return (
                <motion.div
                  key={p.id}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className={`bg-white rounded-[2.5rem] p-6 shadow-xl shadow-slate-200/40 border transition-all duration-300 flex flex-col justify-between group ${
                    isSelected ? 'border-blue-500 shadow-[0_10px_35px_rgba(59,130,246,0.15)] ring-2 ring-blue-500/20' : 'border-slate-100 hover:border-blue-200'
                  }`}
                >
                  <div>
                    {/* Image / Icon Frame */}
                    <div 
                      className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 relative group/img cursor-pointer mb-6"
                      onClick={() => p.status === 'In Stock' && toggleSelection(p.id)}
                    >
                      {p.image ? (
                        <img 
                          src={p.image} 
                          alt={p.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-slate-300">
                          {getCategoryIcon(p.category)}
                          <p className="mt-2 text-[10px] font-black uppercase tracking-widest text-slate-400">{p.category}</p>
                        </div>
                      )}

                      {/* Condition & Status Badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                          p.condition === 'NEW' ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white'
                        }`}>
                          {p.condition === 'NEW' ? 'Sealed New' : 'Certified Pre-Owned'}
                        </span>
                        {p.status !== 'In Stock' && (
                          <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500 text-white">
                            {p.status}
                          </span>
                        )}
                      </div>

                      {/* Selection Overlay */}
                      {p.status === 'In Stock' && (
                        <div className={`absolute inset-0 bg-blue-600/20 backdrop-blur-[2px] flex items-center justify-center transition-opacity ${
                          isSelected ? 'opacity-100' : 'opacity-0 group-hover/img:opacity-100'
                        }`}>
                          <span className="bg-white text-blue-600 px-4 py-2 rounded-xl font-black text-xs shadow-xl flex items-center gap-1.5">
                            {isSelected ? <CheckCircle2 className="w-4 h-4 text-blue-600" /> : <Plus className="w-4 h-4" />}
                            {isSelected ? 'Selected for Requisition' : 'Add to Requisition'}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Specs Details */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                          {p.category}
                        </span>
                        {p.warranty && (
                          <span className="text-[10px] font-bold text-slate-400">
                            {p.warranty} Warranty
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {p.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-3 mb-6 min-h-[3rem]">
                        {p.specs}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom: Rate Status & Action */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Procurement Rate</p>
                      <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100/80 inline-block">
                        Live Market Rate
                      </span>
                    </div>

                    {isSelected ? (
                      <div className="flex items-center bg-slate-100 rounded-xl p-1 gap-1 border border-slate-200">
                        <button 
                          onClick={() => updateSelectionQuantity(p.id, -1)}
                          className="w-8 h-8 flex items-center justify-center bg-white rounded-lg text-slate-900 font-black hover:bg-rose-50 hover:text-rose-600 transition-colors shadow-sm"
                        >
                          -
                        </button>
                        <span className="w-6 text-center font-black text-slate-900 text-sm">{selectionTray[p.id]}</span>
                        <button 
                          onClick={() => updateSelectionQuantity(p.id, 1)}
                          className="w-8 h-8 flex items-center justify-center bg-white rounded-lg text-slate-900 font-black hover:bg-emerald-50 hover:text-emerald-600 transition-colors shadow-sm"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => p.status === 'In Stock' && toggleSelection(p.id)}
                        disabled={p.status === 'Out of Stock'}
                        className={`px-5 py-3 rounded-xl transition-all font-black text-xs uppercase tracking-wider ${
                          p.status === 'Out of Stock' 
                            ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                            : 'bg-slate-900 text-white hover:bg-blue-600 shadow-md'
                        }`}
                      >
                        {p.status === 'Out of Stock' ? 'Sold Out' : 'Select Unit'}
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>

      {/* Floating Requisition Action Bar */}
      <AnimatePresence>
        {totalTrayUnits > 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-[92%] max-w-2xl"
          >
            <div className="bg-[#0B1120] text-white rounded-3xl p-4 lg:p-5 shadow-2xl flex items-center justify-between border border-slate-800 backdrop-blur-xl bg-opacity-95">
              <div className="flex items-center gap-4 ml-2">
                <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-inner">
                  <ShoppingCart size={24} />
                </div>
                <div>
                  <p className="font-black text-base text-white">
                    {totalTrayUnits} Device Unit{totalTrayUnits === 1 ? '' : 's'} Selected
                  </p>
                  <p className="text-xs text-slate-400 font-medium">Ready to add to your custom turn-key bundle quote.</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setSelectionTray({})}
                  className="px-4 py-3 rounded-xl font-bold text-slate-400 hover:text-white transition-colors text-xs uppercase tracking-wider"
                >
                  Clear
                </button>
                <motion.button 
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={addSelectionToCart}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-xl shadow-blue-900/40"
                >
                  Add to IT Bundle <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ) : cartCount > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-[92%] max-w-lg"
          >
            <div className="bg-slate-900 text-white rounded-3xl p-4 shadow-2xl flex items-center justify-between border border-slate-800 backdrop-blur-xl bg-opacity-95">
              <div className="flex items-center gap-4 ml-2">
                <div className="bg-blue-600 p-3 rounded-2xl">
                  <Package size={22} />
                </div>
                <div>
                  <p className="font-black text-sm text-white">{cartCount} Component(s) Saved in Cart</p>
                  <p className="text-xs text-slate-400 font-medium">Generate your custom requisition quote now.</p>
                </div>
              </div>
              <button 
                onClick={() => navigate('/build-bundle')}
                className="bg-white text-slate-900 hover:bg-blue-50 px-5 py-3 rounded-xl font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-md"
              >
                View Bundle <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Inventory;