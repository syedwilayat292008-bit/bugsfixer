import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Home, Server, ArrowRight } from 'lucide-react';

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found | BugsFixer Pakistan";
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center pt-24 pb-20 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        {/* Animated 404 Graphic */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.8 }}
          className="relative mb-10"
        >
          <h1 className="text-[8rem] md:text-[12rem] font-black text-slate-900/5 leading-none select-none tracking-tighter">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-[2rem] shadow-2xl shadow-blue-900/10 flex items-center justify-center border border-slate-100 rotate-12">
              <Search className="w-10 h-10 text-blue-600 -rotate-12" />
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.8, delay: 0.1 }}
          className="max-w-xl"
        >
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-500 font-medium mb-10 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable in our system architecture.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all shadow-xl shadow-blue-900/20 group"
            >
              <Home className="w-4 h-4" />
              Return to Homepage
            </Link>
            
            <Link 
              to="/inventory" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all shadow-md border border-slate-200 group"
            >
              <Server className="w-4 h-4 text-blue-600" />
              Hardware Vault
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default NotFound;