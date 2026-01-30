import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react'; 
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    <section className="py-16 md:py-10 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-gray-900 dark:text-white">
          Meine Projekte
        </h2>

        <div className="relative">
        
          <button
            onClick={() => scroll('left')}
            className={`
              group absolute -left-6 md:-left-14 lg:-left-20
              top-[calc(50%-2.5rem)] z-20
              flex h-16 w-16 md:h-20 md:w-20 items-center justify-center
              rounded-full 
              bg-gradient-to-br from-rose-600/25 to-pink-600/10
              text-white/90
              backdrop-blur-lg 
              border border-pink-400/30
              shadow-xl shadow-black/20 dark:shadow-pink-900/30
              transition-all duration-500 ease-out
              hover:scale-110 hover:rotate-6 hover:shadow-2xl hover:shadow-pink-500/50
              active:scale-95 active:rotate-0
              focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2
            `}
            aria-label="Vorheriges Projekt"
          >
            <ChevronLeft 
              className="h-8 w-8 md:h-10 md:w-10 transition-transform group-hover:-translate-x-1.5" 
              strokeWidth={1.8} 
            />
          </button>

       
          <button
            onClick={() => scroll('right')}
            className={`
              group absolute -right-6 md:-right-14 lg:-right-20
              top-[calc(50%-2.5rem)] z-20
              flex h-16 w-16 md:h-20 md:w-20 items-center justify-center
              rounded-full 
              bg-gradient-to-br from-pink-600/10 to-rose-600/25
              text-white/90
              backdrop-blur-lg 
              border border-pink-400/30
              shadow-xl shadow-black/20 dark:shadow-pink-900/30
              transition-all duration-500 ease-out
              hover:scale-110 hover:-rotate-6 hover:shadow-2xl hover:shadow-pink-500/50
              active:scale-95 active:rotate-0
              focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2
            `}
            aria-label="Nächstes Projekt"
          >
            <ChevronRight 
              className="h-8 w-8 md:h-10 md:w-10 transition-transform group-hover:translate-x-1.5" 
              strokeWidth={1.8} 
            />
          </button>

        
          <div
            ref={scrollContainerRef}
            className="
              flex items-start gap-6 md:gap-8
              overflow-x-auto pb-8 
              scrollbar-hide
              scroll-smooth snap-x snap-mandatory
            "
          >
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className={`
                  group relative flex-shrink-0 w-[85vw] xs:w-[75vw] sm:w-80 md:w-96 lg:w-[28rem]
                  bg-slate-900 rounded-2xl overflow-hidden shadow-xl
                  transition-all duration-500 ease-out
                  hover:shadow-2xl hover:shadow-pink-500/30 hover:-translate-y-3
                  snap-start
                `}
              >
               
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full h-full object-cover transition-transform duration-700
                      group-hover:scale-110 group-hover:rotate-[1.5deg]
                    "
                  />

                 
                  <div className="
                    absolute inset-0 bg-gradient-to-t from-pink-600/70 via-pink-600/30 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  " />

                  
                  <div className="
                    absolute inset-0 flex flex-col justify-end p-6
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    text-white
                  ">
                    <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                      {project.title}
                    </h3>

                    <p className="text-sm text-white/90 mb-4 line-clamp-2 drop-shadow-md">
                      {project.description}
                    </p>

          
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

            
                    <div className="flex gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="
                            flex items-center gap-2 px-4 py-2 bg-pink-600 rounded-lg
                            hover:bg-pink-700 transition text-white text-sm font-medium
                          "
                        >
                          <ExternalLink size={16} />
                          Live ansehen
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="
                            flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-lg
                            hover:bg-slate-600 transition text-white text-sm font-medium
                          "
                        >
                          <Github size={16} />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
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