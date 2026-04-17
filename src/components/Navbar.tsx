import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ isHome }: { isHome: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 NEUE, verbesserte Scroll-Funktion mit Offset
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Dynamisch die aktuelle Navbar-Höhe ermitteln + Puffer
      const nav = document.querySelector("nav");
      const navHeight = nav ? nav.offsetHeight + 24 : 100; // 24px = top-6 + extra Sicherheit
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight -0; // 20px extra Luft oben

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false); // Mobile-Menü schließen
    }
  };

  const navLinks = [
    { label: "Über mich", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projekte", id: "projects" }
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-[100] px-4 md:px-8">
      <div className={`
        max-w-6xl h-12 mx-auto rounded-[2.5rem] transition-all duration-500 border relative
        ${scrolled 
          ? "bg-slate-950/90 backdrop-blur-xl border-slate-800 shadow-2xl py-3 px-8" 
          : "bg-slate-900/40 backdrop-blur-md border-white/10 py-5 px-6"}
        flex items-center justify-between
      `}>
        
        {/* Logo-Bereich (unverändert) */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img 
            src="/IMG/3.png" 
            alt="Logo" 
            className="h-8 w-auto group-hover:rotate-12 transition-transform duration-300" 
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

        {/* Navigation & Actions (unverändert) */}
        <div className="flex items-center gap-3 md:gap-8">
          {isHome && (
            <div className="hidden lg:flex items-center gap-8 mr-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-pink-500 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2 md:gap-4">
            <Link
              to="/contact"
              className="bg-pink-600 hover:bg-pink-500 text-white text-[10px] font-black uppercase tracking-widest px-5 md:px-7 py-2.5 rounded-full shadow-lg shadow-pink-600/20 transition-all active:scale-95"
            >
              Kontakt
            </Link>
            
            <button
              onClick={toggleTheme}
              className="p-2.5 text-lg hover:bg-white/5 rounded-full transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {isHome && (
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2.5 text-white hover:bg-white/5 rounded-full transition-colors"
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobiles Dropdown (unverändert) */}
        {isHome && isOpen && (
          <div className="absolute top-[110%] left-0 right-0 p-6 bg-slate-950/95 backdrop-blur-2xl border border-slate-800 rounded-[2rem] shadow-2xl flex flex-col gap-6 lg:hidden animate-in fade-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-sm font-black uppercase tracking-[0.2em] text-slate-200 hover:text-pink-500 py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}