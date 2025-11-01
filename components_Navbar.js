import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1em 0" }}>
        <div style={{ fontWeight: 700, fontSize: "1.4em" }}>Mubarek Bushra</div>
        <div style={{ display: "flex", gap: "2em", alignItems: "center" }}>
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact"><button className="cta">Start a Project</button></Link>
        </div>
      </div>
    </nav>
  );
}