import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', icon: '🌐', level: 90 },
  { name: 'CSS / Tailwind', icon: '🎨', level: 85 },
  { name: 'React', icon: '⚛️', level: 85 },
  { name: 'Laravel', icon: '🔴', level: 55 },
  { name: 'MySQL', icon: '🗄️', level: 80 },
  { name: 'Git', icon: '📦', level: 80 },
  { name: 'Figma', icon: '🎯', level: 70 },
  { name: 'Vite', icon: '⚡', level: 60 },
  { name: 'Next.js', icon: '▲', level: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Keahlian <span className="text-gradient">Teknis</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Teknologi dan tools yang saya kuasai untuk membangun produk digital berkualitas tinggi.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.08, y: -5 }}
              className="glass-card rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default group hover:border-primary/50 transition-colors"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
              <span className="text-sm font-semibold text-white text-center">{skill.name}</span>
              
              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.3, duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                />
              </div>
              <span className="text-xs text-gray-500">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
