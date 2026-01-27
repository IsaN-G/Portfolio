import { useRef } from 'react';
import { Link } from 'react-router-dom';         
import { projects } from '../data/projects';

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = container.querySelector('div')?.offsetWidth || 300;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-12 md:py-16 bg-gray-60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-gray-900">
          Meine Projekte
        </h2>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="
              absolute left-0 sm:left-[-2.5rem] md:left-[-4rem] 
              top-1/2 -translate-y-1/2 z-10
              bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm
              p-3 md:p-4 rounded-full shadow-md hover:shadow-lg
              text-xl md:text-2xl text-gray-800 dark:text-gray-200
              transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-500
            "
            aria-label="Vorheriges Projekt"
          >
            ←
          </button>

          <button
            onClick={() => scroll('right')}
            className="
              absolute right-0 sm:right-[-2.5rem] md:right-[-4rem] 
              top-1/2 -translate-y-1/2 z-10
              bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm
              p-3 md:p-4 rounded-full shadow-md hover:shadow-lg
              text-xl md:text-2xl text-gray-800 dark:text-gray-200
              transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-500
            "
            aria-label="Nächstes Projekt"
          >
            →
          </button>

          <div
            ref={scrollContainerRef}
            className="
              flex items-start gap-4 md:gap-6
              overflow-x-auto pb-6
              scrollbar-hide
              scroll-smooth snap-x snap-mandatory
            "
          >
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}          
                className="
                  flex-shrink-0 w-48 md:w-56 lg:w-64 
                  bg-black rounded-xl shadow-lg overflow-hidden 
                  flex flex-col hover:shadow-2xl transition-all duration-300
                  snap-start
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-72 object-cover"
                />
                <div className="p-4 md:p-5 flex flex-col flex-grow text-center">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;