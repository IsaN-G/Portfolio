import { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";

const Header = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Einheitlich deutsche Begriffe
  const words = ["Erlebnisse", "Interfaces", "Konzepte", "Lösungen"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 120);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2500); 
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <header className="relative w-full h-screen overflow-hidden bg-slate-950">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        src="/Video/header.mp4"
        autoPlay muted loop playsInline
      />
      
      <div className="absolute inset-0 backdrop-blur-[2px] bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        
        {/* Subtilerer Status Badge */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
            <span className="text-white text-[9px] font-bold uppercase tracking-[0.2em]">
              Verfügbar für <span className="text-pink-500">Praktikum & Projekte</span>
            </span>
          </div>
        </div>

        <h1 className="flex flex-col font-black uppercase tracking-tighter leading-[0.85] mb-8">
          <span className="text-white text-5xl md:text-7xl lg:text-8xl mb-2">
            Visuelle
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600 [-webkit-text-stroke:1px_#db2777] text-6xl md:text-9xl lg:text-[10rem] min-h-[1.1em]">
            {text}
            <span className="text-white animate-pulse ml-2 font-light">|</span>
          </span>
        </h1>

        <p className="max-w-xl text-slate-300 text-sm md:text-lg font-medium leading-relaxed tracking-wide mb-12">
          Ich gestalte und entwickle digitale Erlebnisse. <br className="hidden md:block" />
          Vom Gastgewerbe inspiriert – auf <span className="text-pink-500 italic">Präzision</span> programmiert.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-8">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-10 py-4 bg-pink-600 text-white rounded-full font-black uppercase tracking-widest text-[10px] shadow-lg hover:shadow-pink-500/40 transition-all"
          >
            <span className="relative z-10">Projekte entdecken</span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>
          
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:text-pink-500 transition-colors"
          >
            Meine Geschichte 
            <FaArrowDown className="group-hover:translate-y-1 transition-transform text-pink-600" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-16 bg-gradient-to-b from-pink-600 via-pink-600/50 to-transparent opacity-50" />
      </div>
    </header>
  );
};

export default Header;