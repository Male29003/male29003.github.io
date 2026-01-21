import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }} // Hiệu ứng xuất hiện so le
      className="group relative w-full flex flex-col overflow-hidden rounded-2xl bg-card"
    >
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-highlight transition-colors">
          {project.title}
        </h3>

        <p className="mb-4 text-slate-400 text-sm line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack  */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-highlight/10 px-3 py-1 text-xs font-medium text-highlight"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-end gap-4 rounded-full px-4 py-2">
          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 text-sm font-medium text-highlight hover:text-white transition-colors"
          >
            <FaGithub className="text-lg" /> Source code
          </a>
        </div>
      </div>
    </motion.div>
  );
}