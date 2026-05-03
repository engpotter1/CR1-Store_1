import { motion } from 'framer-motion';
import { Shield, Zap, Sparkles, Cpu } from 'lucide-react';

const featuresData = [
  {
    id: 1,
    title: 'الأداء الخارق',
    description: 'معمارية الجيل الجديد لتقديم تجربة تسوق فورية وسريعة جداً بفضل التقنيات المستقبلية المتقدمة.',
    icon: Zap,
    gradient: 'from-cyan-500/20 to-blue-500/10',
    iconColor: 'text-cyan-400'
  },
  {
    id: 2,
    title: 'أمان فائق الذكاء',
    description: 'تشفير متطور ومصادقة سحابية ذكية تضمن خصوصية وسلامة تعاملاتك الرقمية بالكامل.',
    icon: Shield,
    gradient: 'from-blue-500/20 to-indigo-500/10',
    iconColor: 'text-blue-400'
  },
  {
    id: 3,
    title: 'واجهة مستقبلية (3D)',
    description: 'عناصر بصرية مبهرة مستوحاة من الأبعاد الثلاثية تعزز من تفاعلك وانغماسك في التجربة.',
    icon: Sparkles,
    gradient: 'from-purple-500/20 to-pink-500/10',
    iconColor: 'text-purple-400'
  },
  {
    id: 4,
    title: 'الذكاء الاصطناعي',
    description: 'نظام توصيات فوري يتكيف مع سلوكك لتقديم اقتراحات مخصصة تواكب تطلعاتك تماماً.',
    icon: Cpu,
    gradient: 'from-emerald-500/20 to-teal-500/10',
    iconColor: 'text-emerald-400'
  }
];

export default function Features() {
  return (
    <section 
      id="features"
      className="relative min-h-screen flex flex-col justify-center py-28 px-6 md:px-12 bg-black overflow-hidden select-none"
    >
      {/* Background Animated Accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full z-10">
        {/* Section Title */}
        <div className="flex flex-col mb-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-3"
          >
            التقنية والابتكار
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-black text-white bg-gradient-to-l from-white via-cyan-100 to-cyan-500/30 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            المزايا الأساسية لمنصة CR1
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            بنينا منصة CR1 باستخدام أحدث معايير الأمان والتقنيات التفاعلية لتوفير أفضل تجربة تصفح لعملائنا.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
          {featuresData.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative backdrop-blur-md bg-black/40 border border-white/5 hover:border-cyan-500/40 rounded-2xl p-8 lg:p-10 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer overflow-hidden flex flex-col md:flex-row gap-6 items-start"
              >
                {/* Background Highlight Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Icon Container */}
                <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-14 h-14 bg-white/5 group-hover:bg-cyan-500/10 border border-white/10 group-hover:border-cyan-500/30 rounded-xl group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300">
                  <Icon className={`w-7 h-7 ${feature.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                </div>

                {/* Text Content */}
                <div className="relative z-10 flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Tech Grid */}
                <div className="absolute -bottom-3 -left-3 opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none select-none">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 100 100">
                    <circle cx="5" cy="5" r="1.5" />
                    <circle cx="25" cy="5" r="1.5" />
                    <circle cx="45" cy="5" r="1.5" />
                    <circle cx="5" cy="25" r="1.5" />
                    <circle cx="25" cy="25" r="1.5" />
                    <circle cx="45" cy="25" r="1.5" />
                    <circle cx="5" cy="45" r="1.5" />
                    <circle cx="25" cy="45" r="1.5" />
                    <circle cx="45" cy="45" r="1.5" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
