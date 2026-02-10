const Header = () => {
  return (
    <header className="relative w-full min-h-screen">
    
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Video/header.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/40 z-0" />

     
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div className="border-4 border-pink-600 px-6 py-10 md:px-20 md:py-24 flex flex-col justify-end">
          <h1 className="text-4xl md:text-7xl font-bold text-pink-600 uppercase leading-none">
            Welcome
          </h1>
          <div className="w-full h-[2px] bg-pink-600 my-4" />
          <p className="text-sm md:text-xl text-pink-600 uppercase tracking-widest animate-pulse">
            Isabelle Nauber-Gelhaar
          </p>
          <button
            type="button"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-xl shadow-lg hover:bg-pink-700 transition-all"
          >
            Projekte ansehen
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
