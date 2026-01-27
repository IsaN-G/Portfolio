

import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects"; 


const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

 
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Projekt nicht gefunden</h2>
        <p className="text-gray-600 mb-6">
          Das gewünschte Projekt existiert nicht oder wurde entfernt.
        </p>
        <button
          onClick={() => navigate("/projects")}
          className="px-6 py-3 bg-rose-700 hover:bg-rose-800 text-white rounded-lg transition"
        >
          Zurück zu allen Projekten
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Linke Spalte: Bild / Galerie */}
        <div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-xl shadow-2xl object-cover max-h-[600px]"
          />

          {/* Optional: kleine Galerie / weitere Bilder */}
          {/* {project.gallery && (
            <div className="mt-6 grid grid-cols-3 gap-3">
              {project.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} - Bild ${idx + 1}`}
                  className="rounded-lg object-cover aspect-square cursor-pointer hover:opacity-90 transition"
                />
              ))}
            </div>
          )} */}
        </div>

        {/* Rechte Spalte: Infos */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-gray-100">
            {project.title}
          </h1>

          {/* Optional: Jahr / Kategorie / Status */}
          {project.year && (
            <div className="text-gray-500 dark:text-gray-400 mb-6">
              {project.year} • {project.category || "Webprojekt"}
            </div>
          )}

          {/* Beschreibung */}
          {project.description && (
            <div className="prose dark:prose-invert max-w-none mb-8">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          )}

          {/* Eigenschaften / Tags */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-3">Details</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {project.client && (
                <li>
                  <span className="font-medium">Kunde:</span> {project.client}
                </li>
              )}
              {project.role && (
                <li>
                  <span className="font-medium">Meine Rolle:</span> {project.role}
                </li>
              )}
              {project.technologies && (
                <li>
                  <span className="font-medium">Technologien:</span>{" "}
                  {project.technologies.join(", ")}
                </li>
              )}
              {project.tags && project.tags.length > 0 && (
                <li className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </li>
              )}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              ← Zurück
            </button>

            {/* Optional: Link zur Live-Seite / GitHub */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-rose-700 hover:bg-rose-800 text-white rounded-lg transition"
              >
                Live ansehen →
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-rose-700 text-rose-700 dark:border-rose-500 dark:text-rose-400 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/30 transition"
              >
                GitHub →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;