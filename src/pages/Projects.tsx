import { useState } from 'react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { theme } = useTheme();
  const [filter, setFilter] = useState("Alle");

  // Mapping-Logik, damit die neuen Filter-Namen die richtigen Projekte finden
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
      title: "Gastro-Management-Betriebssystem",
      category: "Abschlussprojekt Umschulung",
      image: "./IMG/Titel.png", 
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-14 bg-transparent scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center ${
          theme === "dark" ? "text-white" : "text-slate-900"
        }`}>
          Ausgewählte Arbeiten
        </h2>

        {/* Highlight Section */}
        <div className="mb-20">
          {comingSoon.map((c) => (
            <div key={c.id} className="relative group overflow-hidden rounded-[2rem] bg-slate-900 aspect-[16/9] md:aspect-[21/9] shadow-[0_0_40px_-15px_rgba(6,182,212,0.4)] border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500">
              <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-105 opacity-800 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/95 via-black/60 to-transparent flex items-end md:items-center text-white">
                <div className="p-8 md:p-16 max-w-3xl">
                  <div className="inline-flex items-center gap-2 bg-cyan-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6 shadow-lg shadow-cyan-500/50 animate-pulse">
                    🏗️ Projekt in Arbeit
                  </div>
                  <h3 className="text-3xl md:text-6xl font-black mb-4 leading-tight tracking-tight">{c.title}</h3>
                  <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed max-w-xl">
                    Von der Gastro für die Gastro: Ein Managementsystem, das den Fokus zurück auf den Gast lenkt.
                  </p>
                  <p className="mt-6 text-pink-500 font-bold text-sm tracking-widest uppercase">Konzeptionsphase läuft _</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Leiste */}
        <div className="flex items-center gap-4 mb-8">
          <h3 className={`text-2xl font-bold whitespace-nowrap ${theme === "dark" ? "text-white" : "text-slate-900"}`}>Portfolio</h3>
          <div className={`h-[1px] w-full ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`}></div>
        </div>

        <div className="flex justify-start gap-3 mb-10 flex-wrap">
          {["Alle", "Web Apps", "Full-Stack", "UI Design"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                filter === f
                  ? "bg-violet-600 text-white shadow-md"
                  : theme === "dark" 
                    ? "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              } border`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <Link key={p.id} to={`/projects/${p.id}`} className="group">
              <div className={`relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border h-full flex flex-col ${
                theme === "dark" ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100"
              }`}>
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className={`text-xl font-bold group-hover:text-violet-600 transition-colors ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}>
                    {p.title}
                  </h3>
                  {p.category && (
                    <p className={`text-sm font-medium uppercase tracking-wider mt-2 ${
                      theme === "dark" ? "text-slate-400" : "text-slate-500"
                    }`}>
                      {p.category}
                    </p>
                  )}
                </div>
                <div className="absolute top-4 right-4 bg-violet-600 text-white text-[10px] font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-lg">
                  Details ansehen
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