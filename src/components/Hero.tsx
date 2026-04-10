import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-brand-white">
      {/* Background Pattern/Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920"
          alt="Venisia Dakar Ambiance"
          className="w-full h-full object-cover opacity-[0.03]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-white via-transparent to-brand-white/50" />
        
        {/* Animated Shapes */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-[1px] w-12 bg-brand-red"></div>
            <span className="text-brand-red text-[10px] font-bold uppercase tracking-[0.4em]">
              L'Excellence Gastronomique | Dakar
            </span>
          </motion.div>
          
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-serif leading-[0.85] mb-10 tracking-tighter text-brand-black">
            L'Art de <br />
            <span className="text-brand-red italic">Vivre</span> <br />
            <span className="relative inline-block">
              Venisia
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-red/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="8" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg text-gray-500 max-w-md mb-12 leading-relaxed font-medium">
            Une immersion sensorielle où la haute gastronomie rencontre l'élégance contemporaine. Nos célèbres <span className="text-brand-black font-bold">"Bowls à Table"</span> redéfinissent le partage.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden bg-brand-black text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 group shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 uppercase tracking-widest text-xs">Découvrir la Carte</span>
              <ShoppingBag size={18} className="relative z-10 group-hover:rotate-12 transition-transform" />
            </motion.a>
            
            <motion.a
              href="#reservation"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent border-2 border-brand-black/10 text-brand-black px-10 py-5 rounded-2xl font-bold flex items-center gap-3 group hover:border-brand-black transition-all duration-500"
            >
              <span className="uppercase tracking-widest text-xs">Réserver</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000"
              alt="Signature Bowl à Table - Venisia"
              className="w-full aspect-[4/5] object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Glass Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 bg-white/80 backdrop-blur-2xl p-8 rounded-[2rem] shadow-2xl z-20 hidden md:block border border-white/50 max-w-[280px]"
          >
            <div className="flex gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="w-3 h-3 bg-brand-gold rounded-full" />
              ))}
            </div>
            <p className="text-brand-black font-serif font-bold text-lg italic leading-tight mb-2">"Une expérience sensorielle sans précédent à Dakar."</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">— Vogue Gastronomie</p>
          </motion.div>
          
          {/* Decorative Background Elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />
        </motion.div>
      </div>
    </section>
  );
}
