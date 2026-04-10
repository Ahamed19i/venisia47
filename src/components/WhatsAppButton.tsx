import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "221787942729"; 
  const message = encodeURIComponent("Bonjour Venisia, je souhaiterais réserver une table.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#22C55E] text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center justify-center"
      aria-label="Réserver via WhatsApp"
    >
      <MessageCircle size={32} fill="white" />
    </motion.a>
  );
}
