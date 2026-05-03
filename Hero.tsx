import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Orbit } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Mouse tilt parallax effect for desktop
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax scrolling values
  const textY = useTransform(scrollY, [0, 600], [0, 200]);
  const textScale = useTransform(scrollY, [0, 500], [1, 0.85]);
  const opacity = useTransform(scrollY, [0, 450], [1, 0]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-black select-none"
    >
      {/* Dynamic Cinematic Floating/Moving Background Objects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Floating animated glowing grid - rotating faux-3D */}
        <div 
          style={{
            transform: `perspective(1200px) rotateX(60deg) translateY(${mousePosition.y * 30}px) rotateZ(${mousePosition.x * 12}deg)`,
            transition: 'transform 0.15s ease-out'
          }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0c_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35"
        />

        {/* Moving electric blue/cyan gradient spheres */}
        <div 
          style={{
            transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px)`,
            transition: 'transform 0.2s ease-out'
          }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[600px] bg-cyan-500/10 rounded-full blur-[140px] filter select-none pointer-events-none"
        />
        <div 
          style={{
            transform: `translate(${mousePosition.x * 35}px, ${mousePosition.y * 35}px)`,
            transition: 'transform 0.25s ease-out'
          }}
          className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] max-w-[500px] bg-blue-500/10 rounded-full blur-[130px] filter select-none pointer-events-none"
        />

        {/* 3D lines floating decoration */}
        <div className="absolute w-full h-full inset-0 flex items-center justify-center pointer-events-none">
          <svg className="w-[85vw] h-[85vw] max-w-[900px] animate-[spin_50s_linear_infinite] opacity-15">
            <circle cx="50%" cy="50%" r="48%" stroke="url(#electric-glow)" strokeWidth="1" fill="none" strokeDasharray="10 35" />
            <circle cx="50%" cy="50%" r="35%" stroke="url(#cyan-glow)" strokeWidth="1" fill="none" strokeDasharray="30 25" />
            <circle cx="50%" cy="50%" r="20%" stroke="url(#blue-glow)" strokeWidth="1.5" fill="none" strokeDasharray="50 15" />
            <defs>
              <linearGradient id="electric-glow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="cyan-glow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0891b2" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="blue-glow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Main Content Layer */}
      <motion.div 
        style={{ y: textY, scale: textScale, opacity }}
        className="relative z-10 flex flex-col items-center justify-center text-center max-w-5xl px-6"
      >
        {/* Futuristic Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 border border-cyan-500/30 px-4 py-1.5 rounded-full bg-cyan-950/25 backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.1)] mb-8 select-none"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-wider text-cyan-200 uppercase bg-gradient-to-l from-white to-cyan-400 bg-clip-text text-transparent">
            فصل جديد من التجارة الإلكترونية الرقمية
          </span>
        </motion.div>

        {/* Brand Main Heading CR1 */}
        <motion.div
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * -12}deg) rotateY(${mousePosition.x * 12}deg)`,
            transition: 'transform 0.1s linear'
          }}
          className="relative flex flex-col items-center select-none"
        >
          {/* Back Glowing Shadow Layer for Typography */}
          <div className="absolute inset-0 bg-cyan-500/20 blur-[120px] rounded-full scale-75 select-none pointer-events-none duration-500 hover:bg-cyan-400/30"></div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[20vw] md:text-[14rem] font-extrabold tracking-widest leading-none drop-shadow-[0_0_35px_rgba(6,182,212,0.45)] select-none bg-gradient-to-b from-white via-cyan-100 to-cyan-500/40 bg-clip-text text-transparent cursor-default"
          >
            CR1
          </motion.h1>
        </motion.div>

        {/* Futuristic tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl font-bold max-w-2xl mt-4 text-cyan-200/90 leading-relaxed tracking-wide select-none drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]"
        >
          الذكاء الاصطناعي، والسرعة، والرفاهية الرقمية تلتقي في واجهة مستقبلية واحدة.
        </motion.p>

        {/* Actions Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-5 mt-10"
        >
          <button
            onClick={() => scrollToSection('login')}
            className="group relative cursor-pointer flex items-center justify-center gap-3 bg-gradient-to-l from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-base px-10 py-4 rounded-xl border border-cyan-300/30 overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-500 select-none active:scale-95"
          >
            <span className="relative z-10 tracking-wide">تسجيل الدخول السريع</span>
            <Orbit className="relative z-10 w-5 h-5 text-white group-hover:rotate-45 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700"></div>
          </button>

          <button
            onClick={() => scrollToSection('features')}
            className="group relative cursor-pointer flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 hover:border-cyan-500/40 px-9 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 font-semibold text-base select-none"
          >
            <span className="tracking-wide">اكتشف المزايا</span>
          </button>
        </motion.div>
      </motion.div>

      {/* High Easing Smooth Scrolling Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        onClick={() => scrollToSection('features')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer flex flex-col items-center gap-2 select-none"
      >
        <span className="text-xs font-bold text-cyan-400/70 tracking-widest uppercase">مرر للأسفل</span>
        <ChevronDown className="w-5 h-5 text-cyan-400" />
      </motion.div>
    </section>
  );
}
