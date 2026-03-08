import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ isHome }: { isHome: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Deutsche Labels für die Navigation
  const navLinks = [
    { label: "Über mich", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projekte", id: "projects" }
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8">
      <div className={`
        max-w-6xl mx-auto rounded-full transition-all duration-500 border
        ${scrolled 
          ? "bg-slate-950/80 backdrop-blur-xl border-slate-800 shadow-2xl py-3 px-8" 
          : "bg-transparent border-transparent py-5 px-6"}
        flex items-center justify-between
      `}>
        
        {/* Logo-Bereich */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img 
            src="/IMG/3.png" 
            alt="Logo" 
            className="h-10 w-auto group-hover:rotate-12 transition-transform duration-300" 
          />
          <div className="hidden sm:flex items-center gap-3 tracking-tighter">
            <span className="text-white font-black text-xl italic">
              Isabelle
            </span>
            <div className="h-8 w-[1px] bg-gradient-to-b from-transparent via-pink-600 to-transparent" />
            <div className="flex flex-col">
              <span className="text-white font-light text-sm tracking-[0.2em]">Nauber</span>
              <span className="text-pink-600 font-black text-xs tracking-[0.1em]">Gelhaar</span>
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6 md:gap-10">
          {isHome && (
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-pink-500 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="bg-pink-600 hover:bg-pink-500 text-white text-[10px] font-black uppercase tracking-widest px-6 py-2.5 rounded-full shadow-lg shadow-pink-600/20 transition-all active:scale-95"
            >
              Kontakt
            </Link>
            
            <button
              onClick={toggleTheme}
              className="p-2 text-yellow-400 hover:bg-slate-800 rounded-full transition-colors"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}