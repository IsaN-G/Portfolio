
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

type NavbarProps = {
  isHome: boolean;
};

export default function Navbar({ isHome }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["about", "skills", "projects"];
      let current = "";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 180) {
          current = id;
        }
      }
      setActiveSection(current || "about");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? theme === "dark"
            ? "bg-slate-950/95 backdrop-blur-md shadow-lg"
            : "bg-black/95 backdrop-blur-md shadow-lg"
          : theme === "dark"
          ? "bg-slate-950/60"
          : "bg-black/60"}
        border-b ${theme === "dark" ? "border-black-700/50" : "border-pink-600/30"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between h-20 md:h-24">
          
         
          <div className="flex items-center space-x-5 mb-3 md:mb-0">
          <Link to="/" 
          className="block hover:opacity-90 hover:scale-105 transition-all duration-200"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
          <img
          src="/IMG/3.png"
          alt="Zur Startseite"
          className="h-16 w-12 object-contain rounded-lg"
  />
</Link>
            <div className="flex flex-col">
              <span className={`text-lg md:text-xl ${theme === "dark" ? "text-white" : "text-white"}`}>
                <span className="font-normal text-pink-600">Isabelle</span>{" "}
                <span className="font-bold">Nauber-Gelhaar</span>
              </span>
              <span className={`text-sm md:text-base ${theme === "dark" ? "text-gray-400" : "text-gray-400"}`}>
                Web Developer & Web Designer
              </span>
            </div>
          </div>


          <div className="flex items-center space-x-6 md:space-x-10">
            {isHome && (
              <>
                {["About", "Skills", "Projects"].map((label) => {
                  const id = label.toLowerCase();
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => scrollTo(id)}
                      className={`
                        cursor-pointer transition-colors text-base font-medium
                        ${activeSection === id
                          ? "text-pink-500 font-semibold border-b-2 border-pink-500"
                          : theme === "dark"
                          ? "text-gray-100 hover:text-pink-400"
                          : "text-gray-200 hover:text-pink-400"}
                      `}
                    >
                      {label}
                    </button>
                  );
                })}
              </>
            )}

            <Link
              to="/contact"
              className={`
                border-2 border-pink-600 px-3 py-1.5 rounded text-white 
                hover:bg-pink-600/20 transition
                ${theme === "dark" ? "hover:text-pink-300" : "hover:text-pink-100"}
              `}
            >
              Contact
            </Link>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Zum Dark Mode wechseln" : "Zum Light Mode wechseln"}
              title={theme === "light" ? "Zum Dark Mode wechseln" : "Zum Light Mode wechseln"}
              className={`
                p-2 rounded-full transition-all duration-300
                ${theme === "dark"
                  ? "bg-slate-800 hover:bg-slate-700 text-yellow-400 hover:text-yellow-300"
                  : "bg-gray-200 hover:bg-gray-300 text-slate-700 hover:text-slate-900"}
              `}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

