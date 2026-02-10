import SectionWrapper from "../components/SectionWrapper";

const About = () => (
  <SectionWrapper>
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-pink-600">
        Hallo, ich bin Isabelle
      </h2>
      <p className="mt-4 text-pink-600 dark:text-pink-500 font-medium">
        Web Developer & Designer
      </p>
    </div>
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
      
      <div className="relative group w-80 md:w-96 flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src="/IMG/7.jpg"
          alt="Isabelle Nauber-Gelhaar"
          className="w-full rounded-3xl shadow-2xl object-cover transition-all duration-500 group-hover:scale-105 group-hover:shadow-pink-500/30 group-hover:-rotate-1 opacity-100"
        />
        <div className="absolute inset-4 border-2 border-pink-500/40 rounded-3xl pointer-events-none" />
      </div>

      <div className="space-y-6 max-w-xl text-center md:text-left">
        <p className="text-lg text-gray-700 dark:text-pink-600 leading-relaxed">
          Ich bin .....
        </p>
      </div>
    </div>
  </SectionWrapper>
);


export default About;
