import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import NotfoundPage from '../pages/NotfoundPage';
import ProjectDetail from '../pages/ProjectDetail';
import Impressum from '../pages/Impressum'; 
import Datenschutz from '../pages/Datenschutz';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/:id", element: <ProjectDetail /> },
      
      { path: "impressum", element: <Impressum /> },
      { path: "datenschutz", element: <Datenschutz /> },
      
  
      { path: "*", element: <NotfoundPage />},
    ],
  },
]);