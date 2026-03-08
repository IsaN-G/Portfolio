import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../data/projects";
import { FaGithub, FaArrowLeft,  FaCheckCircle } from "react-icons/fa";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projects.find((p) => p.id === id);

  if (!project) return <div className="text-center py-20">Projekt nicht gefunden</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* 1. Kompakter Header */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-12">
        <button onClick={() => navigate(-1)} className="group flex items-center gap-2 text-slate-400 hover:text-pink-600 transition-colors mb-6">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black uppercase tracking-widest">Projekt-Übersicht</span>
        </button>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-pink-600 font-bold tracking-widest uppercase text-xs">{project.category}</span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mt-2">
              {project.title}
            </h1>
          </div>
          <div className="flex gap-4">
             <a href={project.liveUrl} target="_blank" className="px-6 py-3 bg-pink-600 text-white rounded-full font-bold shadow-lg shadow-pink-600/20 hover:scale-105 transition">Live Demo</a>
             {project.githubUrl && <a href={project.githubUrl} target="_blank" className="p-3 border border-slate-200 dark:border-slate-800 rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 transition"><FaGithub size={20} /></a>}
          </div>
        </div>
      </div>

     {/* 2. Full-Width Bild Container */}
{/* 2. Natürliches Bild (Kein fester Container) */}
<div className="max-w-6xl mx-auto px-6">
  <div className="relative group">
    {/* Subtiler Glow-Effekt hinter dem Bild, der nur bei Hover stärker wird */}
    <div className="absolute -inset-1 bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-[2rem] md:rounded-[3.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-700" />
    
    <img
      src={project.image}
      alt={project.title}
      className="relative w-full h-auto rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800/50"
    />
  </div>
</div>

      {/* 3. Die Case Study Sektion */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">
        
        {/* Linke Seite: Kern-Details */}
        <div className="lg:col-span-4 space-y-12">
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Technischer Stack</h4>
            <div className="grid grid-cols-1 gap-3">
            {(project.technologies || []).map((tech => (
                <div key={tech} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <FaCheckCircle className="text-pink-600" />
                  <span className="font-medium">{tech}</span>
                </div>
              )))}
            </div>
          </div>

          <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800">
            <h4 className="text-xs font-black uppercase text-slate-400 mb-4">Projekt-Eckdaten</h4>
            <div className="space-y-4">
              <div className="flex justify-between"><span className="text-slate-500">Zeitraum</span><span className="font-bold">{project.year}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Rolle</span><span className="font-bold italic">Frontend & Design</span></div>
            </div>
          </div>
        </div>

        {/* Rechte Seite: Die Story */}
        <div className="lg:col-span-8">
          <h3 className="text-3xl font-bold mb-8 dark:text-white">Herausforderung & Lösung</h3>
          <div className="prose prose-xl prose-slate dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              {project.description}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="p-6 border-l-4 border-pink-600 bg-pink-50/30 dark:bg-pink-900/10">
                    <h5 className="font-bold mb-2">UI/UX Fokus</h5>
                    <p className="text-sm">Intuitive Benutzerführung und ein responsives Design für mobile Endgeräte.</p>
                </div>
                <div className="p-6 border-l-4 border-slate-900 dark:border-slate-500 bg-slate-50/50 dark:bg-slate-800/20">
                    <h5 className="font-bold mb-2">Entwicklung</h5>
                    <p className="text-sm">Saubere Code-Struktur unter Verwendung moderner Frameworks und Best Practices.</p>
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;