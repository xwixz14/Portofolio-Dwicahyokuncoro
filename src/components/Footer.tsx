import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <a href="#home" className="text-xl font-bold text-white">
            Porto<span className="text-primary">folio.</span>
          </a>
        </div>
        
        <p className="text-gray-500 text-sm flex items-center gap-1">
          © {currentYear} Dwi Cahyo Kuncoro. Dibuat dengan <Heart size={14} className="text-red-500 inline" /> menggunakan React & Tailwind CSS.
        </p>
        
        <div className="flex gap-6">
          <a href="#home" className="text-gray-400 hover:text-white text-sm transition-colors">Home</a>
          <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors">Projects</a>
          <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
