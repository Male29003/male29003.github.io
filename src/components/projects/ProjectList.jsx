import ProjectCard from "./Card"

export default function ProjectList({ projectsList}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-10">
            {projectsList.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
            ))}
        </div>
    )
}

