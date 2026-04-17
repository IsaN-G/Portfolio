import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../data/projects";
import { useTheme } from "../context/ThemeContext";
import { 
  FaGithub, 
  FaArrowLeft, 
  FaLightbulb, 
  FaLayerGroup 
} from "react-icons/fa";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const currentIndex = projects.findIndex((p) => p.id === id);
  const project = projects[currentIndex];

  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) return null;

  const isDark = theme === "dark";
  const cardBg = isDark ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-sm";
  const headingColor = isDark ? "text-white" : "text-slate-900";
  const textColor = isDark ? "text-slate-300" : "text-slate-700"; 
  const labelColor = isDark ? "text-slate-500" : "text-slate-500 font-bold";

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? "bg-slate-950 text-gray-200" : "bg-gray-10 text-slate-900"
    }`}>
      
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-8">
        <button 
          onClick={() => navigate("/")} 
          className={`group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mb-4 transition-colors ${
            isDark ? "text-slate-500 hover:text-pink-500" : "text-slate-500 hover:text-pink-600"
          }`}
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform text-[30px]" />
          <span>Zurück zur Übersicht</span>
        </button>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-pink-600 font-bold tracking-[0.2em] uppercase text-[10px]">
              {project.category}
            </span>
            <h1 className={`text-4xl md:text-6xl font-black mt-2 leading-none ${headingColor}`}>
              {project.title}
            </h1>
          </div>
          <div className="flex gap-3">
             {project.liveUrl && (
               <a href={project.liveUrl} target="_blank" rel="noreferrer"
                  className="px-6 py-3 bg-pink-600 text-white rounded-full text-sm font-black shadow-lg hover:bg-pink-700 transition-all">
                 Live Demo
               </a>
             )}
             {project.githubUrl && (
               <a href={project.githubUrl} target="_blank" rel="noreferrer"
                 className={`p-3 border rounded-full transition-all ${
                   isDark ? "border-slate-800 text-white hover:bg-slate-900" : "border-slate-300 text-slate-700 hover:bg-white shadow-sm"
                 }`}>
                 <FaGithub size={20} />
               </a>
             )}
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-6">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-auto rounded-[2rem] shadow-xl border-2 ${
            isDark ? "border-slate-800/50" : "border-white"
          }`}
        />
      </div>

      {/* Content Hub */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="max-w-4xl mb-12">
          <h3 className={`text-2xl font-black mb-4 ${headingColor}`}>
            Herausforderung & <span className="text-pink-600">Umsetzung.</span>
          </h3>
          <p className={`text-lg md:text-xl leading-relaxed ${textColor}`}>
            {project.description}
          </p>
        </div>
        
        {/* Korrigiertes Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Tech Stack */}
            <div className={`p-6 rounded-3xl border flex flex-col ${cardBg}`}>
                <h5 className="text-[10px] font-black uppercase tracking-widest text-pink-600 mb-4">Technologien</h5>
                <div className="flex flex-wrap gap-2">
                  {(project.technologies || []).map(tech => (
                    <span key={tech} className={`text-[11px] font-bold px-2 py-1 rounded-md ${
                      isDark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-800"
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
            </div>

            {/* Workflow */}
            <div className={`p-6 rounded-3xl border-t-4 border-pink-600 flex flex-col ${cardBg}`}>
                <div className="flex items-center gap-2 mb-3 text-pink-600">
                    <FaLightbulb size={14} />
                    <h5 className="text-[10px] font-black uppercase tracking-widest">Vorgehen</h5>
                </div>
                <p className={`text-[13px] font-bold leading-snug ${textColor}`}>
                  <span className="text-pink-600 font-black">Fokus:</span> {project.workflow}
                </p>
            </div>

            {/* Architektur */}
            <div className={`p-6 rounded-3xl border-l-4 border-cyan-500 flex flex-col ${cardBg}`}>
                <div className="flex items-center gap-2 mb-3 text-cyan-600">
                    <FaLayerGroup size={14} />
                    <h5 className="text-[10px] font-black uppercase tracking-widest">Architektur</h5>
                </div>
                <p className={`text-[13px] font-bold leading-snug ${textColor}`}>
                  {project.architecture}
                </p>
            </div>

            {/* Eckdaten */}
            <div className={`p-6 rounded-3xl border-l-4 border-slate-400 flex flex-col ${cardBg}`}>
                <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">Projektdaten</h5>
                <div className="space-y-3 text-[12px] mt-auto">
                    <div className="flex justify-between border-b border-gray-200 dark:border-slate-800 pb-1">
                      <span className={labelColor}>Jahr</span>
                      <span className={`font-black ${headingColor}`}>{project.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={labelColor}>Rolle</span>
                      <span className="font-black text-pink-600 text-right ml-2">
                        {project.role}
                      </span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-gray-200 dark:border-slate-800 mt-10">
        <div className="grid grid-cols-2 gap-8">
          <div onClick={() => navigate(`/projects/${prevProject.id}`)} className="group cursor-pointer flex flex-col items-start">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 group-hover:text-pink-600 transition-colors">
              ← Vorheriges Projekt
            </span>
            <h2 className={`text-sm md:text-xl font-black ${headingColor} group-hover:translate-x-1 transition-transform`}>
              {prevProject.title}
            </h2>
          </div>

          <div onClick={() => navigate(`/projects/${nextProject.id}`)} className="group cursor-pointer flex flex-col items-end text-right">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 group-hover:text-pink-600 transition-colors">
              Nächstes Projekt →
            </span>
            <h2 className={`text-sm md:text-xl font-black ${headingColor} group-hover:-translate-x-1 transition-transform`}>
              {nextProject.title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;