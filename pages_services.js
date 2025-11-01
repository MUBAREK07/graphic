import Navbar from "../components/Navbar";

export default function Services() {
  return (
    <>
      <Navbar />
      <section className="container" style={{ maxWidth: 700, margin: "4em auto", padding: "2em", background: "var(--color-white)", borderRadius: "12px", boxShadow: "0 2px 16px rgba(0,0,0,.04)" }}>
        <h2 style={{ fontSize: "2em", fontWeight: 800, marginBottom: "0.5em" }}>Design Services</h2>
        <ul>
          <li><b>Brand Identity</b>: Logos, business cards, stationery</li>
          <li><b>Web & UI Design</b>: Websites, apps, dashboards</li>
          <li><b>Print Design</b>: Posters, brochures, editorial layouts</li>
          <li><b>Illustration</b>: Custom artwork, icons, infographics</li>
        </ul>
        <h3 style={{ marginTop: "2em" }}>Working Process</h3>
        <ol>
          <li>Brief & Discovery</li>
          <li>Concept Development</li>
          <li>Design & Iteration</li>
          <li>Final Delivery</li>
        </ol>
      </section>
    </>
  );
}