
const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 p-8 rounded-xl shadow-lg gap-6">

    <img
      src="/IMG/7.jpg"
      alt="Isabelle Nauber-Gelhaar"
      className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg"
    />
  
    
    <div className="flex-1 text-gray-800">
     
      <h2 className="text-3xl font-bold mb-4">Über mich</h2>
      <p className="mb-2">
        Hallo! Ich bin Isabelle Nauber-Gelhaar, eine leidenschaftliche Webentwicklerin mit einem Auge für Design und Funktionalität...
      </p>
     
      <p className="mb-2">
        Meine Reise in die Webentwicklung begann vor genau einem Jahre.
      </p>
     <p>
        Wenn ich nicht gerade am Coden bin, genieße ich es, Zeit in der Natur zu verbringen...
      </p>
    </div>
  </div>
  );
};

export default About;