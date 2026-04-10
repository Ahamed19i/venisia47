import { motion } from 'motion/react';
import { Heart, Users, Clock, MapPin } from 'lucide-react';

const stats = [
  { icon: Heart, label: "Passion", value: "100%" },
  { icon: Users, label: "Clients", value: "5000+" },
  { icon: Clock, label: "Expérience", value: "15 Ans" },
  { icon: MapPin, label: "Dakar", value: "Local" },
];

export default function About() {
  return (
    <section id="a-propos" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://picsum.photos/seed/venisia-interior/400/500"
                alt="Ambiance Venisia"
                className="rounded-3xl shadow-lg transform translate-y-8"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://picsum.photos/seed/venisia-bowl-presentation/400/500"
                alt="L'Art du Bowl à Table"
                className="rounded-3xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-red/5 rounded-full blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-8">
              L'Élégance <br />
              <span className="text-brand-red italic">au Cœur de Dakar</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Venisia est une destination gastronomique d'exception, où le luxe rencontre la convivialité. Situé dans l'un des quartiers les plus prestigieux de Dakar, notre établissement est le rendez-vous incontournable des amateurs de haute cuisine.
              </p>
              <p>
                Nous sommes fiers de vous présenter notre concept unique de "Bowl à Table", une expérience partagée qui allie esthétique et saveurs raffinées. Chez Venisia, chaque détail est pensé pour vous offrir un moment hors du temps, que ce soit pour un dîner intime ou une soirée lounge sophistiquée.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="bg-brand-red/10 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="text-brand-red" size={24} />
                  </div>
                  <p className="text-2xl font-serif font-bold">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
