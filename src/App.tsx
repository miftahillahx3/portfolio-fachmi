import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = ["about", "skills", "projects", "contact"];

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        setActiveSection("contact");
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const id of sections) {
        const section = document.getElementById(id);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_30%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_42%,_#eff6ff_100%)] text-slate-900">
      <Navbar activeSection={activeSection} scrolled={scrolled} />
      <Hero />
      <About active={activeSection === "about"} />
      <Skills active={activeSection === "skills"} />
      <Projects active={activeSection === "projects"} />
      <Contact active={activeSection === "contact"} />
      <ScrollToTop />
    </main>
  );
}
