import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Palette } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const categories = [
  { id: 'patisseries', name: 'Pâtisseries Fines' },
  { id: 'glaces', name: 'Glaces Artisanales' },
  { id: 'sale', name: 'Côté Salé' },
  { id: 'boissons', name: 'Boissons & Cafés' },
];

const menuItems = [
  {
    id: 1,
    category: 'patisseries',
    name: "L'Éclair au Caramel",
    description: "Pâte à chou légère, crème onctueuse au caramel beurre salé et glaçage miroir.",
    price: "3.500 FCFA",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    category: 'glaces',
    name: "La Pistache Royale",
    description: "Glace artisanale à la pistache d'Iran, éclats de pistaches torréfiées.",
    price: "4.500 FCFA",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    category: 'sale',
    name: "Croque Monsieur Prestige",
    description: "Pain de mie artisanal, jambon de qualité, béchamel onctueuse et fromage affiné.",
    price: "7.500 FCFA",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    category: 'patisseries',
    name: "Mille-Feuille Vanille",
    description: "Feuilletage inversé croustillant, crème diplomate à la vanille de Madagascar.",
    price: "4.000 FCFA",
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    category: 'boissons',
    name: "Cappuccino Caramel",
    description: "Espresso intense, mousse de lait veloutée et filet de caramel maison.",
    price: "3.000 FCFA",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    category: 'glaces',
    name: "Sorbet Framboise",
    description: "Sorbet plein fruit à la framboise sauvage, fraîcheur intense.",
    price: "4.000 FCFA",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=800",
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('patisseries');
  const whatsappNumber = "221338423435";

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  const handleOrder = (itemName: string) => {
    const message = encodeURIComponent(`Bonjour Caramel Dakar, je souhaite commander : ${itemName}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="menu" className="py-24 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif mb-4 text-white tracking-tight"
          >
            La Carte <span className="text-brand-red italic">Caramel</span> Dakar
          </motion.h2>
          <div className="w-24 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto uppercase tracking-[0.3em] text-xs font-bold">
            L'excellence du goût dans chaque création
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 border",
                activeCategory === cat.id
                  ? "bg-brand-red text-white border-brand-red shadow-[0_10px_30px_rgba(227,24,55,0.3)]"
                  : "bg-transparent text-gray-500 border-white/10 hover:border-brand-red/50 hover:text-white"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative group rounded-[2.5rem] overflow-hidden bg-white/[0.02] border border-white/5 hover:border-brand-red/30 transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-60" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-6 right-6 bg-brand-black/80 backdrop-blur-xl px-5 py-2 rounded-full border border-white/10 shadow-2xl">
                    <span className="text-brand-red font-bold text-sm tracking-tighter">{item.price}</span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-red transition-colors duration-300">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  <button
                    onClick={() => handleOrder(item.name)}
                    className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold flex items-center justify-center gap-3 hover:bg-brand-red hover:border-brand-red hover:shadow-[0_10px_40px_rgba(153,27,27,0.4)] transition-all duration-500 group/btn relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <Palette size={18} className="group-hover/btn:scale-110 transition-transform" />
                    <span className="uppercase tracking-[0.2em] text-[10px]">Commander</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
