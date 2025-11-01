import Navbar from "../components/Navbar";
import PortfolioGrid from "../components/PortfolioGrid";
import projects from "../data/projects";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <section className="container" style={{ marginTop: "3em" }}>
        <h1 style={{ fontSize: "2.5em", fontWeight: 800 }}>Portfolio</h1>
        <PortfolioGrid projects={projects} />
      </section>
    </>
  );
}