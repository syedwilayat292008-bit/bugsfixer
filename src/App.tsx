import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CCTV from './pages/CCTV';
import LaptopServices from './pages/LaptopServices';
import Electronics from './pages/Electronics';
import Security from './pages/Security';
import TelephoneNetworking from './pages/TelephoneNetworking';
import BuildBundle from './pages/BuildBundle';
import Inventory from './pages/Inventory';
import ScrollToTop from './components/ScrollToTop';

// --- Animated Route Transitions Component ---
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cctv" element={<CCTV />} />
          <Route path="/laptopservices" element={<LaptopServices />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/security" element={<Security />} />
          <Route path="/telephone-networking" element={<TelephoneNetworking />} />
          <Route path="/build-bundle" element={<BuildBundle />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/admin-inventory" element={<AdminInventory />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-600 flex flex-col justify-between font-sans antialiased">
        <Navbar />
        
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>

        <Footer />
        
        {/* Modern Floating WhatsApp Action Widget */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-8 right-8 z-50 flex items-center group"
        >
          {/* Tooltip Hover Badge */}
          <div className="mr-3 bg-slate-900/90 text-white backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-black shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 pointer-events-none border border-slate-700/80 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Pakistan's #1 IT Support! ⚡️</span>
          </div>

          {/* Button */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://wa.me/923216900448"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 lg:p-5 rounded-[2rem] shadow-[0_15px_35px_rgba(37,211,102,0.4)] flex items-center justify-center transition-colors"
            aria-label="Contact BugsFixer on WhatsApp"
          >
            {/* Pulse Ring */}
            <span className="absolute -inset-1 rounded-[2.2rem] bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

            <svg className="w-7 h-7 lg:w-8 lg:h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </Router>
  );
}

export default App;