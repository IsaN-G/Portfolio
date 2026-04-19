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

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 100; 
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false); 
    }
  };

  const navLinks = [
    { label: "Über mich", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projekte", id: "projects" }
  ];

  return (
    <nav className="fixed top-4 md:top-6 left-0 right-0 z-[100] px-4 md:px-8">
      <div className={`
        max-w-6xl mx-auto rounded-full transition-all duration-500 border relative
        ${scrolled 
          ? "bg-slate-950/90 backdrop-blur-xl border-slate-800 shadow-2xl py-2 px-6 md:px-8" 
          : "bg-slate-900/40 backdrop-blur-md border-white/10 py-3 md:py-5 px-5 md:px-6"}
        flex items-center justify-between h-14 md:h-16
      `}>
        
        {/* Logo-Bereich */}
        <Link 
          to="/" 
          className="flex items-center gap-2 md:gap-3 group shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img 
            src="/IMG/3.png" 
            alt="Logo" 
            className="h-7 md:h-8 w-auto group-hover:rotate-12 transition-transform duration-300" 
          />
          <div className="flex items-center gap-2 md:gap-3 tracking-tighter">
            <span className="text-white font-black text-lg md:text-xl italic hidden xs:block">
              Isabelle
            </span>
            <div className="h-6 w-[1px] bg-gradient-to-b from-transparent via-pink-600 to-transparent hidden sm:block" />
            <div className="flex flex-col hidden sm:flex">
              <span className="text-white font-light text-[10px] md:text-sm tracking-[0.2em] uppercase leading-none">Nauber</span>
              <span className="text-pink-600 font-black text-[9px] md:text-xs tracking-[0.1em] uppercase leading-none">Gelhaar</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation & Actions */}
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
              className="bg-pink-600 hover:bg-pink-500 text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest px-4 md:px-7 py-2.5 rounded-full shadow-lg shadow-pink-600/20 transition-all active:scale-95 whitespace-nowrap"
            >
              Kontakt
            </Link>
            
            <button
              onClick={toggleTheme}
              className="p-2 text-lg hover:bg-white/5 rounded-full transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {isHome && (
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-white hover:bg-white/5 rounded-full transition-colors"
              >
                {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobiles Dropdown Menu */}
        {isHome && isOpen && (
          <div className="absolute top-[120%] left-0 right-0 p-3 bg-slate-950/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl flex flex-col gap-2 lg:hidden animate-in fade-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-xs font-black uppercase tracking-[0.2em] text-slate-200 hover:text-pink-500 p-4 bg-white/5 rounded-2xl transition-colors active:bg-pink-500/10"
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