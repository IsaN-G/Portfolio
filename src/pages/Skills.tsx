import { Code, Palette, Terminal, GitBranch, Database, Layout } from 'lucide-react';

const skills = [
  { 
    title: "Frontend Development", 
    icon: <Layout size={32} />, 
    description: "React, TypeScript, Tailwind CSS, Next.js", 
    level: 90, 
    color: "from-pink-500 to-rose-600",
    ringColor: "pink-500"
  },
  { 
    title: "UI/UX Design", 
    icon: <Palette size={32} />, 
    description: "Figma, Canva, Responsive Design", 
    level: 75, 
    color: "from-purple-500 to-indigo-600",
    ringColor: "purple-500"
  },
  { 
    title: "JavaScript & Tools", 
    icon: <Code size={32} />, 
    description: "JavaScript (ES6+), Bun, Vite, Git, Render, Vercel",
    level: 80, 
    color: "from-yellow-500 to-amber-600",
    ringColor: "yellow-500"
  },
  { 
    title: "Version Control & Collaboration", 
    icon: <GitBranch size={32} />, 
    description: "Git, GitHub,Pull Requests", 
    level: 70, 
    color: "from-teal-500 to-cyan-600",
    ringColor: "teal-500"
  },
  { 
    title: "Backend Basics", 
    icon: <Database size={32} />, 
    description: "Node.js, Express, REST APIs, MongoDB, Superbase", 
    level: 65, 
    color: "from-emerald-500 to-green-600",
    ringColor: "emerald-500"
  },
  { 
    title: "Problem Solving & Clean Code", 
    icon: <Terminal size={32} />, 
    description: "Refactoring, Debugging, Performance Optimierung", 
    level: 50, 
    color: "from-blue-500 to-sky-600",
    ringColor: "blue-500"
  },
];

const Skills = () => {
  return (
    <section 
      className="py-16 md:py-24 bg-[#f0e6ff] dark:bg-slate-950 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Meine Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Was ich richtig gut kann – mit aktuellem Level
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {skills.map((skill) => {
            const radius = 48;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (skill.level / 100) * circumference;

            return (
              <div 
                key={skill.title} 
                className="group flex flex-col items-center text-center transition-all duration-500 hover:scale-105"
              >
                {/* Skill-Kreis */}
                <div className="relative w-40 h-40 mb-6">
                  <svg
                    className="w-40 h-40 -rotate-90"
                    viewBox="0 0 120 120"
                  >
                    {/* Hintergrund-Ring */}
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="14"
                      className="text-gray-200 dark:text-slate-700"
                    />
                    {/* Fortschritts-Ring */}
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="14"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      className={`text-${skill.ringColor} transition-all duration-1000 ease-out`}
                    />
                  </svg>

                  {/* Icon + Level im Zentrum */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className={`p-5 rounded-3xl bg-gradient-to-br ${skill.color} text-white shadow-inner`}>
                      {skill.icon}
                    </div>
                    <div className="mt-3 text-4xl font-bold text-gray-900 dark:text-white tracking-tighter">
                      {skill.level}
                      <span className="text-base font-medium text-gray-400">%</span>
                    </div>
                  </div>
                </div>

                {/* Titel + Beschreibung */}
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm max-w-[200px]">
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
