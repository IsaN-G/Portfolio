import { Outlet, useLocation, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-500 ${
        theme === "dark" ? "bg-slate-900 text-gray-200" : "bg-slate-100 text-gray-800"
      }`}
    >
     
      <nav
        className={`p-4 flex flex-col md:flex-row md:items-center md:justify-between transition-colors duration-500 ${
          theme === "dark" ? "bg-slate-950" : "bg-black"
        }`}
      >
        <div className="flex items-center space-x-5 mb-4 md:mb-0">
          <img
            src="/IMG/3.png"
            alt="Logo"
            className="h-16 w-12 object-contain rounded-lg"
          />
          <div className="flex flex-col">
            <span
              className={`text-lg md:text-xl ${
                theme === "dark" ? "text-white" : "text-white"
              }`}
            >
              <span className="font-normal text-pink-600">Isabelle</span>{" "}
              <span className="font-bold">Nauber-Gelhaar</span>
            </span>
            <span
              className={`text-sm md:text-base ${
                theme === "dark" ? "text-gray-400" : "text-gray-400"
              }`}
            >
              Web Developer &amp; Web Designer
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            to="/contact"
            className="text-white cursor-pointer hover:text-gray-300 border-2 border-pink-600 px-2 py-1 transition"
          >
            Contact
          </Link>

       
          <button
            onClick={toggleTheme}
            className="ml-2 px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </nav>

     
      {location.pathname === "/" && <Header />}
      <main className="flex-1 container mx-auto py-12 px-4">
        <Outlet />
      </main>

      <Footer theme={theme} />
    </div>
  );
};

export default MainLayout;



