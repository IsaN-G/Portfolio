import { Link } from "react-router-dom";


type FooterProps = {
  theme: "light" | "dark";
};

const Footer = ({ theme }: FooterProps) => {
  return (
    <footer
    className={`py-10 transition-colors duration-500 ${
      theme === "dark" 
        ? "bg-black text-gray-300" 
        : "bg-gray-950 text-gray-300"
    }`}
  >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
       
      <Link 
  to="/" 
  className="block hover:opacity-90 hover:scale-105 transition-all duration-200"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  <img 
    src="/IMG/3.png" 
    alt="Zur Startseite" 
    className="h-12" 
  />
</Link>

      <div className="flex items-center space-x-4">
        <Link
          to="/contact"
          className="border-2 border-pink-600 px-3 py-1.5 rounded text-white 
                hover:bg-pink-600/20 transition"
        >
          Contact
        </Link>
      </div>
   
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm uppercase tracking-wide text-gray-300">Folge mir auf</span>
          <div className="flex gap-6">
            <Link to="https://github.com/IsaN-G" target="_blank" rel="noopener noreferrer">
              <img src="/IMG/GitHubIcon.png" alt="GitHub" className="h-7 w-7 hover:opacity-80 transition-opacity" />
            </Link>
            <Link to="https://www.linkedin.com/in/isabelle-nauber-gelhaar-2644b4347/" target="_blank" rel="noopener noreferrer">
              <img src="/IMG/LinkedInIcon.png" alt="LinkedIn" className="h-7 w-7 hover:opacity-80 transition-opacity" />
            </Link>
          </div>
        </div>

       
        <div className="w-full border-t border-white/30 mt-6" />

        <div className="flex gap-4 text-xs">
          <Link to="/impressum" className="hover:text-white transition">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-white transition">Datenschutz</Link>
        </div>

       
        <div className="text-xs text-center pt-4">
          © {new Date().getFullYear()} Isabelle Nauber-Gelhaar — Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

