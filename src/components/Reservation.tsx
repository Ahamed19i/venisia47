import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, Send, CheckCircle2 } from 'lucide-react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '2',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappNumber = "221338423435";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = encodeURIComponent(
      `Bonjour Caramel Dakar, je souhaite faire une réservation :\n\n` +
      `👤 Nom : ${formData.name}\n` +
      `📅 Date : ${formData.date}\n` +
      `🕒 Heure : ${formData.time}\n` +
      `👥 Personnes : ${formData.guests}`
    );
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setIsSubmitted(true);
    
    // Reset after some time
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', date: '', time: '', guests: '2' });
    }, 5000);
  };

  return (
    <section id="reservation" className="py-24 bg-brand-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-red rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-red rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
              Expérience Exclusive
            </span>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
              Réservez votre <br />
              <span className="text-brand-red italic underline decoration-white/10 underline-offset-8">Table de Prestige</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
              Assurez-vous une place dans notre cadre raffiné pour un moment de gourmandise inoubliable. Caramel Dakar vous accueille pour vos rendez-vous d'exception.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-red transition-colors">
                  <CheckCircle2 className="text-brand-red" size={20} />
                </div>
                <p className="text-gray-300 font-medium">Confirmation prioritaire via WhatsApp</p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-red transition-colors">
                  <CheckCircle2 className="text-brand-red" size={20} />
                </div>
                <p className="text-gray-300 font-medium">Pâtisseries fines et gastronomie d'exception</p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-red transition-colors">
                  <CheckCircle2 className="text-brand-red" size={20} />
                </div>
                <p className="text-gray-300 font-medium">Cadre sophistiqué au cœur de Dakar</p>
              </div>
            </div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/40 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-brand-red" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Demande Envoyée !</h3>
                <p className="text-gray-400">
                  Nous avons ouvert WhatsApp pour finaliser votre réservation. À très bientôt chez Caramel Dakar.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-brand-red font-bold hover:underline"
                >
                  Faire une autre réservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Nom Complet</label>
                  <div className="relative">
                    <input
                      required
                      type="text"
                      placeholder="Votre nom"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-12 focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Date</label>
                    <div className="relative">
                      <input
                        required
                        type="date"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-12 focus:outline-none focus:border-brand-red transition-colors text-white [color-scheme:dark]"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Heure</label>
                    <div className="relative">
                      <input
                        required
                        type="time"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-12 focus:outline-none focus:border-brand-red transition-colors text-white [color-scheme:dark]"
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                      />
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Nombre de Personnes</label>
                  <select
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-red transition-colors text-white appearance-none cursor-pointer"
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  >
                    {[1,2,3,4,5,6,7,8,10,12].map(num => (
                      <option key={num} value={num} className="bg-gray-900">{num} Personnes</option>
                    ))}
                    <option value="12+" className="bg-gray-900">Groupe (12+)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-red text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-white hover:text-brand-red transition-all duration-300 shadow-[0_10px_30px_rgba(153,27,27,0.2)]"
                >
                  <Send size={20} />
                  Confirmer la Réservation
                </button>
                
                <p className="text-center text-gray-500 text-xs mt-4">
                  En cliquant sur confirmer, vous serez redirigé vers WhatsApp pour finaliser avec notre équipe.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
