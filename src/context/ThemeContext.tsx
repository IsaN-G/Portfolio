import {createContext,useContext,useEffect,useState,type ReactNode, } from "react";
  
  type Theme = "light" | "dark";
  
  type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
  };
  
  const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
  const localThemeKey = "app_theme";
  
  export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => {
      const savedTheme = localStorage.getItem(localThemeKey);
      return savedTheme === "light" || savedTheme === "dark" ? savedTheme : "light";
    });
  
    useEffect(() => {
      localStorage.setItem(localThemeKey, theme);
    }, [theme]);
  
    const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));
  
    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
  };
  
  export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme muss innerhalb von ThemeProvider verwendet werden");
    return context;
  };
  
  