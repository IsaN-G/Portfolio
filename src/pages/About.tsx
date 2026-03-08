
import SectionWrapper from "../components/SectionWrapper";
import { 
  FaCode, 
  FaPaintBrush, 
  FaRunning, 
  FaUsers, 
  FaHome, 
  FaMapMarkerAlt, 
  FaRegClock, 
  FaRocket 
} from "react-icons/fa";

const About = () => {
  const journey = [
    {
      title: "Führungserfahrung & Gastro-Herz",
      desc: "15 Jahre Gastronomie, davon mehrere als stellv. Restaurantleiterin. Ich weiß, was Verantwortung und Teamdynamik bedeuten.",
      icon: <FaUsers size={20} />,
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Kreativer Neuanfang",
      desc: "Der Umzug aufs Land und meine Familie gaben den Impuls: Ich verwandle meine Leidenschaft für Ästhetik nun in digitales Design.",
      icon: <FaPaintBrush size={20} />,
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Code & Design",
      desc: "Webentwicklung ist für mich das perfekte Puzzle. Ich liebe es, funktionale Lösungen mit modernem Design zu verbinden.",
      icon: <FaCode size={20} />,
      color: "from-amber-500 to-orange-600"
    }
  ];

  // Zentraler Stil für alle dunklen Karten (Konsistenz pur!)
  const cardStyle = "bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl transition-all duration-300";

  return (
    <SectionWrapper>
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Hallo, ich bin <span className="text-pink-600">Isabelle</span>
          </h2>
          <div className="h-1.5 w-24 bg-pink-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          
          {/* Linke Spalte: Bild & Quick Facts */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-rose-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
              <img
                src="/IMG/7.jpg"
                alt="Isabelle"
                className="relative w-full aspect-square object-cover rounded-3xl shadow-2xl border-4 border-white dark:border-slate-800"
              />
            </div>
            
            <div className={cardStyle}>
              <h3 className="text-xs font-black uppercase tracking-widest text-pink-500 mb-4">Fokus & Ziele</h3>
              <div className="space-y-4">
                {[
                  { icon: <FaRocket className="text-pink-500" />, label: "Fokus", text: "Frontend & UI/UX" },
                  { icon: <FaRegClock className="text-pink-500" />, label: "Typ", text: "Teilzeit-Praktikum" },
                  { icon: <FaMapMarkerAlt className="text-pink-500" />, label: "Region", text: "Hambug / Lüneburg / Toppenstedt" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="shrink-0">{item.icon}</span>
                    <span>{item.label}: <strong className="text-white">{item.text}</strong></span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Story & Journey */}
          <div className="lg:col-span-3 space-y-8">
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                Vom Service-Management zum <span className="text-pink-600">Pixel-Design</span>
              </h3>
              
              {/* Highlight Zitat-Box */}
              <div className="bg-gradient-to-r from-pink-500 to-rose-600 p-8 rounded-2xl shadow-lg text-white transform hover:scale-[1.01] transition-transform duration-300">
                <p className="text-xl font-medium leading-relaxed italic">
                  "Ich liebe es, moderne Interfaces zu gestalten und sie mit <span className="border-b-2 border-white/40">React und Next.js</span> technisch zum Leben zu erwecken."
                </p>
              </div>

              {/* Story-Text in einer Card für maximalen Kontrast */}
              <div className={`${cardStyle} space-y-5 text-slate-300 text-lg leading-relaxed`}>
                <p>
                  Nach 15 Jahren in der Gastronomie habe ich gelernt, auch unter Hochdruck den Überblick zu behalten. Als <strong className="text-pink-400">stellvertretende Restaurantleiterin</strong> habe ich Strukturen geschaffen – heute übersetze ich diese Ordnung in sauberen Code.
                </p>
                <p>
                  Ich suche die Balance zwischen <strong className="text-pink-400">Familie und Code</strong>. Mein Ziel ist ein Praktikum, in dem ich meine kreative Ader ausleben und meine technischen Skills vertiefen kann.
                </p>
              </div>
            </div>

            {/* Journey Cards */}
            <div className="grid gap-4">
              {journey.map((step, idx) => (
               <div 
                  key={idx} 
                  className={`${cardStyle} flex items-center gap-5 p-5 group hover:border-pink-500/50 hover:-translate-y-1`}
               >
                  <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">{step.title}</h4>
                    <p className="text-slate-400 text-sm leading-snug">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hobby Badges - Jetzt ebenfalls im cardStyle */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <FaRunning className="text-pink-500" />, text: "Joggen als Stressausgleich" },
                { icon: <FaHome className="text-pink-500" />, text: "Natur & Familie als Kraftquelle" }
              ].map((hobby, i) => (
                <div 
                  key={i} 
                  className={`${cardStyle} flex items-center gap-3 p-4 py-3 hover:scale-[1.02]`}
                >
                  <div className="shrink-0">{hobby.icon}</div>
                  <span className="text-sm font-medium italic text-slate-300">
                    {hobby.text}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;