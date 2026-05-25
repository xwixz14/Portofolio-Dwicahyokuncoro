import { motion } from 'framer-motion';

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
);

const BackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
);

const educationData = [
  {
    year: '2022 - 2026',
    school: 'Universitas Teknokrat Indonesia',
    degree: 'S1 Informatika',
    desc: 'Fokus pada pemrograman, pengembangan sistem perangkat lunak, dan eksplorasi mendalam terkait perkembangan AI Engineering.',
  },
  {
    year: '2019 - 2022',
    school: 'SMKS YADIKA Bandar Lampung',
    degree: 'Sekolah Menengah Kejuruan',
    desc: 'Mempelajari dasar-dasar teknik komputer, jaringan, dan logika pemrograman dasar.',
  },
  {
    year: '2017 - 2019',
    school: 'SMPN 12 Bandar Lampung',
    degree: 'Sekolah Menengah Pertama',
    desc: 'Mulai mendalami minat awal terhadap dunia komputer dan teknologi digital.',
  },
  {
    year: '2010 - 2016',
    school: 'SDN 4 Way Laga Bandar Lampung',
    degree: 'Sekolah Dasar',
    desc: 'Pendidikan dasar wajib dengan minat tinggi pada pelajaran matematika dan sains.',
  },
];

const projectExperienceData = [
  {
    year: '2025 - 2026',
    role: 'Web Developer',
    company: 'Pabrik Roti BreadGift',
    points: [
      'Merancang dan membangun platform e-commerce (penjualan online) untuk mendigitalisasi sistem penjualan dan memperluas jangkauan pasar pabrik.',
      'Mengintegrasikan fitur katalog produk, keranjang belanja, dan sistem kontak pemesanan yang responsif.',
      'Memanfaatkan teknologi AI-assisted tools (vibe coding) untuk mempercepat proses coding dan efisiensi pengembangan sistem.',
      'Mengimplementasikan desain visual yang menarik dan user-friendly untuk meningkatkan pengalaman pengguna.',
    ],
  },
  {
    year: '2024',
    role: 'Perancangan Prototipe Web',
    company: 'Pemrograman Web II (Academic Project)',
    points: [
      'Merancang dan membangun situs Company Profile interaktif untuk bisnis kafe menggunakan framework Next.js.',
      'Membuat desain antarmuka pengguna (UI/UX) yang responsif agar situs web tampil optimal di perangkat mobile maupun desktop.',
      'Mengimplementasikan komponen kode modern untuk memastikan performa web yang cepat, ringan, dan mudah dinavigasi.',
      'Menyelesaikan proyek tepat waktu sebagai pemenuhan tugas utama dengan fokus pada solusi digital bagi pelaku usaha.',
    ],
  },
];

const skillHighlights = [
  { category: 'AI Productivity', items: ['AI-Assisted Development', 'Prompt Engineering', 'AI Vibe Coding Tools'] },
  { category: 'Web Development', items: ['React.js', 'Next.js', 'Vite', 'Tailwind CSS', 'JavaScript / TS'] },
  { category: 'Office Productivity', items: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint'] },
  { category: 'Analytical & Design', items: ['Perancangan Alur Sistem (Workflow)', 'UI/UX Design Basis', 'Fast & Adaptive Learner'] },
];

interface ResumeProps {
  onBack: () => void;
}

export default function Resume({ onBack }: ResumeProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-dark text-slate-300 relative overflow-hidden pb-20">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

      {/* Standalone CV Page Header */}
      <header className="sticky top-0 z-50 glass border-b border-white/5 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 hover:text-primary transition-colors text-white font-medium text-sm group"
          >
            <span className="p-2 glass rounded-xl group-hover:bg-primary/20 group-hover:text-primary transition-colors">
              <BackIcon />
            </span>
            Kembali ke Portofolio
          </button>
          
          <div className="flex gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-blue-600 hover:to-purple-700 text-white px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-primary/20"
            >
              <DownloadIcon />
              Cetak / Simpan PDF
            </button>
          </div>
        </div>
      </header>

      {/* Main CV Content Wrapper */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-mono uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            Interactive Resume
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-2 tracking-tight">
            Curriculum <span className="text-gradient">Vitae</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Daftar lengkap kualifikasi, riwayat pendidikan, serta rekam jejak portofolio proyek akademik Dwi Cahyo Kuncoro.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                <span className="text-xl">🎓</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Riwayat Pendidikan</h3>
            </div>

            <div className="relative border-l border-white/10 pl-6 space-y-8 ml-4">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative group"
                >
                  {/* Circle indicator */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-primary group-hover:bg-primary transition-colors duration-300 z-10"></div>
                  
                  <div className="glass-card p-5 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300">
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-primary/10 text-primary mb-3">
                      {edu.year}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                      {edu.school}
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm font-semibold mb-2">{edu.degree}</p>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{edu.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Project Experience Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary">
                <span className="text-xl">💼</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Pengalaman Proyek Akademik</h3>
            </div>

            <div className="relative border-l border-white/10 pl-6 space-y-8 ml-4">
              {projectExperienceData.map((proj, index) => (
                <motion.div
                  key={proj.company}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative group"
                >
                  {/* Circle indicator */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-secondary group-hover:bg-secondary transition-colors duration-300 z-10"></div>
                  
                  <div className="glass-card p-5 rounded-2xl border border-white/5 hover:border-secondary/30 transition-all duration-300">
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-secondary/10 text-secondary mb-3">
                      {proj.year}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-secondary transition-colors">
                      {proj.role}
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm font-semibold mb-3">{proj.company}</p>
                    
                    <ul className="space-y-2 text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {proj.points.map((pt, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <span className="text-secondary mt-1.5 font-bold text-[10px]">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Highlights Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-primary/20 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-white/5">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Sorotan Kompetensi Utama</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Pemetaan keahlian taktis yang menunjang efisiensi kerja tim.</p>
            </div>
            <span className="px-4 py-1.5 bg-slate-950/80 border border-white/10 text-gray-300 text-xs font-mono rounded-xl">
              🎯 Verified Skillset
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillHighlights.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-3">
                <h4 className="text-xs font-bold text-primary/80 uppercase tracking-wider">{skillGroup.category}</h4>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-white bg-white/5 border border-white/5 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium hover:bg-white/10 hover:border-white/10 transition-all duration-300">
                      <span className="text-green-400 text-xs">✓</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
