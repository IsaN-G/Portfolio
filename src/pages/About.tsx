import SectionWrapper from "../components/SectionWrapper";
import { useTheme } from "../context/ThemeContext";
import { 
  FaCode, 
  FaUsers, 
  FaRocket, 
  FaUtensils,
  FaCheckDouble
} from "react-icons/fa";

const About = () => {
  const { theme } = useTheme();

  // Dynamischer Karten-Stil
  const cardStyle = `transition-all duration-500 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border ${
    theme === "dark" 
      ? "bg-slate-900/40 backdrop-blur-xl border-white/10 shadow-2xl" 
      : "bg-white border-slate-200 shadow-lg"
  } hover:border-pink-500/50 group`;

  const strengths = [
    {
      title: "Gastro-Mindset",
      desc: "15 Jahre Erfahrung, davon Jahre als stellv. Restaurantleitung. Ich bewahre einen kühlen Kopf, wenn die 'Bestellungen' gleichzeitig reinkommen.",
      icon: <FaUtensils size={22} />,
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "User Experience",
      desc: "Ein Gast im Restaurant und ein User auf einer Website wollen dasselbe: Sich intuitiv zurechtfinden und exzellent bedient werden.",
      icon: <FaUsers size={22} />,
      color: "from-violet-500 to-indigo-600"
    },
    {
      title: "Code & Ästhetik",
      desc: "Ich entwickle nicht nur funktionale Lösungen, sondern lege Wert auf ein Design, das eine Geschichte erzählt – so wie ein perfekt angerichteter Teller.",
      icon: <FaCode size={22} />,
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <SectionWrapper>
      <div id="about" className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-8 md:space-y-12 py-10">
        
        {/* Haupt-Story Bereich */}
        <div className={cardStyle}>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Text-Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-pink-500 font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px] mb-3 block text-center lg:text-left">
                  Meine Philosophie
                </span>
                <h2 className={`text-3xl md:text-5xl font-black mb-6 tracking-tighter leading-[1.1] text-center lg:text-left ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}>
                  Vom Service <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                    zum Interface.
                  </span>
                </h2>
              </div>

              <div className="space-y-4 text-center lg:text-left mx-auto lg:mx-0 max-w-2xl">
                <p className={`leading-relaxed text-base md:text-lg font-medium ${
                  theme === "dark" ? "text-slate-200" : "text-slate-800"
                }`}>
                  Struktur im Hintergrund, Leidenschaft im Vordergrund. 
                  Diese Gastro-Prinzipien übertrage ich heute auf modernen Code.
                </p>
                
                <p className={`leading-relaxed text-sm md:text-base ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}>
                  Ich suche ein Praktikum, das meine Kreativität fordert und Raum für die 
                  <span className="italic font-semibold text-pink-500/80"> Balance zwischen Familie und Entwicklung </span> lässt.
                </p>
              </div>
            </div>

            {/* Stats-Grid: 2 Spalten auf Mobile, flexibel auf Desktop */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 md:gap-4">
              {[
                { label: "Gastro-Erfahrung", val: "15y", col: "text-pink-500" },
                { label: "Web-Entwicklung", val: "100%", col: "text-violet-500" },
                { label: "Learning Curve", val: "Fast", col: "text-amber-500" },
                { label: "Leadership", val: "Team", col: "text-blue-500" }
              ].map((stat, i) => (
                <div key={i} className={`p-4 md:p-6 rounded-2xl md:rounded-3xl border transition-all duration-300
                  ${theme === "dark" 
                    ? "bg-white/5 border-white/10 hover:bg-white/10" 
                    : "bg-slate-50 border-slate-200 shadow-sm hover:shadow-md"
                  } text-center`}>
                  <div className={`text-2xl md:text-3xl font-black mb-1 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    {stat.val}
                  </div>
                  <div className={`text-[8px] md:text-[10px] uppercase tracking-widest font-bold ${stat.col}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Die 3 Säulen: Stapeln auf Mobile, Nebeneinander ab MD */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strengths.map((item, index) => (
            <div key={index} className={cardStyle}>
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500 mx-auto md:mx-0`}>
                {item.icon}
              </div>
              <h3 className={`text-lg md:text-xl font-bold mb-3 tracking-tight text-center md:text-left ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                {item.title}
              </h3>
              <p className={`text-xs md:text-sm leading-relaxed text-center md:text-left ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Bereich: Stapelt sich auf Mobile */}
        <div className={`flex flex-col lg:flex-row gap-6 items-center justify-between p-6 md:p-8 rounded-[2rem] border transition-colors duration-500 ${
          theme === "dark" ? "bg-pink-600/5 border-pink-500/10" : "bg-pink-50 border-pink-100"
        }`}>
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="p-3 bg-pink-500/10 rounded-full">
              <FaRocket className="text-pink-500 text-xl md:text-2xl" />
            </div>
            <p className={`text-sm md:text-base font-medium italic ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
              Bereit für ein <span className="font-bold text-pink-600">Praktikum</span> im Raum 
              <span className="font-bold text-pink-600"> Toppenstedt / Lüneburg / Hamburg</span>, 
              um technische Skills und kreatives Design zu vereinen.
            </p>
          </div>
          
          <button 
            onClick={() => window.location.href = '/contact'}
            className={`w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all active:scale-95 shadow-lg ${
              theme === "dark" 
                ? "bg-white text-black hover:bg-pink-500 hover:text-white" 
                : "bg-slate-900 text-white hover:bg-pink-600 shadow-slate-900/20"
            }`}
          >
            <FaCheckDouble size={14} /> Let's Talk
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;