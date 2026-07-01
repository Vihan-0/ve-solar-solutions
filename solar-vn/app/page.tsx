'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  ChevronRight,
  CheckCircle,
  Phone,
  MapPin,
  MessageCircle,
  Star,
  X,
  Menu,
  Shield,
  Award,
  Zap,
  Users,
  Sun,
  TrendingUp,
  Clock,
  ChevronDown,
  ArrowRight,
  Leaf,
  IndianRupee,
} from 'lucide-react';

/* ─── Constants ─── */
const PHONE = '+91 63907 18627';
const WHATSAPP_URL = `https://wa.me/916390718627?text=Hello%20VE%20Solar%20Solutions%2C%20I%27m%20interested%20in%20solar%20installation.%20Please%20share%20details%20and%20a%20free%20quote.`;
const PHONE_URL = `tel:+916390718627`;

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Projects', href: '#projects' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const BRANDS = [
  { name: 'Microtek', tagline: 'Solar Panels & Inverters' },
  { name: 'Adani', tagline: 'Solar Modules' },
  { name: 'Tata', tagline: 'Power Solar Systems' },
  { name: 'Waaree', tagline: 'Solar Panels' },
  { name: 'V-Guard', tagline: 'Solar Inverters' },
];

const WHY_US = [
  { title: '20+ Years Experience', description: 'Operating continuously since 2003 with a proven track record across Lucknow. Same address, same trust — never relocated.', icon: Award },
  { title: 'Premium Galvanized Structures', description: 'All installations use hot-dip galvanized mounting structures built to withstand 25+ years of Indian weather conditions.', icon: Shield },
  { title: 'Expert Installation Team', description: 'Our certified electricians have decades of combined experience. Every installation follows civil engineering standards.', icon: Users },
  { title: 'Government Subsidy Support', description: 'Full PM Surya Ghar documentation handled for you. We ensure you receive every rupee of your entitled subsidy.', icon: IndianRupee },
  { title: 'Net Metering Ready', description: 'Complete electricity board registration and UPPCL net metering setup — so your meter runs backwards and earns you money.', icon: Zap },
  { title: 'EMI Financing Available', description: 'Flexible payment plans starting from ₹0 down. Solar pays for itself — we make the upfront cost effortless.', icon: TrendingUp },
];

const PROCESS = [
  { step: '01', title: 'Free Site Survey', desc: 'Our engineer visits your home, assesses roof area, sunlight hours, and power consumption. 100% free, no obligation.', icon: MapPin },
  { step: '02', title: 'Custom Design', desc: 'We design a system sized perfectly for your home — optimizing panel placement, wiring routes, and inverter specs.', icon: Sun },
  { step: '03', title: 'Expert Installation', desc: 'Our certified team completes the installation in 1–3 days using premium materials with civil-grade foundations.', icon: Zap },
  { step: '04', title: 'Subsidy & Net Metering', desc: 'We handle all paperwork — UPNEDA registration, PM Surya Ghar subsidy claim, and UPPCL net metering activation.', icon: IndianRupee },
  { step: '05', title: 'Long-Term Support', desc: 'Annual maintenance, performance monitoring, and dedicated after-sales support for the life of your system.', icon: Shield },
];

const PROJECT_IMAGES = [
  { name: 'Latest GPS verified install', path: '/imagesproject/IMG-20260630-WA0008.jpg', featured: true },
  { name: 'GPS documented install', path: '/imagesproject/20260103_11954PMByGPSMapCamera.jpg' },
  { name: 'Rooftop solar array', path: '/imagesproject/20260118_52243PMByGPSMapCamera.jpg' },
  { name: 'March 2025 project', path: '/imagesproject/IMG_20250302_175632.jpg' },
  { name: 'Shekhpur, Lucknow install', path: '/imagesproject/IMG-20251128-WA0018.jpg' },
  { name: 'Installation in progress', path: '/imagesproject/IMG-20251130-WA0031.jpg' },
  { name: 'WhatsApp project photo', path: '/imagesproject/IMG-20250227-WA0001 (1).jpg' },
  { name: 'Nov 2024 install', path: '/imagesproject/IMG_20241122_151920 (1).jpg' },
];

const FOUNDER_IMAGES = [
  '/imagesfounder/IMG_20260118_172456.jpg',
  '/imagesfounder/IMG-20260531-WA0008.jpg',
  '/imagesfounder/Screenshot_2024-10-18-19-26-34-64_6012fa4d4ddec268fc5c7112cbb265e7.jpg',
];

