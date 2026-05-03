import { motion } from 'framer-motion';
import { Eye, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function About() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about"
      className="relative min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 bg-black overflow-hidden select-none border-b border-white/5"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[110px] pointer-events-none" />
        {/* Abstract floating wireframe cube or polygons with SVGs */}
        <div className="absolute top-24 right-1/4 animate-pulse opacity-15">
          <svg width="240" height="240" viewBox="0 0 240 240" fill="none">
            <rect x="10" y="10" width="220" height="220" rx="40" stroke="url(#about-glow)" strokeWidth="1.5" strokeDasharray="5 15" />
            <rect x="50" y="50" width="140" height="140" rx="30" stroke="url(#about-glow)" strokeWidth="1" strokeDasharray="12 10" />
            <defs>
              <linearGradient id="about-glow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Interactive Panel (RTL View - right side text, left side visual) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="lg:col-span-5 flex flex-col justify-center relative select-none"
        >
          <div className="relative group p-6 backdrop-blur-xl bg-cyan-950/10 border border-cyan-500/20 hover:border-cyan-400/40 rounded-3xl overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-500">
            {/* Visual Accent Matrix/Circle */}
            <div className="relative w-full aspect-square max-w-[320px] mx-auto border border-white/5 group-hover:border-cyan-500/30 rounded-2xl flex items-center justify-center bg-black/60 overflow-hidden duration-500">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none" />
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
                className="w-40 h-40 border border-dashed border-cyan-500/30 rounded-full flex items-center justify-center p-3"
              >
                <div className="w-24 h-24 border border-cyan-500/40 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-black text-white bg-gradient-to-l from-white to-cyan-400 bg-clip-text text-transparent">CR1</span>
                </div>
              </motion.div>
            </div>

            {/* Glowing Stats inside visually pleasing container */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex flex-col p-4 bg-white/5 border border-white/5 rounded-xl text-center group-hover:bg-cyan-500/5 duration-300">
                <span className="text-2xl font-black text-cyan-400">99.9%</span>
                <span className="text-xs text-gray-400 mt-1">توفّر الخدمة</span>
              </div>
              <div className="flex flex-col p-4 bg-white/5 border border-white/5 rounded-xl text-center group-hover:bg-cyan-500/5 duration-300">
                <span className="text-2xl font-black text-cyan-400">+10K</span>
                <span className="text-xs text-gray-400 mt-1">صفقة يومية</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Content Panel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <span className="text-sm font-bold text-cyan-400 tracking-widest uppercase mb-4 flex items-center gap-2">
            <Eye className="w-4 h-4" />
            الرؤية والهدف
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white bg-gradient-to-l from-white via-cyan-100 to-cyan-500/30 bg-clip-text text-transparent mb-6 drop-shadow-[0_0_15px_rgba(6,182,212,0.1)] leading-tight">
            نحن نبتكر مستقبل التسوق الإلكتروني الفخم
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            رسالتنا في CR1 هي إعادة ابتكار المعاملات الرقمية والربط السلس بين التصميم عالي الفخامة وسرعة الأداء لتزويد المستهلكين بتجربة استثنائية ليس لها مثيل.
          </p>

          <div className="space-y-5 mb-10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 border border-cyan-500/30 rounded-lg flex items-center justify-center bg-cyan-950/20 group">
                <ShieldCheck className="w-5 h-5 text-cyan-400 group-hover:scale-110 duration-300" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">تشفير وحماية البيانات</h4>
                <p className="text-sm text-gray-400 mt-1">توفير أعلى معايير الخصوصية والتشفير المالي المتطور بنسبة 100%.</p>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={() => scrollToSection('login')}
              className="group cursor-pointer inline-flex items-center gap-2 border border-cyan-500/40 hover:border-cyan-400/70 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] rounded-xl px-7 py-3 backdrop-blur-sm bg-black/60 transition-all duration-300 active:scale-95"
            >
              <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">جرب المحطة الرقمية الآن</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
