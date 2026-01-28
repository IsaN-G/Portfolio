import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";  
import { useTheme } from "../context/ThemeContext";

const MainLayout = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const isHome = location.pathname === "/";

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-500
        ${theme === "dark" ? "bg-slate-900 text-gray-200" : "bg-gradient-to-b from-rose-100 via-pink-300 to-white text-gray-800"}`}
    >
      <Navbar isHome={isHome} />
      <div className="pt-20 md:pt-24" />
      {isHome && <Header />}
      <main className="flex-1 container mx-auto py-12 px-4">
      <Outlet />
      </main>
      <Footer theme={useTheme().theme} />
    </div>
  );
};

export default MainLayout;




