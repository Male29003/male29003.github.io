import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative w-full min-h-[350px] flex flex-col h-full overflow-hidden rounded-2xl bg-card border border-white/5 hover:border-white/20 transition-all duration-300"
    >
      <div className="flex flex-col flex-1 p-6 md:p-8">
        
        {/* header */}
        <div className="flex items-center gap-4 mb-4">
          
          <h3 className="text-xl font-bold text-white group-hover:text-highlight transition-colors line-clamp-2">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="mb-6 text-slate-400 text-sm">
          {project.description}
        </p>

        <div className="mt-auto flex flex-col gap-6">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-highlight/10 border border-highlight/20 px-2.5 py-1 text-xs font-medium text-highlight"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="pt-5 border-t border-white/10 flex items-center justify-start gap-2.5 overflow-x-auto pb-3 
              [&::-webkit-scrollbar]:h-1.5 
              [&::-webkit-scrollbar-track]:bg-transparent 
              [&::-webkit-scrollbar-thumb]:bg-transparent 
              hover:[&::-webkit-scrollbar-thumb]:bg-highlight/50 
              [&::-webkit-scrollbar-thumb]:rounded-full transition-all duration-300"
            >  
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm font-medium text-slate-300 bg-white/5 border border-white/10 rounded-lg hover:text-white hover:bg-white/10 transition-all duration-200 shrink-0 whitespace-nowrap"
            >
              <FaGithub className="text-lg" /> Source
            </a>
            
            {Array.isArray(project.demo) ? (
              project.demo.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-highlight bg-highlight/10 border border-highlight/20 rounded-lg hover:bg-highlight/20 hover:text-white transition-all duration-200 shrink-0 whitespace-nowrap"
                >
                  <FaExternalLinkAlt className="text-sm" /> {link.site ? link.site : "Live demo"}
                </a>
              ))
            ) : project.demo && project.demo !== "#" ? (
              <a
                href={project.demo}
                target="_blank"
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-highlight bg-highlight/10 border border-highlight/20 rounded-lg hover:bg-highlight/20 hover:text-white transition-all duration-200 shrink-0 whitespace-nowrap"
              >
                <FaExternalLinkAlt className="text-sm" /> Live demo
              </a>
            ) : null}
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}