import { motion } from "motion/react";
import { FaCode, FaPaintBrush, FaUsers } from "react-icons/fa";

const SKILL_CARDS = [
  {
    icon: <FaCode className="text-4xl text-primary mb-6" />,
    title: "Frontend Development",
    description:
      "Building responsive, high-performance web applications. I focus on writing clean, maintainable code and architecting scalable digital experiences from end to end.",
  },
  {
    icon: <FaPaintBrush className="text-4xl text-accent mb-6" />,
    title: "UI/UX & Design Thinking",
    description:
      "Passionate about user-centric design. I excel at identifying user interface issues and turning complex problems into simple, intuitive, and visually appealing layouts.",
  },
  {
    icon: <FaUsers className="text-4xl text-highlight mb-6" />,
    title: "Soft Skills",
    description:
      "Strong problem-solving mindset with a collaborative spirit. Highly adaptable to new workflows and actively developing comprehensive English proficiency for professional environments.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <h2 className="relative px-6 text-3xl md:text-4xl font-bold bg-dark">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight via-primary to-accent">
              What I Bring to the Table
            </span>
          </h2>
        </div>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg mt-4">
          My core competencies bridge the gap between technical execution and
          user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILL_CARDS.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0 }}
            whileHover={{ y: -10 }}
            className="group p-8 rounded-3xl bg-card border border-white/5 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col items-start h-full"
          >
            <div className="flex gap-5">
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {card.title}
              </h3>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-80"></div>
    </section>
  );
}
