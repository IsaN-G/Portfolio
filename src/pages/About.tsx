import SectionWrapper from "../components/SectionWrapper";
import { useTheme } from "../context/ThemeContext"; // Import wichtig!
import { 
  FaCode, 
  FaUsers, 
  FaRocket, 
  FaUtensils,
  FaCheckDouble
} from "react-icons/fa";

const About = () => {
  const { theme } = useTheme();

  // Dynamischer Karten-Stil: Hellweiß im Light Mode, Glas-Effekt im Dark Mode
  const cardStyle = `transition-all duration-500 rounded-[2.5rem] p-8 border ${
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
     <div id="about" className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        
        {/* Haupt-Story */}
        <div className={cardStyle}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-pink-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
                Meine Philosophie
              </span>
              <h2 className={`text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-none ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                Vom Service <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                  zum Interface.
                </span>
              </h2>
              <div className="max-w-xl"> {/* Ein Container hilft, die Zeilenlänge leserfreundlich zu halten */}
  <p className={`leading-relaxed text-lg font-medium mb-4 ${
    theme === "dark" ? "text-slate-200" : "text-slate-800"
  }`}>
    Struktur im Hintergrund, Leidenschaft im Vordergrund. 
    Diese Gastro-Prinzipien übertrage ich heute auf modernen Code.
  </p>
  
  <p className={`leading-relaxed ${
    theme === "dark" ? "text-slate-400" : "text-slate-600"
  }`}>
    Ich suche ein Praktikum, das meine Kreativität fordert und Raum für die 
    <span className="italic font-semibold"> Balance zwischen Familie und Entwicklung </span> lässt.
  </p>
</div>
</div>
            {/* Stats Bereich */}
            <div className="grid grid-cols-2 gap-4">
              {[
       { label: "Gastro-Erfahrung", val: "15y", col: "text-pink-500" },
       { label: "Webdesign & Webentwicklung", val: "100%", col: "text-violet-500" },
       { label: "Learning Curve", val: "Fast", col: "text-amber-500" },
       { label: "Leadership Skills", val: "Team", col: "text-blue-500" }
              ].map((stat, i) => (
                <div key={i} className={`p-6 rounded-3xl border transition-all duration-300
                  ${theme === "dark" 
                    ? "bg-white/10 border-white/10 hover:bg-white/15" 
                    : "bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300"
                  } text-center`}>
                  <div className={`text-3xl font-black mb-1 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>{stat.val}</div>
                  <div className={`text-[10px] uppercase tracking-widest font-bold ${stat.col}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Die 3 Säulen */}
        <div className="grid md:grid-cols-3 gap-6">
          {strengths.map((item, index) => (
            <div key={index} className={cardStyle}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                {item.icon}
              </div>
              <h3 className={`text-xl font-bold mb-3 tracking-tight ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                {item.title}
              </h3>
              <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Bereich */}
        <div className={`flex flex-col md:flex-row gap-6 items-center justify-between p-8 rounded-[2rem] border ${
          theme === "dark" ? "bg-pink-600/5 border-pink-500/10" : "bg-pink-50 border-pink-100"
        }`}>
          <div className="flex items-center gap-4">
            <FaRocket className="text-pink-500 text-2xl" />
            <p className={`font-medium italic ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
            Bereit für ein <span className="font-bold text-[#d1127c]">Praktikum</span> im Raum 
             <span className="font-bold text-[#d1127c]"> Toppenstedt / Lüneburg / Hamburg</span>, 
             um technische Skills und kreatives Design zu vereinen.
            </p>
          </div>
          <button 
            onClick={() => window.location.href = '/contact'}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all ${
              theme === "dark" ? "bg-white text-black hover:bg-pink-500 hover:text-white" : "bg-slate-900 text-white hover:bg-pink-600"
            }`}
          >
            <FaCheckDouble /> Let's Talk
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;