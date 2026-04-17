import { Link } from "react-router-dom";

type FooterProps = {
  theme: "light" | "dark";
};

const Footer = ({ theme }: FooterProps) => {
  // Hilfsfunktion für den Scroll-Fix
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`py-12 transition-colors duration-500 ${
        theme === "dark" 
          ? "bg-black text-gray-300" 
          : "bg-gray-950 text-gray-300"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-8">
       
        {/* Logo / Zurück nach oben */}
        <Link 
          to="/" 
          className="block hover:opacity-90 hover:scale-105 transition-all duration-200"
          onClick={scrollToTop}
        >
          <img 
            src="/IMG/3.png" 
            alt="Zur Startseite" 
            className="h-12" 
          />
        </Link>

        {/* Zentraler Kontakt Button */}
        <div className="flex items-center">
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="px-8 py-3 rounded-full border border-pink-600 text-white text-xs font-black uppercase tracking-widest hover:bg-pink-600 transition-all duration-300"
          >
            Schreib mir eine Nachricht
          </Link>
        </div>
   
        {/* Social Links */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Folge mir</span>
          <div className="flex gap-8">
            <a href="https://github.com/IsaN-G" target="_blank" rel="noopener noreferrer">
              <img src="/IMG/GitHubIcon.png" alt="GitHub" className="h-6 w-6 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all" />
            </a>
            <a href="https://www.linkedin.com/in/isabelle-nauber-gelhaar-2644b4347/" target="_blank" rel="noopener noreferrer">
              <img src="/IMG/LinkedInIcon.png" alt="LinkedIn" className="h-6 w-6 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all" />
            </a>
          </div>
        </div>

        {/* Trennlinie */}
        <div className="w-full max-w-md border-t border-white/10 mt-4" />

        {/* Rechtliches & Copyright */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6 text-[10px] uppercase tracking-widest font-medium">
            <Link to="/impressum" onClick={scrollToTop} className="hover:text-pink-500 transition">Impressum</Link>
            <Link to="/datenschutz" onClick={scrollToTop} className="hover:text-pink-500 transition">Datenschutz</Link>
          </div>
          
          <div className="text-[10px] text-gray-200 text-center tracking-wider">
            © {new Date().getFullYear()} ISABELLE NAUBER-GELHAAR <br className="sm:hidden" />
            — ALLE RECHTE VORBEHALTEN.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

