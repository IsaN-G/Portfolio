import { Code, Palette, Terminal, GitBranch, Database, Layout } from 'lucide-react';
import { useTheme } from "../context/ThemeContext";

const skills = [
  { 
    title: "Frontend Development", 
    icon: <Layout size={32} />, 
    description: "React, TypeScript, Tailwind CSS, Next.js", 
    level: 90, 
    color: "from-pink-500 to-rose-600",
    ringHex: "#ec4899" // Direkter Hex-Code für zuverlässige Darstellung
  },
  { 
    title: "UI/UX Design", 
    icon: <Palette size={32} />, 
    description: "Figma, Canva, Responsive Design", 
    level: 75, 
    color: "from-purple-500 to-indigo-600",
    ringHex: "#a855f7"
  },
  { 
    title: "JavaScript & Tools", 
    icon: <Code size={32} />, 
    description: "JavaScript (ES6+), Bun, Vite, Git, Render, Vercel",
    level: 80, 
    color: "from-yellow-500 to-amber-600",
    ringHex: "#eab308"
  },
  { 
    title: "Version Control", 
    icon: <GitBranch size={32} />, 
    description: "Git, GitHub, Pull Requests", 
    level: 70, 
    color: "from-teal-500 to-cyan-600",
    ringHex: "#14b8a6"
  },
  { 
    title: "Backend Basics", 
    icon: <Database size={32} />, 
    description: "Node.js, Express, REST APIs, MongoDB, Superbase", 
    level: 65, 
    color: "from-emerald-500 to-green-600",
    ringHex: "#10b981"
  },
  { 
    title: "Problem Solving", 
    icon: <Terminal size={32} />, 
    description: "Refactoring, Debugging, Performance Optimierung", 
    level: 50, 
    color: "from-blue-500 to-sky-600",
    ringHex: "#3b82f6"
  },
];

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section 
      id="skills"
      className={`py-16 md:py-24 transition-colors duration-500 scroll-mt-24 ${
        isDark ? "bg-[#050810]" : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            Meine Skills
          </h2>
          <p className={`max-w-md mx-auto font-medium ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}>
            Was ich richtig gut kann – mit aktuellem Level
          </p>
        </div>

        {/* Grid: 2 Spalten auf Mobile, 3 auf Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8">
          {skills.map((skill) => {
            const radius = 48;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (skill.level / 100) * circumference;

            return (
              <div 
                key={skill.title} 
                className="group flex flex-col items-center text-center transition-all duration-500 hover:scale-105"
              >
                {/* Skill-Kreis - Mobile skaliert auf 32, Desktop auf 40 */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6">
                  <svg
                    className="w-full h-full -rotate-90"
                    viewBox="0 0 120 120"
                  >
                    {/* Hintergrund-Ring */}
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="12"
                      className={isDark ? "text-slate-800" : "text-slate-200"}
                    />
                    {/* Fortschritts-Ring */}
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      fill="none"
                      stroke={skill.ringHex}
                      strokeWidth="12"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>

                  {/* Icon + Level im Zentrum */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className={`p-3 md:p-5 rounded-2xl md:rounded-3xl bg-gradient-to-br ${skill.color} text-white shadow-lg`}>
                      {/* Icon wird auf Mobile leicht kleiner */}
                      <div className="scale-75 md:scale-100">
                        {skill.icon}
                      </div>
                    </div>
                    <div className={`mt-2 text-xl md:text-4xl font-black tracking-tighter ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}>
                      {skill.level}
                      <span className="text-xs md:text-base font-medium opacity-50">%</span>
                    </div>
                  </div>
                </div>

                {/* Titel + Beschreibung */}
                <h3 className={`text-sm md:text-2xl font-bold mb-2 tracking-tight ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>
                  {skill.title}
                </h3>
                <p className={`text-[10px] md:text-sm leading-relaxed max-w-[140px] md:max-w-[220px] ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}>
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
