
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
    <div className={`relative flex flex-col min-h-screen transition-colors duration-500
      ${theme === "dark" ? "bg-slate-900 text-gray-200" : "bg-gradient-to-b from-rose-100 via-pink-800 to-white text-gray-800"}`}>
      
     
      <Navbar isHome={isHome} />

     
      {isHome && <Header />}

  
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>

   
      <Footer theme={theme} />
    </div>
  );
};

export default MainLayout;





