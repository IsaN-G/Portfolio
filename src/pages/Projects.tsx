// Projects.tsx (modern + scroll + filter)
import { useRef, useState } from 'react';
import { projects } from '../data/projects';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.technologies?.includes(filter));

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.querySelector('div')?.clientWidth || 300;
    const gap = 24;
    container.scrollBy({ left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="w-full px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-gray-900 dark:text-white">
          Meine Projekte
        </h2>


        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {["All", "React", "Tailwind", "Node.js"].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === f ? "bg-pink-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-pink-600 hover:text-white"
              }`}
            >{f}</button>
          ))}
        </div>

        <div className="relative">
        <button
  type="button"
  onClick={() => scroll('left')}
  className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-20 bg-pink-600/30 p-4 rounded-full hover:scale-110 transition"
  aria-label="Vorheriges Projekt"
>
  <ChevronLeft size={24} />
</button>

<button
  type="button"
  onClick={() => scroll('right')}
  className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-20 bg-pink-600/30 p-4 rounded-full hover:scale-110 transition"
  aria-label="Nächstes Projekt"
>
  <ChevronRight size={24} />
</button>
          <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory scroll-smooth">
            {filteredProjects.map(p => (
              <Link key={p.id} to={`/projects/${p.id}`} className="snap-start flex-shrink-0 w-[85vw] sm:w-80 md:w-96 lg:w-[28rem] bg-slate-900 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition">
                <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded-t-2xl" />
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">{p.title}</h3>
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
