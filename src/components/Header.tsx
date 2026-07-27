import { useState, useEffect } from "react";

const Header = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const words = ["Erlebnisse", "Interfaces", "Konzepte", "Lösungen"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 40 : 100);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words]);

  return (
    <header className="relative w-full min-h-screen overflow-hidden bg-[#050810] flex items-center pt-24 pb-12 lg:py-0">
      
      {/* Hintergrund-Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-20"
          src="/Video/header.mp4"
          autoPlay muted loop playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-[#050810]" />
      </div>

      {/* Hintergrund-Schrift (ING) - Nur auf großen Bildschirmen sichtbar */}
      <div className="absolute bottom-[-5%] left-[-2%] w-full pointer-events-none z-10 select-none hidden lg:block">
        <h2 className="text-[40vw] font-black text-white/[0.04] leading-none tracking-tighter">
          ING
        </h2>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LINKS: TEXT CONTENT */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
              <span className="flex h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
              <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em]">Verfügbar für ein Praktikum oder direkt den Einstieg als Junior Fullstack Developer </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-[#F5F5DC] tracking-tighter leading-[0.9] uppercase">
              Visuelle <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                {text}<span className="text-pink-500 animate-pulse">_</span>
              </span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-slate-400 text-lg md:text-xl leading-relaxed">
              <strong className="text-white font-medium">15 Jahre Service-Mentalität.</strong> Jetzt übersetzt in präzisen Code und erstklassige visuelle Erlebnisse.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {["Gastro-Profi", "Familie first", "Webdesign"].map((fact, i) => (
                <span key={i} className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-xs md:text-sm font-semibold text-slate-300">
                  {fact}
                </span>
              ))}
            </div>
          </div>

          {/* RECHTS: VISUAL STACK */}
          <div className="lg:col-span-5 relative h-[450px] md:h-[600px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            
            {/* Code Fenster */}
            <div className="absolute z-10 top-0 lg:top-12 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-left-20 w-full max-w-[380px] md:max-w-[480px] bg-slate-900/90 border border-white/20 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-2xl transition-all duration-500 hover:border-pink-500/30">
              <div className="flex items-center justify-between px-5 py-3 bg-white/10 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/40" />
                </div>
                <span className="text-[10px] text-white/30 font-mono italic font-bold tracking-widest uppercase">Main.jsx</span>
              </div>
              <div className="pt-6 pb-12 md:pb-20 px-6 md:px-8 font-mono text-[13px] md:text-[14px] leading-tight">
                <p className="text-pink-400 mb-2">
                  const <span className="text-white">Isabelle</span> = {'{'}
                </p>
                <p className="pl-6 text-slate-300 mb-1">
                  focus: <span className="text-yellow-400">'{text}'</span>,
                </p>
                <p className="pl-6 text-slate-300 mb-1">
                  experience: <span className="text-emerald-400">'Modern UI'</span>,
                </p>
                <p className="pl-6 text-slate-300 mb-2">
                  stack: [<span className="text-violet-400">'React', 'Tailwind'</span>]
                </p>
                <p className="text-pink-400">{'}'};</p>
              </div>
            </div>

            {/* Polaroid */}
            <div className="relative z-30 translate-y-28 md:translate-y-32 translate-x-4 md:translate-x-8">
              <div className="bg-[#F5F5DC] p-3 md:p-4 pb-16 md:pb-20 shadow-[0_50px_100px_rgba(0,0,0,0.8)] w-[220px] md:w-[300px] rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[4/5] overflow-hidden grayscale-[0.1]">
                  <img 
                    src="/IMG/bild1.jpg" 
                    alt="Isabelle" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-6 left-0 w-full text-center">
                  <span className="font-serif italic text-slate-900 text-2xl md:text-3xl">
                    Isabelle N-G.
                  </span>
                </div>
              </div>
            </div>

            {/* Pink Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-pink-600/20 rounded-full blur-[80px] md:blur-[120px] -z-10" />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;