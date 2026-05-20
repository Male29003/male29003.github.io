import ProjectCard from "./ProjectCard"

export default function ProjectList({ projectsList}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsList.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
            ))}
        </div>
    )
}

