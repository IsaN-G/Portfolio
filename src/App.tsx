import { RouterProvider } from "react-router-dom";
import { router } from "./router/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";
import CustomCursor from "./components/CustomCursor"; // Importiere deine neue Komponente

function App() {
  return (
    <ThemeProvider>
      {/* Der Cursor muss außerhalb des Routers liegen oder direkt darin, 
          damit er über allen Inhalten schwebt */}
      <CustomCursor /> 
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;




