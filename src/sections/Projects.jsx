import ProjectCard from "../components/projects/Card";
import ProjectList from "../components/projects/ProjectList";
import { PROJECTS  } from "../data/projects";


export default function Projects() {
  return (
    <section id="projects" className="relative py-6 md:py-12 px-6 overflow-hidden">
        {/* Nền Gradient mờ để tách biệt section (Optional) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />

        <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-primary">
                        Featured Projects
                    </span>
                </h2>
                <p className="text-slate-400 max-w-2xl text-lg">
                    Here are some of the projects I've worked on, showcasing my skills in Frontend Development and UI/UX Design.
                </p>
            </div>

            <ProjectList projectsList={PROJECTS} />
        </div>
    </section>
  )
}