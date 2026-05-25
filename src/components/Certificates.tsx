import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

import GameDevCert from '../assets/Game Developer.jpg';
import InfoSecCert from '../assets/Information Security.jpg';
import JuniorMobileCert from '../assets/Junior Mobile Application Programmer.jpg';
import JuniorWebCert from '../assets/Junior Web Designer.jpg';
import OperatingSystemCert from '../assets/Operating System Analyst.jpg';
import PBOCert from '../assets/PBO.jpg';
import ProjectManagementCert from '../assets/Project Management.jpg';
import SoftwareProjectCert from '../assets/Software Project Manager.jpg';


const certificates = [
  {
    id: 1,
    title: 'Junior Web Designer',
    issuer: 'Web Desain',
    date: 'Sertifikasi Kompetensi',
    image: JuniorWebCert,
  },
  {
    id: 2,
    title: 'Junior Mobile Programmer',
    issuer: 'Pemograman Mobile I',
    date: 'Sertifikasi Kompetensi',
    image: JuniorMobileCert,
  },
  {
    id: 3,
    title: 'Game Developer',
    issuer: 'Pemograman Game',
    date: 'Sertifikasi Kompetensi',
    image: GameDevCert,
  },
  {
    id: 4,
    title: 'Software Project Manager',
    issuer:'Proyek Perangkat Lunak',
    date: 'Sertifikasi Kompetensi',
    image: SoftwareProjectCert,
  },
  {
    id: 5,
    title: 'Project Management',
    issuer: 'Manajemen Proyek Perangkat Lunak',
    date: 'Sertifikasi Kompetensi',
    image: ProjectManagementCert,
  },
  {
    id: 6,
    title: 'Information Security',
    issuer: 'Keamanan Informasi & Jaringan',
    date: 'Sertifikasi Kompetensi',
    image: InfoSecCert,
  },
  {
    id: 7,
    title: 'Operating System Analyst',
    issuer: 'Analisis Sistem Operasi',
    date: 'Sertifikasi Kompetensi',
    image: OperatingSystemCert,
  },
  {
    id: 8,
    title: 'Pemrograman Berorientasi Objek',
    issuer: 'Kompetensi Pemrograman Java / C++',
    date: 'Sertifikasi Akademik',
    image: PBOCert,
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sertifikat <span className="text-gradient">Penghargaan</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Bukti kredibilitas, kompetensi profesional, dan dedikasi saya dalam mendalami dunia teknologi informasi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass-card p-4 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute top-2 right-2 p-2 opacity-10 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 z-20">
                <Award size={36} />
              </div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-full h-40 mb-4 rounded-xl overflow-hidden bg-slate-950 border border-white/5 flex items-center justify-center">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h3>
                </div>
                
                <div className="mt-3">
                  <p className="text-primary text-xs font-semibold mb-0.5 line-clamp-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">{cert.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
