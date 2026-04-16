
import { motion } from 'motion/react';

const galleryImages = [
  {
    id: 1,
    title: "Le Salon de Thé",
    category: "Intérieur",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Pâtisseries Fines",
    category: "Signature",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "Cadre Raffiné",
    category: "Ambiance",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "L'Art du Café",
    category: "Barista",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Détails Sucrés",
    category: "Gourmet",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "Service d'Exception",
    category: "Prestige",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 7,
    title: "Macarons Maison",
    category: "Douceurs",
    image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 8,
    title: "Terrasse Ombragée",
    category: "Extérieur",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
  }
];

export default function Gallery() {
  return (
    <section id="galerie" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Immersion Visuelle
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif mb-6 tracking-tighter"
          >
            L'Univers <span className="text-brand-red italic">Caramel</span> Dakar
          </motion.h2>
          <div className="w-20 h-1 bg-brand-red mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group relative overflow-hidden rounded-2xl cursor-pointer aspect-square",
                index === 1 || index === 5 ? "sm:col-span-2 sm:aspect-[2/1] lg:col-span-2 lg:aspect-[2/1]" : ""
              )}
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.category}
                </span>
                <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper function to handle conditional classes
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
