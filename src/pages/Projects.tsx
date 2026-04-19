import { useState } from 'react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { theme } = useTheme();
  const [filter, setFilter] = useState("Alle");

  const filteredProjects = filter === "Alle"
    ? projects
    : projects.filter(p => {
        const techs = p.technologies?.map(t => t.toLowerCase()) || [];
        if (filter === "Web Apps") return techs.includes("react") || techs.includes("javascript");
        if (filter === "Full-Stack") return techs.includes("next.js") || techs.includes("supabase") || techs.includes("mongodb");
        if (filter === "UI Design") return techs.includes("tailwind css") || p.category?.toLowerCase().includes("design");
        return techs.includes(filter.toLowerCase());
      });

  const comingSoon = [
    {
      id: "coming-1",
      title: "Gastro-OS",
      category: "Abschlussprojekt",
      image: "./IMG/Titel.png", 
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-20 bg-transparent scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        <h2 className={`text-3xl md:text-5xl font-black mb-10 md:mb-16 text-center tracking-tighter ${
          theme === "dark" ? "text-white" : "text-slate-900"
        }`}>
          Ausgewählte Arbeiten
        </h2>

        {/* Highlight Section */}
        <div className="mb-16">
          {comingSoon.map((c) => (
            <div key={c.id} className="relative group overflow-hidden rounded-[2rem] bg-slate-900 min-h-[400px] md:aspect-[17/9] shadow-2xl border border-cyan-500/20 transition-all duration-500">
              <img src={c.image} alt={c.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 md:opacity-80" />
              <div className="relative h-full flex items-end md:items-center bg-gradient-to-t from-black via-black/40 to-transparent">
                <div className="p-6 md:p-16 max-w-3xl">
                  <div className="inline-flex items-center gap-2 bg-cyan-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 animate-pulse">
                    🏗️ In Arbeit
                  </div>
                  <h3 className="text-3xl md:text-6xl font-black text-white mb-4 leading-none">Gastro-Management <br/> System</h3>
                  <p className="text-sm md:text-xl text-gray-300 font-medium leading-relaxed max-w-xl">
                    Von der Gastro für die Gastro: Ein Managementsystem, das den Fokus zurück auf den Gast lenkt.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Leiste */}
        <div className="flex items-center gap-4 mb-6">
          <h3 className={`text-xl md:text-2xl font-black ${theme === "dark" ? "text-white" : "text-slate-900"}`}>Portfolio</h3>
          <div className={`h-[1px] flex-grow ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`}></div>
        </div>

        {/* Filter Buttons - Horizontal scrollbar auf Mobile */}
        <div className="flex overflow-x-auto pb-4 md:pb-0 justify-start gap-2 mb-10 no-scrollbar">
          {["Alle", "Web Apps", "Full-Stack", "UI Design"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-[11px] md:text-sm font-bold rounded-xl whitespace-nowrap transition-all duration-300 ${
                filter === f
                  ? "bg-violet-600 text-white shadow-lg"
                  : theme === "dark" 
                    ? "bg-slate-800 text-slate-300 border-slate-700"
                    : "bg-white text-slate-700 border-slate-200 shadow-sm"
              } border`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((p) => (
            <Link key={p.id} to={`/projects/${p.id}`} className="group h-full">
              <div className={`relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 border h-full flex flex-col ${
                theme === "dark" ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100"
              }`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-pink-500 text-[10px] font-black uppercase tracking-widest mb-2">
                    {p.category}
                  </p>
                  <h3 className={`text-xl font-black group-hover:text-violet-500 transition-colors ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}>
                    {p.title}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 bg-violet-600 text-white text-[9px] font-black px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-xl">
                  DETAILS
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;