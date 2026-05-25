import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
);

export default function Hero() {
  const roles = ['AI Engineering', 'AI Developer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentFullText = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentFullText) {
          // Pause at the end of word
          timer = setTimeout(() => {
            setIsDeleting(true);
            setTypingSpeed(50);
          }, 2000);
          return;
        }
      } else {
        // Deleting
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(150);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 mix-blend-screen"></div>

      {/* Decorative tech particles floating */}
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-1/3 left-10 text-white/5 text-8xl font-mono select-none pointer-events-none hidden lg:block"
      >
        {"{...}"}
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-10 text-white/5 text-7xl font-mono select-none pointer-events-none hidden lg:block"
      >
        {"</>"}
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-semibold mb-3 tracking-wider text-base uppercase"
          >
            🚀 Welcome to My Portofolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight"
          >
            Dwi Cahyo <br />
            <span className="text-gradient">Kuncoro</span>
          </motion.h1>

          {/* Cyber Terminal Style Typing Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-6 flex"
          >
            <div className="inline-flex items-center gap-2.5 bg-slate-950/80 border border-white/10 rounded-xl px-4 py-2 text-sm font-mono text-slate-300 shadow-xl shadow-black/40">
              <span className="text-green-400">➜</span>
              <span className="text-primary font-semibold">dwicahyo</span>
              <span className="text-slate-500">git:(</span><span className="text-pink-500 font-semibold">main</span><span className="text-slate-500">)</span>
              <span className="text-yellow-400 font-bold">✗</span>
              <span className="text-slate-400">ai --run</span>
              <span className="text-secondary font-bold border-r-2 border-secondary animate-pulse pr-1">
                {displayText}
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-base md:text-lg mb-8 max-w-xl leading-relaxed"
          >
            Lulusan S1 Informatika dari Universitas Teknokrat Indonesia dengan rasa ingin tahu tinggi terhadap perkembangan AI Engineering. Andal dalam memanfaatkan perangkat AI untuk coding secara produktif, memiliki dasar kemampuan desain visual. Seorang problem solver dengan kemampuan decision-making yang baik untuk menghasilkan solusi digital yang efektif.
          </motion.p>

          {/* Quick Metrics / Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-3 gap-4 mb-8 max-w-xl"
          >
            <div className="glass-card p-3.5 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center hover:border-primary/30 transition-all duration-300 hover:bg-slate-900/80">
              <span className="text-2xl mb-1.5">🎓</span>
              <span className="text-white text-xs font-bold block">S1 Informatika</span>
              <span className="text-slate-500 text-[10px]">Univ. Teknokrat Indo</span>
            </div>
            <div className="glass-card p-3.5 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center hover:border-secondary/30 transition-all duration-300 hover:bg-slate-900/80">
              <span className="text-2xl mb-1.5">⚡</span>
              <span className="text-white text-xs font-bold block">AI Engineering</span>
              <span className="text-slate-500 text-[10px]">Productive Developer</span>
            </div>
            <div className="glass-card p-3.5 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center hover:border-green-400/30 transition-all duration-300 hover:bg-slate-900/80">
              <span className="text-2xl mb-1.5">🧩</span>
              <span className="text-white text-xs font-bold block">Problem Solver</span>
              <span className="text-slate-500 text-[10px]">Decision Maker</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap sm:flex-nowrap items-center gap-3"
          >
            <a
              href="https://wa.me/6283120989292"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/30 whitespace-nowrap text-sm"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a
              href="https://github.com/xwixz14"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full font-semibold transition-colors border border-white/10 shadow-lg shadow-black/40 whitespace-nowrap text-sm"
            >
              <GithubIcon />
              GitHub
            </a>
            <a
              href="https://instagram.com/xwiixz_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30 whitespace-nowrap text-sm"
            >
              <InstagramIcon />
              Instagram
            </a>
            <a
              href="#resume"
              className="flex items-center gap-2 glass hover:bg-white/10 text-white px-5 py-2.5 rounded-full font-semibold transition-colors border border-white/10 whitespace-nowrap text-sm"
            >
              <Download size={20} />
              Lihat CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Profile Image Container */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full animate-pulse blur-lg opacity-40"></div>

            {/* Tech Rotating Orbits */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute inset-[-15px] border border-dashed border-primary/30 rounded-full pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="absolute inset-[-30px] border border-dashed border-secondary/20 rounded-full pointer-events-none"
            />

            <div className="relative w-full h-full glass-card rounded-full p-2 overflow-hidden border-4 border-white/10">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
                alt="Dwi Cahyo Kuncoro"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-10 -left-10 glass-card px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10 hover:border-primary/50 transition-colors"
            >
              <span className="text-2xl">💻</span>
              <span className="text-sm font-semibold text-white">Web Dev</span>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute bottom-10 -right-10 glass-card px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10 hover:border-secondary/50 transition-colors"
            >
              <span className="text-2xl">🚀</span>
              <span className="text-sm font-semibold text-white">Ai Engineering</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
