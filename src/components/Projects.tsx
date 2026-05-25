import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Gambar1 from '../assets/Gambar1.jpg';
import Gambar2 from '../assets/Gambar2.jpg';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
);

const projects = [
  {
    id: 1,
    title: 'Sistem Penjualan Online Berbasis Web pada Pabrik Roti Breadgift',
    description: 'Sistem informasi Penjualan Online ini Dibuat Agar Mempermudah Pelanggan Dalam Pemesanan',
    image: Gambar1,
    tags: ['React', 'Tailwind CSS', 'My Sqlyog'],
    demoUrl: 'https://breadgift.vercel.app/',
    githubUrl: 'https://github.com/xwixz14'
  },
  {
    id: 2,
    title: 'Sistem Company Profile Reservasi Wisata Bukit Aslan',
    description: 'Memudahkan Pelanggan Dalam Melakukan Reservasi Wisata Bukit Aslan',
    image: Gambar2,
    tags: ['Html', 'Css', 'Tailwind Css'],
    demoUrl: 'https://xwixz14.github.io/website-bukit-aslan/',
    githubUrl: 'https://github.com/xwixz14'
  },
  {
    id: 3,
    title: 'Sistem Informasi Akademik',
    description: 'Portal akademik untuk sekolah guna mengelola data siswa, nilai, dan jadwal mata pelajaran.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?fit=crop&w=800&q=80',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
    demoUrl: '#',
    githubUrl: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projek <span className="text-gradient">Terbaru</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Beberapa projek terbaik yang pernah saya kerjakan, menunjukkan pengalaman saya dalam menyelesaikan berbagai studi kasus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.demoUrl} className="p-2 bg-primary rounded-full text-white hover:bg-blue-600 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.githubUrl} className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors backdrop-blur-sm">
                    <GithubIcon />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-white/5 text-gray-300 rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
