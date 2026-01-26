 const project1Image = "/img/project1.jpg";
 const project2Image = "/img/project2.jpg";
 const project3Image = "/img/project3.jpg";


import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Meine Projekte</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <img
              src={project1Image}
              alt="Projekt 1"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-grow text-center">
              <h3 className="text-xl font-semibold mb-4">Projekt 1</h3>
              <button
                onClick={() => navigate('/projekt-1')}
                className="mt-auto bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Zur Seite
              </button>
            </div>
          </div>

        
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <img
              src={project2Image}
              alt="Projekt 2"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-grow text-center">
              <h3 className="text-xl font-semibold mb-4">Projekt 2</h3>
              <button
                onClick={() => navigate('/projekt-2')}
                className="mt-auto bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Zur Seite
              </button>
            </div>
          </div>

         
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <img
              src={project3Image}
              alt="Projekt 3"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-grow text-center">
              <h3 className="text-xl font-semibold mb-4">Projekt 3</h3>
              <button
                onClick={() => navigate('/projekt-3')}
                className="mt-auto bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Zur Seite
              </button>




            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;