import { motion } from 'motion/react';

const galleryImages = [
  {
    id: 1,
    title: "Façade Venisia",
    category: "Extérieur",
    image: "https://picsum.photos/seed/venisia-terrace/800/600",
  },
  {
    id: 2,
    title: "L'Art du Bowl",
    category: "Signature",
    image: "https://picsum.photos/seed/venisia-bowl-art/1200/600",
  },
  {
    id: 3,
    title: "Espace Lounge",
    category: "Lounge",
    image: "https://picsum.photos/seed/venisia-lounge-blue/800/600",
  },
  {
    id: 4,
    title: "Célébrations Exclusives",
    category: "Événements",
    image: "https://picsum.photos/seed/venisia-party-night/800/600",
  },
  {
    id: 5,
    title: "Détails de Luxe",
    category: "Intérieur",
    image: "https://picsum.photos/seed/venisia-luxury-details/800/600",
  },
  {
    id: 6,
    title: "Gastronomie Fine",
    category: "Cuisine",
    image: "https://picsum.photos/seed/venisia-fine-dining/1200/600",
  },
  {
    id: 7,
    title: "Cocktails Signature",
    category: "Bar",
    image: "https://picsum.photos/seed/venisia-cocktails/800/600",
  },
  {
    id: 8,
    title: "Terrasse Privée",
    category: "Lounge",
    image: "https://picsum.photos/seed/venisia-terrace/800/600",
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
            className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Immersion Visuelle
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif mb-6 tracking-tighter"
          >
            L'Univers <span className="text-brand-red italic">Venisia</span>
          </motion.h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full" />
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
