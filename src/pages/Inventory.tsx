import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Search, ArrowRight, ShieldCheck, Zap, Laptop, Monitor, Computer, Briefcase, Lock, Package, Camera, HardDrive } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { initialInventory, InventoryItem } from '../data/initialInventory';

const Inventory = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<InventoryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(0);
  const [showAdminDoor, setShowAdminDoor] = useState(false);
  const [selectionTray, setSelectionTray] = useState<Record<string, number>>({});

  const adminSecret = "+92 321-6900448";

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() === adminSecret) {
      setShowAdminDoor(true);
    } else {
      setShowAdminDoor(false);
    }
  };

  const [categories, setCategories] = useState(['All']);

  useEffect(() => {
    document.title = "IT Hardware Inventory – Laptops, PCs, CCTV & Biometric | BugsFixer";
    
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
  }, []);

  const filteredProducts = products.filter(p => {
    const matchesSearch = (p.name + ' ' + p.specs).toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleSelection = (id: string) => {
    setSelectionTray(prev => {
      const next = { ...prev };
      if (next[id]) {
        delete next[id];
      } else {
        next[id] = 1;
      }
      return next;
    });
  };

  const updateSelectionQuantity = (id: string, delta: number) => {
    setSelectionTray(prev => {
      const next = { ...prev };
      if (next[id]) {
        const newVal = Math.max(1, next[id] + delta);
        next[id] = newVal;
      }
      return next;
    });
  };

  const addSelectionToCart = () => {
    const savedCart = localStorage.getItem('bugsfixer_cart');
    const cart = savedCart ? JSON.parse(savedCart) : [];
    
    let addedCount = 0;
    const newCart = [...cart];

    Object.entries(selectionTray).forEach(([id, qty]) => {
      const product = products.find(p => p.id === id);
      if (product) {
        const existingIdx = newCart.findIndex(item => item.id === id);
        if (existingIdx > -1) {
          newCart[existingIdx].quantity += qty;
        } else {
          newCart.push({ ...product, quantity: qty });
          addedCount++;
        }
      }
    });

    localStorage.setItem('bugsfixer_cart', JSON.stringify(newCart));
    setCartCount(newCart.length);
    setSelectionTray({});
    
    alert(`Successfully added ${addedCount} new types of items to your bundle selection!`);
  };



  const getCategoryIcon = (category: string) => {
    const lowerCat = category.toLowerCase();
    if (lowerCat.includes('laptop')) return <Laptop className="text-blue-600" size={24} />;
    if (lowerCat.includes('monitor') || lowerCat.includes('led')) return <Monitor className="text-purple-600" size={24} />;
    if (lowerCat.includes('computer') || lowerCat.includes('pc')) return <Computer className="text-emerald-600" size={24} />;
    if (lowerCat.includes('office')) return <Briefcase className="text-amber-600" size={24} />;
    if (lowerCat.includes('camera') || lowerCat.includes('cctv')) return <Camera className="text-red-600" size={24} />;
    if (lowerCat.includes('dvr') || lowerCat.includes('nvr') || lowerCat.includes('recorder')) return <HardDrive className="text-gray-600" size={24} />;
    if (lowerCat.includes('biometric') || lowerCat.includes('fingerprint') || lowerCat.includes('face')) return <ShieldCheck className="text-blue-600" size={24} />;
    if (lowerCat.includes('lock')) return <Lock className="text-amber-600" size={24} />;
    if (lowerCat.includes('cable')) return <Zap className="text-yellow-600" size={24} />;
    if (lowerCat.includes('power') || lowerCat.includes('adapter') || lowerCat.includes('ups')) return <Zap className="text-orange-600" size={24} />;
    if (lowerCat.includes('drive') || lowerCat.includes('hdd') || lowerCat.includes('ssd')) return <HardDrive className="text-blue-600" size={24} />;
    
    return <Package className="text-blue-600" size={24} />;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-100 py-12 px-4 mb-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            IT Hardware & <span className="text-blue-600">Used Laptops in Pakistan</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            BugsFixer Pakistan provides genuine, high-quality used business laptops, 
            CCTV cameras, and office IT equipment sourced through our trusted dealer network nationwide.
          </motion.p>
          
          <div className="mt-8 flex flex-col md:flex-row gap-4 max-w-3xl mx-auto items-center">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
              <input
                type="text"
                placeholder="Search brand, model, or specs..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              
              <AnimatePresence>
                {showAdminDoor && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute -bottom-16 left-0 right-0 z-50 px-2"
                  >
                    <Link
                      to="/admin-inventory"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 text-white rounded-2xl shadow-2xl hover:bg-black transition-all font-bold border-2 border-blue-500 animate-pulse"
                    >
                      <Lock className="w-5 h-5 text-blue-400" />
                      SECRET ADMIN ACCESS UNLOCKED
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-3 rounded-2xl whitespace-nowrap font-medium transition-all ${
                    selectedCategory === cat 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                      : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
              <div className="ml-4 flex gap-2 border-l pl-4 border-gray-200">
                <button 
                  onClick={() => {
                    const newSelection = { ...selectionTray };
                    filteredProducts.forEach(p => {
                      if (p.status === 'In Stock') newSelection[p.id] = 1;
                    });
                    setSelectionTray(newSelection);
                  }}
                  className="px-4 py-3 rounded-2xl bg-gray-100 text-gray-700 font-bold hover:bg-gray-200 transition-all text-sm whitespace-nowrap"
                >
                  Select All
                </button>
                <button 
                  onClick={() => setSelectionTray({})}
                  className="px-4 py-3 rounded-2xl bg-white text-red-600 border border-red-100 font-bold hover:bg-red-50 transition-all text-sm whitespace-nowrap"
                >
                  Clear Selection
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <Zap size={64} className="mx-auto text-gray-200 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No Items Found</h2>
            <p className="text-gray-500">Try adjusting your search or category filters.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-6 text-blue-600 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full"
              >
                <div className="relative mb-6 -mx-2 -mt-2">
                  <div 
                    className={`aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 border relative group cursor-pointer ${
                      selectionTray[p.id] ? 'border-blue-500 border-2' : 'border-gray-50'
                    }`}
                    onClick={() => p.status === 'In Stock' && toggleSelection(p.id)}
                  >
                    {p.image ? (
                      <img 
                        src={p.image} 
                        alt={p.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-gray-300">
                        {getCategoryIcon(p.category)}
                        <p className="mt-2 text-xs font-medium uppercase tracking-widest">{p.category}</p>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        p.condition === 'NEW' ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'
                      }`}>
                        {p.condition}
                      </span>
                      {p.status !== 'In Stock' && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500 text-white">
                          {p.status}
                        </span>
                      )}
                    </div>
                    {selectionTray[p.id] && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white p-1 rounded-full shadow-lg">
                        <Package size={16} />
                      </div>
                    )}
                    {p.status === 'In Stock' && (
                      <div className={`absolute inset-0 bg-blue-600 bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${selectionTray[p.id] ? 'opacity-100' : ''}`}>
                         <span className="bg-white text-blue-600 px-4 py-2 rounded-xl font-bold text-sm shadow-xl">
                           {selectionTray[p.id] ? 'Deselect Item' : 'Select Item'}
                         </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">{p.category}</p>
                    {p.warranty && <p className="text-xs font-medium text-gray-400">{p.warranty} Warranty</p>}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">{p.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-3 mb-4 min-h-[3rem]">{p.specs}</p>
                </div>

                <div className="mt-4 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <p className="text-[10px] font-black text-blue-600 uppercase tracking-tighter bg-blue-50 px-1.5 py-0.5 rounded">Dynamic Market Price</p>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    </div>
                    <p className="text-2xl font-black text-gray-900 leading-none">
                      <span className="text-sm font-bold mr-1">PKR</span>{p.price}
                    </p>
                    <p className="text-[9px] text-gray-400 mt-1 font-medium italic">Last updated: Today</p>
                  </div>
                  
                  {selectionTray[p.id] ? (
                    <div className="flex items-center bg-gray-100 rounded-2xl p-1 gap-1">
                      <button 
                        onClick={() => updateSelectionQuantity(p.id, -1)}
                        className="w-10 h-10 flex items-center justify-center bg-white rounded-xl text-gray-900 font-bold hover:bg-red-50 hover:text-red-600 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-bold text-gray-900">{selectionTray[p.id]}</span>
                      <button 
                        onClick={() => updateSelectionQuantity(p.id, 1)}
                        className="w-10 h-10 flex items-center justify-center bg-white rounded-xl text-gray-900 font-bold hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => p.status === 'In Stock' && toggleSelection(p.id)}
                      disabled={p.status === 'Out of Stock'}
                      className={`px-6 py-3 rounded-2xl transition-all font-bold text-sm ${
                        p.status === 'Out of Stock' 
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1'
                      }`}
                    >
                      {p.status === 'Out of Stock' ? 'Sold Out' : 'Select Item'}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Floating Action Bar */}
      <AnimatePresence>
        {Object.keys(selectionTray).length > 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-2xl"
          >
            <div className="bg-blue-600 text-white rounded-3xl p-4 shadow-2xl flex items-center justify-between border border-blue-500 backdrop-blur-lg bg-opacity-95">
              <div className="flex items-center gap-4 ml-2">
                <div className="bg-white text-blue-600 p-3 rounded-2xl">
                  <ShoppingCart size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">
                    {Object.values(selectionTray).reduce((a, b) => a + b, 0)} Units Selected
                  </p>
                  <p className="text-xs text-blue-100 italic">Total value: PKR {
                    Object.entries(selectionTray).reduce((total, [id, qty]) => {
                      const p = products.find(prod => prod.id === id);
                      if (p) {
                        const basePrice = p.price || 0;
                        return total + (basePrice * qty);
                      }
                      return total;
                    }, 0).toLocaleString()
                  } (Est.)</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setSelectionTray({})}
                  className="px-4 py-3 rounded-2xl font-bold text-blue-100 hover:text-white transition-colors"
                >
                  Clear
                </button>
                <button 
                  onClick={addSelectionToCart}
                  className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-1"
                >
                  Add Selection to Bundle <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ) : cartCount > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-lg"
          >
            <div className="bg-gray-900 text-white rounded-3xl p-4 shadow-2xl flex items-center justify-between border border-gray-800 backdrop-blur-lg bg-opacity-90">
              <div className="flex items-center gap-4 ml-2">
                <div className="bg-blue-600 p-3 rounded-2xl">
                  <Package size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">{cartCount} Items Ready</p>
                  <p className="text-xs text-gray-400">Your selection is saved. View your quote now.</p>
                </div>
              </div>
              <button 
                onClick={() => navigate('/build-bundle')}
                className="bg-white text-gray-900 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-50 transition-colors"
              >
                Get Quotation <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Inventory;
