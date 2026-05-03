import { Cpu } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-black border-t border-white/5 py-12 px-6 md:px-12 select-none overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-right">
        {/* Logo and Tagline */}
        <div className="flex flex-col md:items-start items-center gap-2">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-2xl font-black bg-gradient-to-l from-white to-cyan-400 bg-clip-text text-transparent">CR1</span>
          </div>
          <p className="text-gray-500 text-xs mt-1 font-semibold">
            جميع الحقوق محفوظة لمنصة CR1 © {new Date().getFullYear()}
          </p>
        </div>

        {/* Dynamic Nav Links */}
        <div className="flex gap-6 text-sm">
          <button onClick={() => scrollToSection('hero')} className="text-gray-400 hover:text-cyan-300 transition cursor-pointer">البداية</button>
          <button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-cyan-300 transition cursor-pointer">المزايا</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-cyan-300 transition cursor-pointer">الرؤية</button>
          <button onClick={() => scrollToSection('login')} className="text-gray-400 hover:text-cyan-300 transition cursor-pointer">الدخول</button>
        </div>
      </div>
    </footer>
  );
}
