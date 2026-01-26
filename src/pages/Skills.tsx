const Skills = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Skill 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">JavaScript</h3>
            <p>Experienced in building dynamic web applications using JavaScript.</p>
          </div>
          {/* Skill 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">React</h3>
            <p>Proficient in creating interactive UIs with React.js.</p>
          </div>
          {/* Skill 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">CSS</h3>
            <p>Skilled in designing responsive layouts using CSS and Tailwind CSS.</p>
          </div>
          {/* Skill 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">Node.js</h3>
            <p>Experience in building backend services with Node.js and Express.</p>
          </div>
          {/* Skill 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">Git</h3>
            <p>Proficient in version control and collaboration using Git and GitHub.</p>
          </div>
          {/* Skill 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">Problem Solving</h3>
            <p>Adept at analyzing problems and implementing effective solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;