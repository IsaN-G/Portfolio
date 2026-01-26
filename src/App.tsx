import { Routes, Route, } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from "./pages/Projects";





function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />     
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>

  );
}

export default App;




