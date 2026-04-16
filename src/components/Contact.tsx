import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, CreditCard, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const paymentNumber = "+221 33 842 34 35";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(paymentNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 bg-brand-black text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-red rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-brand-red"></div>
              <span className="text-brand-red text-[10px] font-bold uppercase tracking-[0.4em]">Contact & Localisation</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif mb-10 text-white tracking-tight">
              Nous <br />
              <span className="text-brand-red italic text-6xl md:text-8xl">Rejoindre</span>
            </h2>
            
            <p className="text-gray-400 mb-16 max-w-md leading-relaxed text-lg">
              L'excellence de la pâtisserie fine et de la gastronomie vous attend au cœur de Dakar. Un cadre raffiné pour des moments inoubliables.
            </p>

            <div className="grid sm:grid-cols-2 gap-12">
              <div className="space-y-10">
                <div className="flex items-start gap-5 group">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500">
                    <MapPin size={24} className="text-brand-red group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Adresse</p>
                    <p className="text-white font-medium">Rue de Louga, Dakar, Sénégal</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500">
                    <Phone size={24} className="text-brand-red group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Téléphone</p>
                    <p className="text-white font-medium">+221 33 842 34 35</p>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div className="flex items-start gap-5 group">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500">
                    <CreditCard size={24} className="text-brand-red group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Paiement Mobile</p>
                    <div className="flex items-center gap-3">
                      <p className="text-white font-mono font-bold">{paymentNumber}</p>
                      <button 
                        onClick={copyToClipboard}
                        className="text-gray-500 hover:text-brand-red transition-colors"
                        title="Copier le numéro"
                      >
                        {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                      </button>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-1">Wave / Orange Money</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500">
                    <Clock size={24} className="text-brand-red group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Horaires</p>
                    <p className="text-brand-red font-bold">07:00 — 01:00</p>
                    <p className="text-[10px] text-gray-500">Ouvert tous les jours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-6 mt-20">
              <a href="https://www.facebook.com/carameldakar" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all duration-500 group">
                <Facebook size={22} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.instagram.com/carameldakar/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all duration-500 group">
                <Instagram size={22} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="h-[500px] lg:h-[600px] rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.1!2d-17.4552144!3d14.6802869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1736181487b43%3A0x63eafd7ffe1a466b!2sCaramel%20Dakar!5e0!3m2!1sfr!2ssn!4v1711982439000!5m2!1sfr!2ssn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
            {/* Map Overlay Decor */}
            <div className="absolute inset-0 pointer-events-none border-[20px] border-brand-black/20 rounded-[3rem]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
