import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../data/projects";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaArrowLeft, FaLightbulb, FaLayerGroup } from "react-icons/fa";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const currentIndex = projects.findIndex((p) => p.id === id);
  const project = projects[currentIndex];

  if (!project) return null;

  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const isDark = theme === "dark";
  const cardBg = isDark ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-sm";

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? "bg-slate-950 text-gray-200" : "bg-slate-50 text-slate-900"
    }`}>
      
      {/* Header Bereich */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-8">
        <button 
          onClick={() => navigate("/")} 
          className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-pink-500 transition-all mb-8"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform text-lg" />
          <span>Zurück</span>
        </button>
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <span className="text-pink-600 font-black tracking-[0.2em] uppercase text-[10px] block mb-2">
              {project.category}
            </span>
            <h1 className={`text-4xl md:text-7xl font-black leading-[0.9] tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}>
              {project.title}
            </h1>
          </div>
          <div className="flex gap-3">
             {project.liveUrl && (
               <a href={project.liveUrl} target="_blank" rel="noreferrer"
                  className="flex-1 md:flex-none text-center px-8 py-4 bg-pink-600 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl hover:bg-pink-700 transition-all active:scale-95">
                 Live Demo
               </a>
             )}
             {project.githubUrl && (
               <a href={project.githubUrl} target="_blank" rel="noreferrer"
                 className={`p-4 border rounded-2xl transition-all ${
                   isDark ? "border-slate-800 text-white hover:bg-slate-900" : "border-slate-300 text-slate-700 hover:bg-white shadow-sm"
                 } active:scale-95`}>
                 <FaGithub size={20} />
               </a>
             )}
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
          <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Content Hub */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mb-16">
          <h3 className={`text-2xl md:text-3xl font-black mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>
            Herausforderung & <span className="text-pink-600">Umsetzung.</span>
          </h3>
          <p className={`text-base md:text-xl leading-relaxed font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            {project.description}
          </p>
        </div>
        
        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className={`p-6 rounded-3xl border ${cardBg}`}>
                <h5 className="text-[10px] font-black uppercase tracking-widest text-pink-600 mb-4">Stack</h5>
                <div className="flex flex-wrap gap-2">
                  {(project.technologies || []).map(tech => (
                    <span key={tech} className={`text-[10px] font-bold px-3 py-1.5 rounded-lg ${
                      isDark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700"
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
            </div>

            <div className={`p-6 rounded-3xl border-t-4 border-pink-600 ${cardBg}`}>
                <div className="flex items-center gap-2 mb-3 text-pink-600">
                    <FaLightbulb size={14} />
                    <h5 className="text-[10px] font-black uppercase tracking-widest">Workflow</h5>
                </div>
                <p className={`text-sm font-bold leading-tight ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  {project.workflow}
                </p>
            </div>

            <div className={`p-6 rounded-3xl border-l-4 border-cyan-500 ${cardBg}`}>
                <div className="flex items-center gap-2 mb-3 text-cyan-600">
                    <FaLayerGroup size={14} />
                    <h5 className="text-[10px] font-black uppercase tracking-widest">Architektur</h5>
                </div>
                <p className={`text-sm font-bold leading-tight ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  {project.architecture}
                </p>
            </div>

            <div className={`p-6 rounded-3xl border ${cardBg}`}>
                <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Projektdaten</h5>
                <div className="space-y-2">
                    <div className="flex justify-between text-[11px] border-b border-white/5 pb-2">
                      <span className="text-slate-500 font-bold">Jahr</span>
                      <span className="font-black">{project.year}</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-500 font-bold">Rolle</span>
                      <span className="font-black text-pink-600">{project.role}</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pb-20 mt-10">
        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-10">
          <div onClick={() => navigate(`/projects/${prevProject.id}`)} className="group cursor-pointer">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-2 group-hover:text-pink-500 transition-colors">← Zurück</span>
            <h4 className="text-xs md:text-lg font-black truncate">{prevProject.title}</h4>
          </div>
          <div onClick={() => navigate(`/projects/${nextProject.id}`)} className="group cursor-pointer text-right">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-2 group-hover:text-pink-500 transition-colors">Weiter →</span>
            <h4 className="text-xs md:text-lg font-black truncate">{nextProject.title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;