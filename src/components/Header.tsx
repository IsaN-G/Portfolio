

const Header = () => {
  return (
    <header className="relative w-full h-[45vh] sm:h-[55vh] md:h-[70vh] lg:h-[90vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Video/header.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full"></div>
        
      <div className="relative z-10 flex items-center justify-center h-full text-center bg-black/40">
        
        <div className="border-4 border-pink-600 px-6 py-10 md:px-20 md:py-24 flex flex-col justify-end">
          <h1 className="text-4xl md:text-7xl font-bold text-pink-600 uppercase leading-none">
            Welcome
          </h1>
          
          <div className="w-full h-[2px] bg-pink-600 my-3 md:my-4" />
          <p className="text-sm md:text-xl text-pink-600 uppercase tracking-widest animate-pulse">
            Isabelle Nauber-Gelhaar
          </p>
        
        </div>
      </div>
    </header>
  );
};

export default Header;
