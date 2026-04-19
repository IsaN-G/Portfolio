import { useTheme } from "../context/ThemeContext";

const Datenschutz = () => {
  const { theme } = useTheme();

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
      <div className={`max-w-4xl mx-auto border p-6 md:p-12 rounded-3xl transition-all duration-500 ${
        theme === "dark"
          ? "bg-gray-900/50 border-white/10"
          : "bg-white border-slate-200 shadow-lg"
      }`}>
        <h1 className={`text-2xl md:text-4xl font-black mb-6 md:mb-8 uppercase tracking-widest leading-tight ${
          theme === "dark" ? "text-white" : "text-slate-900"
        }`}>
          Datenschutz­erklärung
        </h1>

        <div className="space-y-8 md:space-y-12 text-xs md:text-sm leading-relaxed">
          {/* 1. Datenschutz auf einen Blick */}
          <section>
            <h2 className={`text-lg md:text-xl font-bold mb-4 border-b pb-2 ${
              theme === "dark" ? "text-white border-pink-600/30" : "text-slate-900 border-pink-500/20"
            }`}>
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-pink-500 font-semibold mb-2 uppercase text-[10px] tracking-wider">Allgemeine Hinweise</h3>
            <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-slate-700"}`}>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            </p>
            
            <h3 className="text-pink-500 font-semibold mb-2 uppercase text-[10px] tracking-wider">Datenerfassung</h3>
            <div className="space-y-3">
              <p className={theme === "dark" ? "text-gray-300" : "text-slate-700"}>
                <strong className="text-pink-500/80">Verantwortlich:</strong> Die Datenverarbeitung erfolgt durch den Websitebetreiber.
              </p>
              <p className={theme === "dark" ? "text-gray-300" : "text-slate-700"}>
                <strong className="text-pink-500/80">Erfassung:</strong> Durch Ihre Mitteilung oder automatisch durch unsere IT-Systeme (technische Daten).
              </p>
            </div>
          </section>

          {/* 2. Hosting */}
          <section>
            <h2 className={`text-lg md:text-xl font-bold mb-4 border-b pb-2 ${
              theme === "dark" ? "text-white border-pink-600/30" : "text-slate-900 border-pink-500/20"
            }`}>
              2. Hosting
            </h2>
            <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-slate-700"}`}>
              Wir hosten unsere Website bei:
            </p>
            <div className={`p-4 md:p-6 rounded-2xl border ${
              theme === "dark" ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"
            }`}>
              <p className={`font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>Vercel Inc.</p>
              <p className={theme === "dark" ? "text-gray-400" : "text-slate-600"}>440 N Barranca Ave #4133</p>
              <p className={theme === "dark" ? "text-gray-400" : "text-slate-600"}>Covina, CA 91723, USA</p>
            </div>
            <p className={`mt-4 italic text-[10px] ${theme === "dark" ? "text-gray-400" : "text-slate-500"}`}>
              Ein Vertrag über Auftragsverarbeitung (AVV) wurde geschlossen.
            </p>
          </section>

          <footer className="pt-8 border-t border-gray-200 dark:border-white/10">
            <p className={`text-[10px] ${theme === "dark" ? "text-gray-500" : "text-slate-500"}`}>
              Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 underline">eRecht24</a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;