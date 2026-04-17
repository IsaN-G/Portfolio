import { useTheme } from "../context/ThemeContext";

const Impressum = () => {
  const { theme } = useTheme();

  return (
    <div className="pt-32 pb-20 px-6">
      <div className={`max-w-3xl mx-auto border p-8 rounded-2xl transition-all duration-500 ${
        theme === "dark"
          ? "bg-gray-900/50 border-white/10"
          : "bg-white border-slate-200 shadow-lg"
      }`}>
        <h1 className={`text-4xl font-black mb-8 uppercase tracking-widest ${
          theme === "dark" ? "text-white" : "text-slate-900"
        }`}>
          Impressum
        </h1>
        
        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <p className={`font-bold text-lg mb-1 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              Isabelle Nauber-Gelhaar
            </p>
            <p className={theme === "dark" ? "text-gray-300" : "text-slate-700"}>Lietweg 5a</p>
            <p className={theme === "dark" ? "text-gray-300" : "text-slate-700"}>21442 Toppenstedt</p>
          </section>

          <section>
            <h2 className="text-pink-600 font-bold uppercase tracking-wider mb-2 text-xs">Kontakt</h2>
            <p className={theme === "dark" ? "text-gray-300" : "text-slate-700"}>Telefon: +49 1629552735</p>
            <p className={theme === "dark" ? "text-gray-300" : "text-slate-700"}>E-Mail: isabelle.nauber@gmail.com</p>
          </section>

          <section>
            <h2 className="text-pink-600 font-bold uppercase tracking-wider mb-2 text-xs">Redaktionell verantwortlich</h2>
            <p className={theme === "dark" ? "text-gray-300" : "text-slate-700"}>Isabelle Nauber-Gelhaar</p>
            <p className={theme === "dark" ? "text-gray-300" : "text-slate-700"}>Lietweg 5a</p>
            <p className={theme === "dark" ? "text-gray-300" : "text-slate-700"}>21442 Toppenstedt</p>
          </section>

          <section className="pt-8 border-t border-white/5">
            <p className={`text-[10px] ${theme === "dark" ? "text-gray-500" : "text-slate-500"}`}>
              Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 underline transition">eRecht24</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;