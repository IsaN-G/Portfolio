const About = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Hallo, ich bin Isabelle
          </h2>
          <p className="mt-4 text-pink-600 dark:text-pink-400 font-medium">
            Web Developer & Designer
          </p>
        </div>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
        
          <div className="relative group w-80 md:w-96 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/IMG/7.jpg"
              alt="Isabelle Nauber-Gelhaar"
              className="w-full rounded-3xl shadow-2xl object-cover transition-all duration-500 group-hover:scale-105 group-hover:shadow-pink-500/30 group-hover:-rotate-1 opacity-60"
            />
            <div className="absolute inset-4 border-2 border-pink-500/40 rounded-3xl pointer-events-none" />
          </div>

         
          <div className="space-y-6 max-w-xl text-center md:text-left">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Ich bin leidenschaftliche angehende Webentwicklerin mit Schwerpunkt Webdesign und nutze meine Umschulung, um kreative, funktionale und benutzerfreundliche Websites zu gestalten. Neben meiner beruflichen Entwicklung steht meine Familie im Mittelpunkt meines Lebens – gemeinsam mit meinen zwei Kindern verbringe ich die meiste Zeit damit, Neues zu entdecken und zu erleben.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Sport und Natur sind für mich nicht nur Hobbys, sondern ein wichtiger Ausgleich zum digitalen Alltag. Deshalb verbringen wir die Zeit als Familie gerne draußen in der Natur.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Meine Mischung aus technischer Neugier, Kreativität und Lebensfreude spiegelt sich auch in meinen Projekten wider: Ich liebe es, Ideen umzusetzen, die sowohl praktisch als auch ästhetisch ansprechend sind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
