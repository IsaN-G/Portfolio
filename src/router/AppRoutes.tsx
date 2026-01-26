
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "projects", element: <Projects /> },

     
      { path: "projekt-1", element: <div>Projekt 1 – Detailseite</div> },
      { path: "projekt-2", element: <div>Projekt 2 – Detailseite</div> },
      { path: "projekt-3", element: <div>Projekt 3 – Detailseite</div> },

     
      { path: "*", element: <div>404 – Seite nicht gefunden</div> },
    ],
  },
]);