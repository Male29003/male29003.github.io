import { motion } from "motion/react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiDjango,
} from "react-icons/si";
// Data cho thanh chạy (Marquee)
const ROW_1_TECH = [
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
];

const ROW_2_TECH = [
  { name: "Redis", icon: <FaDatabase className="text-[#DC382D]" /> },
  { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05033]" /> },
  {
    name: "Zustand",
    icon: <span className="text-gray-400 font-bold">🐻</span>,
  },
  { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="relative pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* About me  */}
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
                I hold an Engineer's Degree in Software Engineering. As a
                developer specializing in Frontend, my focus is on crafting
                high-performance, pixel-perfect, and highly responsive web
                interfaces.
              </p>
              <p>
                Beyond writing UI components, I am actively cultivating a system
                design mindset. I constantly seek to understand how frontend
                applications interact with backend services, aiming to build
                scalable and maintainable products from the ground up.
              </p>
              <p>
                As a highly adaptable and self-motivated learner, I am always
                eager to explore new architectural concepts. I am ready to
                embrace challenges, continuously sharpen my engineering skills,
                and bring real value to the team.
              </p>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 overflow-hidden rounded-3xl bg-card border border-white/5 p-8 shadow-2xl"
          >
            <h3 className="text-secondary font-bold tracking-wider uppercase text-lg mb-1">
              Technologies
            </h3>
            <div className="marquee-container [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="marquee-content">
                  {ROW_1_TECH.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium whitespace-nowrap"
                    >
                      <p className="flex items-center justify-start gap-2">
                        <span>{tech.icon}</span>
                        <span>{tech.name}</span>
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="marquee-container [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="marquee-content reverse">
                  {ROW_2_TECH.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium whitespace-nowrap"
                    >
                      <p className="flex items-center justify-start gap-2">
                        <span>{tech.icon}</span>
                        <span>{tech.name}</span>
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
