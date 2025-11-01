import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/project/${project.id}`}>
      <div style={{
        background: "var(--color-white)",
        boxShadow: "0 2px 16px rgba(0,0,0,.06)",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "box-shadow 0.2s",
        cursor: "pointer"
      }}>
        <img src={project.thumbnail} alt={project.title} style={{ width: "100%", display: "block", maxHeight: "220px", objectFit: "cover" }} />
        <div style={{ padding: "1.2em" }}>
          <h2 style={{ margin: "0 0 0.3em", fontSize: "1.3em", fontWeight: 700 }}>{project.title}</h2>
          <div style={{ color: "var(--color-accent)", fontWeight: 500 }}>{project.category}</div>
        </div>
      </div>
    </Link>
  );
}