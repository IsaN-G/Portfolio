
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

      { path: "projekt-1", element: <div className="p-8">Projekt 1 – Detailseite (zukünftig eigene Komponente)</div> },
      { path: "projekt-2", element: <div className="p-8">Projekt 2 – Detailseite</div> },
      { path: "projekt-3", element: <div className="p-8">Projekt 3 – Detailseite</div> },
      { path: "projekt-4", element: <div className="p-8">Projekt 4 – Detailseite</div> },
      { path: "projekt-5", element: <div className="p-8">Projekt 5 – Detailseite</div> },
      { path: "projekt-6", element: <div className="p-8">Projekt 6 – Detailseite</div> },
     
      { path: "*", element: <div>404 – Seite nicht gefunden</div> },
    ],
  },
]);