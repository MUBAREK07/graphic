import Navbar from "../components/Navbar";
import PortfolioGrid from "../components/PortfolioGrid";
import projects from "../data/projects"; // example project data

export default function Home() {
  return (
    <>
      <Navbar />
      <section style={{ padding: "5em 0 2em", textAlign: "center" }}>
        <h1 style={{ fontSize: "3em", fontWeight: 800, marginBottom: "0.3em" }}>
          Mubarek Bushra <br /> Graphic Designer
        </h1>
        <p style={{ fontSize: "1.3em", maxWidth: "600px", margin: "0 auto 2em" }}>
          Modern, minimalist design that makes your brand unforgettable.
        </p>
        <a href="/contact" className="cta">Start a Project</a>
      </section>
      <section className="container" style={{ marginTop: "3em" }}>
        <h2 style={{ fontSize: "2em", fontWeight: 700, marginBottom: "1em", textAlign: "center" }}>Featured Work</h2>
        <PortfolioGrid projects={projects.slice(0, 4)} />
      </section>
    </>
  );
}