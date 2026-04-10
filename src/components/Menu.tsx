import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Palette } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const categories = [
  { id: 'bowls', name: 'Bowls à Table' },
  { id: 'entrees', name: 'Entrées Raffinées' },
  { id: 'plats', name: 'Plats Signature' },
  { id: 'desserts', name: 'Douceurs Venisia' },
];

const menuItems = [
  {
    id: 1,
    category: 'bowls',
    name: "Le Bowl Venisia Royal",
    description: "Un assortiment spectaculaire de saveurs méditerranéennes et locales, servi dans notre bowl signature à partager.",
    price: "25.000 FCFA",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    category: 'bowls',
    name: "Bowl Océanique",
    description: "Sélection de fruits de mer frais, marinés aux herbes fines et agrumes, présenté pour 2 à 4 personnes.",
    price: "35.000 FCFA",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    category: 'entrees',
    name: "Carpaccio de Saint-Jacques",
    description: "Fines lamelles de Saint-Jacques, huile de truffe et zestes de citron vert.",
    price: "12.500 FCFA",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    category: 'plats',
    name: "Filet de Bœuf Rossini",
    description: "Cœur de filet de bœuf, foie gras poêlé, réduction au Porto et truffe noire.",
    price: "22.000 FCFA",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    category: 'plats',
    name: "Langouste Grillée Venisia",
    description: "Langouste entière grillée au beurre de corail, servie avec un risotto au safran.",
    price: "28.000 FCFA",
    image: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    category: 'desserts',
    name: "Sphère Chocolat Or",
    description: "Sphère en chocolat noir, cœur fondant praliné et feuilles d'or 24 carats.",
    price: "8.500 FCFA",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('bowls');
  const whatsappNumber = "221787942729";

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  const handleOrder = (itemName: string) => {
    const message = encodeURIComponent(`Bonjour Venisia, je souhaite commander : ${itemName}`);
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
            L'Expérience <span className="text-brand-red italic">Culinaire</span> Venisia
          </motion.h2>
          <div className="w-24 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto uppercase tracking-[0.3em] text-xs font-bold">
            Une symphonie de saveurs haute couture
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
                    className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold flex items-center justify-center gap-3 hover:bg-brand-red hover:border-brand-red hover:shadow-[0_10px_40px_rgba(227,24,55,0.4)] transition-all duration-500 group/btn relative overflow-hidden"
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
