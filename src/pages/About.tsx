import SectionWrapper from "../components/SectionWrapper";
import { FaCode, FaPaintBrush, FaRunning, FaUsers, FaHome } from "react-icons/fa";

const About = () => {
  const journey = [
    {
      title: "Führungserfahrung & Gastro-Herz",
      desc: "15 Jahre Gastronomie, davon mehrere als stellv. Restaurantleiterin. Ich weiß, was Verantwortung und Teamdynamik bedeuten.",
      icon: <FaUsers />,
      color: "from-pink-500 via-purple-500 to-rose-600"
    },
    {
      title: "Kreativer Neuanfang",
      desc: "Der Umzug aufs Land und meine Familie gaben den Impuls: Ich verwandle meine Leidenschaft für Ästhetik nun in digitales Design.",
      icon: <FaPaintBrush />,
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Code & Design",
      desc: "Webentwicklung ist für mich das perfekte Puzzle. Ich liebe es, funktionale Lösungen mit modernem Design zu verbinden.",
      icon: <FaCode />,
      color: "from-yellow-500 to-amber-600"
    }
  ];

  return (
    <SectionWrapper>
      <div className="max-w-6xl mx-auto px-4 py-12">
     
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Hallo, ich bin <span className="text-pink-600">Isabelle</span>
          </h2>
          <div className="h-1.5 w-24 bg-pink-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
      
          <div className="lg:col-span-2 space-y-8">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
              <img
                src="/IMG/7.jpg"
                alt="Isabelle"
                className="relative w-full aspect-square object-cover rounded-2xl shadow-2xl border border-white/20"
              />
            </div>
            
            
            <div className="bg-slate-900 p-6 rounded-2xl shadow-xl space-y-4 border border-slate-800">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Fokus & Ziele</h3>
              <div className="space-y-3">
                {[
                    { label: "Spezialisierung auf", text: "UI/UX & Webdesign" },
                    { label: "Verfügbar für", text: "Teilzeit-Praktikum" },
                    { label: "Region", text: "Toppenstedt / HH / LG" }
                ].map((item, i) => (
                    <p key={i} className="flex items-center gap-3 text-sm text-slate-300">
                        <span className="w-2 h-2 rounded-full bg-pink-500 shrink-0 shadow-[0_0_8px_rgba(236,72,153,0.6)]" />
                        <span>{item.label} <strong>{item.text}</strong></span>
                    </p>
                ))}
              </div>
            </div>
          </div>

  
          <div className="lg:col-span-3 space-y-8">
            
         
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white px-2">
                Vom Service-Management zum Pixel-Design
              </h3>
              
              <div className="bg-slate-900 p-6 rounded-2xl shadow-xl space-y-4 border border-slate-800">
                <p className="text-lg text-slate-800 dark:text-slate-200 leading-relaxed">
                  Nach 15 Jahren in der Gastronomie habe ich gelernt, auch in Stresssituationen den Überblick zu behalten. Als <strong className="text-pink-600 dark:text-pink-400">stellvertretende Restaurantleiterin</strong> war ich es gewohnt, Strukturen zu schaffen – heute tue ich das digital.
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl shadow-xl space-y-4 border border-slate-800">
                <p className="text-lg text-slate-800 dark:text-slate-200 leading-relaxed">
                  Ich suche die Balance zwischen <strong className="text-pink-600 dark:text-pink-400">Familie und Code</strong>. Mein Ziel ist ein Praktikum, um meine kreative Ader auszuleben und meine technischen Skills zu vertiefen.
                </p>
              </div>
            </div>

           
            <div className="space-y-4">
              {journey.map((step, idx) => (
               <div 
               key={idx} 
               className="group flex items-start gap-5 p-5 
                          bg-pink-100/50 dark:bg-pink-800/30 backdrop-blur-sm 
                          rounded-2xl border border-white/20 dark:border-slate-800 
                          transition-all duration-300 shadow-sm
                         hover:bg-slate-900 hover:border-slate-800 hover:shadow-xl hover:-translate-y-1">
                  <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{step.title}</h4>
                    <p className="text-slate-400 dark:text-slate-100 text-sm leading-snug">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3 p-4 bg-pink-100/50 dark:bg-pink-800/30 rounded-2xl border border-pink-200/50 dark:border-pink-800/30 text-slate-800 dark:text-slate-100">
                <div className="w-9 h-9 rounded-xl bg-pink-500 flex items-center justify-center text-white shadow-md">
                    <FaRunning size={18} />
                </div>
                <span className="text-sm font-medium italic">Joggen als Stressausgleich</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-pink-100/50 dark:bg-pink-800/30  rounded-2xl border border-pink-200/50 dark:border-pink-800/30 text-slate-800 dark:text-slate-100">
                <div className="w-9 h-9 rounded-xl bg-pink-500 flex items-center justify-center text-white shadow-md">
                    <FaHome size={18} />
                </div>
                <span className="text-sm font-medium italic">Natur & Familie als Kraftquelle</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;