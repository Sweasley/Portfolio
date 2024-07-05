import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Navbar";

import Project from "./components/Project";
import Services from "./components/Services";
import Skills from "./components/Skills";
export default function App() {
  return (
    <div className="bg-black">
      <Nav />
      <Hero />
      <Services />
      <Education />
      <Experience />
      <About />

      <Project />
      <Skills />
      <Footer />
    </div>
  );
}
