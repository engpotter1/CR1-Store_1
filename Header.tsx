import { motion } from 'framer-motion';
import { Cpu, Terminal } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-cyan-500/10 px-6 py-4 md:px-12 flex justify-between items-center select-none"
    >
      {/* Brand Logo */}
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
        <div className="relative flex items-center justify-center w-10 h-10 border border-cyan-500/30 rounded-lg overflow-hidden group">
          <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Cpu className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <span className="text-2xl font-black tracking-wider bg-gradient-to-l from-white to-cyan-400 bg-clip-text text-transparent hover:brightness-125 transition duration-300">
          CR1
        </span>
      </div>

      {/* Futuristic Navigation links (Arabic) */}
      <nav className="hidden md:flex items-center gap-8 font-semibold text-sm">
        <button 
          onClick={() => scrollToSection('hero')}
          className="text-gray-400 hover:text-cyan-300 transition duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] cursor-pointer"
        >
          البداية
        </button>
        <button 
          onClick={() => scrollToSection('features')}
          className="text-gray-400 hover:text-cyan-300 transition duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] cursor-pointer"
        >
          التقنية
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className="text-gray-400 hover:text-cyan-300 transition duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] cursor-pointer"
        >
          الرؤية
        </button>
      </nav>

      {/* Call to action (Login Terminal) */}
      <div>
        <button
          onClick={() => scrollToSection('login')}
          className="relative flex items-center gap-2 group cursor-pointer border border-cyan-500/40 rounded-xl px-5 py-2.5 overflow-hidden backdrop-blur-sm bg-black/60 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all duration-300 active:scale-95"
        >
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <span className="text-xs font-mono text-cyan-500 bg-cyan-950/50 px-1.5 py-0.5 rounded border border-cyan-500/20">CTRL+L</span>
          <span className="text-sm font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors duration-300">دخول المحطة</span>
          <Terminal className="w-4 h-4 text-cyan-400 group-hover:translate-x-[-2px] transition-transform duration-300" />
        </button>
      </div>
    </motion.header>
  );
}
