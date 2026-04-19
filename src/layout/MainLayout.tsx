import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";
import Header from "../components/Header"; 

const MainLayout = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    /* ÄNDERUNG: Wir nutzen jetzt eine sehr dunkle Farbe als Basis.
       Wenn du den Light-Mode gar nicht willst, nimm die Bedingung ganz raus.
       Falls du ihn willst, habe ich hier bg-slate-50 für einen sauberen Look gewählt.
    */
    <div className={`relative flex flex-col min-h-screen transition-colors duration-500 overflow-x-hidden
      ${theme === "dark" 
        ? "bg-[#050810] text-slate-400" 
        : "bg-slate-50 text-slate-900"}`}>
      
      <Navbar isHome={isHome} />

      {isHome && <Header />}

      <main className="flex-1 relative">
        <Outlet />
      </main>

      <Footer theme={theme} />
    </div>
  );
};

export default MainLayout;





