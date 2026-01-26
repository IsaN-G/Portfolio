import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects'; 

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Meine Projekte
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {project.description}
                </p>
                <button
                  onClick={() => navigate(`/projekt-${project.id}`)}
                  className="mt-auto cursor-pointer hover:text-gray-300 bg-black border-3 border-pink-600 text-white py-3 px-6 transition font-medium"
                >
                  Mehr erfahren
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;