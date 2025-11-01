import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="container" style={{ maxWidth: 500, margin: "4em auto" }}>
        <h2 style={{ fontSize: "2em", fontWeight: 800, marginBottom: "0.5em" }}>Contact / Inquiry</h2>
        <ContactForm />
      </section>
    </>
  );
}