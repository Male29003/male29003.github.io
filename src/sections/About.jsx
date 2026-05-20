import { motion } from "motion/react";
import { FaReact, FaNodeJs, FaGithub, FaFigma, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiJavascript } from "react-icons/si";
// Data cho thanh chạy (Marquee)
const ROW_1_TECH = [
  { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Redis", icon: <FaDatabase className="text-[#DC382D]" /> },
];

const ROW_2_TECH = [
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "Git/GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Zustand", icon: <span className="text-gray-400 font-bold">🐻</span> },
  { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <section id="about" className="relative pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* =================== About me =================== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-primary">
                About Me
              </span>
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
              <p>
                I hold an Engineer's Degree in Software Engineering. As a developer specializing in Frontend development, I dedicate myself to crafting high-performance, pixel-perfect, and highly responsive web user interfaces.
              </p>
              <p>
                Beyond just writing UI components, I bring strong system design thinking to every project. I enjoy analyzing how web interfaces integrate with complex backend systems and cloud storage, ensuring seamless data flow and optimized client-side performance.
              </p>
              <p>
                I am a highly adaptable and self-motivated developer with a strong willingness to learn. I constantly challenge myself with new architectural concepts and codebases, striving to grow my engineering capabilities and solve real-world problems effectively.
              </p>
            </div>
          </motion.div>

          {/* =================== Tech Stack =================== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 overflow-hidden rounded-3xl bg-card border border-white/5 p-8 shadow-2xl"
          >
            <h3 className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2">Technologies</h3>
            <div className="marquee-container [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="marquee-content">
                  {ROW_1_TECH.map((tech, idx) => (
                    <div key={idx} className="flex items-center flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium whitespace-nowrap">
                      {tech.icon} {tech.name}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="marquee-container [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="marquee-content reverse">
                  {ROW_2_TECH.map((tech, idx) => (
                    <div key={idx} className="flex items-center flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium whitespace-nowrap">
                      {tech.icon} {tech.name}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
          </motion.div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
    </section>
  )
}