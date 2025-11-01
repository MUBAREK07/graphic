import ProjectCard from "./ProjectCard";

export default function PortfolioGrid({ projects }) {
  return (
    <div className="grid">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}