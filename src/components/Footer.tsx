export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 items-center">
        <div className="flex flex-col items-center md:items-start">
          <div className="bg-brand-red p-1.5 rounded-2xl rotate-3 mb-6 w-14 h-14 flex items-center justify-center overflow-hidden shadow-lg">
            <img 
              src="/logo.png" 
              alt="Caramel Dakar Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const text = document.createElement('span');
                text.className = 'text-white font-bold text-xl';
                text.innerText = 'C';
                e.currentTarget.parentElement?.appendChild(text);
              }}
            />
          </div>
          <span className="text-3xl font-serif font-bold tracking-tighter text-white">
            Caramel Dakar
          </span>
          <p className="text-gray-500 text-[10px] mt-3 uppercase tracking-[0.4em] font-bold">
            Pâtisserie & Restaurant de Prestige | Dakar
          </p>
        </div>
        
        <div className="flex justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
          <a href="#accueil" className="hover:text-brand-red transition-all duration-300">Accueil</a>
          <a href="#menu" className="hover:text-brand-red transition-all duration-300">Menu</a>
          <a href="#contact" className="hover:text-brand-red transition-all duration-300">Contact</a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] font-medium text-center md:text-right">
            © {new Date().getFullYear()} Caramel Dakar. <br />
            Tous droits réservés.
          </p>
          <div className="h-[1px] w-12 bg-brand-red/30"></div>
        </div>
      </div>
    </footer>
  );
}
