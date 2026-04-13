
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Moussa D.",
    text: "Le meilleur burger de Dakar ! La viande est juteuse, le pain est incroyablement moelleux et les saveurs sont au rendez-vous.",
    rating: 5
  },
  {
    id: 2,
    name: "Fatou K.",
    text: "Une ambiance super sympa et des burgers vraiment originaux. Je recommande vivement le Brasil Burger, c'est une tuerie !",
    rating: 5
  },
  {
    id: 3,
    name: "Abdou L.",
    text: "Service rapide et burgers délicieux. Le Guarana Antarctica est un vrai plus pour l'expérience brésilienne. Incontournable !",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4"
          >
            Ce que disent nos <span className="text-brand-red italic">Clients</span>
          </motion.h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className={i < 4 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} />
              ))}
            </div>
            <span className="font-bold text-lg">4.3 / 5</span>
            <span className="text-gray-400 text-sm">(12 avis)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-[2rem] relative group hover:bg-brand-red hover:text-white transition-all duration-500"
            >
              <Quote className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity" size={48} />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} />
                ))}
              </div>
              <p className="text-lg italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <p className="font-bold uppercase tracking-widest text-xs opacity-60">
                — {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