const TEAM_IMAGES = [
  '/imagesteam/IMG_20260109_184606.jpg',
  '/imagesteam/IMG_20260118_170552.jpg',
  '/imagesteam/IMG_20260117_133748.jpg',
  '/imagesteam/IMG_20260116_162038.jpg',
  '/imagesteam/IMG_20260109_182736.jpg',
  '/imagesteam/IMG-20260630-WA0011.jpg',
  '/imagesteam/IMG-20260630-WA0009.jpg',
  '/imagesteam/IMG-20251130-WA0028.jpeg',
  '/imagesteam/IMG-20251130-WA0016.jpeg',
  '/imagesteam/IMG-20251130-WA0014.jpeg',
  '/imagesteam/IMG_20260104_152048.jpg',
  '/imagesteam/IMG_20240627_172000.jpg',
];

const AWARD_IMAGES = [
  '/images-award/IMG-20260531-WA0009.jpg',
  '/images-award/IMG-20260531-WA0011.jpg',
  '/images-award/IMG_20240309_174043.jpg',
];

const TESTIMONIALS = [
  {
    name: 'Rajesh Kumar',
    location: 'Aliganj',
    text: 'Best decision we ever made. VE Solar handled everything professionally from start to finish. Our electricity bill dropped from ₹4,500 to under ₹300 per month.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    location: 'Gomti Nagar',
    text: '20+ years in business really shows. Their expertise and after-sales support is unmatched. The team was punctual, clean, and professional throughout.',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    location: 'Indira Nagar',
    text: 'They took care of all subsidy paperwork — I got ₹78,000 back without any hassle. Professional team, premium quality work. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Sunita Agarwal',
    location: 'Hazratganj',
    text: 'Our 5 kW system was installed in just 2 days. The installation quality is superb and our savings have already started showing in the first bill.',
    rating: 5,
  },
];

const STATS = [
  { value: 20, suffix: '+', label: 'Years of Trust', icon: Clock },
  { value: 100, suffix: '+', label: 'Happy Families', icon: Users },
  { value: 4.7, suffix: '★', label: 'Google Rating', icon: Star },
  { value: 100, suffix: '%', label: 'Subsidy Success', icon: CheckCircle },
];

const FAQS = [
  {
    q: 'How much government subsidy do I get for solar panels in Lucknow?',
    a: 'Under PM Surya Ghar Muft Bijli Yojana, you receive ₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW and above. VE Solar handles all documentation and ensures you receive 100% of your eligible subsidy.',
  },
  {
    q: 'How long does solar installation take?',
    a: 'Physical installation typically takes 1–3 days depending on system size. Net metering registration with UPPCL takes 2–4 weeks. We manage the entire process — you just enjoy the savings.',
  },
  {
    q: 'What is the cost of a solar system in Lucknow?',
    a: 'A 3 kW system costs approximately ₹1.5–2 lakh before subsidy. After PM Surya Ghar subsidy (₹78,000), your effective cost can be under ₹1 lakh. We also offer EMI options. Contact us for a free customized quote.',
  },
  {
    q: 'Is VE Solar UPNEDA registered?',
    a: 'Yes, we are UPNEDA (Uttar Pradesh New and Renewable Energy Development Agency) registered and authorized. This is essential to qualify for government subsidies and ensures your installation meets all government standards.',
  },
  {
    q: 'What brands of solar panels do you install?',
    a: 'We are authorized dealers for Microtek, Adani Solar, Tata Power Solar, Waaree Energies, and V-Guard. We help you choose the right brand and system based on your budget and requirements.',
  },
  {
    q: 'Do you provide after-sales support and maintenance?',
    a: 'Absolutely. We provide annual maintenance, performance monitoring, and dedicated after-sales support. Being based in Aliganj, Lucknow for 20+ years means we are always reachable and accountable — unlike contractors who disappear after installation.',
  },
];

/* ─── Animated Counter Component ─── */
function AnimatedCounter({ target, suffix, duration = 2 }: { target: number; suffix: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = 0;
    const end = target;
    const steps = 60;
    const increment = end / steps;
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setDisplay(end);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(current));
      }
    }, (duration * 1000) / steps);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  const displayValue = target % 1 !== 0 ? display.toFixed(1) : Math.floor(display).toString();

  return <span ref={ref}>{isInView ? displayValue : '0'}{suffix}</span>;
}

