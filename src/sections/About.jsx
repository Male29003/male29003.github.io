import { motion } from "motion/react"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-5 py-32 space-y-40">
      {/* =================== Row 1 ===================*/}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold mb-6">
            Tools & Technologies
          </h3>

          <p className="opacity-70 leading-relaxed">
            I specialize in building modern web applications using
            React, TailwindCSS, and other modern frontend tools.
            I focus on performance, UX, and clean architecture.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, staggerChildren: 0.05 }}
          className="grid grid-cols-3 sm:grid-cols-4 gap-6"
        >
          {["HTML / CSS / JS", "React", "Tailwind", "Vite", "", "Git", "Figma"].map((tool) => (
            <div
              key={tool}
              className="h-20 rounded-xl bg-white/5 flex items-center justify-center hover:scale-110 transition"
            >
              <span className="text-sm opacity-80">{tool}</span>
            </div>
          ))}
        </motion.div>
      </div>
      {/* =================== Row 2 ===================*/}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="h-72 rounded-3xl bg-gradient-to-br from-blue-500/30 to-purple-500/30"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-6">
            About Me
          </h3>

          <p className="opacity-70 leading-relaxed">
            I enjoy turning complex problems into simple, beautiful
            and intuitive designs. In my spare time, I like to learn
            form new aspects and work on personal projects.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
