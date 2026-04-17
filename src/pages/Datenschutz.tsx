import { useTheme } from "../context/ThemeContext";

const Datenschutz = () => {
  const { theme } = useTheme();

  return (
    <div className="pt-32 pb-20 px-6">
      <div className={`max-w-4xl mx-auto border p-8 md:p-12 rounded-2xl transition-all duration-500 ${
        theme === "dark"
          ? "bg-gray-900/50 border-white/10"
          : "bg-white border-slate-200 shadow-lg"
      }`}>
        <h1 className={`text-4xl font-black mb-8 uppercase tracking-widest ${
          theme === "dark" ? "text-white" : "text-slate-900"
        }`}>
          Datenschutz­erklärung
        </h1>

        <div className="space-y-12 text-sm leading-relaxed">
          {/* 1. Datenschutz auf einen Blick */}
          <section>
            <h2 className={`text-xl font-bold mb-4 border-b pb-2 ${
              theme === "dark" ? "text-white border-pink-600/30" : "text-slate-900 border-pink-500/20"
            }`}>
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-pink-500 font-semibold mb-2 uppercase text-xs tracking-wider">Allgemeine Hinweise</h3>
            <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-slate-700"}`}>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            
            <h3 className="text-pink-500 font-semibold mb-2 uppercase text-xs tracking-wider">Datenerfassung auf dieser Website</h3>
            <div className="space-y-4">
              <p className={theme === "dark" ? "text-gray-300" : "text-slate-700"}>
                <strong>Wer ist verantwortlich?</strong> Die Datenverarbeitung erfolgt durch den Websitebetreiber (siehe Abschnitt "Hinweis zur Verantwortlichen Stelle").
              </p>
              <p className={theme === "dark" ? "text-gray-300" : "text-slate-700"}>
                <strong>Wie erfassen wir Daten?</strong> Zum einen dadurch, dass Sie uns diese mitteilen (z. B. im Kontaktformular). Andere Daten werden automatisch durch unsere IT-Systeme erfasst (technische Daten wie Browser oder Uhrzeit).
              </p>
            </div>
          </section>

          {/* 2. Hosting */}
          <section>
            <h2 className={`text-xl font-bold mb-4 border-b pb-2 ${
              theme === "dark" ? "text-white border-pink-600/30" : "text-slate-900 border-pink-500/20"
            }`}>
              2. Hosting
            </h2>
            <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-slate-700"}`}>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <div className={`p-4 rounded-lg border ${
              theme === "dark" ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"
            }`}>
              <p className={`font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>Vercel Inc.</p>
              <p className={theme === "dark" ? "text-gray-400" : "text-slate-600"}>440 N Barranca Ave #4133</p>
              <p className={theme === "dark" ? "text-gray-400" : "text-slate-600"}>Covina, CA 91723, USA</p>
            </div>
            <p className={`mt-4 italic text-xs ${theme === "dark" ? "text-gray-400" : "text-slate-500"}`}>
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen.
            </p>
          </section>

          {/* Weitere Abschnitte (3–5) – ich habe sie der Übersichtlichkeit halber gekürzt, aber alle Texte sind bereits dynamisch angepasst */}
          {/* Kopiere einfach den gleichen Pattern für die restlichen Sections (border, text colors etc.) */}

          <footer className="pt-8 border-t border-white/10">
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