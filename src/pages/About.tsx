import SectionWrapper from "../components/SectionWrapper";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { 
  FaCode, 
  FaUsers, 
  FaRocket, 
  FaUtensils,
  FaCheckDouble
} from "react-icons/fa";

const About = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

 
  const cardStyle = `transition-all duration-500 rounded-[2rem] p-6 md:p-8 border ${
    theme === "dark" 
      ? "bg-slate-900/40 backdrop-blur-xl border-white/10 shadow-2xl" 
      : "bg-white border-slate-200 shadow-lg"
  } hover:border-pink-500/50 group`;

  const strengths = [
    {
      title: "Gastro-Mindset",
      desc: "15 Jahre Erfahrung. Ich bewahre einen kühlen Kopf, auch wenn es stressig wird.",
      icon: <FaUtensils size={20} />,
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "User Experience",
      desc: "Gäste und User wollen das Gleiche: Intuitive Führung und exzellenten Service.",
      icon: <FaUsers size={20} />,
      color: "from-violet-500 to-indigo-600"
    },
    {
      title: "Code & Ästhetik",
      desc: "Design, das Geschichten erzählt – so wie ein perfekt angerichteter Teller.",
      icon: <FaCode size={20} />,
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <SectionWrapper>
      <div id="about" className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-6 md:space-y-8 py-6 scroll-mt-24">
        
      
        <div className={cardStyle}>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-pink-500 font-black uppercase tracking-[0.3em] text-[10px] mb-2 block text-center lg:text-left">
                  Meine Philosophie
                </span>
                <h2 className={`text-3xl md:text-5xl font-black mb-4 tracking-tighter leading-tight text-center lg:text-left ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}>
                  Vom Service <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                    zum Interface.
                  </span>
                </h2>
              </div>

              <div className="space-y-4 text-center lg:text-left mx-auto lg:mx-0 max-w-2xl">
                <p className={`leading-relaxed text-base md:text-xl font-medium ${
                  theme === "dark" ? "text-slate-200" : "text-slate-800"
                }`}>
                  Struktur im Hintergrund, Leidenschaft im Vordergrund. 
                  Gastro-Prinzipien übertragen auf modernen Code.
                </p>
                <p className={`leading-relaxed text-sm md:text-base ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}>
                  Ich suche ein Praktikum mit Fokus auf kreatives Design und 
                  <span className="italic font-semibold text-pink-500"> moderne Web-Technologien</span>.
                </p>
              </div>
            </div>

           
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 md:gap-4">
              {[
                { label: "Erfahrung", val: "15y", col: "text-pink-500" },
                { label: "Motivation", val: "100%", col: "text-violet-500" },
                { label: "Lernen", val: "Fast", col: "text-amber-500" },
                { label: "Spirit", val: "Team", col: "text-blue-500" }
              ].map((stat, i) => (
                <div key={i} className={`p-5 md:p-6 rounded-2xl border transition-all
                  ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200 shadow-sm"} text-center`}>
                  <div className={`text-2xl md:text-3xl font-black ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    {stat.val}
                  </div>
                  <div className={`text-[10px] uppercase tracking-widest font-bold ${stat.col}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strengths.map((item, index) => (
            <div key={index} className={cardStyle}>
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-5 shadow-lg mx-auto md:mx-0`}>
                {item.icon}
              </div>
              <h3 className={`text-lg md:text-xl font-bold mb-3 text-center md:text-left ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                {item.title}
              </h3>
              <p className={`text-sm leading-relaxed text-center md:text-left ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        
        <div className={`flex flex-col md:flex-row gap-6 items-center justify-between p-6 md:p-8 rounded-[2rem] border ${
          theme === "dark" ? "bg-pink-600/5 border-pink-500/10" : "bg-pink-50 border-pink-100"
        }`}>
          <div className="flex items-center gap-4 text-center md:text-left">
            <FaRocket className="text-pink-500 text-2xl shrink-0" />
            <p className={`text-sm md:text-base font-medium ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
              Bereit für ein <span className="font-bold text-pink-600">Praktikum</span> im Raum Hamburg / Lüneburg.
            </p>
          </div>
          
          <button 
            onClick={() => navigate('/contact')}
            className={`w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[11px] transition-all shadow-lg ${
              theme === "dark" 
                ? "bg-white text-black hover:bg-pink-500 hover:text-white" 
                : "bg-slate-900 text-white hover:bg-pink-600"
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