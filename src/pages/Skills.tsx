
import { Code, Palette, Terminal, GitBranch, Database, Layout } from 'lucide-react'; 

const skills = [
  {
    title: "Frontend Development",
    icon: <Layout size={28} />,
    description: "React, TypeScript, Tailwind CSS, Next.js",
    level: 90,
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "UI/UX Design",
    icon: <Palette size={28} />,
    description: "Figma,Canva, Responsive Design",
    level: 70,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "JavaScript & Tools",
    icon: <Code size={28} />,
    description: "JavaScript (ES6+), Bun, Vite, Git, npm/yarn",
    level: 85,
    color: "from-yellow-500 to-amber-600",
  },
  {
    title: "Version Control & Collaboration",
    icon: <GitBranch size={28} />,
    description: "Git, GitHub, GitLab, Pull Requests, Code Reviews",
    level: 80,
    color: "from-teal-500 to-cyan-600",
  },
  {
    title: "Backend Basics",
    icon: <Database size={28} />,
    description: "Node.js, Express, REST APIs, MongoDB",
    level: 65,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Problem Solving & Clean Code",
    icon: <Terminal size={28} />,
    description: "Refactoring, Debugging, Performance Optimierung",
    level: 50,
    color: "from-blue-500 to-sky-600",
  },
];

const Skills = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meine Skills
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className={`
                group relative bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8
                shadow-lg hover:shadow-2xl transition-all duration-500
                border border-gray-200 dark:border-slate-700
                hover:border-pink-500/50 hover:-translate-y-2
              `}
            >
            
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${skill.color} rounded-t-2xl`} />

          
              <div className="flex items-center gap-4 mb-5">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                  {skill.title}
                </h3>
              </div>

              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {skill.description}
              </p>

             
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-gray-200 dark:bg-slate-700">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>Grundkenntnisse</span>
                  <span>Experte</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      
      </div>
    </section>
  );
};

export default Skills;