


import { useState } from 'react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { theme } = useTheme();
  const [filter, setFilter] = useState("Alle");

  const featuredProject = projects.find((project) => project.id === "7");
  const portfolioProjects = projects.filter((project) => project.id !== "7");

  const filteredProjects = filter === "Alle"
    ? portfolioProjects
    : portfolioProjects.filter((project) => {
        const techs = project.technologies?.map((technology) => technology.toLowerCase()) || [];

        if (filter === "Web Apps") {
          return techs.includes("react") || techs.includes("javascript");
        }

        if (filter === "Full-Stack") {
          return techs.includes("next.js") || techs.includes("supabase") || techs.includes("mongodb");
        }

        if (filter === "UI Design") {
          return techs.includes("tailwind css") || project.category?.toLowerCase().includes("design");
        }

        return techs.includes(filter.toLowerCase());
      });

  return (
    <section id="projects" className="py-12 md:py-20 bg-transparent scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-5xl font-black mb-10 md:mb-16 text-center tracking-tighter ${
          theme === "dark" ? "text-white" : "text-slate-900"
        }`}>
          Ausgewählte Arbeiten
        </h2>

        {featuredProject && (
          <div className="mb-16">
            <Link
              to={`/projects/${featuredProject.id}`}
              className="relative group block overflow-hidden rounded-[2rem] bg-slate-950 min-h-[470px] md:aspect-[17/9] shadow-2xl border border-orange-500/20 transition-all duration-500 hover:border-orange-500/50"
            >
              <img
                src={featuredProject.image}
                alt="Ojaro Restaurant Operating System"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

              <div className="relative z-10 flex min-h-[470px] h-full flex-col justify-end p-7 md:p-12 lg:p-14">
                <div className="max-w-2xl">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-orange-300 backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.85)]" />
                      Live-Projekt
                    </span>
                    <span className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/70 backdrop-blur-md">
                      Eigenes SaaS-Produkt
                    </span>
                  </div>

                  <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-orange-400">
                    Restaurant Operating System
                  </p>

                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white">
                    Ojaro
                  </h3>

                  <p className="mt-5 max-w-xl text-sm md:text-base font-medium leading-relaxed text-slate-300">
                    Eine gemeinsame Plattform für Management, Mitarbeitende, Küche, Service und Gäste – von der Dienstplanung bis zur Bestellung.
                  </p>

                  <div className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-600 px-6 py-3.5 text-[11px] font-black uppercase tracking-widest text-white shadow-xl transition-transform duration-300 group-hover:translate-x-1">
                    Projekt ansehen
                    <span aria-hidden="true">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        <div className="flex items-center gap-4 mb-6">
          <h3 className={`text-xl md:text-2xl font-black ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
            Weitere Projekte
          </h3>
          <div className={`h-[1px] flex-grow ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`} />
        </div>

        <div className="flex overflow-x-auto pb-4 md:pb-0 justify-start gap-2 mb-10 no-scrollbar">
          {["Alle", "Web Apps", "Full-Stack", "UI Design"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-4 py-2 text-[11px] md:text-sm font-bold rounded-xl whitespace-nowrap transition-all duration-300 ${
                filter === item
                  ? "bg-violet-600 text-white shadow-lg"
                  : theme === "dark"
                    ? "bg-slate-800 text-slate-300 border-slate-700"
                    : "bg-white text-slate-700 border-slate-200 shadow-sm"
              } border`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="group h-full">
              <div className={`relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 border h-full flex flex-col ${
                theme === "dark" ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100"
              }`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex-grow">
                  <p className="text-pink-500 text-[10px] font-black uppercase tracking-widest mb-2">
                    {project.category}
                  </p>
                  <h3 className={`text-xl font-black group-hover:text-violet-500 transition-colors ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}>
                    {project.title}
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