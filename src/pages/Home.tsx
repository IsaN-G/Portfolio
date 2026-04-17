import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";

const Home = () => {
  return (
    <>
      <section id="projects" className="scroll-mt-24 md:scroll-mt-32 mt-16 md:mt-24">
        <Projects />
      </section>
      <section id="skills" className="scroll-mt-24 md:scroll-mt-32 mt-16 md:mt-24">
        <Skills />
      </section>
      <section id="about" className="scroll-mt-24 md:scroll-mt-32 mt-16 md:mt-24">
        <About />
      </section>
    </>
  );
};

export default Home;


  