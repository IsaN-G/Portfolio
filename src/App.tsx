import { RouterProvider } from "react-router-dom";
import { router } from "./router/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";
import CustomCursor from "./components/CustomCursor"; 

function App() {
  return (
    <ThemeProvider>
     <CustomCursor /> 
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;





