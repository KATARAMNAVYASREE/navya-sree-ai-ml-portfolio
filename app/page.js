import Nav from "@/components/Nav";
import TerminalBoot from "@/components/TerminalBoot";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AIFocus from "@/components/AIFocus";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <TerminalBoot />
      <Nav />
      <Hero />
      <About />
      <AIFocus />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
