import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, PhoneCall, MapPin, Send, Zap, ShieldCheck, 
  Clock, ArrowRight, CheckCircle2, Mail, Building, User, Phone
} from 'lucide-react';

// --- Enterprise Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.35, duration: 0.8 } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.35, duration: 0.8 } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.35, duration: 0.8 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.4, duration: 0.9 } }
};

const Contact = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- Enterprise SEO & Meta Tags ---
  useEffect(() => {
    document.title = "Contact BugsFixer Pakistan | CCTV, ERP & IT Support Nationwide";

    const setMetaTag = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', 'Contact BugsFixer Pakistan for expert CCTV installation, laptop repair, networking, biometric systems, and Max Sale ERP software. Visit us in Peshawar or chat on WhatsApp nationwide.');
    setMetaTag('name', 'keywords', 'Contact BugsFixer, IT Support Peshawar, CCTV Installation Pakistan, WhatsApp IT Help, Max Sale ERP Demo, Hardware Repair Contact');
    
    setMetaTag('property', 'og:title', 'Contact BugsFixer Pakistan | Best IT Service Center');
    setMetaTag('property', 'og:description', 'Get fast technical support, free ERP demos, and professional IT quotations. Reach us via WhatsApp, email, or visit our Peshawar office.');
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:image', 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80');
    
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', 'Contact BugsFixer Pakistan');
    setMetaTag('name', 'twitter:description', 'Expert IT support, CCTV, networking & Max Sale ERP. Chat with us on WhatsApp or visit Shaid Plaza, Peshawar.');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const text = `Assalam-o-Alaikum BugsFixer!\n\n*New Contact Form Message*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || 'N/A'}\n\n*Message:*\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    
    // Open WhatsApp
    window.open(`https://wa.me/923216900448?text=${encodedText}`, '_blank');
    
    // Simulate success UI
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 800);
  };

  const contactInfo = [
    {
      label: 'Email Support',
      value: 'jeekhurram@yahoo.com',
      sub: 'We reply within 24 hours',
      icon: <Mail className="w-6 h-6" />,
      gradient: 'from-blue-500 to-blue-600',
      bgHover: 'group-hover:bg-blue-600',
      link: 'mailto:jeekhurram@yahoo.com'
    },
    {
      label: 'Phone / WhatsApp',
      value: '+92 321-6900448',
      sub: 'Fast response • 7 days a week',
      icon: <PhoneCall className="w-6 h-6" />,
      gradient: 'from-emerald-500 to-green-600',
      bgHover: 'group-hover:bg-emerald-600',
      link: 'https://wa.me/923216900448'
    },
    {
      label: 'Our Office',
      value: 'Shop No.26, 3rd Floor, Shaid Plaza, Peshawar',
      sub: 'Opposite Gul Haji Plaza',
      icon: <MapPin className="w-6 h-6" />,
      gradient: 'from-indigo-500 to-purple-600',
      bgHover: 'group-hover:bg-indigo-600',
      link: 'https://maps.google.com/?q=Shop+No.26,3rd+Floor,+Shaid+Plaza,+Peshawar'
    }
  ];

  const supportHighlights = [
    { icon: <Zap className="w-5 h-5" />, text: 'Fast Technical Support' },
    { icon: <ShieldCheck className="w-5 h-5" />, text: 'Guaranteed Service Quality' },
    { icon: <Clock className="w-5 h-5" />, text: 'Response Within 24 Hours' },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: 'Nationwide Coverage' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50 overflow-hidden">
      
      {/* ============================================================ */}
      {/* HERO SECTION                                                 */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 relative">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.12, 1], rotate: [0, 30, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[100px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.18, 1], rotate: [0, -20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-32 -left-40 w-[600px] h-[600px] bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-[100px]"
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial="hidden" animate="show" variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-100 rounded-full mb-8 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
              </span>
              <span className="text-xs font-black text-blue-700 uppercase tracking-widest">Contact BugsFixer Pakistan</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tighter">
              Contact Pakistan's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Best IT Center
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
              Need expert CCTV installation, laptop repair, office networking, or Max Sale ERP? 
              Reach BugsFixer today for professional IT solutions nationwide.
            </motion.p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div 
            initial="hidden" animate="show" variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24"
          >
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 border border-slate-100 hover:border-blue-100 relative overflow-hidden"
              >
                {/* Subtle gradient wash on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:text-white transition-all duration-300 ${info.bgHover} group-hover:scale-110 group-hover:rotate-3`}>
                    {info.icon}
                  </div>
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">{info.label}</p>
                  <p className="text-lg lg:text-xl font-black text-slate-900 leading-snug break-words mb-2 group-hover:text-blue-700 transition-colors">
                    {info.value}
                  </p>
                  <p className="text-xs font-medium text-slate-400">{info.sub}</p>
                  
                  <div className="mt-6 flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Connect Now <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* ============================================================ */}
          {/* CONTACT FORM CARD                                            */}
          {/* ============================================================ */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={scaleIn}
            className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 overflow-hidden flex flex-col lg:flex-row border border-slate-100"
          >
            {/* Left Blue Panel */}
            <div className="lg:w-5/12 bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 p-12 lg:p-16 text-white relative overflow-hidden">
              {/* Decorative shapes */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-indigo-400/20 rounded-full translate-y-1/3 -translate-x-1/4 blur-2xl" />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.06] mix-blend-overlay" />

              <div className="relative z-10 h-full flex flex-col">
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}>
                  <motion.h3 variants={fadeLeft} className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight">
                    Send Us A Message
                  </motion.h3>
                  <motion.p variants={fadeLeft} className="text-blue-100 text-lg mb-12 font-medium leading-relaxed">
                    Have a specific inquiry or need a custom quote? Fill out the form and our technical team will get back to you within 24 hours.
                  </motion.p>
                  
                  <motion.div variants={staggerContainer} className="space-y-5 mb-12">
                    {supportHighlights.map((item, i) => (
                      <motion.div key={i} variants={fadeLeft} className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm shrink-0">
                          {item.icon}
                        </div>
                        <span className="text-base font-bold text-white/90">{item.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Quick WhatsApp CTA */}
                <div className="mt-auto">
                  <motion.a
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    href="https://wa.me/923216900448"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-slate-900 px-6 py-4 rounded-2xl font-black text-sm shadow-xl hover:shadow-2xl transition-all"
                  >
                    <MessageSquare className="w-5 h-5 text-emerald-500" />
                    Chat Instantly on WhatsApp
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="lg:w-7/12 p-10 lg:p-16 bg-slate-50/50">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-16"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-3">Message Ready!</h4>
                  <p className="text-slate-500 font-medium max-w-sm">
                    WhatsApp has been opened with your message. Send it to connect with our team instantly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-blue-500" /> Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white border-2 border-slate-100 focus:border-blue-600 rounded-2xl outline-none transition-all font-semibold text-slate-900 placeholder:text-slate-300 shadow-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-blue-500" /> Phone Number *
                      </label>
                      <input
                        type="text"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white border-2 border-slate-100 focus:border-blue-600 rounded-2xl outline-none transition-all font-semibold text-slate-900 placeholder:text-slate-300 shadow-sm"
                        placeholder="+92 300-0000000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-blue-500" /> Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white border-2 border-slate-100 focus:border-blue-600 rounded-2xl outline-none transition-all font-semibold text-slate-900 placeholder:text-slate-300 shadow-sm"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-blue-500" /> Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white border-2 border-slate-100 focus:border-blue-600 rounded-2xl outline-none transition-all font-semibold text-slate-900 placeholder:text-slate-300 shadow-sm resize-none"
                      placeholder="Tell us about your CCTV, networking, repair, or Max Sale ERP needs..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-slate-900 hover:bg-blue-600 disabled:bg-slate-400 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Preparing...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 text-blue-400" />
                        Send Message via WhatsApp
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-slate-400 font-medium">
                    By submitting, WhatsApp will open with your pre-filled message to our support team.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MAP / LOCATION SECTION                                       */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-black text-indigo-600 uppercase tracking-widest">Visit Us</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Our Service Center
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-xl mx-auto font-medium">
              Drop by our Peshawar office for walk-in support, device drop-off, or face-to-face consultations.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}
            className="relative h-[420px] w-full rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/60 border border-slate-100 group"
          >
            {/* Gradient overlay card */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950 flex flex-col items-center justify-center text-white z-10">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 filter blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/20 filter blur-[80px] rounded-full" />
              
              <div className="relative z-10 text-center px-6">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 bg-blue-600/30 border border-blue-500/40 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
                >
                  <MapPin className="w-10 h-10 text-blue-400" />
                </motion.div>
                <h3 className="text-2xl lg:text-3xl font-black mb-3 tracking-tight">BugsFixer Pakistan HQ</h3>
                <p className="text-slate-300 font-medium mb-2 max-w-md mx-auto">
                  Shop No.26, 3rd Floor, Shaid Plaza
                </p>
                <p className="text-slate-400 text-sm mb-8">
                  Opposite Gul Haji Plaza, Peshawar, Khyber Pakhtunkhwa
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  href="https://maps.google.com/?q=Shop+No.26,3rd+Floor,+Shaid+Plaza,+Peshawar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-blue-900/40 transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  Open in Google Maps
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* BOTTOM CTA                                                   */}
      {/* ============================================================ */}
      <section className="pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}
            className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-10 lg:p-14 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                <Building className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-1">Need a Full IT Bundle Quote?</h3>
                <p className="text-sm text-slate-500 font-medium">Combine CCTV, Networking, Hardware & Max Sale ERP in one custom package.</p>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/build-bundle"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-sm shadow-lg transition-all shrink-0"
              >
                Build Bundle Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;