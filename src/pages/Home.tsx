
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

const Home = () => {
  return (
    <>
      <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
        <section id="about" className="scroll-mt-24 md:scroll-mt-32">
          <About />
        </section>

        <section id="skills" className="scroll-mt-24 md:scroll-mt-32 mt-16 md:mt-24">
          <Skills />
        </section>

        <section id="projects" className="scroll-mt-24 md:scroll-mt-32 mt-16 md:mt-24">
          <Projects />
        </section>
      </div>
    </>
  );
};

export default Home;

  