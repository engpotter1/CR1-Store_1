import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, LogIn, CheckCircle2, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginTerminal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);
    setStatus('جارٍ التحقق من الهوية الرقمية...');

    setTimeout(() => {
      setStatus('تمت المصادقة بنجاح. مرحباً بك في CR1.');
      setLoading(false);
    }, 1800);
  };

  return (
    <section 
      id="login"
      className="relative min-h-screen flex flex-col justify-center items-center py-28 px-6 md:px-12 bg-black overflow-hidden select-none border-t border-cyan-500/10"
    >
      {/* Background neon grid lines */}
      <div className="absolute inset-0 z-0 opacity-15 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(6,182,212,0.15),rgba(0,0,0,0))]" />

      <div className="max-w-4xl w-full z-10 flex flex-col items-center">
        {/* Terminal Header Info */}
        <div className="flex flex-col mb-10 text-center max-w-xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-3 flex items-center justify-center gap-2"
          >
            <Terminal className="w-4 h-4 animate-pulse" />
            محطة الدخول الآمنة
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-black text-white bg-gradient-to-l from-white to-cyan-500/40 bg-clip-text text-transparent mb-4"
          >
            لوحة تسجيل الدخول المستقبلية
          </motion.h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            استخدم بيانات حسابك للوصول الآمن إلى خوادم CR1. نستخدم تشفيراً عالي الدقة (RSA-4096) لحماية بياناتك.
          </p>
        </div>

        {/* Futuristic Terminal Shell Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full max-w-md backdrop-blur-xl bg-black/60 border border-cyan-500/25 rounded-2xl overflow-hidden shadow-[0_0_35px_rgba(6,182,212,0.15)] group"
        >
          {/* Top Bar Window Decorations */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-black/40 border-b border-white/5 select-none">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400/70 select-none">
              <Shield className="w-3.5 h-3.5" />
              <span>TERMINAL [CR1_AUTH] v1.0.4</span>
            </div>
          </div>

          {/* Form / Terminal Content */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-cyan-200 uppercase tracking-widest flex justify-between select-none">
                <span>اسم المستخدم / البريد الإلكتروني</span>
                <span className="font-mono text-cyan-500/40">USER_ID</span>
              </label>
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@cr1.tech"
                  required
                  className="w-full bg-cyan-950/20 hover:bg-cyan-950/30 focus:bg-cyan-950/40 border border-cyan-500/30 hover:border-cyan-500/45 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 rounded-xl px-5 py-3.5 text-white placeholder-cyan-500/30 font-mono text-sm transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-cyan-200 uppercase tracking-widest flex justify-between select-none">
                <span>كلمة المرور المشفرة</span>
                <span className="font-mono text-cyan-500/40">AUTH_KEY</span>
              </label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-cyan-950/20 hover:bg-cyan-950/30 focus:bg-cyan-950/40 border border-cyan-500/30 hover:border-cyan-500/45 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 rounded-xl px-5 py-3.5 text-white placeholder-cyan-500/30 font-mono text-sm transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 text-cyan-500/50 hover:text-cyan-400 transition cursor-pointer select-none"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Status Panel or Command feedback line */}
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 border border-emerald-500/30 bg-emerald-950/15 p-3.5 rounded-xl text-emerald-400 font-mono text-xs select-none"
              >
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 animate-pulse" />
                <span className="leading-relaxed">{status}</span>
              </motion.div>
            )}

            {/* Login terminal command prompt button */}
            <button
              type="submit"
              disabled={loading}
              className="relative flex items-center justify-center gap-3 bg-gradient-to-l from-cyan-500/90 to-blue-600/90 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-base px-6 py-4 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-500 cursor-pointer select-none active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700"></div>
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  <span className="font-mono text-sm tracking-wide">AUTHENTICATING...</span>
                </>
              ) : (
                <>
                  <span className="tracking-wide">تنفيذ الدخول الآمن</span>
                  <LogIn className="w-4 h-4 group-hover:translate-x-[-2.5px] transition-transform duration-300" />
                </>
              )}
            </button>

            {/* Terminal cyber decoration / Footer metadata */}
            <div className="flex items-center justify-between mt-2 pt-4 border-t border-cyan-500/10 text-[10px] font-mono text-cyan-500/50 select-none uppercase tracking-wide">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-cyan-500/40" />
                Secure Session Active
              </span>
              <span>v1.0.2 rev // 2026</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
