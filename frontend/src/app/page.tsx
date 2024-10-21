import NavBar from "@/components/NavBar";
import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Page() {
  return (
      <div className="bg-background text-white overscroll">
          <NavBar />
          <Home />
          <About />
          <Projects />
          <Contact />
      </div>
  );
}
