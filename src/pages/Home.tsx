
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

const Home = () => { 
  return ( 
  <> 
  <div className="p-4">
     <h2 className="text-3xl font-bold mt-4"></h2> 
     
     <About /> 
     <Projects /> 
     <Skills /> 
     </div> 
     </>
      ); 
    };

export default Home;

  