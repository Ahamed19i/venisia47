import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Menu', href: '#menu' },
  { name: 'Galerie', href: '#galerie' },
  { name: 'À Propos', href: '#a-propos' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6",
        scrolled ? "bg-white/80 backdrop-blur-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#accueil" className="flex items-center gap-3 group">
          <div className="bg-brand-red p-1.5 rounded-2xl rotate-3 group-hover:rotate-0 transition-all duration-500 overflow-hidden w-11 h-11 flex items-center justify-center shadow-lg group-hover:shadow-brand-red/20">
            <img 
              src="/logo.png" 
              alt="Caramel Dakar Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('p-2');
                const text = document.createElement('span');
                text.className = 'text-white font-bold text-xl';
                text.innerText = 'C';
                e.currentTarget.parentElement?.appendChild(text);
              }}
            />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tighter text-brand-black group-hover:text-brand-red transition-colors duration-300">
            Caramel Dakar
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-brand-red transition-all duration-300 relative group/link"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-red transition-all duration-300 group-hover/link:w-full" />
            </a>
          ))}
          <a
            href="#reservation"
            className="bg-brand-black text-white px-8 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-brand-red transition-all duration-500 transform hover:-translate-y-1 shadow-lg hover:shadow-brand-red/20"
          >
            Réserver
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold hover:text-brand-red transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservation"
              onClick={() => setIsOpen(false)}
              className="bg-brand-red text-white text-center py-4 rounded-xl font-bold mt-2"
            >
              Réserver Maintenant
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
