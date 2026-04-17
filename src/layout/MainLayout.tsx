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
   
    <div className={`relative flex flex-col min-h-screen transition-colors duration-500 overflow-x-hidden
      ${theme === "dark" 
        ? "bg-[#020617] text-gray-400" 
        : "bg-gray-200 text-slate-900"}`}>
      
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





