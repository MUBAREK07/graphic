import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import projects from "../../data/projects";

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find(p => p.id === id);

  if (!project) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <section className="container" style={{ marginTop: "3em" }}>
        <h1 style={{ fontSize: "2.5em", fontWeight: 800 }}>{project.title}</h1>
        <p style={{ color: "var(--color-accent)", fontWeight: 600 }}>{project.category}</p>
        <div style={{ margin: "2em 0" }}>
          <strong>Brief:</strong> <br /> {project.brief}
        </div>
        <div>
          <strong>Solution:</strong> <br /> {project.solution}
        </div>
        <div style={{ marginTop: "2em" }}>
          {project.images.map((src, i) => (
            <img key={i} src={src} alt={`Mockup ${i+1}`} style={{ maxWidth: "100%", marginBottom: "1em", borderRadius: "10px" }} />
          ))}
        </div>
      </section>
    </>
  );
}