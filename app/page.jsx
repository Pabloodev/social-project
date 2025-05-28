import Hero from "./ui/components/Hero";
import About from "./ui/components/About";
import History from "./ui/components/History";
import Projects from "./ui/components/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <History />
      <Projects />
    </div>
  );
}