/* ─── FAQ Item ─── */
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#0a1628] text-base group-hover:text-[#c9970a] transition-colors duration-200">{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-[#c9970a]"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-slate-600 leading-relaxed text-sm md:text-base border-t border-slate-100 pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  /* Navbar scroll effect + close mobile menu on scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      if (window.scrollY > 100) setMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Auto-rotate testimonials */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const openLightbox = useCallback((src: string) => {
    setSelectedImage(src);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setSelectedImage(null);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <main className="bg-[#f8f9fc] text-[#0a1628] overflow-x-hidden">

      {/* ══════════════════════════════════
          LIGHTBOX
      ══════════════════════════════════ */}
      <AnimatePresence>
        {lightboxOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/97 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative max-w-5xl w-full aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-14 right-0 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition z-10"
                aria-label="Close image"
              >
                <X size={30} />
              </button>
              <Image
                src={selectedImage}
                alt="Gallery preview"
                fill
                sizes="(max-width: 1024px) 95vw, 80vw"
                className="object-contain rounded-2xl shadow-2xl"
                quality={85}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════
          HEADER
      ══════════════════════════════════ */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm shadow-slate-200/50'
            : 'bg-gradient-to-b from-[#0a1628]/70 via-[#0a1628]/30 to-transparent border-b border-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-3.5 md:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 min-w-0 group">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0a1628] p-1.5 shadow-lg group-hover:shadow-xl group-hover:shadow-[#0a1628]/30 transition-all duration-300">
                <Image src="/imageslogo/SOLAR (1) (1).jpg" alt="VE Solar Logo" width={44} height={44} className="h-full w-full object-contain" priority />
              </div>
              <div className="min-w-0">
                <p className={`text-base font-bold truncate transition-colors duration-300 ${scrolled || mobileMenuOpen ? 'text-[#0a1628]' : 'text-white'}`}>
                  VE Solar Solutions
                </p>
                <p className={`text-xs transition-colors duration-300 ${scrolled || mobileMenuOpen ? 'text-slate-500' : 'text-white/70'}`}>
                  Since 2003 · Aliganj, Lucknow
                </p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold relative group transition-colors duration-200 ${
                    scrolled ? 'text-slate-600 hover:text-[#0a1628]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#c9970a] group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              ))}
            </nav>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#059669] px-5 py-2.5 text-sm font-bold text-white btn-shimmer hover:bg-[#047857] transition-all duration-200 shadow-lg shadow-emerald-900/25 hover:shadow-emerald-900/40 hover:scale-[1.02]"
              >
                <MessageCircle size={15} />
                Free Quote
              </a>
              <a
                href={PHONE_URL}
                className={`hidden md:inline-flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-bold transition-all duration-200 ${
                  scrolled
                    ? 'border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-white'
                    : 'border-white/50 text-white hover:bg-white/20'
                }`}
              >
                <Phone size={14} />
                Call Now
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition ${scrolled || mobileMenuOpen ? 'text-[#0a1628] hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="lg:hidden overflow-hidden"
              >
                <div className="flex flex-col gap-1 py-3 border-t border-slate-200/60 mt-3 bg-white rounded-2xl px-2 shadow-xl">
                  {NAV.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#0a1628] transition"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="flex gap-2 mt-2 pt-2 border-t border-slate-100">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#059669] px-4 py-3 text-sm font-bold text-white">
                      <MessageCircle size={15} /> WhatsApp
                    </a>
                    <a href={PHONE_URL}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#0a1628] px-4 py-3 text-sm font-bold text-white">
                      <Phone size={15} /> {PHONE}
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <Image
          src="/imageshero/hero-solar.png"
          alt="Solar installation in Lucknow by VE Solar Solutions"
          className="absolute inset-0 w-full h-full object-cover hero-bg"
          fill
          sizes="100vw"
          priority
          quality={80}
        />
        <div className="absolute inset-0 hero-gradient" />
        {/* Gold radial accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_50%,rgba(201,151,10,0.12),transparent)]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36 w-full">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center">

            {/* Hero Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-bold text-[#f5d061] uppercase tracking-widest mb-7">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f5d061] animate-pulse" />
                  UPNEDA Registered · Lucknow's Most Trusted
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-extrabold text-white leading-[1.06] tracking-tight mb-6"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Power Your Home with{' '}
                <span className="text-gradient-gold">Solar Energy</span>
                <br className="hidden sm:block" />
                {' '}— Trusted for{' '}
                <span className="text-gradient-gold">20+ Years</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-slate-200 mb-10 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                VE Solar Solutions has served Lucknow families since 2003 — professional installation,
                full subsidy assistance (save up to ₹78,000), and dedicated after-sales support.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#059669] px-8 py-4 text-base font-bold text-white btn-shimmer wa-glow hover:bg-[#047857] transition-all duration-300 shadow-2xl shadow-emerald-900/40 hover:scale-[1.03]"
                >
                  <MessageCircle size={20} />
                  Get Free Quote on WhatsApp
                </a>
                <a
                  href={PHONE_URL}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:border-white/50"
                >
                  <Phone size={20} />
                  {PHONE}
                </a>
              </motion.div>

              {/* Trust micro-badges */}
              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.65 }}
              >
                {['UPNEDA Registered', 'Govt. Subsidy Support', 'EMI Available', '25-Year Warranty Structure'].map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                    <CheckCircle size={12} className="text-[#f5d061]" />
                    {badge}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 32, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-3xl p-7 md:p-9 shadow-2xl animate-float"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-[#c9970a] mb-6">
                Why 100+ Lucknow families chose us
              </p>
              <div className="grid grid-cols-2 gap-6">
                {STATS.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="text-center">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#0a1628]/8 mb-2 mx-auto">
                        <Icon size={17} className="text-[#c9970a]" />
                      </div>
                      <p className="text-2xl md:text-3xl font-extrabold text-[#0a1628] leading-none">
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="text-xs text-slate-500 mt-1 font-medium">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 pt-5 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#f5d061] text-[#f5d061]" />
                  ))}
                  <span className="text-xs font-semibold text-slate-600 ml-1">4.7/5 on Google</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Based on verified customer reviews</p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={28} className="text-white/50" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════
          SAVINGS BANNER
      ══════════════════════════════════ */}
      <div className="bg-gradient-to-r from-[#059669] via-[#047857] to-[#065f46] py-4 px-5">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-white text-center">
          <div className="flex items-center gap-2">
            <Leaf size={16} className="text-emerald-300" />
            <span className="text-xs sm:text-sm font-semibold">Save up to <strong>₹6,000/month</strong> on electricity</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30" />
          <div className="flex items-center gap-2">
            <IndianRupee size={16} className="text-emerald-300" />
            <span className="text-xs sm:text-sm font-semibold">Govt. subsidy up to <strong>₹78,000</strong> — we handle the paperwork</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30" />
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="text-xs sm:text-sm font-bold text-white underline underline-offset-2 hover:no-underline flex items-center gap-1">
            Get free quote <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* ══════════════════════════════════
          BRANDS MARQUEE
      ══════════════════════════════════ */}
      <section className="border-b border-slate-200 bg-white py-8 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-8 mb-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center">
            Authorized Dealer — Premium Solar Brands
          </p>
        </div>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />
          {/* Marquee */}
          <div className="flex overflow-hidden">
            <div className="marquee-track">
              {[...BRANDS, ...BRANDS].map((brand, i) => (
                <div key={`${brand.name}-${i}`}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-[#0a1628] hover:border-[#0a1628] px-6 py-3.5 cursor-default group transition-all duration-300 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#c9970a] group-hover:bg-[#f5d061] transition-colors" />
                  <div>
                    <p className="text-sm font-bold text-[#0a1628] group-hover:text-white transition-colors leading-none">{brand.name}</p>
                    <p className="text-[10px] text-slate-400 group-hover:text-white/60 transition-colors mt-0.5">{brand.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ABOUT
      ══════════════════════════════════ */}
      <section id="about" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="grid grid-cols-12 gap-3"
            >
              <div
                className="col-span-12 lg:col-span-8 lg:row-span-2 relative h-[240px] sm:h-[300px] lg:h-[440px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
                onClick={() => openLightbox(FOUNDER_IMAGES[0])}
              >
                <Image src={FOUNDER_IMAGES[0]} alt="VE Solar founder in Lucknow" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                {/* Badge overlay */}
                <div className="absolute bottom-4 left-4 glass-card rounded-xl px-3 py-2">
                  <p className="text-xs font-bold text-[#0a1628]">20+ Years</p>
                  <p className="text-[10px] text-slate-500">Serving Lucknow</p>
                </div>
              </div>
              <div className="col-span-6 lg:col-span-4 relative h-[140px] sm:h-[180px] lg:h-[210px] rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
                onClick={() => openLightbox(FOUNDER_IMAGES[1])}>
                <Image src={FOUNDER_IMAGES[1]} alt="VE Solar team at work" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="col-span-6 lg:col-span-4 relative h-[140px] sm:h-[180px] lg:h-[210px] rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
                onClick={() => openLightbox(FOUNDER_IMAGES[2])}>
                <Image src={FOUNDER_IMAGES[2]} alt="VE Solar installation award" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-110 transition duration-500" />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <p className="section-label mb-5">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1628] mb-6 tracking-tight leading-tight">
                Established in 2003 —<br />Same Address, Same Trust
              </h2>
              <div className="space-y-4 text-base md:text-lg text-slate-600 leading-relaxed mb-8">
                <p>
                  VE Solar Solutions was founded in 2003 with one mission: provide <strong className="text-[#0a1628]">affordable, reliable solar energy</strong> to Lucknow families. What started as an inverter and battery business has grown into the region&apos;s most trusted solar installation company.
                </p>
                <p>
                  Operating from the <strong className="text-[#0a1628]">same Aliganj location for 20+ years</strong>, our reputation is built on quality workmanship, transparent pricing, and genuine after-sales support — not one-time sales. When you call us a year later, we answer.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {['UPNEDA Registered', 'Multi-Brand Dealer', 'Same Location Since 2003'].map((label) => (
                  <span key={label}
                    className="inline-flex items-center gap-2 rounded-full bg-[#0a1628]/6 border border-[#0a1628]/10 px-4 py-2 text-sm font-semibold text-[#0a1628] hover:bg-[#0a1628] hover:text-white transition-all duration-300 cursor-default">
                    <CheckCircle size={14} className="text-[#c9970a]" />
                    {label}
                  </span>
                ))}
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0a1628] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#132744] transition-all duration-300 shadow-lg shadow-[#0a1628]/25 hover:shadow-xl hover:scale-[1.02] btn-shimmer"
              >
                Talk to Our Team
                <ArrowRight size={16} />
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════ */}
      <section id="why-us" className="py-24 md:py-32 bg-[#0a1628] text-white relative overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#c9970a]/6 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#059669]/6 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center max-w-2xl mx-auto"
          >
            <p className="section-label justify-center mb-5">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              What Makes VE Solar{' '}
              <span className="text-gradient-gold">Different</span>
            </h2>
            <p className="text-slate-300 text-lg">
              Two decades of expertise, professional standards, and genuine commitment to every customer in Lucknow.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {WHY_US.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="card-glow-border group"
                >
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7 hover:bg-white/8 hover:border-[#c9970a]/25 transition-all duration-300 h-full">
                    <div className="mb-5 inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-[#c9970a]/15 text-[#f5d061] group-hover:bg-[#c9970a]/25 transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2.5 group-hover:text-[#f5d061] transition-colors duration-200">{item.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════
          PROCESS / HOW IT WORKS
      ══════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#f8f9fc]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="section-label justify-center mb-5">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1628] tracking-tight">
              From Survey to Savings in 5 Simple Steps
            </h2>
            <p className="text-slate-500 mt-3 text-lg max-w-xl mx-auto">
              We handle everything — so you can sit back and start saving from day one.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8 md:gap-6">
            {PROCESS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group text-center"
                >
                  {/* Connector line */}
                  {index < PROCESS.length - 1 && (
                    <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#c9970a]/40 to-transparent z-0" />
                  )}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-4 relative">
                      <div className="w-14 h-14 rounded-2xl bg-[#0a1628] flex items-center justify-center shadow-lg shadow-[#0a1628]/30 group-hover:bg-[#c9970a] transition-colors duration-300">
                        <Icon size={22} className="text-[#f5d061] group-hover:text-white transition-colors" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#c9970a] text-[#0a1628] text-[10px] font-extrabold flex items-center justify-center shadow-md">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-[#0a1628] mb-2 group-hover:text-[#c9970a] transition-colors">{step.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#059669] px-8 py-4 text-base font-bold text-white btn-shimmer hover:bg-[#047857] transition-all duration-300 shadow-xl shadow-emerald-900/25 hover:scale-[1.02]"
            >
              <MessageCircle size={20} />
              Start with a Free Site Survey
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════
          TEAM
      ══════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="section-label justify-center mb-4">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1628] tracking-tight">
              Professional Installation Experts
            </h2>
            <p className="text-slate-500 mt-3 text-lg">Certified technicians with decades of combined field experience</p>
          </motion.div>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar -mx-5 px-5 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
            {TEAM_IMAGES.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(image)}
                className="relative shrink-0 w-[220px] md:w-auto h-60 md:h-72 rounded-3xl overflow-hidden shadow-lg cursor-pointer group snap-start"
              >
                <Image src={image} alt={`VE Solar team at work ${index + 1}`} fill sizes="(max-width: 768px) 220px, 20vw" className="object-cover group-hover:scale-110 transition duration-600" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-xs font-bold">VE Solar Team</p>
                  <p className="text-white/70 text-xs">Lucknow Installation</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          PROJECTS GALLERY
      ══════════════════════════════════ */}
      <section id="projects" className="py-24 md:py-32 bg-[#f8f9fc]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          >
            <div>
              <p className="section-label mb-4">Real Projects</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1628] tracking-tight">
                Our Installations Across Lucknow
              </h2>
              <p className="text-slate-500 mt-3 text-lg">Actual customer projects — every photo is real, no stock images</p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#c9970a]/12 border border-[#c9970a]/25 px-4 py-2 text-sm font-bold text-[#c9970a]">
                <Sun size={15} />
                {PROJECT_IMAGES.length} projects shown
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px]">
            {PROJECT_IMAGES.map((image, index) => {
              const isFeatured = image.featured || index === 0;
              return (
                <motion.div
                  key={image.path}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  viewport={{ once: true }}
                  onClick={() => openLightbox(image.path)}
                  className={`relative rounded-2xl overflow-hidden shadow-md cursor-pointer group ${
                    isFeatured ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'
                  }`}
                >
                  <Image
                    src={image.path}
                    alt={`${image.name} - VE Solar Solutions Lucknow`}
                    fill
                    sizes={isFeatured ? '(max-width: 768px) 100vw, 33vw' : '(max-width: 768px) 50vw, 16vw'}
                    className="object-cover group-hover:scale-105 transition duration-600"
                  />
                  <div className="absolute inset-0 bg-[#0a1628]/0 group-hover:bg-[#0a1628]/35 transition duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-1.5">
                      <p className="text-white text-xs font-bold">{image.name}</p>
                    </div>
                  </div>
                  {isFeatured && (
                    <span className="absolute top-3 left-3 rounded-full bg-[#c9970a] px-3 py-1 text-xs font-bold text-[#0a1628] shadow-lg">
                      ⭐ Featured
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          AWARDS
      ══════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="section-label justify-center mb-4">Recognition</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1628] tracking-tight">
              Awards & Certifications
            </h2>
            <p className="text-slate-500 mt-3 text-lg">Officially recognized for excellence in solar installations</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {AWARD_IMAGES.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(image)}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl cursor-pointer group bg-slate-50 border border-slate-200 hover:shadow-2xl hover:border-[#c9970a]/30 transition-all duration-300"
              >
                <Image src={image} alt={`VE Solar award and certification ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-4 group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          COMPARISON TABLE
      ══════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#0a1628] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#c9970a]/5 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="section-label justify-center mb-5">The VE Solar Difference</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Why We&apos;re Different From the Rest
            </h2>
            <p className="text-slate-300 text-lg">Proven reliability vs. uncertain newcomers</p>
          </motion.div>

          <div className="block md:hidden text-center mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-slate-300 border border-white/10">
              Swipe horizontally to see full comparison ↔
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
          >
            <div className="overflow-x-auto hide-scrollbar">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-white/8">
                    <th className="px-6 py-5 text-left text-sm font-bold text-slate-300">Factor</th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-[#f5d061]">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#f5d061]" />
                        VE Solar Solutions (20+ Years)
                      </div>
                    </th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-slate-400">New Contractors</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { factor: 'Track Record', ve: 'Proven 20+ years in Lucknow', other: 'Unknown / Unverified' },
                    { factor: 'Local Office', ve: 'Aliganj, Lucknow — same since 2003', other: 'Remote or Relocating' },
                    { factor: 'After-Sales Support', ve: 'Dedicated, lifetime support', other: 'Limited or None' },
                    { factor: 'Material Quality', ve: 'Hot-dip galvanized, premium grade', other: 'Variable / Unknown' },
                    { factor: 'Subsidy Handling', ve: '100% — full documentation done by us', other: 'Customer responsibility' },
                    { factor: 'Transparency', ve: 'Full cost disclosure upfront', other: 'Hidden charges common' },
                    { factor: 'Trust', ve: '100+ families — real reviews', other: 'No verifiable history' },
                  ].map((row, index) => (
                    <tr key={row.factor} className={`comparison-row ${index % 2 === 0 ? 'bg-white/[0.025]' : ''} transition-colors duration-200`}>
                      <td className="px-6 py-4 font-semibold text-sm border-t border-white/6 text-slate-200">{row.factor}</td>
                      <td className="px-6 py-4 text-sm border-t border-white/6">
                        <span className="inline-flex items-center gap-2 text-white">
                          <CheckCircle size={16} className="text-[#f5d061] shrink-0" />
                          {row.ve}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm border-t border-white/6 text-slate-400">{row.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════ */}
      <section id="testimonials" className="py-24 md:py-32 bg-[#f8f9fc]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">

            {/* Review Photo */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-h-[540px]"
            >
              <Image
                src="/images-review/IMG-20251121-WA0135.jpg"
                alt="Happy VE Solar customer in Lucknow — verified review"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl px-5 py-4">
                <div className="flex gap-1 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#f5d061] text-[#f5d061]" />
                  ))}
                  <span className="text-xs text-slate-600 ml-2 font-semibold">4.7 on Google</span>
                </div>
                <p className="text-[#0a1628] font-bold text-sm">Verified Lucknow Customer Reviews</p>
                <p className="text-slate-500 text-xs mt-0.5">Real homeowners, real savings</p>
              </div>
            </motion.div>

            {/* Testimonials */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <p className="section-label mb-4">Customer Reviews</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1628] tracking-tight">
                  What Lucknow Families Say
                </h2>
              </motion.div>

              {/* Auto-rotating testimonial */}
              <div className="relative mb-5 min-h-[180px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                  >
                    <div className="flex gap-1 mb-3">
                      {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-[#f5d061] text-[#f5d061]" />
                      ))}
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-5 text-base">
                      &ldquo;{TESTIMONIALS[activeTestimonial].text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0a1628] to-[#c9970a] flex items-center justify-center text-white font-bold text-sm">
                        {TESTIMONIALS[activeTestimonial].name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-[#0a1628]">{TESTIMONIALS[activeTestimonial].name}</p>
                        <p className="text-sm text-slate-500">{TESTIMONIALS[activeTestimonial].location}, Lucknow</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dot indicators */}
              <div className="flex gap-2 mb-8">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeTestimonial ? 'w-8 bg-[#c9970a]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`View testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Other testimonials mini-cards */}
              <div className="space-y-3 hidden sm:block">
                {TESTIMONIALS.filter((_, i) => i !== activeTestimonial).slice(0, 2).map((t) => (
                  <div key={t.name} className="rounded-xl border border-slate-200 bg-white/80 p-4 flex gap-3 items-start">
                    <div className="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-[#0a1628] to-[#c9970a] flex items-center justify-center text-white font-bold text-xs">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">&ldquo;{t.text}&rdquo;</p>
                      <p className="text-xs font-bold text-[#0a1628] mt-1">{t.name} · {t.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FAQ
      ══════════════════════════════════ */}
      <section id="faq" className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="section-label justify-center mb-5">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1628] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 mt-3 text-lg">Everything you need to know about going solar in Lucknow</p>
          </motion.div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-slate-500 mb-4">Still have questions? We answer instantly on WhatsApp.</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#059669] px-8 py-4 text-base font-bold text-white btn-shimmer hover:bg-[#047857] transition-all duration-300 shadow-xl shadow-emerald-900/20 hover:scale-[1.02]"
            >
              <MessageCircle size={20} />
              Ask Us on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CONTACT
      ══════════════════════════════════ */}
      <section id="contact" className="py-24 md:py-32 bg-[#0a1628] text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-[#c9970a]/6 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="section-label justify-center mb-5">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to Go <span className="text-gradient-gold">Solar?</span>
            </h2>
            <p className="text-slate-300 mt-3 text-lg">Free consultation — we respond within minutes on WhatsApp</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              {[
                {
                  icon: MessageCircle,
                  title: 'WhatsApp (Fastest)',
                  content: <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-[#10b981] hover:underline">Chat with us instantly →</a>,
                  bg: 'bg-[#059669]/15',
                  color: 'text-[#10b981]',
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  content: <a href={PHONE_URL} className="text-lg font-bold text-white hover:text-[#f5d061] transition">{PHONE}</a>,
                  bg: 'bg-white/10',
                  color: 'text-[#f5d061]',
                },
                {
                  icon: MapPin,
                  title: 'Visit Our Office',
                  content: (
                    <p className="text-slate-300 leading-relaxed">
                      24, UGF, Shreenath Complex,<br />
                      Near Engineering College Chauraha,<br />
                      Sector E, Aliganj, Lucknow — 226020
                    </p>
                  ),
                  bg: 'bg-white/10',
                  color: 'text-red-400',
                },
                {
                  icon: Clock,
                  title: 'Working Hours',
                  content: <p className="text-slate-300">Mon – Sat: 9:00 AM – 7:00 PM</p>,
                  bg: 'bg-white/10',
                  color: 'text-blue-400',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/8 transition duration-300">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.bg}`}>
                      <Icon className={item.color} size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{item.title}</h3>
                      {item.content}
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* WhatsApp Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/6 p-8 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-white mb-2">Get a Free Quote</h3>
              <p className="text-slate-400 text-sm mb-7">Tell us about your home — we&apos;ll respond with a custom plan within 30 minutes.</p>
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem('customerName') as HTMLInputElement)?.value?.trim() || '';
                  const phone = (form.elements.namedItem('customerPhone') as HTMLInputElement)?.value?.trim() || '';
                  const locality = (form.elements.namedItem('customerLocality') as HTMLInputElement)?.value?.trim() || '';
                  const message = (form.elements.namedItem('customerMessage') as HTMLTextAreaElement)?.value?.trim() || '';
                  const parts = [
                    `Hello VE Solar Solutions, I'm interested in solar installation.`,
                    name && `Name: ${name}`,
                    phone && `Phone: ${phone}`,
                    locality && `Locality: ${locality}`,
                    message && `Details: ${message}`,
                    `Please share a free quote.`,
                  ].filter(Boolean).join('\n');
                  const waUrl = `https://wa.me/916390718627?text=${encodeURIComponent(parts)}`;
                  window.open(waUrl, '_blank', 'noopener');
                }}
              >
                <div>
                  <label htmlFor="customerName" className="block text-sm font-semibold text-slate-300 mb-2">Your Name</label>
                  <input
                    id="customerName"
                    name="customerName"
                    type="text"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-white/10 text-white text-base placeholder-slate-500 focus:border-[#c9970a] focus:outline-none focus:bg-white/15 transition duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="customerPhone" className="block text-sm font-semibold text-slate-300 mb-2">Phone Number</label>
                  <input
                    id="customerPhone"
                    name="customerPhone"
                    type="tel"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-white/10 text-white text-base placeholder-slate-500 focus:border-[#c9970a] focus:outline-none focus:bg-white/15 transition duration-200"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="customerLocality" className="block text-sm font-semibold text-slate-300 mb-2">Your Locality in Lucknow</label>
                  <input
                    id="customerLocality"
                    name="customerLocality"
                    type="text"
                    className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-white/10 text-white text-base placeholder-slate-500 focus:border-[#c9970a] focus:outline-none focus:bg-white/15 transition duration-200"
                    placeholder="e.g. Gomti Nagar, Aliganj, Indira Nagar"
                  />
                </div>
                <div>
                  <label htmlFor="customerMessage" className="block text-sm font-semibold text-slate-300 mb-2">Message / Requirements</label>
                  <textarea
                    id="customerMessage"
                    name="customerMessage"
                    rows={3}
                    className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-white/10 text-white text-base placeholder-slate-500 focus:border-[#c9970a] focus:outline-none focus:bg-white/15 transition duration-200 resize-none"
                    placeholder="Electricity bill amount, roof size, preferred system size..."
                  />
                </div>
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full rounded-full bg-[#059669] px-6 py-4 text-base font-bold text-white btn-shimmer hover:bg-[#047857] transition-all duration-300 shadow-xl shadow-emerald-900/30 hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  Send via WhatsApp — Get Quote in 30 Min
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FLOATING WHATSAPP
      ══════════════════════════════════ */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-[#059669] text-white shadow-2xl shadow-emerald-900/40 hover:bg-[#047857] transition-all duration-300 pl-5 pr-6 py-4 group wa-float"
        aria-label="Chat on WhatsApp"
      >
        {/* Subtle pulse ring — less aggressive than animate-ping */}
        <span className="absolute -inset-1 rounded-full bg-[#059669]/40 wa-glow pointer-events-none" />
        <MessageCircle size={22} />
        <span className="hidden sm:inline text-sm font-bold">WhatsApp for Free Quote</span>
        <span className="sm:hidden text-sm font-bold">Quote</span>
      </a>

      {/* ══════════════════════════════════
          FOOTER
      ══════════════════════════════════ */}
      <footer className="bg-[#060e1a] text-slate-300 py-16 border-t border-white/8">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 p-1.5">
                  <Image src="/imageslogo/SOLAR (1) (1).jpg" alt="VE Solar Solutions Logo" width={44} height={44} className="h-full w-full object-contain" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">VE Solar Solutions</h3>
                  <p className="text-xs text-slate-500">Since 2003, Aliganj Lucknow</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Lucknow&apos;s most trusted solar installer. UPNEDA registered. Quality installations backed by 20+ years of experience.
              </p>
              <div className="flex gap-2">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#059669]/20 hover:bg-[#059669] text-[#10b981] hover:text-white transition-all duration-200">
                  <MessageCircle size={17} />
                </a>
                <a href={PHONE_URL}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/8 hover:bg-white/15 text-slate-400 hover:text-white transition-all duration-200">
                  <Phone size={17} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Quick Links</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="hover:text-[#f5d061] transition flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#c9970a] group-hover:w-2 transition-all duration-200" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Services</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                {['Residential Solar Installation', 'Commercial Solar Systems', 'Govt. Subsidy Assistance', 'Net Metering Setup', 'Solar Maintenance', 'EMI / Financing'].map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#c9970a]" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Contact</h4>
              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex gap-2">
                  <Phone size={15} className="text-[#f5d061] shrink-0 mt-0.5" />
                  <a href={PHONE_URL} className="hover:text-[#f5d061] transition font-semibold text-white">{PHONE}</a>
                </div>
                <div className="flex gap-2">
                  <MessageCircle size={15} className="text-[#10b981] shrink-0 mt-0.5" />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#10b981] transition">WhatsApp Now</a>
                </div>
                <div className="flex gap-2">
                  <MapPin size={15} className="text-red-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">24, UGF, Shreenath Complex, Aliganj, Lucknow — 226020</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {BRANDS.map((b) => (
                    <span key={b.name} className="text-[10px] font-semibold rounded-full border border-white/12 px-2.5 py-1 text-slate-400">
                      {b.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} VE Solar Solutions (VN Enterprise). All rights reserved.</p>
            <p className="text-center">
              UPNEDA Registered Solar Installer · Aliganj, Lucknow, Uttar Pradesh 226020 · India
            </p>
            <p>Serving Lucknow since 2003</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
