import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="container" style={{ maxWidth: 700, margin: "4em auto", padding: "2em", background: "var(--color-white)", borderRadius: "12px", boxShadow: "0 2px 16px rgba(0,0,0,.04)" }}>
        <h2 style={{ fontSize: "2em", fontWeight: 800, marginBottom: "0.5em" }}>About Mubarek Bushra</h2>
        <p>
          Professional graphic designer specializing in branding, web UI, and print. My philosophy: design must be purposeful, minimal, and unforgettable. I work with Adobe CC, Figma, and love conceptualizing unique visual identities.
        </p>
        <ul>
          <li>Adobe Creative Cloud (Photoshop, Illustrator, InDesign)</li>
          <li>Figma & Sketch</li>
          <li>Branding & Logo Design</li>
          <li>Web & Mobile UI Design</li>
          <li>Print & Editorial Design</li>
          <li>Illustration & Concept Art</li>
        </ul>
        <a href="/resume.pdf" className="cta" target="_blank" rel="noopener">Download CV</a>
      </section>
    </>
  );
}